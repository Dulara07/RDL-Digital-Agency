import type { SolutionPackage } from '../types';

export const packages: SolutionPackage[] = [
{
  id: 'launch',
  name: 'Launch',
  tagline: 'Get the foundation right, once.',
  idealFor: 'Businesses starting their digital journey or replacing an outdated website.',
  services: ['Brand basics', 'Website (up to 8 pages)', 'Local SEO setup', 'Analytics & tracking'],
  features: [
  'Discovery workshop and sitemap',
  'Conversion-focused website build',
  'Google Business Profile optimisation',
  'GA4 and conversion tracking',
  '30 days post-launch support'],

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
  services: ['Custom software', 'Business automation', 'CRM / ERP', 'Integrations'],
  features: [
  'Process mapping and systems audit',
  'Custom application development',
  'Workflow and document automation',
  'Third-party and payment integrations',
  'Dedicated technical account lead'],

  featured: false
},
{
  id: 'enterprise',
  name: 'Enterprise',
  tagline: 'A transformation programme, sequenced.',
  idealFor: 'Organisations undertaking customised technology and digital transformation.',
  services: ['Digital strategy', 'Platform engineering', 'Cloud & IT', 'AI solutions'],
  features: [
  'Multi-quarter transformation roadmap',
  'Platform architecture and governance',
  'Cloud infrastructure and security',
  'AI and data capability build-out',
  'Executive reporting and SLAs'],

  featured: false
}];