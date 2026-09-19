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
  question: 'What type of business do you operate?',
  helper: 'This shapes which channels and systems are worth prioritising.',
  options: [
  { label: 'Retail or e-commerce', areas: ['website', 'marketing', 'analytics'] },
  { label: 'Manufacturing or trading', areas: ['website', 'software', 'seo'] },
  { label: 'Services or consultancy', areas: ['seo', 'marketing', 'automation'] },
  { label: 'Hospitality or food', areas: ['website', 'marketing', 'automation'] }]

},
{
  id: 'challenge',
  question: 'What is your biggest digital challenge right now?',
  helper: 'Pick the one that costs you the most today.',
  options: [
  { label: 'Not enough enquiries', areas: ['marketing', 'seo'] },
  { label: 'Too much manual work', areas: ['automation', 'software'] },
  { label: 'Systems that do not talk to each other', areas: ['software', 'automation'] },
  { label: 'No clarity on what is working', areas: ['analytics'] }]

},
{
  id: 'website',
  question: 'Do you have a website?',
  helper: 'Be honest about its current condition.',
  options: [
  { label: 'No website yet', areas: ['website', 'seo'] },
  { label: 'Yes, but it is outdated', areas: ['website', 'seo'] },
  { label: 'Yes, and it performs well', areas: ['marketing'] }]

},
{
  id: 'advertising',
  question: 'Are you currently running digital advertising?',
  helper: 'Paid channels only — organic comes later.',
  options: [
  { label: 'Not at all', areas: ['marketing'] },
  { label: 'Occasionally, without a plan', areas: ['marketing', 'analytics'] },
  { label: 'Yes, managed monthly', areas: ['analytics'] }]

},
{
  id: 'software',
  question: 'Do you use business software today?',
  helper: 'Accounting, customer records, stock tracking or similar tools.',
  options: [
  { label: 'Mostly spreadsheets', areas: ['software', 'automation'] },
  { label: 'A few disconnected tools', areas: ['software', 'automation', 'analytics'] },
  { label: 'An integrated system already', areas: ['analytics'] }]

},
{
  id: 'goals',
  question: 'What are your growth goals for the next 12 months?',
  helper: 'Where the investment should ultimately show up.',
  options: [
  { label: 'More customers and revenue', areas: ['marketing', 'seo', 'website'] },
  { label: 'Lower operating cost', areas: ['automation', 'software'] },
  { label: 'Enter new markets', areas: ['website', 'seo', 'marketing'] },
  { label: 'Better control and reporting', areas: ['analytics', 'software'] }]

}];


export const assessmentAreas: AssessmentArea[] = [
{
  id: 'website',
  label: 'Website',
  description: 'A faster, clearer site built to convert the traffic you already get.',
  icon: GlobeIcon
},
{
  id: 'marketing',
  label: 'Marketing',
  description: 'A channel plan with tracking, so spend can be judged on returns.',
  icon: MegaphoneIcon
},
{
  id: 'seo',
  label: 'SEO',
  description: 'Free visibility on Google for the words your customers actually search.',
  icon: SearchIcon
},
{
  id: 'automation',
  label: 'Automation',
  description: 'Repetitive admin removed from your team’s week.',
  icon: WorkflowIcon
},
{
  id: 'software',
  label: 'Software',
  description: 'Systems shaped around your workflow instead of around a template.',
  icon: CodeIcon
},
{
  id: 'analytics',
  label: 'Analytics',
  description: 'Clear reports that help you make decisions with confidence.',
  icon: BarChart3Icon
}];