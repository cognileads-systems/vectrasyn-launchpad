import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Facebook, Instagram, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

import { translate, useT } from "../i18n";

const TITLE = translate("en", "contact.meta.title");
const DESCRIPTION = translate("en", "contact.meta.description");

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "/contact" },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

// [PENDING — social URLs] Icons are intentionally not linked yet.
const socials = [
  { key: "contact.social.instagram", Icon: Instagram },
  { key: "contact.social.linkedin", Icon: Linkedin },
  { key: "contact.social.facebook", Icon: Facebook },
  { key: "contact.social.whatsapp", Icon: MessageCircle },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const t = useT();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    // [PENDING — delivery] Wire this up to email or a database before launch.
    window.setTimeout(() => {
      setSubmitting(false);
      toast.success(t("contact.form.success"));
      form.reset();
    }, 400);
  }

  return (
    <>
      <section className="warm-glow">
        <div className="container-page py-16 text-start">
          <p className="eyebrow">{t("contact.eyebrow")}</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{t("contact.heading")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t("contact.intro")}</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page grid gap-10 text-start lg:grid-cols-[3fr_2fr]">
          <div className="card-soft p-6 sm:p-8">
            <h2 className="text-2xl font-bold">{t("contact.form.heading")}</h2>
            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold">
                  {t("contact.form.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold">
                  {t("contact.form.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  dir="ltr"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-start text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {submitting ? t("contact.form.sending") : t("contact.form.submit")}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="card-soft p-6">
              <h2 className="text-lg font-semibold">{t("contact.address.heading")}</h2>
              {/* [PENDING — address details] */}
              <address className="mt-3 flex gap-3 not-italic text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                <span className="whitespace-pre-line">{t("contact.address.pending")}</span>
              </address>
            </div>

            <div className="card-soft overflow-hidden">
              <h2 className="px-6 pt-6 text-lg font-semibold">{t("contact.map.heading")}</h2>
              {/* [PENDING — map embed] Drop the map iframe into this slot. */}
              <div
                className="mt-4 flex h-56 items-center justify-center bg-sand text-sm text-muted-foreground"
                role="img"
                aria-label={t("contact.map.alt")}
              >
                {t("contact.map.placeholder")}
              </div>
            </div>

            <div className="card-soft p-6">
              <h2 className="text-lg font-semibold">{t("contact.social.heading")}</h2>
              <ul className="mt-4 flex gap-3">
                {socials.map(({ key, Icon }) => {
                  const pending = t("contact.social.pending", { label: t(key) });
                  return (
                    <li key={key}>
                      {/* [PENDING — social URLs] Replace this span with an anchor once live. */}
                      <span
                        role="img"
                        aria-label={pending}
                        title={pending}
                        className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-secondary"
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
