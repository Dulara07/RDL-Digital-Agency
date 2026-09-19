import React from 'react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { ContactSection } from '../components/sections/ContactSection';
import { AssessmentWizard } from '../components/sections/AssessmentWizard';
import { FaqSection } from '../components/sections/FaqSection';
import { site } from '../data/site';

export function Contact() {
  return (
    <>
      <Seo
        title={`Contact | ${site.name}`}
        description="Send a project inquiry or book a consultation. Tell us what you are trying to achieve and we will identify the right digital, software or IT solution." />
      
      <PageHero
        kicker="Contact"
        title={
        <>
            Tell us what you are trying to{' '}
            <span className="font-display font-normal italic text-accent-soft">achieve</span>.
          </>
        }
        intro="We reply within one business day — usually with a few clarifying questions and an honest view of whether we are the right fit."
        aside={
        <ul className="flex flex-col gap-4 border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {[
          'No sales sequences or automated follow-ups',
          'Discovery call with the people who do the work',
          'Indicative approach and investment before any scope'].
          map((item) =>
          <li key={item} className="flex gap-3 text-[13.5px] text-mist-dim">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
          )}
          </ul>
        } />
      
      <ContactSection />
      <AssessmentWizard />
      <FaqSection />
    </>);

}