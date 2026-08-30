import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { translate, useT } from "../i18n";

const TITLE = translate("en", "about.meta.title");
const DESCRIPTION = translate("en", "about.meta.description");

const faqIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const stepIds = [1, 2, 3, 4];
const paymentIds = [1, 2, 3, 4];


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqIds.map((n) => ({
            "@type": "Question",
            name: translate("en", `about.faq.q${n}`),
            acceptedAnswer: {
              "@type": "Answer",
              text: `${translate("en", `about.faq.a${n}short`)} ${translate("en", `about.faq.a${n}long`)}`,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "About", item: "/about" },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();

  return (
    <>
      <section className="warm-glow">
        <div className="container-page py-16 text-start">
          <p className="eyebrow">{t("about.eyebrow")}</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{t("about.heading")}</h1>
          <div className="mt-6 max-w-2xl space-y-4 text-lg text-muted-foreground">
            <p>{t("about.story1")}</p>
            <p>{t("about.story2")}</p>
            <p>{t("about.story3")}</p>
            <p>{t("about.story4")}</p>
          </div>

        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="how-we-work-heading">
        <div className="container-page text-start">
          <p className="eyebrow">{t("about.process.eyebrow")}</p>
          <h2 id="how-we-work-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            {t("about.process.heading")}
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stepIds.map((n) => (
              <li key={n} className="card-soft p-6">
                <span className="font-display text-sm font-bold text-primary">
                  {t("about.process.step", { n })}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{t(`about.step${n}.title`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(`about.step${n}.body`)}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 rounded-xl border border-dashed border-border bg-surface p-4 text-sm text-muted-foreground">
            <strong className="font-semibold text-foreground">{t("about.hybrid.label")}</strong>{" "}
            {t("about.hybrid.body")}
          </p>
        </div>
      </section>

      <section className="section-y" aria-labelledby="faq-heading">
        <div className="container-page max-w-3xl text-start">
          <p className="eyebrow">{t("about.faq.eyebrow")}</p>
          <h2 id="faq-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            {t("about.faq.heading")}
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqIds.map((n) => (
              <AccordionItem key={n} value={`faq-${n}`}>
                <AccordionTrigger className="text-start font-display text-base font-semibold">
                  <h3>{t(`about.faq.q${n}`)}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-medium text-foreground">{t(`about.faq.a${n}short`)}</p>
                  <p className="mt-2 text-muted-foreground">{t(`about.faq.a${n}long`)}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            {t("common.cta.ask")}
          </Link>
        </div>
      </section>
    </>
  );
}
