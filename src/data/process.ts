import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
{
  step: '01',
  title: 'Discover',
  body: 'Understand the business, goals, customers and challenges — including the constraints nobody writes in a brief.',
  deliverables: ['Stakeholder interviews', 'Current-state audit', 'Success metrics']
},
{
  step: '02',
  title: 'Strategize',
  body: 'Develop a digital and technology roadmap that sequences work by impact rather than by what is easiest to start.',
  deliverables: ['Roadmap & phasing', 'Channel / systems plan', 'Budget model']
},
{
  step: '03',
  title: 'Design',
  body: 'Create the user experience, visual identity and system architecture, validated with the people who will use it.',
  deliverables: ['UX flows', 'UI design system', 'Technical architecture']
},
{
  step: '04',
  title: 'Build',
  body: 'Develop the website, software, campaigns and integrations in increments you can review every two weeks.',
  deliverables: ['Sprint releases', 'QA & accessibility pass', 'Documentation']
},
{
  step: '05',
  title: 'Launch',
  body: 'Deploy and activate the solution, train your team, and make sure ownership is clear from day one.',
  deliverables: ['Deployment & monitoring', 'Team training', 'Handover pack']
},
{
  step: '06',
  title: 'Optimize',
  body: 'Measure performance, improve results and scale what works — reviewed against the metrics agreed in discovery.',
  deliverables: ['Performance reporting', 'Iteration backlog', 'Quarterly planning']
}];


export const approachStages = [
{ label: 'Understand', detail: 'Business model, workflow, numbers.' },
{ label: 'Strategize', detail: 'Sequence by impact and budget.' },
{ label: 'Build', detail: 'Ship in reviewable increments.' },
{ label: 'Launch', detail: 'Train, document, hand over.' },
{ label: 'Optimize', detail: 'Measure and improve monthly.' },
{ label: 'Scale', detail: 'Extend what is proven to work.' }];