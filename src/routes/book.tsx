import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarClock, CreditCard, ExternalLink, ListChecks } from "lucide-react";

import { CartSummary } from "../components/site/CartSummary";
import { abs, CAL_URL } from "../lib/site";
import { translate, useT } from "../i18n";

const TITLE = translate("en", "book.meta.title");
const DESCRIPTION = translate("en", "book.meta.description");

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/book") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: abs("/book") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
            { "@type": "ListItem", position: 2, name: "Book a consultation", item: abs("/book") },
          ],
        }),
      },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const t = useT();

  return (
    <>
      <section className="warm-glow">
        <div className="container-page py-16 text-start">
          <p className="eyebrow">{t("book.eyebrow")}</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{t("book.heading")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t("book.intro")}</p>

          <ol className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
            <li className="inline-flex items-center gap-2">
              <ListChecks className="size-4 text-primary" aria-hidden="true" />
              {t("book.step1")}
            </li>
            <li className="inline-flex items-center gap-2">
              <CalendarClock className="size-4 text-primary" aria-hidden="true" />
              {t("book.step2")}
            </li>
            <li className="inline-flex items-center gap-2">
              <CreditCard className="size-4 text-primary" aria-hidden="true" />
              {t("book.step3")}
            </li>
          </ol>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page grid gap-8 text-start lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
          <div className="card-soft h-fit p-6" aria-labelledby="book-summary-heading">
            <h2 id="book-summary-heading" className="font-display text-lg font-bold">
              {t("book.summary.heading")}
            </h2>
            <div className="mt-4">
              <CartSummary />
            </div>
            <Link to="/pricing" className="mt-4 inline-block text-sm font-semibold text-primary">
              {t("cart.viewPricing")}
            </Link>
          </div>

          <div className="space-y-6">
            <div className="card-soft p-6" aria-labelledby="book-widget-heading">
              <h2 id="book-widget-heading" className="font-display text-lg font-bold">
                {t("book.widget.heading")}
              </h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card">
                <iframe
                  src={`${CAL_URL}?embed=true&theme=light`}
                  title={t("book.widget.iframeTitle")}
                  loading="lazy"
                  className="block h-[40rem] w-full"
                />
              </div>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                {t("book.widget.open")} <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>

            <div className="card-soft p-6" aria-labelledby="book-payment-heading">
              <h2 id="book-payment-heading" className="font-display text-lg font-bold">
                {t("book.payment.heading")}
              </h2>
              <p className="mt-3 text-muted-foreground">{t("book.payment.body")}</p>
              {/* [PENDING — Razorpay integration] no payment gateway is wired up yet. */}
              <p className="mt-3 text-sm font-semibold text-secondary">
                {t("book.payment.pending")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
