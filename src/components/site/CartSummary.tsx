import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

import { pricingRows } from "../../data/pricing";
import { useT } from "../../i18n";
import { cartTotal, formatAmount, hasCustomItem, hasRecurringItem, useCart } from "../../lib/cart";

/** Shared cart contents — used in the header drawer and on the /book page. */
export function CartSummary({ onNavigate }: { onNavigate?: () => void }) {
  const t = useT();
  const { items, currency, remove } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-start">
        <p className="text-sm text-muted-foreground">{t("cart.empty")}</p>
        <Link
          to="/pricing"
          onClick={onNavigate}
          className="mt-4 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          {t("cart.viewPricing")}
        </Link>
      </div>
    );
  }

  const total = cartTotal(items, currency);

  return (
    <div className="text-start">
      <ul className="divide-y divide-border">
        {items.map((id) => {
          const row = pricingRows.find((r) => r.id === id);
          if (!row) return null;
          const name = t(`pricing.rows.${row.id}.service`);
          return (
            <li key={id} className="flex items-start justify-between gap-3 py-3">
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold">{name}</p>
                <p className="text-sm text-muted-foreground">
                  {row.custom ? `${t("pricingPage.startingFrom")} ` : ""}
                  {row.prices[currency].final}
                  {row.recurring ? t("pricingPage.perMonth") : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={() => remove(id)}
                aria-label={t("cart.removeItem", { name })}
                className="shrink-0 rounded-full border border-border p-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex items-baseline justify-between gap-3 border-t border-border pt-4">
        <span className="text-sm font-semibold">{t("cart.total")}</span>
        <span className="font-display text-xl font-bold text-primary">
          {hasCustomItem(items) ? "≈ " : ""}
          {formatAmount(currency, total)}
          {hasRecurringItem(items) ? (
            <span className="text-sm">{t("pricingPage.perMonth")}</span>
          ) : null}
        </span>
      </div>

      {hasCustomItem(items) ? (
        <p className="mt-2 text-xs text-muted-foreground">{t("cart.customNote")}</p>
      ) : null}
    </div>
  );
}
