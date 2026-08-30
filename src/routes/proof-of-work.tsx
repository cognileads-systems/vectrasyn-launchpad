import { createFileRoute, Link } from "@tanstack/react-router";
import { ImageIcon } from "lucide-react";

const TITLE = "Proof of Work — VectraSyn Case Studies";
const DESCRIPTION =
  "Case studies from VectraSyn projects across local services, retail, hospitality, clinics and more. Write-ups are in preparation.";

export const Route = createFileRoute("/proof-of-work")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/proof-of-work" },
    ],
    links: [{ rel: "canonical", href: "/proof-of-work" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Proof of Work", item: "/proof-of-work" },
          ],
        }),
      },
    ],
  }),
  component: ProofOfWorkPage,
});

// Generic placeholder slots only — no client names, testimonials or results.
const slots = [
  { type: "Local services", note: "Website build" },
  { type: "Retail & e-commerce", note: "Website + automation" },
  { type: "Clinics & consultants", note: "Booking app" },
  { type: "Hospitality", note: "Branding + website" },
  { type: "Trades & contractors", note: "GBP setup" },
  { type: "Education & training", note: "App build" },
];

function ProofOfWorkPage() {
  return (
    <>
      <section className="warm-glow">
        <div className="container-page py-16">
          <p className="eyebrow">Proof of work</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Case studies</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We publish case studies only once the client has approved the details. These slots are
            reserved for write-ups currently in preparation.
          </p>
        </div>
      </section>

      <section className="pb-16" aria-labelledby="case-studies-heading">
        <div className="container-page">
          <h2 id="case-studies-heading" className="sr-only">
            Case study slots
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {slots.map((slot) => (
              <li key={slot.type} className="card-soft overflow-hidden">
                <div
                  className="flex h-44 items-center justify-center bg-sand"
                  role="img"
                  aria-label={`Placeholder image for an upcoming ${slot.type.toLowerCase()} case study`}
                >
                  <ImageIcon className="size-8 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                      {slot.type}
                    </span>
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      Coming soon
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Case Study Coming Soon</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {slot.note}. A short summary of the brief, what we built and how it was
                    delivered will appear here once the write-up is published.
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Talk to us about your project
          </Link>
        </div>
      </section>
    </>
  );
}
