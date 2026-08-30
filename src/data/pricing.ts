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
  /** Copy lives in src/i18n as pricing.rows.<id>.service / .description */
  id: string;
  recurring?: boolean;
  prices: Record<CurrencyCode, PriceSet>;
};

export const pricingRows: PricingRow[] = [
  {
    id: "website-only",
    prices: {
      INR: { list: "₹36,000", final: "₹18,000", finalValue: 18000 },
      USD: { list: "$700", final: "$350", finalValue: 350 },
      AED: { list: "AED 3,000", final: "AED 1,500", finalValue: 1500 },
    },
  },
  {
    id: "simple-pipeline",
    prices: {
      INR: { list: "₹10,000", final: "₹5,000", finalValue: 5000 },
      USD: { list: "$200", final: "$100", finalValue: 100 },
      AED: { list: "AED 800", final: "AED 400", finalValue: 400 },
    },
  },
  {
    id: "logo-design",
    prices: {
      INR: { list: "₹10,000", final: "₹5,000", finalValue: 5000 },
      USD: { list: "$200", final: "$100", finalValue: 100 },
      AED: { list: "AED 800", final: "AED 400", finalValue: 400 },
    },
  },
  {
    id: "gbp-setup",
    prices: {
      INR: { list: "₹12,000", final: "₹6,000", finalValue: 6000 },
      USD: { list: "$200", final: "$100", finalValue: 100 },
      AED: { list: "AED 800", final: "AED 400", finalValue: 400 },
    },
  },
  {
    id: "app-only",
    prices: {
      INR: { list: "₹70,000", final: "₹35,000", finalValue: 35000 },
      USD: { list: "$1,200", final: "$600", finalValue: 600 },
      AED: { list: "AED 5,000", final: "AED 2,500", finalValue: 2500 },
    },
  },
  {
    id: "bundle-1",
    prices: {
      INR: { list: "₹50,000", final: "₹25,000", finalValue: 25000 },
      USD: { list: "$900", final: "$450", finalValue: 450 },
      AED: { list: "AED 3,800", final: "AED 1,900", finalValue: 1900 },
    },
  },
  {
    id: "bundle-2",
    prices: {
      INR: { list: "₹1,00,000", final: "₹50,000", finalValue: 50000 },
      USD: { list: "$1,800", final: "$900", finalValue: 900 },
      AED: { list: "AED 7,500", final: "AED 3,750", finalValue: 3750 },
    },
  },
  {
    id: "monthly-maintenance",
    recurring: true,
    prices: {
      INR: { list: "₹16,000", final: "₹8,000", finalValue: 8000 },
      USD: { list: "$300", final: "$150", finalValue: 150 },
      AED: { list: "AED 1,200", final: "AED 600", finalValue: 600 },
    },
  },
];

/** Copy lives in src/i18n; only ids and icon order are structural. */
export const services = [
  { id: "websites", titleKey: "services.websites.title", descriptionKey: "services.websites.description" },
  { id: "apps", titleKey: "services.apps.title", descriptionKey: "services.apps.description" },
  { id: "automation", titleKey: "services.automation.title", descriptionKey: "services.automation.description" },
  { id: "branding", titleKey: "services.branding.title", descriptionKey: "services.branding.description" },
];
