import { createFileRoute, Link } from "@tanstack/react-router";

import { PricingTable } from "../components/site/PricingTable";
import { pricingRows } from "../data/pricing";
import { translate, useT } from "../i18n";

const TITLE = translate("en", "pricingPage.meta.title");
const DESCRIPTION = translate("en", "pricingPage.meta.description");

// [PENDING — confirm offer validity date]
const PRICE_VALID_UNTIL = "2026-12-31";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "VectraSyn digital services",
          provider: { "@type": "Organization", name: "VectraSyn" },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: 5000,
            highPrice: 50000,
            offerCount: pricingRows.length,
            priceValidUntil: PRICE_VALID_UNTIL,
            offers: pricingRows.map((row) => ({
              "@type": "Offer",
              name: translate("en", `pricing.rows.${row.id}.service`),
              price: row.prices.INR.finalValue,
              priceCurrency: "INR",
              priceValidUntil: PRICE_VALID_UNTIL,
              availability: "https://schema.org/InStock",
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Pricing", item: "/pricing" },
          ],
        }),
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const t = useT();

  return (
    <>
      <section className="warm-glow">
        <div className="container-page py-16 text-start">
          <p className="eyebrow">{t("pricingPage.eyebrow")}</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{t("pricingPage.heading")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t("pricingPage.intro")}</p>
        </div>
      </section>

      <section className="pb-16" aria-labelledby="pricing-table-heading">
        <div className="container-page text-start">
          <h2 id="pricing-table-heading" className="sr-only">
            {t("pricingPage.tableHeading")}
          </h2>
          {/* A promo banner component can be mounted here later — the table below is independent. */}
          <PricingTable />
          <p className="mt-6 text-sm text-muted-foreground">{t("pricingPage.note")}</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            {t("common.cta.requestQuote")}
          </Link>
        </div>
      </section>
    </>
  );
}
