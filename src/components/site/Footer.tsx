import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border bg-sand">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold text-primary">VectraSyn</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Affordable, fast-turnaround websites, apps, automation and branding for small
            businesses.
          </p>
        </div>

        <nav aria-label="Services">
          <h2 className="font-display text-sm font-semibold">Services</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Websites</li>
            <li>Apps</li>
            <li>Automation</li>
            <li>Logo &amp; Branding</li>
          </ul>
        </nav>

        <nav aria-label="Pages">
          <h2 className="font-display text-sm font-semibold">Pages</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/pricing" className="hover:text-foreground">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/proof-of-work" className="hover:text-foreground">
                Proof of Work
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold">Get in touch</h2>
          {/* [PENDING — contact details] */}
          <p className="mt-3 text-sm text-muted-foreground">
            Address, phone and email to be confirmed.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground"
          >
            Start a project
          </Link>
        </div>
      </div>

      <div className="border-t border-border/70">
        <p className="container-page py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} VectraSyn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
