import type { Faq } from '../types';
import { formatRupees, servicePrices } from './pricing';

const from = (slug: string) => formatRupees(servicePrices[slug].from);

export const generalFaqs: Faq[] = [
{
  question: 'I’m not technical. Is that a problem?',
  answer:
  'Not at all — most of our clients aren’t. You tell us about your business in your own words, and we explain every suggestion in plain language. You will never be asked to make a decision you don’t understand.'
},
{
  question: 'What exactly do you do?',
  answer:
  'Two things. First, we help customers find and choose you: your website, showing up on Google, Facebook and Instagram, advertising and your logo and branding. Second, we build tools that make your business easier to run: online shops, systems for customers and stock, and automating repetitive paperwork. We also keep your website, email and computers running.'
},
{
  question: 'How much does it cost?',
  answer:
  `Every service shows a starting price. For example, a business website starts from ${from('web-development')}, showing up on Google (SEO) from ${from('seo')} a month and an online shop from ${from('ecommerce')}. After a free conversation we send a fixed written quote, so you know the full price before any work begins — no hidden costs. Advertising budgets you pay to Google or Facebook are always separate and stay under your control.`
},
{
  question: 'Do you work with small businesses?',
  answer:
  'Yes — small and medium businesses are who we work with most. You can start with one small piece of work, see it pay back, and only then decide whether to do more.'
},
{
  question: 'How long does a website take?',
  answer:
  'A normal business website usually takes 4–6 weeks. An online shop takes 6–10 weeks, depending on how many products you have. We confirm the timeline once we understand what you need.'
},
{
  question: 'Will I be able to update the website myself?',
  answer:
  'Yes. We show you how to change text, photos and prices yourself. If you would rather not, a monthly care plan covers updates, backups and security for you.'
},
{
  question: 'Do I own my website and accounts?',
  answer:
  'Yes. Your website, domain name, Google and Facebook accounts are set up in your business’s name, and we hand over every login. You are never locked in to us.'
},
{
  question: 'Can you help with Google and Facebook advertising every month?',
  answer:
  'Yes. We usually start with a 3-month plan to set things up and learn what works for your business, then continue month by month. Every month you get a short report showing what you spent and the enquiries it brought in.'
},
{
  question: 'Can you connect the software we already use?',
  answer:
  'Usually, yes. We can link your accounting software, payment providers, billing (POS) system and delivery services so information moves between them automatically — no more typing the same details twice.'
},
{
  question: 'How do we start?',
  answer:
  'Send us a message through the form or on WhatsApp. We have a free conversation about your business, then send a simple written plan with a price. Nothing is charged until you agree to it.'
}];
