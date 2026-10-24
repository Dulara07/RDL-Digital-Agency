/**
 * Centralised company configuration.
 * Replace these values to rebrand the entire site.
 */
export const site = {
  name: 'RDL Digital Agency',
  legalName: 'RDL Digital Agency Pvt. Ltd.',
  tagline: 'Digital Marketing & Software Development Agency for SMEs in Sri Lanka',
  positioning:
  'RDL Digital Agency is a digital marketing and software development agency serving small and medium businesses across Sri Lanka — combining SEO, web development, custom software and IT solutions under one accountable team.',
  url: 'https://rdldigitalagency.com',
  email: 'rdldigitalagency@gmail.com',
  phone: '+94 78 7808614',
  whatsapp: '+94 75 138 4800',
  web3formsAccessKey: '940cc500-4850-4668-910e-69c68c49bd26',
  hours: [
  { days: 'Every day', time: '7:00 AM – 9:00 PM' }],

  founded: '2019',
  /**
   * Real social profile URLs go here once the accounts exist. Left empty
   * rather than pointing at placeholder domains — Footer and the JSON-LD
   * `sameAs` list both skip this cleanly when it's empty.
   */
  social: [] as { label: string; href: string }[]
};

export const primaryNav = [
{ label: 'Services', href: '/services' },
{ label: 'Solutions', href: '/solutions' },
{ label: 'Industries', href: '/industries' },
{ label: 'Work', href: '/work' },
{ label: 'About', href: '/about' },
{ label: 'Insights', href: '/insights' },
{ label: 'Contact', href: '/contact' }];


export const stats = [
{ value: 50, suffix: '+', label: 'Projects delivered' },
{ value: 30, suffix: '+', label: 'Businesses supported' },
{ value: 10, suffix: '+', label: 'Digital solutions' },
{ value: 5, suffix: '+', label: 'Industries served' }];


/** Real clients shown in the trust strip; each links to its case study. */
export const clients = [
{ name: 'Sakura Products & Export', href: '/work/sakura-products-assessment-platform' },
{ name: 'SMSVerified', href: '/work/smsverified-website-promotion-campaign' },
{ name: 'US Media', href: '/work/us-media-video-editing-agency-website' },
{ name: 'EICT', href: '/work/eict-online-ict-tutoring-platform' },
{ name: 'RainbowEyes', href: '/work/rainboweyes-flower-boutique-website' }];


export const footerColumns = [
{
  title: 'Services',
  links: [
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'SEO', href: '/services/seo' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Software Development', href: '/services/software-development' },
  { label: 'E-commerce', href: '/services/ecommerce' },
  { label: 'IT Solutions', href: '/services/it-solutions' },
  { label: 'Automation', href: '/services/software-development' }]

},
{
  title: 'Solutions',
  links: [
  { label: 'SME Growth', href: '/solutions#sme-growth' },
  { label: 'Business Automation', href: '/solutions#automation' },
  { label: 'Digital Transformation', href: '/solutions#transformation' },
  { label: 'E-commerce', href: '/solutions#ecommerce' },
  { label: 'Custom Software', href: '/solutions#software' }]

},
{
  title: 'Company',
  links: [
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/work' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' }]

}];


export const serviceOptions = [
'Digital Marketing',
'Website Development',
'E-commerce',
'Software Development',
'Mobile App',
'SEO',
'Branding',
'IT Solutions',
'Business Automation',
'AI Solutions',
'Other'];


export const budgetOptions = [
'Under Rs. 100,000',
'Rs. 100,000 – 300,000',
'Rs. 300,000 – 1,000,000',
'Rs. 1,000,000+',
'Not sure yet'];