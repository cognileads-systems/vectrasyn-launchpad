export type CurrencyCode = "INR" | "USD" | "AED";

export const currencies: { code: CurrencyCode; label: string; symbolNote: string }[] = [
  { code: "INR", label: "INR", symbolNote: "Indian Rupee" },
  { code: "USD", label: "USD", symbolNote: "US Dollar" },
  { code: "AED", label: "AED", symbolNote: "UAE Dirham" },
];

export type PriceSet = {
  /** Display string for the crossed-out list price */
  list: string;
  /** Display string for the final (50% off) price */
  final: string;
  /** Numeric final price, for structured data */
  finalValue: number;
};

export type PricingRow = {
  id: string;
  service: string;
  description: string;
  recurring?: boolean;
  prices: Record<CurrencyCode, PriceSet>;
};

export const pricingRows: PricingRow[] = [
  {
    id: "website-only",
    service: "Website Only",
    description: "A fast, mobile-friendly business website built and launched for you.",
    prices: {
      INR: { list: "₹36,000", final: "₹18,000", finalValue: 18000 },
      USD: { list: "$700", final: "$350", finalValue: 350 },
      AED: { list: "AED 3,000", final: "AED 1,500", finalValue: 1500 },
    },
  },
  {
    id: "simple-pipeline",
    service: "Simple Pipeline",
    description: "A single automation that moves your leads or data between tools.",
    prices: {
      INR: { list: "₹10,000", final: "₹5,000", finalValue: 5000 },
      USD: { list: "$200", final: "$100", finalValue: 100 },
      AED: { list: "AED 800", final: "AED 400", finalValue: 400 },
    },
  },
  {
    id: "logo-design",
    service: "Logo Design",
    description: "An original logo with the core files you need for print and web.",
    prices: {
      INR: { list: "₹10,000", final: "₹5,000", finalValue: 5000 },
      USD: { list: "$200", final: "$100", finalValue: 100 },
      AED: { list: "AED 800", final: "AED 400", finalValue: 400 },
    },
  },
  {
    id: "gbp-setup",
    service: "GBP Setup",
    description: "Google Business Profile set up and optimised so locals can find you.",
    prices: {
      INR: { list: "₹12,000", final: "₹6,000", finalValue: 6000 },
      USD: { list: "$200", final: "$100", finalValue: 100 },
      AED: { list: "AED 800", final: "AED 400", finalValue: 400 },
    },
  },
  {
    id: "app-only",
    service: "App Only",
    description: "A focused mobile or web app covering the workflow your business runs on.",
    prices: {
      INR: { list: "₹70,000", final: "₹35,000", finalValue: 35000 },
      USD: { list: "$1,200", final: "$600", finalValue: 600 },
      AED: { list: "AED 5,000", final: "AED 2,500", finalValue: 2500 },
    },
  },
  {
    id: "bundle-1",
    service: "Bundle 1",
    description: "A starter package combining your online presence essentials.",
    prices: {
      INR: { list: "₹50,000", final: "₹25,000", finalValue: 25000 },
      USD: { list: "$900", final: "$450", finalValue: 450 },
      AED: { list: "AED 3,800", final: "AED 1,900", finalValue: 1900 },
    },
  },
  {
    id: "bundle-2",
    service: "Bundle 2",
    description: "The full build: website, app and automation together.",
    prices: {
      INR: { list: "₹1,00,000", final: "₹50,000", finalValue: 50000 },
      USD: { list: "$1,800", final: "$900", finalValue: 900 },
      AED: { list: "AED 7,500", final: "AED 3,750", finalValue: 3750 },
    },
  },
  {
    id: "monthly-maintenance",
    service: "Monthly Maintenance",
    description: "Ongoing updates, fixes and small changes after launch.",
    recurring: true,
    prices: {
      INR: { list: "₹16,000", final: "₹8,000", finalValue: 8000 },
      USD: { list: "$300", final: "$150", finalValue: 150 },
      AED: { list: "AED 1,200", final: "AED 600", finalValue: 600 },
    },
  },
];

export const services = [
  {
    title: "Websites",
    description:
      "Clean, quick-loading sites that explain what you do and turn visitors into enquiries.",
  },
  {
    title: "Apps",
    description: "Simple mobile and web apps built around one job your business needs done well.",
  },
  {
    title: "Automation",
    description: "Pipelines that move leads, orders and data between your tools without manual work.",
  },
  {
    title: "Logo & Branding",
    description: "An original wordmark, colours and files so your business looks consistent everywhere.",
  },
];
