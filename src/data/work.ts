import type { CaseStudy, WorkCategory } from '../types';

export const workFilters: {id: 'all' | WorkCategory;label: string;}[] = [
{ id: 'all', label: 'All' },
{ id: 'websites', label: 'Websites' },
{ id: 'marketing', label: 'Marketing' },
{ id: 'software', label: 'Software' },
{ id: 'branding', label: 'Branding' }];


const IMG = {
  ecommerce: "/92c83378-3d28-4531-b6cb-80b5bef1145d.jpg",
  automation: "/00d44a23-6dd1-46cc-bdd5-2bdf55de5c9a.jpg",
  erp: "/04fabd70-3976-4fc8-89f3-f6123683b493.jpg",
  marketing: "/2f2d7041-c6e6-4e49-b64d-cafde26573fb.jpg",
  brand: "/0b36ee9d-1144-4af9-8128-a0414ad9b153.jpg",
  website: "/d0d16d02-f7f4-4386-bacb-62f3471043c5.jpg",
  logistics: "/0f31a67a-2362-4451-8a67-f62faee47773.jpg"
};

export const caseStudies: CaseStudy[] = [
{
  slug: 'orbit-retail-ecommerce-growth',
  client: 'Orbit Retail',
  industry: 'Retail',
  projectType: 'Website & E-commerce',
  category: 'websites',
  year: '2025',
  image: IMG.ecommerce,
  summary:
  'Replatformed a six-store retailer onto a single storefront with live stock, then rebuilt the buying journey around repeat purchase.',
  challenge:
  'Three disconnected sales channels, stock counts maintained by hand, and a checkout that lost roughly half of the shoppers who reached it.',
  strategy:
  'We consolidated catalogue and inventory into one source of truth, mapped the highest-intent product journeys, and rebuilt checkout as a three-step flow with saved payment methods.',
  solution:
  'A headless storefront connected to the POS, automated stock sync every fifteen minutes, a re-order module for returning customers, and a merchandising panel the marketing team runs without developer help.',
  services: ['E-commerce Development', 'UX Design', 'POS Integration', 'Performance Marketing', 'Analytics'],
  technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'GA4', 'AWS'],
  results: [
  { label: 'Online revenue', value: '+41%' },
  { label: 'Checkout completion', value: '+28%' },
  { label: 'Manual stock hours', value: '−12/wk' }],

  gallery: [
  { src: IMG.ecommerce, caption: 'Storefront and product discovery' },
  { src: IMG.erp, caption: 'Inventory and merchandising panel' }],

  liveUrl: 'https://example.com/orbit-retail'
},
{
  slug: 'vertex-foods-business-automation',
  client: 'Vertex Foods',
  industry: 'Food & Beverage',
  projectType: 'Business Automation',
  category: 'software',
  year: '2025',
  image: IMG.automation,
  summary:
  'Turned a spreadsheet-driven wholesale ordering process into an automated pipeline from order intake to dispatch note.',
  challenge:
  'Orders arrived by phone, WhatsApp and email. Every one was re-typed twice, and production planning depended on a single staff member.',
  strategy:
  'We shadowed the operations team for a week, documented the real process, then automated only the steps that were repetitive and rule-based.',
  solution:
  'A wholesale order portal for trade customers, automatic order routing to production, generated dispatch and invoice documents, and exception alerts when an order breaks a rule.',
  services: ['Process Mapping', 'Custom Software', 'Workflow Automation', 'Staff Training'],
  technologies: ['React', 'Python', 'PostgreSQL', 'REST APIs', 'Azure'],
  results: [
  { label: 'Order processing time', value: '−63%' },
  { label: 'Data entry errors', value: '−88%' },
  { label: 'Orders handled per day', value: '2.4x' }],

  gallery: [
  { src: IMG.automation, caption: 'Order routing and exception handling' },
  { src: IMG.erp, caption: 'Production planning board' }],

  liveUrl: 'https://example.com/vertex-foods'
},
{
  slug: 'halden-b2b-demand-programme',
  client: 'Halden & Co.',
  industry: 'Manufacturing',
  projectType: 'Digital Marketing',
  category: 'marketing',
  year: '2024',
  image: IMG.marketing,
  summary:
  'Built a B2B demand programme for an industrial components maker that previously relied entirely on trade shows.',
  challenge:
  'No inbound pipeline, no tracking, and a website that described the factory rather than the buyer problem.',
  strategy:
  'We rewrote the proposition around specification and lead time, launched technical content for the terms engineers actually search, and layered paid search over the highest-intent queries.',
  solution:
  'A technical content library, product specification landing pages, Google and LinkedIn campaigns, lead scoring in the CRM, and a single dashboard for cost per qualified enquiry.',
  services: ['SEO', 'Paid Advertising', 'Content Marketing', 'CRM Setup', 'Analytics & Reporting'],
  technologies: ['Google Ads', 'GA4', 'Google Tag Manager', 'LinkedIn Ads', 'HubSpot'],
  results: [
  { label: 'Qualified enquiries', value: '+52%' },
  { label: 'Cost per lead', value: '−34%' },
  { label: 'Organic sessions', value: '+118%' }],

  gallery: [
  { src: IMG.marketing, caption: 'Channel performance reporting' },
  { src: IMG.website, caption: 'Specification landing pages' }],

  liveUrl: 'https://example.com/halden'
},
{
  slug: 'northport-trade-erp',
  client: 'Northport Trade',
  industry: 'Export & Trading',
  projectType: 'Custom Software',
  category: 'software',
  year: '2024',
  image: IMG.erp,
  summary:
  'Delivered a quotation-to-shipment system for an exporter managing forty concurrent consignments across three continents.',
  challenge:
  'Quotations, costings and shipping documents lived in separate files. Margin was only visible after a consignment closed.',
  strategy:
  'We modelled the commercial workflow first and built margin calculation into quotation, so pricing decisions happened with live landed-cost data.',
  solution:
  'A modular ERP covering quotations, costing, documentation and consignment tracking, with role-based access for the trade, finance and logistics teams.',
  services: ['Discovery & Architecture', 'ERP Development', 'Document Automation', 'Integration', 'Support'],
  technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Google Cloud'],
  results: [
  { label: 'Quotation turnaround', value: '−58%' },
  { label: 'Margin visibility', value: 'Real time' },
  { label: 'Document prep time', value: '−71%' }],

  gallery: [
  { src: IMG.erp, caption: 'Consignment and costing modules' },
  { src: IMG.logistics, caption: 'Shipment tracking view' }],

  liveUrl: 'https://example.com/northport'
},
{
  slug: 'casa-verde-brand-transformation',
  client: 'Casa Verde',
  industry: 'Hospitality',
  projectType: 'Brand Transformation',
  category: 'branding',
  year: '2025',
  image: IMG.brand,
  summary:
  'Repositioned a family-run boutique hotel group and rebuilt its direct booking experience around the new identity.',
  challenge:
  'Strong guest reviews, weak brand presence, and 80% of bookings arriving through marketplaces at high commission.',
  strategy:
  'We defined a clear positioning around slow coastal hospitality, built an identity system that could carry it, and made direct booking the obviously better option.',
  solution:
  'Brand identity, photography direction, a redesigned website with an integrated booking engine, and an email programme for returning guests.',
  services: ['Brand Strategy', 'Identity Design', 'Website', 'Booking Integration', 'Email Marketing'],
  technologies: ['React', 'Booking API', 'Stripe', 'Klaviyo'],
  results: [
  { label: 'Direct bookings', value: '+46%' },
  { label: 'Commission paid', value: '−22%' },
  { label: 'Average stay value', value: '+17%' }],

  gallery: [
  { src: IMG.brand, caption: 'Identity system and applications' },
  { src: IMG.website, caption: 'Direct booking experience' }],

  liveUrl: 'https://example.com/casa-verde'
},
{
  slug: 'meridian-labs-platform',
  client: 'Meridian Labs',
  industry: 'Professional Services',
  projectType: 'Website & Platform',
  category: 'websites',
  year: '2024',
  image: IMG.website,
  summary:
  'Rebuilt a consultancy website as a credibility engine, with a client portal behind it for live project reporting.',
  challenge:
  'A slow, unmaintainable site and monthly client reports assembled by hand in slide decks.',
  strategy:
  'Separate the two jobs: make the public site persuade, and move recurring reporting into a portal clients can check themselves.',
  solution:
  'A fast marketing site with a structured insights library, plus a secure client portal showing project status, milestones and live metrics.',
  services: ['Web Development', 'UX Design', 'Client Portal', 'SEO', 'Maintenance'],
  technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'GA4'],
  results: [
  { label: 'Page load time', value: '1.1s' },
  { label: 'Enquiry conversion', value: '+37%' },
  { label: 'Reporting hours', value: '−9/mo' }],

  gallery: [
  { src: IMG.website, caption: 'Marketing site and insights library' },
  { src: IMG.marketing, caption: 'Client reporting portal' }],

  liveUrl: 'https://example.com/meridian-labs'
}];


export const getCaseStudy = (slug: string) => caseStudies.find((item) => item.slug === slug);
export const getCaseStudies = (slugs: string[]) =>
slugs.map((slug) => getCaseStudy(slug)).filter((item): item is CaseStudy => Boolean(item));