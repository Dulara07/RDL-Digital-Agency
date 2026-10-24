import type { SolutionPackage } from '../types';

// Prices live in data/pricing.ts (packagePrices), keyed by package id.
export const packages: SolutionPackage[] = [
{
  id: 'launch',
  name: 'Launch',
  tagline: 'Get online properly, the first time.',
  idealFor: 'Businesses with no website yet, or an old one that brings no enquiries.',
  services: ['Brand basics', 'Website (up to 8 pages)', 'Local SEO setup', 'Analytics & tracking'],
  features: [
  'A planning session to map out your site',
  'A website designed to turn visitors into customers',
  'Your Google Business listing set up properly',
  'Simple tracking so you can see what is working',
  '30 days of support after launch'],

  featured: false
},
{
  id: 'growth',
  name: 'Growth',
  tagline: 'Turn your website into a steady flow of customers.',
  idealFor: 'Businesses that want more enquiries and customers every month.',
  services: ['SEO programme', 'Paid advertising', 'Social & content', 'Monthly reporting'],
  features: [
  'Quarterly growth roadmap',
  'Managed search and social campaigns',
  'Content and creative production',
  'Lead tracking through to sale',
  'Monthly performance review call'],

  featured: true
},
{
  id: 'scale',
  name: 'Scale',
  tagline: 'Spend less time on paperwork, more on growing.',
  idealFor: 'Busy businesses held back by spreadsheets, manual work and tools that don’t connect.',
  services: ['Custom software', 'Business automation', 'Customer & stock systems', 'Connecting your tools'],
  features: [
  'A review of how your business runs today',
  'Software built around your business',
  'Automating paperwork and repetitive tasks',
  'Connecting your payment and other tools',
  'A dedicated technical contact for your account'],

  featured: false
},
{
  id: 'enterprise',
  name: 'Enterprise',
  tagline: 'A complete plan for larger businesses, done in stages.',
  idealFor: 'Larger companies changing how several departments work at once.',
  services: ['Digital strategy', 'Platform engineering', 'Cloud & IT', 'AI solutions'],
  features: [
  'A long-term plan, broken into clear phases',
  'Planning how all your systems fit together',
  'Secure, reliable hosting for everything',
  'Building AI tools and putting your data to use',
  'Clear reporting and guaranteed response times'],

  featured: false
}];