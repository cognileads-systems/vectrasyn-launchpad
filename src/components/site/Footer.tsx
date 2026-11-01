import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";

import { useT } from "../../i18n";
import logoUrl from "../../assets/vectrasyn-logo.svg";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../../lib/site";

const serviceKeys = [
  "services.websites.title",
  "services.apps.title",
  "services.automation.title",
  "services.branding.title",
] as const;

const socials = [
  { key: "contact.social.instagram", Icon: Instagram, href: INSTAGRAM_URL },
  { key: "contact.social.facebook", Icon: Facebook, href: FACEBOOK_URL },
] as const;

const pages = [
  { to: "/pricing", key: "nav.pricing" },
  { to: "/proof-of-work", key: "nav.proof" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Footer() {
  const t = useT();

  return (
    <footer className="mt-8 border-t border-border bg-sand">
      <div className="container-page grid gap-10 py-12 text-start sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logoUrl} alt={t("common.brand")} className="h-[50px] w-auto" />
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{t("common.tagline")}</p>
        </div>

        <nav aria-label={t("footer.servicesLabel")}>
          <h2 className="font-display text-sm font-semibold">{t("footer.servicesLabel")}</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {serviceKeys.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t("footer.pagesLabel")}>
          <h2 className="font-display text-sm font-semibold">{t("footer.pagesLabel")}</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {pages.map((page) => (
              <li key={page.to}>
                <Link to={page.to} className="hover:text-foreground">
                  {t(page.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold">{t("footer.contactHeading")}</h2>
          {/* [PENDING — contact details] */}
          <p className="mt-3 text-sm text-muted-foreground">{t("footer.contactPending")}</p>
          <ul className="mt-4 flex gap-2">
            {socials.map(({ key, Icon, href }) => (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("contact.social.open", { label: t(key) })}
                  title={t(key)}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-secondary transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/book"
            className="mt-4 inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground"
          >
            {t("common.cta.start")}
          </Link>
        </div>
      </div>

      <div className="border-t border-border/70">
        <p className="container-page py-5 text-start text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t("common.brand")}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
