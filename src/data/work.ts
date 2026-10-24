import type { CaseStudy, WorkCategory } from '../types';

export const workFilters: {id: 'all' | WorkCategory;label: string;}[] = [
{ id: 'all', label: 'All' },
{ id: 'websites', label: 'Websites' },
{ id: 'marketing', label: 'Marketing' },
{ id: 'software', label: 'Software' },
{ id: 'branding', label: 'Branding' }];


export const caseStudies: CaseStudy[] = [
{
  slug: 'sakura-products-assessment-platform',
  client: 'Sakura Products & Export (Pvt) Ltd',
  industry: 'Food & Beverage',
  projectType: 'Internal Assessment Platform',
  category: 'software',
  year: '2024',
  image: '/work/sakura-assessment.jpg',
  summary:
  'A private, staff-only platform for Sakura Products & Export to run internal assessments and track performance across the business.',
  challenge:
  'Sakura Products & Export had no structured way to measure staff and process performance — reviews happened informally, with no central record of how different parts of the business were performing over time.',
  strategy:
  'Rather than relying on spreadsheets or paper-based reviews, we built a secure, internal-only web platform so assessments could be run consistently and every result kept in one place, ready to review at any time.',
  solution:
  'A password-protected staff portal where assessments are created and completed, with results feeding into a management dashboard that tracks performance across the business — built for internal use only, with encrypted logins to keep company data private.',
  services: ['Custom Software Development', 'Secure Login System', 'Dashboard & Reporting'],
  technologies: ['Web Application', 'Secure Authentication', 'Cloud Hosting'],
  results: [
  { label: 'Access', value: 'Staff-only login' },
  { label: 'Assessments', value: 'Tracked centrally' },
  { label: 'Reporting', value: 'One dashboard' }],

  gallery: [
  { src: '/work/sakura-assessment.jpg', caption: 'Secure staff login screen' }],

  liveUrl: 'https://assessment.sakuraproducts.com/login'
},
{
  slug: 'smsverified-website-promotion-campaign',
  client: 'SMSVerified',
  industry: 'SaaS & Online Services',
  projectType: 'Website Promotion',
  category: 'marketing',
  year: '2025',
  image: '/work/smsverified.jpg',
  summary:
  'A focused website promotion push for an SMS and voice verification platform, aimed at driving new user registrations.',
  challenge:
  'SMSVerified had a working platform for temporary SMS and voice verification numbers but needed a dedicated push to bring in new registered users beyond its existing traffic.',
  strategy:
  'We treated the registration page as the thing being sold — not the platform in the abstract — and ran a focused promotion effort aimed squarely at people already close to signing up.',
  solution:
  'A short, focused user-registration drive: identifying where relevant traffic already gathers, promoting the platform directly to it, and tracking sign-ups back to the effort over a four-week engagement.',
  services: ['Website Promotion', 'User Acquisition', 'Conversion-Focused Outreach'],
  technologies: ['Digital Promotion', 'Analytics'],
  results: [
  { label: 'Client rating', value: '5.0/5' },
  { label: 'Engagement', value: '4 weeks' },
  { label: 'Client feedback', value: 'Exceptional' }],

  gallery: [
  { src: '/work/smsverified.jpg', caption: 'SMSVerified platform homepage' },
  { src: '/work/smsverified-review.jpg', caption: 'Client review from the engagement' }],

  liveUrl: 'https://smsverified.com'
},
{
  slug: 'us-media-video-editing-agency-website',
  client: 'US Media',
  industry: 'Creative Services',
  projectType: 'Website & Branding',
  category: 'websites',
  year: '2026',
  image: '/work/usmedia.jpg',
  summary:
  'A high-energy site for a freelance video editing studio, built to convert cold visitors into quote requests across editing, thumbnails, post design and videography.',
  challenge:
  'A video editing studio with a strong freelance track record needed a home base of its own — somewhere to show the work, state pricing plainly, and take quote requests without funnelling everyone through a marketplace profile.',
  strategy:
  'We leaned into the brand the studio already had — bold type, gradient accents, kinetic motion — and organised the site around the questions a buyer actually asks: what do you make, what does it cost, and can I trust you.',
  solution:
  'A dark, motion-led homepage with animated stat counters, a four-service breakdown with starting prices, a portfolio section, process outline and reviews, all driving to a quote-request flow.',
  services: ['Website Design', 'Front-End Development', 'Brand Presentation', 'Animation'],
  technologies: ['HTML', 'CSS', 'JavaScript'],
  results: [
  { label: 'Client rating', value: '4.9/5' },
  { label: 'Job success', value: '100%' },
  { label: 'Projects done', value: '121' }],

  gallery: [
  { src: '/work/usmedia.jpg', caption: 'Homepage hero and studio stats' },
  { src: '/work/usmedia-services.jpg', caption: 'Service breakdown and starting prices' }],

  liveUrl: 'https://ushitha27031.github.io/US-MEDIA/'
},
{
  slug: 'eict-online-ict-tutoring-platform',
  client: 'EICT',
  industry: 'Education',
  projectType: 'Website',
  category: 'websites',
  year: '2026',
  image: '/work/eict.jpg',
  summary:
  'A results-driven site for an online A/L and O/L ICT class, built around exam countdowns, real student grade records and a clear path to joining a batch.',
  challenge:
  'An established ICT tutor with a genuine track record — hundreds of students taught since 2021 — was relying on word of mouth, with no single place for prospective students to see results, understand the teaching method or join a batch.',
  strategy:
  'We built the site around proof and urgency: live countdowns to each upcoming exam, a transparent grade-distribution record for past students, and a short intro video explaining the teaching method before anyone commits.',
  solution:
  'A dark, focused one-pager with exam countdown timers, a filterable student results table by year and grade, and a straightforward path from "watch the intro" to "join a batch," in both Sinhala and English medium.',
  services: ['Website Design', 'Front-End Development', 'Data Presentation'],
  technologies: ['HTML', 'CSS', 'JavaScript'],
  results: [
  { label: 'Students taught', value: '600+' },
  { label: 'Pass rate', value: '100%' },
  { label: 'A grades', value: '81%' }],

  gallery: [
  { src: '/work/eict.jpg', caption: 'Homepage hero with exam countdowns' },
  { src: '/work/eict-results.jpg', caption: 'Past student grade records' }],

  liveUrl: 'https://eictonline.com/EICT.html'
},
{
  slug: 'rainboweyes-flower-boutique-website',
  client: 'RainbowEyes',
  industry: 'Retail & Handmade Goods',
  projectType: 'Website & E-commerce',
  category: 'websites',
  year: '2026',
  image: '/work/rainboweyes.jpg',
  summary:
  'A playful storefront for a handmade pipe-cleaner and silk flower studio, with a live bouquet configurator that hands off straight into WhatsApp ordering.',
  challenge:
  'A handmade flower studio selling entirely through direct messages needed a proper home online — somewhere customers could browse the range and describe exactly what they wanted, without a long back-and-forth chat to get there.',
  strategy:
  'Rather than force a made-to-order craft business into a generic checkout, we designed around how customers already decide: browse styles, configure a bouquet live, then send the finished spec straight to the maker on WhatsApp.',
  solution:
  'A warm, illustrated site covering the product families, story and ordering process, built around an interactive bouquet configurator — choose a style, shape, colour and stem count and watch it render live — that packages the selection into a ready-to-send WhatsApp order.',
  services: ['Website Design', 'Front-End Development', 'Interactive Product Configurator', 'WhatsApp Ordering Integration'],
  technologies: ['HTML', 'CSS', 'JavaScript'],
  results: [
  { label: 'Order flow', value: 'WhatsApp' },
  { label: 'Configurator', value: 'Live builder' },
  { label: 'Delivery', value: 'Island-wide' }],

  gallery: [
  { src: '/work/rainboweyes.jpg', caption: 'Homepage hero and product families' },
  { src: '/work/rainboweyes-configurator.jpg', caption: 'Live bouquet configurator' }],

  liveUrl: 'https://ushitha27031.github.io/Rainbow_eyes/rainboweyes-website'
}];


export const getCaseStudy = (slug: string) => caseStudies.find((item) => item.slug === slug);
export const getCaseStudies = (slugs: string[]) =>
slugs.map((slug) => getCaseStudy(slug)).filter((item): item is CaseStudy => Boolean(item));