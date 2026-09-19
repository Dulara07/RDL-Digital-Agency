import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import { site } from '../data/site';

const roles = [
{
  title: 'Senior Frontend Engineer',
  type: 'Full-time',
  location: 'Colombo / Hybrid',
  body: 'React and TypeScript work across client products, design systems and internal platforms.'
},
{
  title: 'Performance Marketing Manager',
  type: 'Full-time',
  location: 'Colombo / Hybrid',
  body: 'Own paid search and social programmes for SME clients, from strategy to reporting.'
},
{
  title: 'Product Designer',
  type: 'Full-time',
  location: 'Remote (GMT+4 to GMT+8)',
  body: 'Design business software and marketing experiences that people adopt without training.'
},
{
  title: 'Backend Engineer (Node / Python)',
  type: 'Full-time',
  location: 'Colombo / Hybrid',
  body: 'Build integrations, automation services and the data layer behind ERP and CRM work.'
}];


const values = [
{ title: 'Senior people on the work', body: 'No pyramid staffing. You own outcomes, not slide decks.' },
{ title: 'Written thinking', body: 'Decisions get documented so good reasoning outlives the project.' },
{ title: 'Real constraints', body: 'SME budgets force sharper design. That is the craft, not a limitation.' }];


export function Careers() {
  return (
    <>
      <Seo
        title={`Careers | ${site.name}`}
        description={`Open roles at ${site.name} — engineering, design and performance marketing positions working with SMEs across five industries.`} />
      
      <PageHero
        kicker="Careers"
        title={
        <>
            Build things that visibly change a{' '}
            <span className="font-display font-normal italic text-accent-soft">business</span>.
          </>
        }
        intro="Our clients are owner-operated companies where your work is noticed within weeks. If you want short feedback loops and real accountability, this is a good place to be."
        actions={
        <Button href={`mailto:${site.email}`} size="lg" withArrow>
            Send an Application
          </Button>
        } />
      

      <section aria-labelledby="values-heading">
        <div className="shell py-20 md:py-24">
          <SectionHeading
            eyebrow="How we work"
            title={<span id="values-heading">Three things that define the day-to-day</span>} />
          
          <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
            {values.map((value, index) =>
            <Reveal as="li" key={value.title} delay={index * 0.05} className="flex flex-col gap-3 bg-ink-900 p-7">
                <span className="font-mono text-[11.5px] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[17px] font-medium tracking-tight text-white">{value.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-mist-faint">{value.body}</p>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      <section aria-labelledby="roles-heading" className="border-y border-line bg-ink-950/60">
        <div className="shell py-20 md:py-24">
          <SectionHeading eyebrow="Open roles" title={<span id="roles-heading">Currently hiring</span>} />
          <ul className="mt-12 flex flex-col">
            {roles.map((role, index) =>
            <Reveal
              as="li"
              key={role.title}
              delay={Math.min(index * 0.05, 0.2)}
              className="group grid gap-4 border-t border-line py-7 last:border-b md:grid-cols-[1fr_auto] md:items-center md:gap-10">
              
                <div className="flex flex-col gap-2">
                  <h3 className="text-[19px] font-medium tracking-tight text-white">{role.title}</h3>
                  <p className="max-w-xl text-[13.5px] leading-relaxed text-mist-faint">{role.body}</p>
                  <p className="mt-1 flex flex-wrap items-center gap-3 text-[12.5px] text-mist-dim">
                    <span className="rounded-md border border-line px-2 py-1">{role.type}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPinIcon className="h-3.5 w-3.5 text-accent-soft" aria-hidden="true" />
                      {role.location}
                    </span>
                  </p>
                </div>
                <Button
                href={`mailto:${site.email}?subject=Application — ${role.title}`}
                variant="secondary"
                size="sm"
                withArrow>
                
                  Apply
                </Button>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="Speculative"
        title="Nothing fits, but you think you should be here?"
        body="Send us something you have built and a short note on why this kind of work interests you."
        primaryLabel="Get in Touch" />
      
    </>);

}