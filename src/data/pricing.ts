export type CurrencyCode = "INR" | "USD" | "AED";

export const currencies: { code: CurrencyCode; label: string; symbolNote: string }[] = [
  { code: "INR", label: "INR", symbolNote: "Indian Rupee" },
  { code: "USD", label: "USD", symbolNote: "US Dollar" },
  { code: "AED", label: "AED", symbolNote: "UAE Dirham" },
];

export type PriceSet = {
  /** Display string for the crossed-out list price */
  list: string;
  /** Display string for the final price */
  final: string;
  /** Numeric final price, for structured data. For custom-quote rows this is the low end. */
  finalValue: number;
};

export type PricingRow = {
  /** Copy lives in src/i18n as pricing.rows.<id>.service / .description */
  id: string;
  recurring?: boolean;
  /** Custom-quote rows show ranges and a "contact us for an exact quote" note. */
  custom?: boolean;
  /** Renders an expandable "What's included" list from pricing.rows.<id>.includes */
  hasIncludes?: boolean;
  prices: Record<CurrencyCode, PriceSet>;
};

export const pricingRows: PricingRow[] = [
  {
    id: "website-only",
    hasIncludes: true,
    prices: {
      // INR final updated to ₹22,000 (list unchanged). USD/AED left at their published
      // figures — they are not derived from the INR number.
      INR: { list: "₹36,000", final: "₹22,000", finalValue: 22000 },
      USD: { list: "$1,100", final: "$550", finalValue: 550 },
      AED: { list: "AED 4,000", final: "AED 2,000", finalValue: 2000 },
    },
  },
  {
    id: "simple-pipeline",
    hasIncludes: true,
    prices: {
      INR: { list: "₹10,000", final: "₹5,000", finalValue: 5000 },
      USD: { list: "$300", final: "$150", finalValue: 150 },
      AED: { list: "AED 1,100", final: "AED 550", finalValue: 550 },
    },
  },
  {
    id: "logo-design",
    prices: {
      INR: { list: "₹10,000", final: "₹5,000", finalValue: 5000 },
      USD: { list: "$400", final: "$200", finalValue: 200 },
      AED: { list: "AED 1,500", final: "AED 750", finalValue: 750 },
    },
  },
  {
    id: "gbp-setup",
    prices: {
      INR: { list: "₹12,000", final: "₹6,000", finalValue: 6000 },
      USD: { list: "$300", final: "$150", finalValue: 150 },
      AED: { list: "AED 1,100", final: "AED 550", finalValue: 550 },
    },
  },
  {
    id: "app-only",
    prices: {
      INR: { list: "₹70,000", final: "₹35,000", finalValue: 35000 },
      USD: { list: "$2,400", final: "$1,200", finalValue: 1200 },
      AED: { list: "AED 8,800", final: "AED 4,400", finalValue: 4400 },
    },
  },
  {
    id: "ecommerce",
    custom: true,
    hasIncludes: true,
    prices: {
      INR: { list: "₹60,000–₹1,60,000", final: "₹30,000–₹80,000", finalValue: 30000 },
      USD: { list: "$2,400–$6,000", final: "$1,200–$3,000", finalValue: 1200 },
      AED: { list: "AED 9,000–24,000", final: "AED 4,500–12,000", finalValue: 4500 },
    },
  },
  {
    id: "bundle-1",
    hasIncludes: true,
    prices: {
      INR: { list: "₹50,000", final: "₹25,000", finalValue: 25000 },
      USD: { list: "$1,400", final: "$700", finalValue: 700 },
      AED: { list: "AED 5,200", final: "AED 2,600", finalValue: 2600 },
    },
  },
  {
    id: "bundle-2",
    hasIncludes: true,
    prices: {
      INR: { list: "₹1,00,000", final: "₹50,000", finalValue: 50000 },
      USD: { list: "$2,200", final: "$1,100", finalValue: 1100 },
      AED: { list: "AED 8,200", final: "AED 4,200", finalValue: 4200 },
    },
  },
  {
    id: "monthly-maintenance",
    recurring: true,
    prices: {
      INR: { list: "₹16,000", final: "₹8,000", finalValue: 8000 },
      USD: { list: "$360", final: "$180", finalValue: 180 },
      AED: { list: "AED 1,300", final: "AED 650", finalValue: 650 },
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
