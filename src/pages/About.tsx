import React from 'react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { StatCounter } from '../components/ui/StatCounter';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Testimonials } from '../components/sections/Testimonials';
import { CTASection } from '../components/sections/CTASection';
import { site, stats } from '../data/site';

const beliefs = [
{
  title: 'What we believe',
  body: 'Technology is only valuable when it changes a number in the business. Everything else is decoration.'
},
{
  title: 'Our mission',
  body: 'To give small and medium businesses the digital capability that used to be available only to large companies.'
},
{
  title: 'Our vision',
  body: 'A market where an SME can compete on service and speed, because its systems are no longer the constraint.'
},
{
  title: 'Our approach',
  body: 'Understand the commercials first, sequence by impact, build in increments, and stay accountable after launch.'
}];



export function About() {
  return (
    <>
      <Seo
        title={`About Us | Digital Marketing & Software Agency in Sri Lanka | ${site.name}`}
        description={`${site.name} is a digital marketing and software development agency for SMEs in Sri Lanka — combining marketing, software, IT and automation under one accountable team.`} />
      
      <PageHero
        kicker="About us"
        title={
        <>
            A team that understands business{' '}
            <span className="font-display font-normal italic text-accent-soft">and</span> technology.
          </>
        }
        intro={`${site.name} exists because SMEs were being sold either marketing without systems or software without demand. We do both, and we stay accountable for the result.`}
        actions={
        <>
            <Button to="/contact" size="lg" withArrow>
              Start a Project
            </Button>
            <Button to="/careers" size="lg" variant="secondary">
              Join the Team
            </Button>
          </>
        }
        aside={
        <dl className="grid grid-cols-2 gap-8 border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {stats.map((stat) =>
          <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          )}
          </dl>
        } />
      

      <section aria-labelledby="who-we-are">
        <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Who we are"
            title={<span id="who-we-are">A consultancy that ships</span>}
            subtitle="Strategists, designers, engineers and marketers working as one team — small enough that the people you speak to are the people doing the work, and broad enough to run marketing, software and IT together." />
          
          <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {beliefs.map((belief) =>
            <Reveal as="li" key={belief.title} className="flex flex-col gap-3 bg-ink-900 p-6">
                <h3 className="text-[12px] uppercase tracking-[0.16em] text-accent-soft">
                  {belief.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-mist-dim">{belief.body}</p>
              </Reveal>
            )}
          </ul>
        </div>
      </section>


      <WhyChooseUs />
      <Testimonials />
      <CTASection
        eyebrow="Work with us"
        title="Let’s find out whether we are the right partner."
        body="A first call is a conversation about your business, not a pitch deck."
        primaryLabel="Start a Project" />
      
    </>);

}