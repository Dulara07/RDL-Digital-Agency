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
  label: 'Get more customers',
  kicker: 'Marketing, advertising & branding',
  description:
  'Help the right people find your business online, trust it and get in touch — with simple reports that show what each rupee brought back.'
},
{
  id: 'technology',
  label: 'Run your business more easily',
  kicker: 'Websites, software & IT',
  description:
  'Websites, online shops and simple business tools that cut out paperwork and show you what is happening in your business.'
}];


export const services: Service[] = [
{
  slug: 'digital-marketing',
  name: 'Digital Marketing',
  plainName: 'Bring in more customers online',
  group: 'digital-growth',
  summary: 'We plan and run your Google, Facebook and website marketing as one plan, and judge it by enquiries and sales — not likes.',
  icon: MegaphoneIcon,
  hasDetailPage: true
},
{
  slug: 'seo',
  name: 'Search Engine Optimization',
  plainName: 'Show up when people search on Google',
  group: 'digital-growth',
  summary: 'When someone nearby searches for what you sell, your business appears near the top — without paying for every click.',
  icon: SearchIcon,
  hasDetailPage: true
},
{
  slug: 'social-media-marketing',
  name: 'Social Media Marketing',
  plainName: 'Keep your Facebook and Instagram active',
  group: 'digital-growth',
  summary: 'Regular posts and quick replies to comments and messages, so your pages look alive and customers trust you.',
  icon: UsersIcon,
  hasDetailPage: false
},
{
  slug: 'paid-advertising',
  name: 'Google & Meta Advertising',
  plainName: 'Run ads that bring in customers',
  group: 'digital-growth',
  summary: 'Ads on Google, Facebook and Instagram, watched closely so your money only goes to the ads that bring enquiries.',
  icon: TargetIcon,
  hasDetailPage: false
},
{
  slug: 'content-marketing',
  name: 'Content & Video Marketing',
  plainName: 'Posts, videos and emails people enjoy',
  group: 'digital-growth',
  summary: 'Helpful articles, short videos and emails that keep your business in customers’ minds.',
  icon: PenToolIcon,
  hasDetailPage: false
},
{
  slug: 'branding',
  name: 'Branding & Creative',
  plainName: 'Look professional and trustworthy',
  group: 'digital-growth',
  summary: 'A logo, colours and designs that make your business look established — on signboards, social media and your website.',
  icon: PaletteIcon,
  hasDetailPage: false
},
{
  slug: 'analytics',
  name: 'Analytics & Reporting',
  plainName: 'Know what is working',
  group: 'digital-growth',
  summary: 'A simple monthly report in plain words: how many people found you, how many got in touch, and what it cost.',
  icon: BarChart3Icon,
  hasDetailPage: false
},
{
  slug: 'web-development',
  name: 'Web Development',
  plainName: 'Get a website that brings enquiries',
  group: 'technology',
  summary: 'A fast website that works well on phones, shows up on Google, and that you can update yourself.',
  icon: GlobeIcon,
  hasDetailPage: true
},
{
  slug: 'ecommerce',
  name: 'E-commerce Development',
  plainName: 'Sell your products online',
  group: 'technology',
  summary: 'An online shop where customers can browse, pay by card or bank transfer and arrange delivery — with every order in one place.',
  icon: ShoppingBagIcon,
  hasDetailPage: true
},
{
  slug: 'software-development',
  name: 'Custom Software',
  plainName: 'Software made for how you work',
  group: 'technology',
  summary: 'When ready-made software doesn’t fit, we build simple tools around the way your business already runs.',
  icon: CodeIcon,
  hasDetailPage: true
},
{
  slug: 'mobile-apps',
  name: 'Mobile Applications',
  plainName: 'Your own mobile app',
  group: 'technology',
  summary: 'An app for your customers or staff that works on Android and iPhone, connected to the rest of your business.',
  icon: SmartphoneIcon,
  hasDetailPage: false
},
{
  slug: 'crm-erp',
  name: 'Business Management Systems',
  plainName: 'Customers, stock and accounts in one place',
  group: 'technology',
  summary: 'Replace scattered spreadsheets and notebooks with one system for customers, stock and money (often called CRM, ERP or POS).',
  icon: DatabaseIcon,
  hasDetailPage: false
},
{
  slug: 'business-automation',
  name: 'Business Automation',
  plainName: 'Cut down on repetitive paperwork',
  group: 'technology',
  summary: 'Invoices, reminders, reports and data entry done automatically, so your staff can spend their time on customers.',
  icon: WorkflowIcon,
  hasDetailPage: false
},
{
  slug: 'it-solutions',
  name: 'Cloud & IT Solutions',
  plainName: 'Keep your computers, email and website running',
  group: 'technology',
  summary: 'Reliable hosting, business email, backups, security and a support team you can call when something breaks.',
  icon: CloudIcon,
  hasDetailPage: true
}];


export const servicesByGroup = (group: Service['group']) =>
services.filter((service) => service.group === group);

/**
 * Contact-form "Service required" option to preselect for services that have
 * no detail page, so "Discuss this" lands on a form that already knows why.
 */
export const enquiryOptionFor: Record<string, string> = {
  'social-media-marketing': 'Digital Marketing',
  'paid-advertising': 'Digital Marketing',
  'content-marketing': 'Digital Marketing',
  branding: 'Branding',
  analytics: 'Digital Marketing',
  'mobile-apps': 'Mobile App',
  'crm-erp': 'Software Development',
  'business-automation': 'Business Automation'
};

export const explorerTracks: ExplorerTrack[] = [
{
  id: 'digital-marketing',
  label: 'Digital Marketing',
  headline: 'More enquiries and sales — measured in rupees, not likes',
  description:
  'We pick the right mix of Google, Facebook, Instagram and your website for your business, and run it all as one plan.',
  icon: MegaphoneIcon,
  outcome: 'Usually: a 3-month starter plan, then a simple monthly plan.',
  capabilities: [
  { name: 'Plan', detail: 'What to say, who to say it to, and where your customers actually spend time online.' },
  { name: 'SEO', detail: 'Fixing technical issues, organising your content, and helping local customers find you on Google.' },
  { name: 'Social Media', detail: 'Planned posts, created content and replying to your community.' },
  { name: 'Paid Advertising', detail: 'Google, Facebook and LinkedIn ads managed to get the best return on every rupee spent.' },
  { name: 'Analytics', detail: 'One simple report that shows what is working, with no data expertise needed to read it.' },
  { name: 'Content', detail: 'Articles, email sequences, landing pages and short-form video.' }]

},
{
  id: 'software-development',
  label: 'Software Development',
  headline: 'Simple tools built around how you already work',
  description:
  'We look at how your team works today, then build only what saves time — so everyone finds it easy to start using.',
  icon: CodeIcon,
  outcome: 'Usually: a short planning stage, then delivered in stages every few weeks.',
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
  headline: 'Computers, email and websites that just keep working',
  description:
  'We look after hosting, backups, security and support, and write everything down — so nothing depends on one person remembering a password.',
  icon: ServerCogIcon,
  outcome: 'Usually: a check of your current setup, then a monthly support plan.',
  capabilities: [
  { name: 'Cloud Hosting', detail: 'Reliable hosting from major providers, sized to what your business actually needs.' },
  { name: 'Infrastructure', detail: 'Hosting, backups and regular checks that everything still works if something fails.' },
  { name: 'Security', detail: 'Keeping your systems locked down, up to date and regularly checked for weak points.' },
  { name: 'Support', detail: 'Named contacts, agreed response times and maintenance windows.' },
  { name: 'Integration', detail: 'Payment gateways, accounting tools and third-party platforms.' }]

}];


export const whyChooseUs = [
{
  title: 'We listen first',
  body: 'Before suggesting anything, we learn how your business works, who your customers are and what you need most.',
  icon: TargetIcon
},
{
  title: 'One team for everything',
  body: 'Website, marketing, software and IT from one place — no chasing five different suppliers.',
  icon: LayersIcon
},
{
  title: 'Made for small businesses',
  body: 'Start small with whatever pays back first, at a price that fits a small business budget.',
  icon: UsersIcon
},
{
  title: 'Grows with you',
  body: 'What we build today can be extended later, so you never have to start again from scratch.',
  icon: GaugeIcon
},
{
  title: 'Plain-language reports',
  body: 'You see real numbers — visitors, enquiries, sales — explained simply, without jargon.',
  icon: LineChartIcon
},
{
  title: 'We stay after launch',
  body: 'We teach your team how to use what we build, and we are a phone call or WhatsApp message away afterwards.',
  icon: ShieldCheckIcon
}];


export const smeChallenges = [
{ title: 'Customers can’t find us on Google', detail: 'People search for what you sell, and your competitors show up instead.' },
{ title: 'Our website is old — or we don’t have one', detail: 'It looks dated, is slow on phones, or nobody knows how to update it.' },
{ title: 'We pay for ads but don’t know if they work', detail: 'Money goes out every month, but you can’t tell which ads brought customers.' },
{ title: 'Enquiries get lost', detail: 'Messages arrive on WhatsApp, phone, email and Facebook, and some never get a reply.' },
{ title: 'Too much paperwork', detail: 'Staff spend hours typing invoices, copying data and making the same reports by hand.' },
{ title: 'We don’t know our real numbers', detail: 'Sales, stock and cash figures take days to put together, and they rarely match.' }];


export const capabilityIcons = {
  ai: BrainCircuitIcon,
  assistant: BotIcon,
  payments: CreditCardIcon,
  support: HeadphonesIcon,
  integration: PlugIcon,
  spark: SparklesIcon
};