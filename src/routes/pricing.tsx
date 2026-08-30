import { createFileRoute, Link } from "@tanstack/react-router";

import { PricingTable } from "../components/site/PricingTable";
import { pricingRows } from "../data/pricing";

const TITLE = "Pricing — VectraSyn Websites, Apps & Automation";
const DESCRIPTION =
  "Full VectraSyn service menu with list and final prices for websites, apps, automation, logo design and maintenance. Switch between INR, USD and AED.";

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
              name: row.service,
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
  return (
    <>
      <section className="warm-glow">
        <div className="container-page py-16">
          <p className="eyebrow">Pricing</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">The full service menu</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Every service below shows the standard list price and the final price you pay. Choose
            your currency — INR, USD or AED.
          </p>
        </div>
      </section>

      <section className="pb-16" aria-labelledby="pricing-table-heading">
        <div className="container-page">
          <h2 id="pricing-table-heading" className="sr-only">
            Service pricing table
          </h2>
          {/* A promo banner component can be mounted here later — the table below is independent. */}
          <PricingTable />
          <p className="mt-6 text-sm text-muted-foreground">
            Prices exclude any applicable taxes. Custom scopes are quoted individually.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
