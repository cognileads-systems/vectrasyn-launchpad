import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Smartphone, Workflow, PenTool } from "lucide-react";

import heroImage from "../assets/hero-vectrasyn.jpg";
import { pricingRows, services } from "../data/pricing";
import { translate, useT } from "../i18n";

const TITLE = translate("en", "home.meta.title");
const DESCRIPTION = translate("en", "home.meta.description");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Digital services for small, medium and growing businesses",
          provider: { "@type": "Organization", name: "VectraSyn" },
          areaServed: ["IN", "AE", "US"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "VectraSyn services",
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: translate("en", s.titleKey) },
            })),
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const icons = [Globe, Smartphone, Workflow, PenTool];

function HomePage() {
  const t = useT();
  const teaser = pricingRows.slice(0, 4);

  return (
    <>
      <section className="warm-glow">
        <div className="container-page grid items-center gap-12 py-16 text-start lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">{t("home.hero.eyebrow")}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {t("home.hero.headingLead")}{" "}
              <span className="text-primary">{t("home.hero.headingAccent")}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">{t("home.hero.body")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                {t("common.cta.quote")}{" "}
                <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-secondary px-6 py-3 font-semibold text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {t("common.cta.pricing")}
              </Link>
            </div>
          </div>

          <div className="card-soft overflow-hidden">
            <img
              src={heroImage}
              width={1200}
              height={900}
              alt={t("home.hero.imageAlt")}
              className="h-auto w-full"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section-y" aria-labelledby="services-heading">
        <div className="container-page text-start">
          <p className="eyebrow">{t("home.services.eyebrow")}</p>
          <h2 id="services-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            {t("home.services.heading")}
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = icons[i]!;
              return (
                <li key={service.id} className="card-soft p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{t(service.titleKey)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t(service.descriptionKey)}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="pricing-preview-heading">
        <div className="container-page text-start">
          <p className="eyebrow">{t("home.pricing.eyebrow")}</p>
          <h2 id="pricing-preview-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            {t("home.pricing.heading")}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t("home.pricing.body")}</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teaser.map((row) => (
              <li key={row.id} className="card-soft p-6">
                <h3 className="text-base font-semibold">{t(`pricing.rows.${row.id}.service`)}</h3>
                <p className="mt-3">
                  <span className="text-sm text-muted-foreground line-through">
                    {row.prices.INR.list}
                  </span>{" "}
                  <span className="font-display text-2xl font-bold text-primary">
                    {row.prices.INR.final}
                  </span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(`pricing.rows.${row.id}.description`)}
                </p>
              </li>
            ))}
          </ul>
          <Link
            to="/pricing"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-secondary hover:underline"
          >
            {t("common.cta.viewPricing")}{" "}
            <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-y" aria-labelledby="proof-preview-heading">
        <div className="container-page text-start">
          <p className="eyebrow">{t("home.proof.eyebrow")}</p>
          <h2 id="proof-preview-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            {t("home.proof.heading")}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t("home.proof.body")}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {["home.proof.card1", "home.proof.card2", "home.proof.card3"].map((key) => (
              <div key={key} className="card-soft p-6">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {t("common.comingSoon")}
                </span>
                <h3 className="mt-4 text-base font-semibold">{t(key)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("home.proof.cardBody")}</p>
              </div>
            ))}
          </div>
          <Link
            to="/proof-of-work"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-secondary hover:underline"
          >
            {t("common.cta.viewProof")}{" "}
            <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-y" aria-labelledby="cta-heading">
        <div className="container-page">
          <div className="warm-glow card-soft px-6 py-12 text-center sm:px-12">
            <h2 id="cta-heading" className="text-3xl font-bold sm:text-4xl">
              {t("home.cta.heading")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("home.cta.body")}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              {t("common.cta.start")}{" "}
              <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
