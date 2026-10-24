import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
{
  step: '01',
  title: 'We listen',
  body: 'A free conversation about your business, your customers and what is holding you back. No technical knowledge needed.',
  deliverables: ['A call or meeting', 'A look at what you have today', 'Agreed goals']
},
{
  step: '02',
  title: 'We plan',
  body: 'We suggest what to do first, what it will cost and how long it will take — starting with whatever pays back soonest.',
  deliverables: ['A written plan', 'A clear price', 'A timeline']
},
{
  step: '03',
  title: 'We design',
  body: 'You see how it will look and work before we build it, and we change it until it feels right to you.',
  deliverables: ['Designs to review', 'Your feedback built in', 'Your approval before building']
},
{
  step: '04',
  title: 'We build',
  body: 'We build it in small steps and show you progress every couple of weeks, so there are no surprises.',
  deliverables: ['Regular progress updates', 'Testing on phones and computers', 'Simple written guides']
},
{
  step: '05',
  title: 'We launch and teach you',
  body: 'We put it live, show your team how to use it, and hand over every login and password — it all belongs to you.',
  deliverables: ['Go-live', 'Training for your team', 'All logins handed over']
},
{
  step: '06',
  title: 'We keep improving',
  body: 'We check the results every month, explain them in plain words, and improve whatever is not working yet.',
  deliverables: ['Monthly report', 'Ongoing improvements', 'Support when you need it']
}];


export const approachStages = [
{ label: 'We listen', detail: 'A free chat about your business and goals.' },
{ label: 'We plan', detail: 'What to do first, the price and the timeline.' },
{ label: 'We build', detail: 'In small steps, with regular updates.' },
{ label: 'We launch and teach you', detail: 'Your team learns how to use it.' },
{ label: 'We keep improving', detail: 'Monthly results explained in plain words.' }];
