import React from 'react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { AnimatedBackground } from '../ui/AnimatedBackground';

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export function CTASection({
  eyebrow = 'Next step',
  title = 'Have a business challenge? Let’s build the solution.',
  body = 'Tell us what you are trying to achieve. We will help you identify the right digital, software or IT solution — and the order to do it in.',
  primaryLabel = 'Start a Conversation',
  primaryTo = '/contact',
  secondaryLabel = 'Book a Consultation',
  secondaryTo = '/contact#form'
}: CTASectionProps) {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden">
      <AnimatedBackground variant="aurora" />
      <div className="shell relative py-20 md:py-28">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-soft">
            {eyebrow}
          </span>
          <h2
            id="cta-heading"
            className="text-balance text-[clamp(1.9rem,4.4vw,3.2rem)] font-semibold leading-[1.06] tracking-tightest text-white">
            
            {title}
          </h2>
          <p className="max-w-xl text-[15px] leading-relaxed text-mist-dim md:text-[17px]">{body}</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button to={primaryTo} size="lg" withArrow>
              {primaryLabel}
            </Button>
            <Button to={secondaryTo} size="lg" variant="secondary">
              {secondaryLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>);

}