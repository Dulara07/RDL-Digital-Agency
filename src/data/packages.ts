import type { SolutionPackage } from '../types';

export const packages: SolutionPackage[] = [
{
  id: 'launch',
  name: 'Launch',
  tagline: 'Get the foundation right, once.',
  idealFor: 'Businesses starting their digital journey or replacing an outdated website.',
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
  tagline: 'Turn presence into pipeline.',
  idealFor: 'SMEs looking to increase visibility, enquiries and customers month on month.',
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
  tagline: 'Remove the operational ceiling.',
  idealFor: 'Businesses needing technology, automation and advanced digital systems.',
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
  tagline: 'A transformation programme, sequenced.',
  idealFor: 'Organisations undertaking customised technology and digital transformation.',
  services: ['Digital strategy', 'Platform engineering', 'Cloud & IT', 'AI solutions'],
  features: [
  'A long-term plan, broken into clear phases',
  'Planning how all your systems fit together',
  'Secure, reliable hosting for everything',
  'Building AI tools and putting your data to use',
  'Clear reporting and guaranteed response times'],

  featured: false
}];