import { Link } from "@tanstack/react-router";
import { ShoppingBag, X } from "lucide-react";

import { useT } from "../../i18n";
import { useCart } from "../../lib/cart";
import { CartSummary } from "./CartSummary";

/** Header cart button + slide-over panel. Direction-aware: anchored to the inline end. */
export function CartDrawer() {
  const t = useT();
  const { count, open, setOpen } = useCart();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("cart.open")}
        className="relative inline-flex shrink-0 items-center justify-center rounded-full border border-border p-2 text-foreground"
      >
        <ShoppingBag className="size-5" />
        {count > 0 ? (
          <span className="absolute -top-1 -inline-end-1 end-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-1.5 text-xs font-semibold text-primary-foreground rtl:-translate-x-1/2">
            {count}
          </span>
        ) : null}
      </button>

      {open ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label={t("cart.close")}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground/30"
          />
          <aside
            role="dialog"
            aria-label={t("cart.title")}
            className="absolute inset-y-0 end-0 flex w-full max-w-sm flex-col bg-background shadow-lift"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="font-display text-lg font-bold">{t("cart.title")}</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t("cart.close")}
                className="rounded-full border border-border p-1.5"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              <CartSummary onNavigate={() => setOpen(false)} />
            </div>

            {count > 0 ? (
              <div className="border-t border-border px-5 py-4">
                <Link
                  to="/book"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"
                >
                  {t("cart.checkout")}
                </Link>
              </div>
            ) : null}
          </aside>
        </div>
      ) : null}
    </>
  );
}
