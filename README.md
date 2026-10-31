# VectraSyn Launchpad

Build a marketing website for "VectraSyn" — an affordable, fast-turnaround digital services business for small businesses (websites, apps, automation, logo/branding). This is a standalone brand, visually and structurally distinct from any other company — no dark/enterprise styling.

BRAND / VISUAL IDENTITY
- Background: #FAFAF5 (warm off-white)
- Primary accent: #F97316 (warm orange)
- Secondary accent: #0D9488 (deep teal-green)
- Text: #1C1C1E, muted text: #6B6B6B
- Typography: Poppins for headings, Inter for body. No monospace fonts anywhere — the tone should feel warm, fast, and accessible, not technical/enterprise.
- Overall feel: light, warm, approachable, small-business-friendly — NOT corporate/dark/"AI enterprise" styling.

PAGES (5 total)
1. **Home** — hero section, overview of 4 core services, pricing preview (teaser only, link to /pricing), proof-of-work preview (teaser, link to /proof-of-work), clear CTA.
2. **/pricing** — full service menu as a pricing table. For EVERY service show exactly two prices: a strikethrough muted "list price" and a bold accent-colored "final price" (50% off). Do NOT show any extra discount banner or promo code on this table — that's a separate, independently-controlled element (build the table so a promo banner component could be added later without touching this table). Include a currency toggle: INR (default), USD, AED — no other currencies.

Pricing table data (Service | INR list → final | USD list → final | AED list → final):
- Website Only | ₹36,000 → ₹18,000 | $700 → $350 | AED 3,000 → AED 1,500
- Simple Pipeline | ₹10,000 → ₹5,000 | $200 → $100 | AED 800 → AED 400
- Logo Design | ₹10,000 → ₹5,000 | $200 → $100 | AED 800 → AED 400
- GBP Setup | ₹12,000 → ₹6,000 | $200 → $100 | AED 800 → AED 400
- App Only | ₹70,000 → ₹35,000 | $1,200 → $600 | AED 5,000 → AED 2,500
- Bundle 1 | ₹50,000 → ₹25,000 | $900 → $450 | AED 3,800 → AED 1,900
- Bundle 2 | ₹1,00,000 → ₹50,000 | $1,800 → $900 | AED 7,500 → AED 3,750
- Monthly Maintenance | ₹16,000 → ₹8,000/mo | $300 → $150/mo | AED 1,200 → AED 600/mo

3. **/proof-of-work** — case study grid with 4–6 card slots. Each card: industry/type label, image placeholder, 2–3 line description placeholder, "Coming soon" badge. Use ONLY generic placeholder labels like "Case Study Coming Soon" — do NOT invent client names, testimonials, or fabricated results.

4. **/about** — company story section (placeholder copy I'll refine — keep it short and editable), PLUS merge in "How We Work" (simple 3–4 step process: Discover → Build → Launch → Support, or similar) and an FAQ accordion section at the bottom answering things like "How much does a website cost?", "How long does delivery take?", "Do you offer support after launch?" — use question-format headers, extractable one-line answers first, then more detail. Also include a "Hybrid" note (office + remote) as a placeholder line — mark it clearly as [PENDING — confirm details].

5. **/contact** — contact form (name, email, message), placeholder address block, placeholder map embed slot, and social icon row (Instagram, LinkedIn, Facebook, WhatsApp) — icons should be visually present but NOT yet linked to real URLs; mark clearly in a code comment as [PENDING — social URLs].

TECHNICAL / SEO REQUIREMENTS
- Semantic HTML, proper heading hierarchy (no div-soup)
- Unique meta title/description per page
- Real descriptive alt text on all images (not filenames)
- JSON-LD schema stubs: Organization, Service, Offer/AggregateOffer (priceCurrency + priceValidUntil), BreadcrumbList, FAQPage — can be placeholder-accurate for now, I'll finalize values later
- sitemap.xml, robots.txt, canonical tags per page
- Add a root /llms.txt with plain-text summary of site structure, services, and pricing
- Design for fast Core Web Vitals — compressed/optimized images, no render-blocking JS

LANGUAGE
- English only for this initial build. Build the site so Arabic (MSA) + full RTL layout support can be added later without a structural rebuild (i.e., avoid hardcoding LTR-only assumptions in layout components).

DO NOT include any pricing discount banners beyond what's specified, do not fabricate testimonials/client names/metrics anywhere on the site, and do not use any dark/violet/enterprise visual styling — this brand is intentionally warm and light.

I'll provide the final logo file in a follow-up message to swap into the header — for now use a simple text wordmark "VectraSyn" in the primary accent color as a placeholder.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fbb71b82-4a17-4baa-b60b-55ea8062ab35).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
