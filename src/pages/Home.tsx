import React from 'react';
import { Seo } from '../components/ui/Seo';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ServiceExplorer } from '../components/sections/ServiceExplorer';
import { ProblemSolution } from '../components/sections/ProblemSolution';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { WorkSection } from '../components/sections/WorkSection';
import { TechnologySection } from '../components/sections/TechnologySection';
import { GrowthDashboard } from '../components/sections/GrowthDashboard';
import { Testimonials } from '../components/sections/Testimonials';
import { Packages } from '../components/sections/Packages';
import { FaqSection } from '../components/sections/FaqSection';
import { InsightsSection } from '../components/sections/InsightsSection';
import { AssessmentWizard } from '../components/sections/AssessmentWizard';
import { CTASection } from '../components/sections/CTASection';
import { site } from '../data/site';

export function Home() {
  return (
    <>
      <Seo
        title={`${site.name} | Digital Marketing & Software Development Agency in Sri Lanka`}
        description="Digital marketing, SEO, website and software development, e-commerce and IT solutions for small and medium businesses across Sri Lanka — one accountable team for growth and technology." />

      <Hero />
      <TrustStrip />
      <ServicesSection />
      <ServiceExplorer />
      <ProblemSolution />
      <IndustriesSection limit={8} />
      <WhyChooseUs />
      <ProcessTimeline />
      <WorkSection limit={4} />
      <TechnologySection />
      <GrowthDashboard />
      <Testimonials />
      <Packages />
      <AssessmentWizard />
      <FaqSection />
      <InsightsSection />
      <CTASection />
    </>);

}