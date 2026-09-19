import React from 'react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { Button } from '../components/ui/Button';
import { WorkSection } from '../components/sections/WorkSection';
import { Testimonials } from '../components/sections/Testimonials';
import { CTASection } from '../components/sections/CTASection';
import { site, stats } from '../data/site';
import { StatCounter } from '../components/ui/StatCounter';

export function Work() {
  return (
    <>
      <Seo
        title={`Our Work | Case Studies | ${site.name}`}
        description="Case studies across retail, manufacturing, food, trading, hospitality and professional services — websites, e-commerce, marketing programmes, custom software and brand work." />
      
      <PageHero
        kicker="Selected work"
        title={
        <>
            Work that creates{' '}
            <span className="font-display font-normal italic text-accent-soft">business impact</span>.
          </>
        }
        intro="Every engagement below started with a commercial problem, not a design brief. Filter by the kind of work you are considering."
        actions={
        <Button to="/contact" size="lg" withArrow>
            Start Your Project
          </Button>
        }
        aside={
        <dl className="grid grid-cols-2 gap-8 border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {stats.map((stat) =>
          <StatCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label} />

          )}
          </dl>
        } />
      
      <WorkSection
        eyebrow="Case studies"
        heading="Six engagements, six different problems"
        subtitle="Open any case study for the challenge, strategy, technologies and measured result." />
      
      <Testimonials />
      <CTASection
        eyebrow="Your project"
        title="Want a result like these?"
        body="Tell us the outcome you need. We will be direct about what it takes and whether we are the right team for it."
        primaryLabel="Let’s Build Something" />
      
    </>);

}