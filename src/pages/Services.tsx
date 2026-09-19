import React from 'react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { Button } from '../components/ui/Button';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ServiceExplorer } from '../components/sections/ServiceExplorer';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { TechnologySection } from '../components/sections/TechnologySection';
import { Packages } from '../components/sections/Packages';
import { FaqSection } from '../components/sections/FaqSection';
import { CTASection } from '../components/sections/CTASection';
import { site } from '../data/site';

export function Services() {
  return (
    <>
      <Seo
        title={`Services | ${site.name}`}
        description="Digital marketing, SEO, web and e-commerce development, custom software, mobile apps, CRM/ERP, automation, cloud and IT solutions for small and medium businesses." />
      
      <PageHero
        kicker="Services"
        title={
        <>
            Two practices, one accountable team:{' '}
            <span className="font-display font-normal italic text-accent-soft">growth and technology</span>.
          </>
        }
        intro="Most agencies do marketing or software. We run both, which means your campaigns, website, systems and reporting are designed as one thing instead of four."
        actions={
        <>
            <Button to="/contact" size="lg" withArrow>
              Start Your Project
            </Button>
            <Button to="/work" size="lg" variant="secondary">
              See the Work
            </Button>
          </>
        } />
      
      <ServicesSection />
      <ServiceExplorer />
      <ProcessTimeline />
      <TechnologySection />
      <Packages />
      <FaqSection />
      <CTASection
        eyebrow="Get started"
        title="Not sure which service you need?"
        body="Describe the problem rather than the solution. We will tell you which capability applies, and whether you need it yet."
        primaryLabel="Get a Digital Assessment"
        primaryTo="/contact" />
      
    </>);

}