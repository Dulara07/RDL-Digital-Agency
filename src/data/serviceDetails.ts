import {
  ActivityIcon,
  BarChart3Icon,
  BotIcon,
  BoxIcon,
  CloudIcon,
  CreditCardIcon,
  DatabaseIcon,
  FileSearchIcon,
  GaugeIcon,
  GlobeIcon,
  HeadphonesIcon,
  LinkIcon,
  ListChecksIcon,
  LockIcon,
  MapPinIcon,
  MegaphoneIcon,
  MonitorSmartphoneIcon,
  PenToolIcon,
  PlugIcon,
  RefreshCwIcon,
  SearchIcon,
  ServerIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  SlidersHorizontalIcon,
  SmartphoneIcon,
  TargetIcon,
  TrendingUpIcon,
  TruckIcon,
  UsersIcon,
  WorkflowIcon,
  ZapIcon } from
'lucide-react';
import type { ServiceDetailContent } from '../types';

export const serviceDetails: ServiceDetailContent[] = [
{
  slug: 'digital-marketing',
  name: 'Digital Marketing',
  metaTitle: 'Digital Marketing for SMEs | Strategy, Paid & Content',
  metaDescription:
  'Full-funnel digital marketing for small and medium businesses — strategy, paid advertising, social, content and analytics managed against revenue targets.',
  heroKicker: 'Digital Growth',
  heroHeadline: 'Marketing that answers to',
  heroHighlight: 'revenue, not impressions',
  heroSub:
  'We build a channel mix around your margins and sales cycle, run it as one programme, and report on the numbers your board actually asks about.',
  problem: {
    headline: 'Why SME marketing usually underperforms',
    points: [
    'Budget spread thinly across channels with no shared objective.',
    'Tracking installed incorrectly, so performance cannot be judged.',
    'Creative produced in volume before the offer has been tested.',
    'Leads handed to sales with no scoring, context or follow-up sequence.']

  },
  solution: {
    headline: 'One programme, one set of numbers',
    body: 'We start with the commercial maths — margin, average order value, close rate — and work backwards to a channel plan that can actually hit the target. Then we instrument everything before spending.',
    pillars: [
    { title: 'Proposition first', body: 'Test the offer and message before scaling the spend behind it.' },
    { title: 'Instrumented from day one', body: 'GA4, tag management and CRM tracking in place before launch.' },
    { title: 'Managed to cost per lead', body: 'Weekly optimisation against pipeline quality, not clicks.' }]

  },
  capabilities: [
  { name: 'Digital strategy', detail: 'Positioning, offer design and channel sequencing.', icon: TargetIcon },
  { name: 'Paid advertising', detail: 'Google, Meta and LinkedIn campaigns with creative testing.', icon: MegaphoneIcon },
  { name: 'Social media', detail: 'Content calendars, production and community management.', icon: UsersIcon },
  { name: 'Content & email', detail: 'Articles, landing pages, nurture sequences and video.', icon: PenToolIcon },
  { name: 'Analytics', detail: 'GA4, GTM, dashboards and attribution modelling.', icon: BarChart3Icon },
  { name: 'Conversion optimisation', detail: 'Landing page testing and funnel improvement.', icon: TrendingUpIcon }],

  process: [
  { step: '01', title: 'Commercial discovery', body: 'Margins, sales cycle, current performance and target.' },
  { step: '02', title: 'Tracking foundation', body: 'Analytics, conversion events and CRM connection.' },
  { step: '03', title: '90-day sprint', body: 'Launch, test and find the channels that repay first.' },
  { step: '04', title: 'Scale & report', body: 'Increase what works, monthly review against targets.' }],

  technologies: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'GA4', 'Google Tag Manager', 'Search Console', 'Klaviyo'],
  benefits: [
  { title: 'Predictable enquiry flow', body: 'A pipeline you can forecast against instead of hoping for referrals.', icon: ActivityIcon },
  { title: 'Lower cost per lead', body: 'Waste removed from channels that never converted.', icon: GaugeIcon },
  { title: 'Decisions with evidence', body: 'One dashboard your team and ours both work from.', icon: BarChart3Icon }],

  caseStudySlugs: ['halden-b2b-demand-programme', 'orbit-retail-ecommerce-growth'],
  faqs: [
  { question: 'Is there a minimum commitment?', answer: 'We recommend a 90-day sprint so there is time to establish tracking and gather statistically useful data. After that, retainers run month to month.' },
  { question: 'Do you charge on top of ad spend?', answer: 'Management is a fixed monthly fee based on scope. Ad spend is paid directly by you to the platforms, so you retain full visibility.' },
  { question: 'Can you work with our existing in-house marketer?', answer: 'Often the best arrangement. We handle strategy, technical setup and paid channels while your team owns brand voice and community.' }]

},
{
  slug: 'seo',
  name: 'Search Engine Optimization',
  metaTitle: 'SEO Services for SMEs | Technical, Content & Local Search',
  metaDescription:
  'SEO for small and medium businesses — technical fixes, content architecture and local search visibility that compound into durable organic demand.',
  heroKicker: 'Digital Growth',
  heroHeadline: 'Be the obvious answer when',
  heroHighlight: 'buyers search',
  heroSub:
  'Technical health, content depth and local presence handled in the order that produces results — not a monthly content invoice with nothing behind it.',
  problem: {
    headline: 'The usual reasons rankings stall',
    points: [
    'Technical issues suppressing pages before content is even considered.',
    'Pages written around internal service names instead of buyer language.',
    'Inconsistent local business information across directories and maps.',
    'No internal linking structure, so authority never accumulates.']

  },
  solution: {
    headline: 'Fix the foundation, then compound',
    body: 'We audit crawlability, speed and structure first, rebuild the pages tied to your highest-margin services, then publish against demand we can verify.',
    pillars: [
    { title: 'Technical first', body: 'Indexing, Core Web Vitals, structured data and site architecture.' },
    { title: 'Commercially ranked', body: 'Keyword priority set by margin, not by search volume alone.' },
    { title: 'Local advantage', body: 'Maps, reviews and location pages for service-area businesses.' }]

  },
  capabilities: [
  { name: 'Technical audit', detail: 'Crawl, index, speed and structured data review.', icon: FileSearchIcon },
  { name: 'Keyword strategy', detail: 'Intent mapping tied to services and margins.', icon: SearchIcon },
  { name: 'Content architecture', detail: 'Service hubs, supporting articles and internal linking.', icon: ListChecksIcon },
  { name: 'Local SEO', detail: 'Business profile, citations, reviews and location pages.', icon: MapPinIcon },
  { name: 'Core Web Vitals', detail: 'Performance work on the pages that earn traffic.', icon: GaugeIcon },
  { name: 'Reporting', detail: 'Rankings, sessions and enquiries in one monthly view.', icon: BarChart3Icon }],

  process: [
  { step: '01', title: 'Audit', body: 'Full technical, content and off-site review.' },
  { step: '02', title: 'Prioritise', body: 'Fix order set by commercial impact and effort.' },
  { step: '03', title: 'Implement', body: 'Technical fixes, page rebuilds, local setup.' },
  { step: '04', title: 'Compound', body: 'Ongoing content and authority building.' }],

  technologies: ['Search Console', 'GA4', 'Screaming Frog', 'Ahrefs', 'Schema.org', 'PageSpeed Insights'],
  benefits: [
  { title: 'Demand that does not rent', body: 'Traffic that keeps arriving after the ad budget stops.', icon: TrendingUpIcon },
  { title: 'Better qualified visitors', body: 'Pages matched to intent attract buyers, not browsers.', icon: TargetIcon },
  { title: 'Faster site overall', body: 'Performance work benefits every visitor and every channel.', icon: ZapIcon }],

  caseStudySlugs: ['halden-b2b-demand-programme', 'meridian-labs-platform'],
  faqs: [
  { question: 'How quickly will we see results?', answer: 'Technical fixes can move visibility within weeks. Competitive rankings typically take three to six months, which is why we sequence quick technical wins first.' },
  { question: 'Do you guarantee first position?', answer: 'No credible agency can. We commit to a defined scope of work and report on visibility, traffic and enquiries so progress is measurable.' },
  { question: 'Who writes the content?', answer: 'Our writers, briefed from interviews with your technical or sales staff so the detail is accurate rather than generic.' }]

},
{
  slug: 'web-development',
  name: 'Web Development',
  metaTitle: 'Website Development for SMEs | Fast, Accessible, Conversion-Focused',
  metaDescription:
  'Website development for small and medium businesses — fast, accessible, SEO-ready sites engineered to convert and simple for your team to maintain.',
  heroKicker: 'Technology',
  heroHeadline: 'A website that works as hard as',
  heroHighlight: 'your best salesperson',
  heroSub:
  'Engineered for speed, search and conversion — and built so your team can update content without calling a developer.',
  problem: {
    headline: 'What is holding your current site back',
    points: [
    'Slow load times that lose visitors before the page appears.',
    'Content locked behind a developer, so pages go stale.',
    'No clear conversion path from landing page to enquiry.',
    'Accessibility and mobile experience treated as an afterthought.']

  },
  solution: {
    headline: 'Designed for the visitor, built for your team',
    body: 'We map the journeys that produce enquiries, design against them, and build on a stack that stays fast under real conditions. Editing is handed over with training and documentation.',
    pillars: [
    { title: 'Conversion architecture', body: 'Page structure, proof and calls to action placed deliberately.' },
    { title: 'Performance budget', body: 'Every page held to a measured load-time target.' },
    { title: 'Owned by you', body: 'Clear editing workflow, documentation and no lock-in.' }]

  },
  capabilities: [
  { name: 'UX & UI design', detail: 'Journeys, wireframes and a reusable design system.', icon: MonitorSmartphoneIcon },
  { name: 'Frontend engineering', detail: 'React builds with accessibility and SEO built in.', icon: GlobeIcon },
  { name: 'CMS integration', detail: 'Editable content without breaking the design.', icon: SlidersHorizontalIcon },
  { name: 'Performance', detail: 'Core Web Vitals, image strategy and caching.', icon: ZapIcon },
  { name: 'Analytics setup', detail: 'Events, goals and dashboards from launch day.', icon: BarChart3Icon },
  { name: 'Maintenance', detail: 'Hosting, updates, monitoring and support plans.', icon: RefreshCwIcon }],

  process: [
  { step: '01', title: 'Discovery', body: 'Audience, objectives, content inventory.' },
  { step: '02', title: 'Design', body: 'Journeys, design system, page templates.' },
  { step: '03', title: 'Build', body: 'Development, content load, QA and accessibility.' },
  { step: '04', title: 'Launch & support', body: 'Deploy, train, monitor and iterate.' }],

  technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'AWS', 'Vercel'],
  benefits: [
  { title: 'More enquiries per visitor', body: 'The same traffic converting at a higher rate.', icon: TrendingUpIcon },
  { title: 'Credibility on first impression', body: 'A site that matches the quality of your work.', icon: ShieldCheckIcon },
  { title: 'Lower running cost', body: 'Maintainable code and hosting sized to actual traffic.', icon: GaugeIcon }],

  caseStudySlugs: ['meridian-labs-platform', 'casa-verde-brand-transformation'],
  faqs: [
  { question: 'Can we edit the site ourselves?', answer: 'Yes. Content is managed through a CMS with guardrails, and we train your team during handover.' },
  { question: 'Do you handle hosting?', answer: 'We can host and manage the site, or deploy into your own cloud account and hand over the infrastructure documentation.' },
  { question: 'What about the content?', answer: 'We can migrate and restructure existing content, or write it with you when the positioning needs rework.' }]

},
{
  slug: 'ecommerce',
  name: 'E-commerce Development',
  metaTitle: 'E-commerce Development | Storefronts Built to Convert',
  metaDescription:
  'E-commerce development for SMEs — storefronts, payments, inventory sync and fulfilment flows built to lift conversion, order value and repeat purchase.',
  heroKicker: 'Technology',
  heroHeadline: 'Storefronts built for',
  heroHighlight: 'repeat purchase',
  heroSub:
  'From catalogue structure to checkout and post-purchase, we build the commercial machinery behind an online store — not just the shop window.',
  problem: {
    headline: 'Where online stores lose money',
    points: [
    'Checkout friction abandoning carts at the final step.',
    'Stock counts maintained by hand across channels.',
    'No repeat-purchase mechanics, so acquisition cost never amortises.',
    'Product data too thin to rank or to answer buyer questions.']

  },
  solution: {
    headline: 'Catalogue, checkout, retention',
    body: 'We fix the three levers that decide store economics: how findable products are, how easily they can be bought, and whether customers come back.',
    pillars: [
    { title: 'Clean product data', body: 'Structured attributes that power search, filters and feeds.' },
    { title: 'Three-step checkout', body: 'Fewer fields, saved payment methods, clear delivery expectations.' },
    { title: 'Retention built in', body: 'Re-order flows, lifecycle email and loyalty mechanics.' }]

  },
  capabilities: [
  { name: 'Storefront build', detail: 'Headless or platform-based, tuned for speed.', icon: ShoppingBagIcon },
  { name: 'Payments', detail: 'Local and international gateways with fraud controls.', icon: CreditCardIcon },
  { name: 'Inventory sync', detail: 'POS, ERP and marketplace stock alignment.', icon: BoxIcon },
  { name: 'Fulfilment', detail: 'Courier integration, tracking and returns flows.', icon: TruckIcon },
  { name: 'Merchandising', detail: 'Campaign pages and collections your team controls.', icon: SlidersHorizontalIcon },
  { name: 'Commerce analytics', detail: 'Cohorts, AOV, repeat rate and channel ROAS.', icon: BarChart3Icon }],

  process: [
  { step: '01', title: 'Commercial model', body: 'Margins, catalogue, logistics and channels.' },
  { step: '02', title: 'Experience design', body: 'Discovery, product page and checkout flows.' },
  { step: '03', title: 'Build & integrate', body: 'Storefront, payments, stock and shipping.' },
  { step: '04', title: 'Grow', body: 'Optimisation, retention and paid scaling.' }],

  technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'PayHere', 'Shopify', 'GA4'],
  benefits: [
  { title: 'Higher checkout completion', body: 'Fewer abandoned carts from the same traffic.', icon: TrendingUpIcon },
  { title: 'Accurate stock, everywhere', body: 'One inventory truth across all sales channels.', icon: BoxIcon },
  { title: 'Customers who return', body: 'Lifecycle mechanics that reduce acquisition dependence.', icon: RefreshCwIcon }],

  caseStudySlugs: ['orbit-retail-ecommerce-growth', 'vertex-foods-business-automation'],
  faqs: [
  { question: 'Shopify or custom?', answer: 'Whichever fits the catalogue and integrations. We recommend platform solutions where they fit and custom builds when inventory or pricing logic is unusual.' },
  { question: 'Can you integrate our POS?', answer: 'Yes — if the POS exposes an API or export, we can sync stock, pricing and orders both ways.' },
  { question: 'Do you run the ads too?', answer: 'Yes. The same team handles performance marketing, which keeps tracking and product feeds correct.' }]

},
{
  slug: 'software-development',
  name: 'Custom Software Development',
  metaTitle: 'Custom Software Development for SMEs | Web Apps, CRM, ERP',
  metaDescription:
  'Custom software development for small and medium businesses — web applications, CRM, ERP, POS and automation built around how your business actually works.',
  heroKicker: 'Technology',
  heroHeadline: 'Software built around the way',
  heroHighlight: 'your business works',
  heroSub:
  'We design and develop custom software that simplifies operations, connects teams, automates repetitive processes and gives you real visibility over performance.',
  problem: {
    headline: 'The cost of making do',
    points: [
    'Processes held together by spreadsheets and message threads.',
    'Off-the-shelf software forcing changes to a workflow that already worked.',
    'Knowledge concentrated in one or two people who cannot take leave.',
    'Reports assembled manually, days after the decision was needed.']

  },
  solution: {
    headline: 'Map the process, then build only what removes friction',
    body: 'We shadow the real workflow before designing anything. The result is software people adopt immediately, because it matches how the work is genuinely done.',
    pillars: [
    { title: 'Process mapped first', body: 'Documented current state before a line of code.' },
    { title: 'Built in increments', body: 'Usable releases every few weeks, not one big reveal.' },
    { title: 'Owned and documented', body: 'Your code, your data, full technical handover.' }]

  },
  capabilities: [
  { name: 'Web applications', detail: 'Portals, internal tools and dashboards with role access.', icon: MonitorSmartphoneIcon },
  { name: 'Mobile applications', detail: 'Cross-platform apps for field and customer use.', icon: SmartphoneIcon },
  { name: 'CRM systems', detail: 'Pipeline, quotations and customer history in one place.', icon: UsersIcon },
  { name: 'ERP & POS', detail: 'Inventory, purchasing, production and finance modules.', icon: DatabaseIcon },
  { name: 'Automation', detail: 'Approvals, notifications and document generation.', icon: WorkflowIcon },
  { name: 'AI assistants', detail: 'Document extraction, triage and internal knowledge tools.', icon: BotIcon }],

  process: [
  { step: '01', title: 'Process discovery', body: 'Shadow the team, document the real workflow.' },
  { step: '02', title: 'Architecture', body: 'Data model, integrations, access and hosting plan.' },
  { step: '03', title: 'Incremental build', body: 'Two-week releases with your team reviewing each.' },
  { step: '04', title: 'Adoption & support', body: 'Training, documentation, ongoing improvement.' }],

  technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Docker', 'AWS'],
  benefits: [
  { title: 'Hours back every week', body: 'Manual steps removed from daily operations.', icon: ZapIcon },
  { title: 'Fewer costly errors', body: 'Validation and single-entry data reduce rework.', icon: ShieldCheckIcon },
  { title: 'Visibility when it matters', body: 'Live operational reporting instead of month-end guesswork.', icon: BarChart3Icon }],

  caseStudySlugs: ['vertex-foods-business-automation', 'northport-trade-erp'],
  faqs: [
  { question: 'Do we own the code?', answer: 'Yes. You own the source code, data and infrastructure. We hand over repositories and documentation at every milestone.' },
  { question: 'How do you price custom software?', answer: 'A fixed-price discovery phase, then fixed-price increments per release so budget stays predictable.' },
  { question: 'Can you take over an existing system?', answer: 'Often. We start with a code and infrastructure audit, then give an honest recommendation on maintaining versus rebuilding.' }]

},
{
  slug: 'it-solutions',
  name: 'Cloud & IT Solutions',
  metaTitle: 'Cloud & IT Solutions for SMEs | Infrastructure, Security, Support',
  metaDescription:
  'Cloud and IT solutions for SMEs — infrastructure, security, integrations, monitoring and managed support with clear response commitments.',
  heroKicker: 'Technology',
  heroHeadline: 'Infrastructure that stays',
  heroHighlight: 'boring, on purpose',
  heroSub:
  'Hosting, security, integrations and support with documented ownership — so nothing critical depends on one person remembering a password.',
  problem: {
    headline: 'Common SME IT risks',
    points: [
    'Backups that have never been tested with a restore.',
    'Admin access tied to a former employee’s personal account.',
    'Cloud bills growing with no attribution to workloads.',
    'No documented recovery plan if the main system goes down.']

  },
  solution: {
    headline: 'Audit, harden, then support',
    body: 'We start with an infrastructure and access audit, fix what puts the business at risk, and then take on managed support with agreed response times.',
    pillars: [
    { title: 'Documented ownership', body: 'Every system, account and renewal recorded and assigned.' },
    { title: 'Tested recovery', body: 'Backups verified with real restore drills, not assumptions.' },
    { title: 'Right-sized cost', body: 'Infrastructure matched to actual usage patterns.' }]

  },
  capabilities: [
  { name: 'Cloud provisioning', detail: 'AWS, Azure and Google Cloud environments.', icon: CloudIcon },
  { name: 'Infrastructure', detail: 'Hosting, monitoring, backups and recovery drills.', icon: ServerIcon },
  { name: 'Security', detail: 'Access control, patching, SSL and vulnerability review.', icon: LockIcon },
  { name: 'Integrations', detail: 'Accounting, payments and third-party platform links.', icon: PlugIcon },
  { name: 'Managed support', detail: 'Named contacts and agreed response windows.', icon: HeadphonesIcon },
  { name: 'IT consulting', detail: 'Roadmaps, vendor review and budget planning.', icon: LinkIcon }],

  process: [
  { step: '01', title: 'Audit', body: 'Systems, access, backups, licences and risks.' },
  { step: '02', title: 'Remediate', body: 'Fix critical exposure and document everything.' },
  { step: '03', title: 'Optimise', body: 'Right-size infrastructure and automate monitoring.' },
  { step: '04', title: 'Support', body: 'Managed plan with reporting and quarterly review.' }],

  technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Cloudflare', 'CI/CD', 'Monitoring & Alerting'],
  benefits: [
  { title: 'Less unplanned downtime', body: 'Monitoring and maintenance catch issues before customers do.', icon: ActivityIcon },
  { title: 'Reduced business risk', body: 'Access, backups and recovery documented and tested.', icon: ShieldCheckIcon },
  { title: 'Predictable IT spend', body: 'One plan instead of surprise emergency invoices.', icon: GaugeIcon }],

  caseStudySlugs: ['northport-trade-erp', 'meridian-labs-platform'],
  faqs: [
  { question: 'Do you provide on-site support?', answer: 'Most support is remote with scheduled on-site visits where hardware or networking requires it.' },
  { question: 'What response times do you offer?', answer: 'Support plans define severity levels with response commitments, typically one hour for critical incidents during business hours.' },
  { question: 'Can you work alongside our IT person?', answer: 'Yes. We often provide second-line depth and documentation support for an internal generalist.' }]

}];


export const getServiceDetail = (slug: string) =>
serviceDetails.find((detail) => detail.slug === slug);