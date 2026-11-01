import { createFileRoute, Link } from "@tanstack/react-router";
import { ProofThumb } from "../components/site/Visuals";
import { translate, useT } from "../i18n";

const TITLE = translate("en", "proof.meta.title");
const DESCRIPTION = translate("en", "proof.meta.description");

export const Route = createFileRoute("/proof-of-work")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
const slots = [1, 2, 3, 4, 5, 6];

function ProofOfWorkPage() {
  const t = useT();

  return (
    <>
      <section className="warm-glow">
        <div className="container-page py-16 text-start">
          <p className="eyebrow">{t("proof.eyebrow")}</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{t("proof.heading")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t("proof.intro")}</p>
        </div>
      </section>

      <section className="pb-16" aria-labelledby="case-studies-heading">
        <div className="container-page text-start">
          <h2 id="case-studies-heading" className="sr-only">
            {t("proof.slotsHeading")}
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {slots.map((n) => {
              const type = t(`proof.slot${n}.type`);
              const note = t(`proof.slot${n}.note`);
              return (
                <li key={n} className="card-soft card-lift overflow-hidden">
                  <ProofThumb
                    index={n - 1}
                    label={t("proof.imageAlt", { type: type.toLowerCase() })}
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                        {type}
                      </span>
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                        {t("common.comingSoon")}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{t("proof.cardHeading")}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {t("proof.cardBody", { note })}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            {t("common.cta.talk")}
          </Link>
        </div>
      </section>
    </>
  );
}
