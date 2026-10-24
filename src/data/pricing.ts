/**
 * Every starting price on the site lives here, so one edit updates the
 * service cards, "What do you need help with?" cards, service pages and
 * packages together.
 *
 * Amounts are in Sri Lankan rupees. `monthly` adds "/ month"; `note` is a
 * short plain-language extra shown under the price.
 *
 * Starting points were set against published 2026 Sri Lankan agency rates
 * (mid-range, between freelancers and premium firms). Review before launch.
 */
export interface Price {
  from: number;
  monthly?: boolean;
  note?: string;
}

export const servicePrices: Record<string, Price> = {
  // Get more customers
  'digital-marketing': { from: 75000, monthly: true, note: 'Ad budget paid separately' },
  seo: { from: 45000, monthly: true, note: 'Includes Google Maps listing' },
  'social-media-marketing': { from: 35000, monthly: true, note: '12 posts a month + replies' },
  'paid-advertising': { from: 30000, monthly: true, note: 'Plus your ad budget' },
  'content-marketing': { from: 40000, monthly: true },
  branding: { from: 35000, note: 'Logo, colours and basic designs' },
  analytics: { from: 20000, note: 'One-time setup · free in monthly plans' },
  // Run your business more easily
  'web-development': { from: 85000, note: 'One-time · first year of hosting included' },
  ecommerce: { from: 175000, note: 'One-time · card & bank payments' },
  'software-development': { from: 350000, note: 'One-time · fixed quote after planning' },
  'mobile-apps': { from: 600000, note: 'Android and iPhone' },
  'crm-erp': { from: 150000, note: 'Setup · small monthly fee after' },
  'business-automation': { from: 60000, note: 'One-time, per task automated' },
  'it-solutions': { from: 15000, monthly: true, note: 'Hosting, email, backups & support' }
};

export const packagePrices: Record<string, Price> = {
  launch: { from: 150000, note: 'One-time' },
  growth: { from: 95000, monthly: true, note: 'Ad budget paid separately' },
  scale: { from: 450000, note: 'Delivered in stages' },
  enterprise: { from: 1000000, note: 'Scoped together with you' }
};

export const formatRupees = (amount: number) => `Rs. ${amount.toLocaleString('en-US')}`;

/** What every price means, shown wherever prices appear. */
export const pricingPromise =
'Prices shown are starting prices — you get a fixed written quote before any work begins, with no hidden costs.';
