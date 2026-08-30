import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Smartphone, Workflow, PenTool } from "lucide-react";

import heroImage from "../assets/hero-vectrasyn.jpg";
import { pricingRows, services } from "../data/pricing";

const TITLE = "VectraSyn — Affordable Websites, Apps & Automation";
const DESCRIPTION =
  "Fast-turnaround websites, apps, automation and logo design for small businesses. Clear fixed prices in INR, USD and AED.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Digital services for small businesses",
          provider: { "@type": "Organization", name: "VectraSyn" },
          areaServed: ["IN", "AE", "US"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "VectraSyn services",
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.title },
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
  const teaser = pricingRows.slice(0, 4);

  return (
    <>
      <section className="warm-glow">
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Small business. Big online presence.</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Websites, apps and automation —{" "}
              <span className="text-primary">without the agency price tag.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              VectraSyn builds the digital basics small businesses actually need: a fast website, a
              simple app, automation that saves hours, and a logo you're proud of. Fixed prices,
              quick turnaround.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Get a free quote <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-secondary px-6 py-3 font-semibold text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                See pricing
              </Link>
            </div>
          </div>

          <div className="card-soft overflow-hidden">
            <img
              src={heroImage}
              width={1200}
              height={900}
              alt="Illustration of a laptop and phone showing a small business website and app connected by automation arrows"
              className="h-auto w-full"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section-y" aria-labelledby="services-heading">
        <div className="container-page">
          <p className="eyebrow">What we do</p>
          <h2 id="services-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Four services, built to launch fast
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = icons[i]!;
              return (
                <li key={service.title} className="card-soft p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="pricing-preview-heading">
        <div className="container-page">
          <p className="eyebrow">Pricing preview</p>
          <h2 id="pricing-preview-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Straightforward, fixed prices
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A snapshot of our most popular services. The full menu, plus USD and AED pricing, lives
            on the pricing page.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teaser.map((row) => (
              <li key={row.id} className="card-soft p-6">
                <h3 className="text-base font-semibold">{row.service}</h3>
                <p className="mt-3">
                  <span className="text-sm text-muted-foreground line-through">
                    {row.prices.INR.list}
                  </span>{" "}
                  <span className="font-display text-2xl font-bold text-primary">
                    {row.prices.INR.final}
                  </span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{row.description}</p>
              </li>
            ))}
          </ul>
          <Link
            to="/pricing"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-secondary hover:underline"
          >
            View full pricing <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="section-y" aria-labelledby="proof-preview-heading">
        <div className="container-page">
          <p className="eyebrow">Proof of work</p>
          <h2 id="proof-preview-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Case studies on the way
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We're preparing write-ups of recent builds. Until they're published, we'd rather show
            nothing than make claims we can't back up.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {["Local services", "Retail & e-commerce", "Clinics & consultants"].map((label) => (
              <div key={label} className="card-soft p-6">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Coming soon
                </span>
                <h3 className="mt-4 text-base font-semibold">{label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Case study coming soon.</p>
              </div>
            ))}
          </div>
          <Link
            to="/proof-of-work"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-secondary hover:underline"
          >
            See proof of work <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="section-y" aria-labelledby="cta-heading">
        <div className="container-page">
          <div className="warm-glow card-soft px-6 py-12 text-center sm:px-12">
            <h2 id="cta-heading" className="text-3xl font-bold sm:text-4xl">
              Tell us what you need. We'll quote it today.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Send a few lines about your business and we'll come back with a fixed price and a
              realistic timeline.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Start a project <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
