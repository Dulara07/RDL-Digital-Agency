export interface Goal {
  id: string;
  /** Phrased the way an owner would say it, not the way an agency would. */
  need: string;
  answer: string;
  /** Industry names for the work, shown small for people who know them. */
  services: string[];
  href: string;
}

export const goals: Goal[] = [
{
  id: 'found',
  need: 'I want more people to find my business',
  answer: 'We get you showing up on Google Search and Google Maps when nearby customers look for what you sell.',
  services: ['SEO', 'Google Business Profile'],
  href: '/services/seo'
},
{
  id: 'website',
  need: 'I need a new website',
  answer: 'A modern website that looks great on phones, explains what you do and gets visitors to call or message you.',
  services: ['Web design', 'Web development'],
  href: '/services/web-development'
},
{
  id: 'sell',
  need: 'I want to sell my products online',
  answer: 'An online shop with card and bank payments and delivery options, with every order arriving in one place.',
  services: ['E-commerce', 'Online payments'],
  href: '/services/ecommerce'
},
{
  id: 'advertise',
  need: 'I want to advertise on Facebook and Google',
  answer: 'Ads that reach the right people in the right areas, plus a monthly report showing which ads brought customers.',
  services: ['Digital marketing', 'Social media', 'Paid ads'],
  href: '/services/digital-marketing'
},
{
  id: 'time',
  need: 'My team wastes hours on paperwork',
  answer: 'Simple tools that handle invoices, stock, reminders and reports automatically, instead of spreadsheets and notebooks.',
  services: ['Custom software', 'Automation', 'CRM / POS'],
  href: '/services/software-development'
},
{
  id: 'it',
  need: 'My computers, email or website keep giving trouble',
  answer: 'We look after hosting, business email, backups and security, and you have a team to call when something breaks.',
  services: ['IT support', 'Hosting', 'Security'],
  href: '/services/it-solutions'
}];
