import React from 'react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { Button } from '../components/ui/Button';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ServiceExplorer } from '../components/sections/ServiceExplorer';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { Glossary } from '../components/sections/Glossary';
import { Packages } from '../components/sections/Packages';
import { FaqSection } from '../components/sections/FaqSection';
import { CTASection } from '../components/sections/CTASection';
import { site } from '../data/site';

export function Services() {
  return (
    <>
      <Seo
        title={`Digital Marketing & Software Development Services | ${site.name}`}
        description="Digital marketing, SEO, web and e-commerce development, custom software, mobile apps, CRM/ERP, automation, cloud and IT solutions for small and medium businesses in Sri Lanka." />

      <PageHero
        kicker="Services"
        title={
        <>
            Everything your business needs online,{' '}
            <span className="font-display font-normal italic text-accent-soft">explained simply</span>.
          </>
        }
        intro="We help you get more customers and run your business more easily. Each service below says what it does for you first — the technical name comes second."
        actions={
        <>
            <Button to="/contact" size="lg" withArrow>
              Start a Project
            </Button>
            <Button to="/work" size="lg" variant="secondary">
              See the Work
            </Button>
          </>
        } />
      
      <ServicesSection />
      <Glossary />
      <ServiceExplorer />
      <ProcessTimeline />
      <Packages />
      <FaqSection />
      <CTASection
        eyebrow="Get started"
        title="Not sure which service you need?"
        body="Describe the problem rather than the solution. We will tell you which capability applies, and whether you need it yet."
        primaryLabel="Get a Digital Assessment"
        primaryTo="/contact#assessment" />
      
    </>);

}