import {
  BarChart3Icon,
  CodeIcon,
  GlobeIcon,
  MegaphoneIcon,
  SearchIcon,
  WorkflowIcon } from
'lucide-react';
import type { AssessmentArea, AssessmentQuestion } from '../types';

export const assessmentQuestions: AssessmentQuestion[] = [
{
  id: 'business-type',
  question: 'What kind of business do you run?',
  helper: 'This shapes which channels and systems are worth prioritising.',
  options: [
  { label: 'Shop or online store', areas: ['website', 'marketing', 'analytics'] },
  { label: 'Manufacturing or trading', areas: ['website', 'software', 'seo'] },
  { label: 'Services (salon, clinic, tuition, consulting…)', areas: ['seo', 'marketing', 'automation'] },
  { label: 'Hotel, restaurant or food', areas: ['website', 'marketing', 'automation'] }]

},
{
  id: 'challenge',
  question: 'What is your biggest problem right now?',
  helper: 'Pick the one that costs you the most today.',
  options: [
  { label: 'Not enough customers or enquiries', areas: ['marketing', 'seo'] },
  { label: 'Too much paperwork and manual work', areas: ['automation', 'software'] },
  { label: 'Typing the same information into different places', areas: ['software', 'automation'] },
  { label: 'Not sure what is working and what isn’t', areas: ['analytics'] }]

},
{
  id: 'website',
  question: 'Do you have a website?',
  helper: 'Be honest about its current condition.',
  options: [
  { label: 'No website yet', areas: ['website', 'seo'] },
  { label: 'Yes, but it is old or rarely updated', areas: ['website', 'seo'] },
  { label: 'Yes, and it brings in customers', areas: ['marketing'] }]

},
{
  id: 'advertising',
  question: 'Do you advertise on Facebook, Instagram or Google?',
  helper: 'Paid channels only — organic comes later.',
  options: [
  { label: 'Not at all', areas: ['marketing'] },
  { label: 'Sometimes — I boost the odd post', areas: ['marketing', 'analytics'] },
  { label: 'Yes, every month', areas: ['analytics'] }]

},
{
  id: 'software',
  question: 'How do you keep track of sales, stock and customers?',
  helper: 'Accounting, customer records, stock tracking or similar tools.',
  options: [
  { label: 'Notebooks or Excel', areas: ['software', 'automation'] },
  { label: 'A few different apps that don’t connect', areas: ['software', 'automation', 'analytics'] },
  { label: 'One system that does it all', areas: ['analytics'] }]

},
{
  id: 'goals',
  question: 'What do you want most in the next 12 months?',
  helper: 'Where the investment should ultimately show up.',
  options: [
  { label: 'More customers and sales', areas: ['marketing', 'seo', 'website'] },
  { label: 'Lower costs and less admin', areas: ['automation', 'software'] },
  { label: 'Reach new areas or sell overseas', areas: ['website', 'seo', 'marketing'] },
  { label: 'Clearer numbers on how the business is doing', areas: ['analytics', 'software'] }]

}];


export const assessmentAreas: AssessmentArea[] = [
{
  id: 'website',
  label: 'Website',
  description: 'A clear, fast website that turns visitors into calls and messages.',
  icon: GlobeIcon
},
{
  id: 'marketing',
  label: 'Online marketing',
  description: 'A simple plan for Facebook, Instagram and Google ads, so you can see what your money brings back.',
  icon: MegaphoneIcon
},
{
  id: 'seo',
  label: 'Showing up on Google (SEO)',
  description: 'Appear on Google Search and Maps when nearby customers look for what you sell — without paying per click.',
  icon: SearchIcon
},
{
  id: 'automation',
  label: 'Less paperwork (automation)',
  description: 'Invoices, reminders and reports handled automatically, so your team gets hours back each week.',
  icon: WorkflowIcon
},
{
  id: 'software',
  label: 'Business software',
  description: 'One simple system for customers, stock and sales, built around how you already work.',
  icon: CodeIcon
},
{
  id: 'analytics',
  label: 'Clear reports',
  description: 'A simple monthly report showing visitors, enquiries and sales, in plain words.',
  icon: BarChart3Icon
}];