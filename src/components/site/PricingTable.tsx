import { useState } from "react";

import { currencies, pricingRows, type CurrencyCode } from "../../data/pricing";
import { useT } from "../../i18n";

/**
 * Self-contained pricing table.
 * The currency selector below is local state only — it is completely independent of
 * the site-wide EN/AR language toggle, which lives in the header.
 * Intentionally renders NO discount banner or promo code — a promo banner can be
 * added as a sibling component above/below this one without editing this file.
 */
export function PricingTable() {
  const [currency, setCurrency] = useState<CurrencyCode>("INR");
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
              return (
                <tr key={row.id} className="border-b border-border/70 last:border-0">
                  <th scope="row" className="px-5 py-5 text-start align-top font-normal">
                    <span className="font-display text-base font-semibold">
                      {t(`pricing.rows.${row.id}.service`)}
                    </span>
                    <span className="mt-1 block max-w-md text-sm text-muted-foreground">
                      {t(`pricing.rows.${row.id}.description`)}
                    </span>
                  </th>
                  <td className="px-5 py-5 align-top text-muted-foreground">
                    <s>{price.list}</s>
                    {row.recurring ? (
                      <span className="text-sm">{t("pricingPage.perMonth")}</span>
                    ) : null}
                  </td>
                  <td className="px-5 py-5 align-top">
                    <span className="font-display text-xl font-bold text-primary">
                      {price.final}
                    </span>
                    {row.recurring ? (
                      <span className="text-sm font-semibold text-primary">
                        {t("pricingPage.perMonth")}
                      </span>
                    ) : null}
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
