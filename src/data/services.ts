import {
  BarChart3Icon,
  BotIcon,
  BrainCircuitIcon,
  CloudIcon,
  CodeIcon,
  CreditCardIcon,
  DatabaseIcon,
  GaugeIcon,
  GlobeIcon,
  HeadphonesIcon,
  LayersIcon,
  LineChartIcon,
  MegaphoneIcon,
  PaletteIcon,
  PenToolIcon,
  PlugIcon,
  SearchIcon,
  ServerCogIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  SmartphoneIcon,
  SparklesIcon,
  TargetIcon,
  UsersIcon,
  WorkflowIcon } from
'lucide-react';
import type { ExplorerTrack, Service, ServiceGroup } from '../types';

export const serviceGroups: ServiceGroup[] = [
{
  id: 'digital-growth',
  label: 'Digital Growth',
  kicker: 'Demand, visibility & brand',
  description:
  'Campaigns, content and creative that put your business in front of the right buyers — and prove what it returned.'
},
{
  id: 'technology',
  label: 'Technology & Software',
  kicker: 'Systems, automation & IT',
  description:
  'Websites, platforms and internal systems that remove manual work and give you visibility over the business.'
}];


export const services: Service[] = [
{
  slug: 'digital-marketing',
  name: 'Digital Marketing',
  group: 'digital-growth',
  summary: 'Full-funnel strategy across search, social and paid channels, run against revenue targets.',
  icon: MegaphoneIcon,
  hasDetailPage: true
},
{
  slug: 'seo',
  name: 'Search Engine Optimization',
  group: 'digital-growth',
  summary: 'Technical fixes, content depth and local presence that compound into durable organic demand.',
  icon: SearchIcon,
  hasDetailPage: true
},
{
  slug: 'social-media-marketing',
  name: 'Social Media Marketing',
  group: 'digital-growth',
  summary: 'Always-on content calendars and community management built around how your audience buys.',
  icon: UsersIcon,
  hasDetailPage: false
},
{
  slug: 'paid-advertising',
  name: 'Google & Meta Advertising',
  group: 'digital-growth',
  summary: 'Paid acquisition with tight tracking, creative testing and budgets tied to cost per lead.',
  icon: TargetIcon,
  hasDetailPage: false
},
{
  slug: 'content-marketing',
  name: 'Content & Video Marketing',
  group: 'digital-growth',
  summary: 'Articles, email programmes and short-form video that earn attention instead of buying all of it.',
  icon: PenToolIcon,
  hasDetailPage: false
},
{
  slug: 'branding',
  name: 'Branding & Creative',
  group: 'digital-growth',
  summary: 'Positioning, identity systems and graphic design that make a small company look serious.',
  icon: PaletteIcon,
  hasDetailPage: false
},
{
  slug: 'analytics',
  name: 'Analytics & Reporting',
  group: 'digital-growth',
  summary: 'GA4, tag management and dashboards so every decision has a number behind it.',
  icon: BarChart3Icon,
  hasDetailPage: false
},
{
  slug: 'web-development',
  name: 'Web Development',
  group: 'technology',
  summary: 'Fast, accessible, search-ready websites engineered to convert and simple for your team to run.',
  icon: GlobeIcon,
  hasDetailPage: true
},
{
  slug: 'ecommerce',
  name: 'E-commerce Development',
  group: 'technology',
  summary: 'Storefronts, payments and fulfilment flows built to lift average order value and repeat rate.',
  icon: ShoppingBagIcon,
  hasDetailPage: true
},
{
  slug: 'software-development',
  name: 'Custom Software',
  group: 'technology',
  summary: 'Web applications and business systems shaped around how your operation actually works.',
  icon: CodeIcon,
  hasDetailPage: true
},
{
  slug: 'mobile-apps',
  name: 'Mobile Applications',
  group: 'technology',
  summary: 'Cross-platform apps for field teams, customers and partners, connected to your core systems.',
  icon: SmartphoneIcon,
  hasDetailPage: false
},
{
  slug: 'crm-erp',
  name: 'CRM, ERP & POS',
  group: 'technology',
  summary: 'Customer, inventory and finance systems that replace spreadsheets and disconnected tools.',
  icon: DatabaseIcon,
  hasDetailPage: false
},
{
  slug: 'business-automation',
  name: 'Business Automation',
  group: 'technology',
  summary: 'Workflow automation and AI assistants that take repetitive admin off your team.',
  icon: WorkflowIcon,
  hasDetailPage: false
},
{
  slug: 'it-solutions',
  name: 'Cloud & IT Solutions',
  group: 'technology',
  summary: 'Cloud infrastructure, security, integrations and support with clear response commitments.',
  icon: CloudIcon,
  hasDetailPage: true
}];


export const servicesByGroup = (group: Service['group']) =>
services.filter((service) => service.group === group);

export const explorerTracks: ExplorerTrack[] = [
{
  id: 'digital-marketing',
  label: 'Digital Marketing',
  headline: 'Demand generation that answers to revenue',
  description:
  'We build a channel mix around your margins and sales cycle, then run it as one programme instead of disconnected campaigns.',
  icon: MegaphoneIcon,
  outcome: 'Typical engagement: 90-day growth sprint, then a monthly retainer.',
  capabilities: [
  { name: 'Strategy', detail: 'Positioning, offer testing and channel plan mapped to your buying cycle.' },
  { name: 'SEO', detail: 'Technical health, content architecture and local search visibility.' },
  { name: 'Social Media', detail: 'Content calendars, creative production and community response.' },
  { name: 'Paid Advertising', detail: 'Google, Meta and LinkedIn campaigns managed to cost per qualified lead.' },
  { name: 'Analytics', detail: 'GA4, GTM and conversion tracking with one reporting source of truth.' },
  { name: 'Content', detail: 'Articles, email sequences, landing pages and short-form video.' }]

},
{
  id: 'software-development',
  label: 'Software Development',
  headline: 'Systems shaped around how you already operate',
  description:
  'We map the real workflow first, then build only what removes friction — so adoption happens without a change-management programme.',
  icon: CodeIcon,
  outcome: 'Typical engagement: discovery, then 6–12 week build increments.',
  capabilities: [
  { name: 'Web Applications', detail: 'Internal tools, portals and dashboards with role-based access.' },
  { name: 'Mobile Apps', detail: 'Cross-platform apps for field staff, customers and partners.' },
  { name: 'CRM', detail: 'Pipelines, quotations and customer history in one place.' },
  { name: 'ERP', detail: 'Inventory, purchasing, production and finance visibility.' },
  { name: 'APIs', detail: 'Integration layers that connect the tools you already pay for.' },
  { name: 'Automation', detail: 'Approvals, notifications and document generation without manual steps.' }]

},
{
  id: 'it-solutions',
  label: 'IT Solutions',
  headline: 'Infrastructure that stays boring, on purpose',
  description:
  'Hosting, security and support handled with documented ownership, so nothing depends on one person remembering a password.',
  icon: ServerCogIcon,
  outcome: 'Typical engagement: onboarding audit, then a managed support plan.',
  capabilities: [
  { name: 'Cloud', detail: 'AWS, Azure and Google Cloud provisioning sized to actual usage.' },
  { name: 'Infrastructure', detail: 'Hosting, backups, monitoring and disaster recovery drills.' },
  { name: 'Security', detail: 'Access control, patching, SSL and vulnerability review.' },
  { name: 'Support', detail: 'Named contacts, agreed response times and maintenance windows.' },
  { name: 'Integration', detail: 'Payment gateways, accounting tools and third-party platforms.' }]

}];


export const whyChooseUs = [
{
  title: 'Strategy First',
  body: 'Every project starts with understanding the business — commercials, constraints and what success actually means.',
  icon: TargetIcon
},
{
  title: 'One Partner',
  body: 'Marketing, software, IT and technology under one roof, with one team accountable for the outcome.',
  icon: LayersIcon
},
{
  title: 'SME Focused',
  body: 'Scopes, sequencing and pricing designed around real SME budgets instead of enterprise assumptions.',
  icon: UsersIcon
},
{
  title: 'Scalable Technology',
  body: 'We build systems that survive growth — clean data models, documented code, no dead ends.',
  icon: GaugeIcon
},
{
  title: 'Data Driven',
  body: 'Analytics from day one, so decisions are supported by measurable results rather than opinion.',
  icon: LineChartIcon
},
{
  title: 'Long-Term Partnership',
  body: 'We stay after launch — maintenance, iteration and quarterly planning are part of the relationship.',
  icon: ShieldCheckIcon
}];


export const smeChallenges = [
{ title: 'Low online visibility', detail: 'Buyers search, competitors appear, you do not.' },
{ title: 'Manual business processes', detail: 'Spreadsheets, WhatsApp threads and re-typed data.' },
{ title: 'Poor customer management', detail: 'Leads and history scattered across inboxes.' },
{ title: 'Inefficient reporting', detail: 'Numbers arrive days late and rarely agree.' },
{ title: 'Outdated websites', detail: 'Slow, hard to edit and built for a different decade.' },
{ title: 'Unclear marketing performance', detail: 'Spend goes out, attribution never comes back.' },
{ title: 'Repetitive administrative work', detail: 'Skilled staff doing copy-paste work daily.' },
{ title: 'Disconnected business systems', detail: 'Every tool is an island with its own truth.' }];


export const capabilityIcons = {
  ai: BrainCircuitIcon,
  assistant: BotIcon,
  payments: CreditCardIcon,
  support: HeadphonesIcon,
  integration: PlugIcon,
  spark: SparklesIcon
};