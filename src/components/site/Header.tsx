import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { useT } from "../../i18n";
import logoUrl from "../../assets/vectrasyn-logo.svg";
import { LanguageToggle } from "./LanguageToggle";
import { CartDrawer } from "./CartDrawer";


const nav = [
  { to: "/", key: "nav.home" },
  { to: "/pricing", key: "nav.pricing" },
  { to: "/proof-of-work", key: "nav.proof" },
  { to: "/about", key: "nav.about" },
  { to: "/book", key: "nav.book" },
  { to: "/contact", key: "nav.contact" },

] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const t = useT();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-page grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <Link to="/" aria-label={t("common.brand")} className="flex shrink-0 items-center">
          <img src={logoUrl} alt={t("common.brand")} className="h-12 w-auto" />
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label={t("nav.mainLabel")} className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary bg-accent" }}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ms-2 inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              {t("common.cta.quoteShort")}
            </Link>
          </nav>

          <LanguageToggle className="ms-1" />
          <CartDrawer />


          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-border p-2 md:hidden"
            aria-expanded={open}
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label={t("nav.mobileLabel")} className="border-t border-border bg-background md:hidden">
          <ul className="container-page flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block py-3 text-start text-sm font-medium text-muted-foreground"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
