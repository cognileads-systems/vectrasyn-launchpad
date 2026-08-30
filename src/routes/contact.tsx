import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Facebook, Instagram, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const TITLE = "Contact VectraSyn — Get a Fixed-Price Quote";
const DESCRIPTION =
  "Tell VectraSyn about your website, app, automation or branding project and get a fixed price and timeline back.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
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
  { label: "Instagram", Icon: Instagram },
  { label: "LinkedIn", Icon: Linkedin },
  { label: "Facebook", Icon: Facebook },
  { label: "WhatsApp", Icon: MessageCircle },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    // [PENDING — delivery] Wire this up to email or a database before launch.
    window.setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks — your message is noted. We'll be in touch shortly.");
      form.reset();
    }, 400);
  }

  return (
    <>
      <section className="warm-glow">
        <div className="container-page py-16">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Tell us about your project</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A few lines is enough to start. We'll reply with questions, a fixed price and a
            realistic timeline.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="card-soft p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Send a message</h2>
            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold">
                  Name
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
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold">
                  Message
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
                {submitting ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="card-soft p-6">
              <h2 className="text-lg font-semibold">Where to find us</h2>
              {/* [PENDING — address details] */}
              <address className="mt-3 flex gap-3 not-italic text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                <span>
                  Street address line 1
                  <br />
                  City, State, Postcode
                  <br />
                  Country
                  <br />
                  [PENDING — confirm address]
                </span>
              </address>
            </div>

            <div className="card-soft overflow-hidden">
              <h2 className="px-6 pt-6 text-lg font-semibold">Map</h2>
              {/* [PENDING — map embed] Drop the map iframe into this slot. */}
              <div
                className="mt-4 flex h-56 items-center justify-center bg-sand text-sm text-muted-foreground"
                role="img"
                aria-label="Placeholder for a map showing the VectraSyn office location"
              >
                Map embed coming soon
              </div>
            </div>

            <div className="card-soft p-6">
              <h2 className="text-lg font-semibold">Follow along</h2>
              <ul className="mt-4 flex gap-3">
                {socials.map(({ label, Icon }) => (
                  <li key={label}>
                    {/* [PENDING — social URLs] Replace this span with an anchor once live. */}
                    <span
                      role="img"
                      aria-label={`${label} — link coming soon`}
                      title={`${label} — link coming soon`}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-secondary"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
