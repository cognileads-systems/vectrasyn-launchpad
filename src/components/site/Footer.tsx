import { Link } from "@tanstack/react-router";

import { useT } from "../../i18n";
import logoUrl from "../../assets/vectrasyn-logo.svg";

const serviceKeys = [
  "services.websites.title",
  "services.apps.title",
  "services.automation.title",
  "services.branding.title",
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
          <img src={logoUrl} alt={t("common.brand")} className="h-8 w-auto" />
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
          <Link
            to="/contact"
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
