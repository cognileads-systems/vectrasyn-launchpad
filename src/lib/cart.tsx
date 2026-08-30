import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { pricingRows, type CurrencyCode } from "../data/pricing";

/**
 * Client-side cart + currency state.
 * Currency lives here so the pricing table and the booking summary always agree,
 * but it stays completely independent of the EN/AR language toggle.
 * No backend, no payment processing — [PENDING — Razorpay integration].
 */
type CartContextValue = {
  items: string[];
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  add: (id: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
  has: (id: string) => boolean;
  clear: () => void;
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "vectrasyn.cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  const [currency, setCurrency] = useState<CurrencyCode>("INR");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        const valid = parsed.filter(
          (id): id is string =>
            typeof id === "string" && pricingRows.some((r) => r.id === id),
        );
        setItems(valid);
      }
    } catch {
      /* storage unavailable — cart is session-only */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const add = useCallback((id: string) => {
    setItems((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);
  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i !== id));
  }, []);
  const toggle = useCallback((id: string) => {
    setItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  }, []);
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      currency,
      setCurrency,
      add,
      remove,
      toggle,
      has: (id: string) => items.includes(id),
      clear,
      count: items.length,
      open,
      setOpen,
    }),
    [items, currency, add, remove, toggle, clear, open],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

const currencyFormat: Record<CurrencyCode, (n: number) => string> = {
  INR: (n) => `₹${n.toLocaleString("en-IN")}`,
  USD: (n) => `$${n.toLocaleString("en-US")}`,
  AED: (n) => `AED ${n.toLocaleString("en-US")}`,
};

export function formatAmount(currency: CurrencyCode, amount: number) {
  return currencyFormat[currency](amount);
}

/** Sum of final prices; custom-quote rows contribute their starting-from figure. */
export function cartTotal(items: string[], currency: CurrencyCode) {
  return items.reduce((sum, id) => {
    const row = pricingRows.find((r) => r.id === id);
    return row ? sum + row.prices[currency].finalValue : sum;
  }, 0);
}

export function hasCustomItem(items: string[]) {
  return items.some((id) => pricingRows.find((r) => r.id === id)?.custom);
}

export function hasRecurringItem(items: string[]) {
  return items.some((id) => pricingRows.find((r) => r.id === id)?.recurring);
}
