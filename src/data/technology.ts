import {
  BrainCircuitIcon,
  CloudIcon,
  DatabaseIcon,
  LayoutIcon,
  MegaphoneIcon,
  PlugIcon,
  ServerIcon } from
'lucide-react';
import type { TechnologyGroup } from '../types';

export const technologyGroups: TechnologyGroup[] = [
{
  id: 'frontend',
  label: 'Frontend',
  businessValue: 'Interfaces that load fast and feel effortless on any device.',
  icon: LayoutIcon,
  items: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS']
},
{
  id: 'backend',
  label: 'Backend',
  businessValue: 'Reliable business logic that handles growth without rewrites.',
  icon: ServerIcon,
  items: ['Node.js', 'Python', 'PHP', 'REST', 'GraphQL']
},
{
  id: 'database',
  label: 'Database',
  businessValue: 'One version of the truth for your operational data.',
  icon: DatabaseIcon,
  items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
},
{
  id: 'cloud',
  label: 'Cloud',
  businessValue: 'Infrastructure sized to real usage, with backups you can restore.',
  icon: CloudIcon,
  items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'CI/CD']
},
{
  id: 'marketing',
  label: 'Marketing',
  businessValue: 'Spend, attribution and performance visible in one place.',
  icon: MegaphoneIcon,
  items: ['Google Ads', 'Meta Ads', 'GA4', 'Google Tag Manager', 'Search Console']
},
{
  id: 'integrations',
  label: 'Integrations',
  businessValue: 'Your existing tools connected instead of replaced.',
  icon: PlugIcon,
  items: ['REST APIs', 'Payment Gateways', 'CRM', 'ERP', 'Webhooks']
},
{
  id: 'ai',
  label: 'AI',
  businessValue: 'Repetitive judgement-light work handled automatically.',
  icon: BrainCircuitIcon,
  items: ['AI Automation', 'AI Assistants', 'Document Extraction', 'Data Analysis']
}];