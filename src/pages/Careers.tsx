import React from 'react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import { site } from '../data/site';

const values = [
{ title: 'Senior people on the work', body: 'No pyramid staffing. You own outcomes, not slide decks.' },
{ title: 'Written thinking', body: 'Decisions get documented so good reasoning outlives the project.' },
{ title: 'Real constraints', body: 'SME budgets force sharper design. That is the craft, not a limitation.' }];


export function Careers() {
  return (
    <>
      <Seo
        title={`Careers | Join ${site.name} in Sri Lanka`}
        description={`Work with ${site.name} — we welcome speculative applications from engineers, designers and marketers who want to help SMEs across Sri Lanka grow.`} />
      
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
                <span className="font-mono text-[12px] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[17px] font-medium tracking-tight text-white">{value.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-mist-faint">{value.body}</p>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="No open roles listed right now"
        title="Think you should be here? Tell us."
        body="Send us something you have built and a short note on why this kind of work interests you."
        primaryLabel="Start a Project" />
      
    </>);

}