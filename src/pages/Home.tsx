import React from 'react';
import { Seo } from '../components/ui/Seo';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { GoalPicker } from '../components/sections/GoalPicker';
import { ProblemSolution } from '../components/sections/ProblemSolution';
import { WorkSection } from '../components/sections/WorkSection';
import { Testimonials } from '../components/sections/Testimonials';
import { FaqSection } from '../components/sections/FaqSection';
import { AssessmentWizard } from '../components/sections/AssessmentWizard';
import { CTASection } from '../components/sections/CTASection';
import { site } from '../data/site';

// The homepage speaks to owners, not marketers: plain goals first, then proof.
// The full service list, glossary, process and packages live on /services.
export function Home() {
  return (
    <>
      <Seo
        title={`${site.name} | Digital Marketing & Software Development Agency in Sri Lanka`}
        description="Digital marketing, SEO, website and software development, e-commerce and IT solutions for small and medium businesses across Sri Lanka — one accountable team for growth and technology." />

      <Hero />
      <TrustStrip />
      <GoalPicker />
      <ProblemSolution />
      <WorkSection limit={4} />
      <Testimonials />
      <AssessmentWizard />
      <FaqSection />
      <CTASection />
    </>);

}
