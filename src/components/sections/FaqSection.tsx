import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { FAQAccordion } from './FAQAccordion';
import { generalFaqs } from '../../data/faqs';
import type { Faq } from '../../types';

interface FaqSectionProps {
  items?: Faq[];
  eyebrow?: string;
  title?: string;
  idPrefix?: string;
}

export function FaqSection({
  items = generalFaqs,
  eyebrow = 'FAQ',
  title = 'Questions we are asked before every project',
  idPrefix = 'general-faq'
}: FaqSectionProps) {
  return (
    <section aria-labelledby="faq-heading" className="relative border-y border-line bg-ink-950/60">
      <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow={eyebrow} title={<span id="faq-heading">{title}</span>} />
          <Reveal className="flex flex-col gap-4 rounded-xl border border-line bg-white/[0.02] p-6">
            <p className="text-[13.5px] leading-relaxed text-mist-faint">
              Something not covered here? A 20-minute call is usually faster than email.
            </p>
            <Button to="/contact" size="sm" variant="secondary" withArrow>
              Talk to an Expert
            </Button>
          </Reveal>
        </div>
        <Reveal>
          <FAQAccordion items={items} idPrefix={idPrefix} />
        </Reveal>
      </div>
    </section>);

}