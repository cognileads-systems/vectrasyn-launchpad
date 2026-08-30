import { Check, Plus } from "lucide-react";
import { toast } from "sonner";

import { currencies, pricingRows } from "../../data/pricing";
import { useT } from "../../i18n";
import { useCart } from "../../lib/cart";

/**
 * Self-contained pricing table.
 * The currency selector below is shared with the cart only — it is completely independent
 * of the site-wide EN/AR language toggle, which lives in the header.
 * Intentionally renders NO discount banner or promo code — a promo banner can be
 * added as a sibling component above/below this one without editing this file.
 */
export function PricingTable() {
  const { currency, setCurrency, has, add, setOpen } = useCart();
  const t = useT();


  return (
    <div>
      <div
        role="group"
        aria-label={t("pricingPage.currencyLabel")}
        className="inline-flex rounded-full border border-border bg-surface p-1 shadow-soft"
      >
        {currencies.map((c) => {
          const active = c.code === currency;
          return (
            <button
              key={c.code}
              type="button"
              onClick={() => setCurrency(c.code)}
              aria-pressed={active}
              title={t(`pricingPage.currency.${c.code}`)}
              className={
                "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors " +
                (active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground")
              }
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="card-soft mt-6 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-start">
          <caption className="sr-only">
            {t("pricingPage.caption")} ({currency})
          </caption>
          <thead>
            <tr className="border-b border-border bg-sand">
              <th scope="col" className="px-5 py-4 text-start text-sm font-semibold">
                {t("pricingPage.col.service")}
              </th>
              <th scope="col" className="px-5 py-4 text-start text-sm font-semibold">
                {t("pricingPage.col.list")}
              </th>
              <th scope="col" className="px-5 py-4 text-start text-sm font-semibold">
                {t("pricingPage.col.final")}
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingRows.map((row) => {
              const price = row.prices[currency];
              const includes = row.hasIncludes
                ? t(`pricing.rows.${row.id}.includes`).split("\n")
                : [];
              return (
                <tr key={row.id} className="border-b border-border/70 last:border-0">
                  <th scope="row" className="px-5 py-5 text-start align-top font-normal">
                    <span className="font-display text-base font-semibold">
                      {t(`pricing.rows.${row.id}.service`)}
                    </span>
                    <span className="mt-1 block max-w-md text-sm text-muted-foreground">
                      {t(`pricing.rows.${row.id}.description`)}
                    </span>
                    {row.custom ? (
                      <span className="mt-2 block max-w-md text-sm font-medium text-secondary">
                        {t("pricingPage.customNote")}
                      </span>
                    ) : null}
                    {includes.length > 0 ? (
                      <details className="group mt-3 max-w-md">
                        <summary className="cursor-pointer list-none text-sm font-semibold text-primary">
                          {t("pricingPage.includesLabel")}
                          <span aria-hidden="true" className="ms-1 inline-block group-open:hidden">
                            +
                          </span>
                          <span aria-hidden="true" className="ms-1 hidden group-open:inline-block">
                            −
                          </span>
                        </summary>
                        <ul className="mt-2 list-disc space-y-1 ps-5 text-sm text-muted-foreground">
                          {includes.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      </details>
                    ) : null}
                  </th>
                  <td className="px-5 py-5 align-top text-muted-foreground">
                    <s>{price.list}</s>
                    {row.recurring ? (
                      <span className="text-sm">{t("pricingPage.perMonth")}</span>
                    ) : null}
                  </td>
                  <td className="px-5 py-5 align-top">
                    {row.custom ? (
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {t("pricingPage.customQuote")} · {t("pricingPage.startingFrom")}
                      </span>
                    ) : null}
                    <span className="font-display text-xl font-bold text-primary">
                      {price.final}
                    </span>
                    {row.recurring ? (
                      <span className="text-sm font-semibold text-primary">
                        {t("pricingPage.perMonth")}
                      </span>
                    ) : null}
                  </td>
                  <td className="px-5 py-5 align-top">
                    {(() => {
                      const name = t(`pricing.rows.${row.id}.service`);
                      const inCart = has(row.id);
                      return (
                        <button
                          type="button"
                          onClick={() => {
                            if (inCart) {
                              setOpen(true);
                              return;
                            }
                            add(row.id);
                            toast.success(t("pricingPage.addedToCart", { name }));
                          }}
                          aria-pressed={inCart}
                          className={
                            "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors " +
                            (inCart
                              ? "bg-secondary/10 text-secondary"
                              : "bg-primary text-primary-foreground hover:bg-primary/90")
                          }
                        >
                          {inCart ? (
                            <Check className="size-4" aria-hidden="true" />
                          ) : (
                            <Plus className="size-4" aria-hidden="true" />
                          )}
                          {inCart ? t("cart.added") : t("cart.add")}
                        </button>
                      );
                    })()}
                  </td>

                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
}
