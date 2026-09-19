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
  summary: 'A joined-up plan across search, social and paid ads, built around real sales goals — not just clicks.',
  icon: MegaphoneIcon,
  hasDetailPage: true
},
{
  slug: 'seo',
  name: 'Search Engine Optimization',
  group: 'digital-growth',
  summary: 'Fixing what slows your website down and adding the content people search for, so more customers find you on Google for free.',
  icon: SearchIcon,
  hasDetailPage: true
},
{
  slug: 'social-media-marketing',
  name: 'Social Media Marketing',
  group: 'digital-growth',
  summary: 'Regular posts and replies to your audience, planned around how your customers actually decide to buy.',
  icon: UsersIcon,
  hasDetailPage: false
},
{
  slug: 'paid-advertising',
  name: 'Google & Meta Advertising',
  group: 'digital-growth',
  summary: 'Google and Facebook ads tracked closely and tested, so your budget goes toward ads that actually bring in customers.',
  icon: TargetIcon,
  hasDetailPage: false
},
{
  slug: 'content-marketing',
  name: 'Content & Video Marketing',
  group: 'digital-growth',
  summary: 'Articles, emails and short videos that earn people’s attention naturally, instead of only paying for it.',
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
  summary: 'Clear, simple reports so every decision is backed by real numbers, not guesswork.',
  icon: BarChart3Icon,
  hasDetailPage: false
},
{
  slug: 'web-development',
  name: 'Web Development',
  group: 'technology',
  summary: 'Fast, easy-to-find websites that turn visitors into customers — and that your own team can update without a developer.',
  icon: GlobeIcon,
  hasDetailPage: true
},
{
  slug: 'ecommerce',
  name: 'E-commerce Development',
  group: 'technology',
  summary: 'Online stores with smooth payments and order handling, built to get customers spending more and coming back.',
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
  name: 'Business Management Systems',
  group: 'technology',
  summary: 'One system for customers, stock and finances (sometimes called CRM, ERP or POS) — instead of spreadsheets and disconnected tools.',
  icon: DatabaseIcon,
  hasDetailPage: false
},
{
  slug: 'business-automation',
  name: 'Business Automation',
  group: 'technology',
  summary: 'Automated tools and AI assistants that take repetitive paperwork and admin off your team’s plate.',
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
  { name: 'SEO', detail: 'Fixing technical issues, organising your content, and helping local customers find you on Google.' },
  { name: 'Social Media', detail: 'Planned posts, created content and replying to your community.' },
  { name: 'Paid Advertising', detail: 'Google, Facebook and LinkedIn ads managed to get the best return for every dollar spent.' },
  { name: 'Analytics', detail: 'One simple report that shows what is working, with no data expertise needed to read it.' },
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
  { name: 'Web Applications', detail: 'Internal tools and dashboards, with different access for different staff.' },
  { name: 'Mobile Apps', detail: 'Apps that work on any phone, for field staff, customers and partners.' },
  { name: 'Customer Management', detail: 'Customer details, quotes and sales history in one place instead of scattered spreadsheets.' },
  { name: 'Stock & Finance', detail: 'One clear view of stock, purchasing, production and finances.' },
  { name: 'Integrations', detail: 'Connecting the software you already use, so information flows between them automatically.' },
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
  { name: 'Cloud Hosting', detail: 'Reliable hosting from major providers, sized to what your business actually needs.' },
  { name: 'Infrastructure', detail: 'Hosting, backups and regular checks that everything still works if something fails.' },
  { name: 'Security', detail: 'Keeping your systems locked down, up to date and regularly checked for weak points.' },
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