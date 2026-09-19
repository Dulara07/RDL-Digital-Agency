import React from 'react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { StatCounter } from '../components/ui/StatCounter';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { TechnologySection } from '../components/sections/TechnologySection';
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


const timeline = [
{ year: '2019', title: 'Founded', body: 'Two consultants building websites for local manufacturers.' },
{ year: '2020', title: 'First projects', body: 'First e-commerce and marketing retainers, entirely referral-led.' },
{ year: '2022', title: 'Growth', body: 'Team of nine; dedicated performance marketing and design practices.' },
{ year: '2024', title: 'Technology expansion', body: 'Custom software, business systems and automation practice established.' },
{ year: '2026', title: 'Today', body: 'A 24-person team serving SMEs across five industries and four regions.' }];


const team = [
{ name: 'Amara Silva', role: 'Founder & Growth Strategy', focus: 'Positioning, channel strategy, analytics' },
{ name: 'Dinesh Perera', role: 'Head of Engineering', focus: 'System design, business software, integrations' },
{ name: 'Nadia Haq', role: 'Design Director', focus: 'Brand, product design, design systems' },
{ name: 'Roshan Kumar', role: 'Head of Performance', focus: 'Paid media, SEO, conversion' },
{ name: 'Ishara Mendis', role: 'Delivery Lead', focus: 'Discovery, planning, client success' },
{ name: 'Tariq Anwar', role: 'Cloud & IT Lead', focus: 'Infrastructure, security, support' }];


export function About() {
  return (
    <>
      <Seo
        title={`About Us | ${site.name}`}
        description={`${site.name} is a digital growth and technology partner for SMEs — combining marketing, software, IT and automation under one accountable team.`} />
      
      <PageHero
        kicker="About us"
        title={
        <>
            A team that understands business{' '}
            <span className="font-display font-normal italic text-accent-soft">and</span> technology.
          </>
        }
        intro={`Founded in ${site.founded}, ${site.name} exists because SMEs were being sold either marketing without systems or software without demand. We do both, and we stay accountable for the result.`}
        actions={
        <>
            <Button to="/contact" size="lg" withArrow>
              Work With Us
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
            subtitle="We are 24 strategists, designers, engineers and marketers. Small enough that senior people work on your project; large enough to run marketing, software and IT in parallel." />
          
          <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {beliefs.map((belief) =>
            <Reveal as="li" key={belief.title} className="flex flex-col gap-3 bg-ink-900 p-6">
                <h3 className="text-[11px] uppercase tracking-[0.16em] text-accent-soft">
                  {belief.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-mist-dim">{belief.body}</p>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      <section aria-labelledby="timeline-heading" className="border-y border-line bg-ink-950/60">
        <div className="shell py-20 md:py-28">
          <SectionHeading eyebrow="Our story" title={<span id="timeline-heading">How we got here</span>} />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-5">
            {timeline.map((entry, index) =>
            <Reveal
              as="li"
              key={entry.year}
              delay={index * 0.05}
              className="flex flex-col gap-3 bg-ink-900 p-6">
              
                <span className="font-display text-[26px] leading-none text-accent-soft">
                  {entry.year}
                </span>
                <h3 className="text-[15.5px] font-medium text-white">{entry.title}</h3>
                <p className="text-[13px] leading-relaxed text-mist-faint">{entry.body}</p>
              </Reveal>
            )}
          </ol>
        </div>
      </section>

      <section aria-labelledby="team-heading">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            eyebrow="Team"
            title={<span id="team-heading">The people you will actually work with</span>}
            subtitle="No account-manager layer between you and the people doing the work." />
          
          <ul className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) =>
            <Reveal
              as="li"
              key={member.name}
              delay={Math.min(index * 0.04, 0.2)}
              className="flex flex-col gap-3 border-b border-r border-line p-6">
              
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.03] font-display text-[17px] text-accent-soft">
                  {member.name.
                split(' ').
                map((part) => part[0]).
                join('')}
                </span>
                <h3 className="text-[16px] font-medium text-white">{member.name}</h3>
                <p className="text-[13px] text-accent-soft">{member.role}</p>
                <p className="text-[13px] leading-relaxed text-mist-faint">{member.focus}</p>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessTimeline />
      <TechnologySection />
      <Testimonials />
      <CTASection
        eyebrow="Work with us"
        title="Let’s find out whether we are the right partner."
        body="A first call is a conversation about your business, not a pitch deck."
        primaryLabel="Book a Consultation" />
      
    </>);

}