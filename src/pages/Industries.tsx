import React from 'react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { Button } from '../components/ui/Button';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { WorkSection } from '../components/sections/WorkSection';
import { FaqSection } from '../components/sections/FaqSection';
import { CTASection } from '../components/sections/CTASection';
import { site } from '../data/site';

export function Industries() {
  return (
    <>
      <Seo
        title={`Industries We Serve in Sri Lanka | ${site.name}`}
        description="Digital marketing and technology solutions for retail, manufacturing, food and beverage, export and trading, hospitality, healthcare, education, logistics, construction, agriculture and startups across Sri Lanka." />
      
      <PageHero
        kicker="Industries"
        title={
        <>
            Sector context that{' '}
            <span className="font-display font-normal italic text-accent-soft">shortens discovery</span>.
          </>
        }
        intro="We have built for these sectors before, which means fewer assumptions to test and a faster route to something that works."
        actions={
        <Button to="/contact" size="lg" withArrow>
            Talk About Your Sector
          </Button>
        } />
      
      <IndustriesSection showAction={false} />
      <WorkSection
        limit={4}
        eyebrow="Sector proof"
        heading="Recent work by industry"
        subtitle="Examples from retail, food, manufacturing and trading engagements."
        featureFirst={false} />
      
      <FaqSection />
      <CTASection
        eyebrow="Your industry"
        title="Not listed? We have probably solved the underlying problem."
        body="The systems behind most SME operations rhyme across sectors. Tell us the process that hurts most."
        primaryLabel="Start a Conversation" />
      
    </>);

}