import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const TITLE = "About VectraSyn — How We Work & FAQ";
const DESCRIPTION =
  "Who VectraSyn is, our four-step process from discovery to support, and answers to common questions about cost, delivery time and post-launch support.";

const faqs = [
  {
    q: "How much does a website cost?",
    short: "A standard business website is ₹18,000 (about $350 / AED 1,500) at our current price.",
    long: "That covers a multi-section, mobile-friendly site built and launched for you. Larger scopes — extra pages, e-commerce, custom integrations — are quoted individually. The full menu, including bundles and other currencies, is on the pricing page.",
  },
  {
    q: "How long does delivery take?",
    short: "Most small-business websites go live within one to two weeks.",
    long: "Logo design and single automation pipelines are usually faster; app builds take longer and depend on scope. We give you a specific timeline with your quote, before any work starts.",
  },
  {
    q: "Do you offer support after launch?",
    short: "Yes — monthly maintenance is available at ₹8,000 per month.",
    long: "Maintenance covers updates, fixes and small content or design changes. It is optional; you can also come back for one-off changes whenever you need them.",
  },
  {
    q: "What do you need from me to get started?",
    short: "A short description of your business and what you want the project to achieve.",
    long: "Anything you already have helps — existing logo files, photos, text, or links to sites you like. If you don't have those yet, we'll work through it together during discovery.",
  },
  {
    q: "Do you work with businesses outside India?",
    short: "Yes — we work remotely and quote in INR, USD and AED.",
    long: "Communication is over email and video calls, with an agreed schedule that suits your time zone.",
  },
];

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
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: `${f.short} ${f.long}` },
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

const steps = [
  {
    title: "Discover",
    body: "A short conversation about your business, your customers and what the project needs to do. You get a fixed price and a timeline.",
  },
  {
    title: "Build",
    body: "We build in focused passes and share progress as we go, so nothing arrives as a surprise at the end.",
  },
  {
    title: "Launch",
    body: "We handle setup, testing and go-live, then walk you through anything you'll manage yourself.",
  },
  {
    title: "Support",
    body: "Optional monthly maintenance keeps things updated, or come back for one-off changes when you need them.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="warm-glow">
        <div className="container-page py-16">
          <p className="eyebrow">About us</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">We build the digital basics well</h1>
          {/* Placeholder story copy — short and easy to edit. */}
          <div className="mt-6 max-w-2xl space-y-4 text-lg text-muted-foreground">
            <p>
              VectraSyn started with a simple observation: small businesses are quoted agency prices
              for work that should be quick, clear and affordable.
            </p>
            <p>
              So we kept the scope tight and the process short. Websites, apps, automation and
              branding — priced up front, delivered fast, and explained in plain language.
            </p>
            <p>
              We'd rather do a small number of things properly than sell you a package you don't
              need.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="how-we-work-heading">
        <div className="container-page">
          <p className="eyebrow">How we work</p>
          <h2 id="how-we-work-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Four steps, start to finish
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="card-soft p-6">
                <span className="font-display text-sm font-bold text-primary">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 rounded-xl border border-dashed border-border bg-surface p-4 text-sm text-muted-foreground">
            <strong className="font-semibold text-foreground">Hybrid working:</strong> we operate as
            a hybrid team — part office-based, part remote. [PENDING — confirm details]
          </p>
        </div>
      </section>

      <section className="section-y" aria-labelledby="faq-heading">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Common questions
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-start font-display text-base font-semibold">
                  <h3>{faq.q}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-medium text-foreground">{faq.short}</p>
                  <p className="mt-2 text-muted-foreground">{faq.long}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Ask us anything
          </Link>
        </div>
      </section>
    </>
  );
}
