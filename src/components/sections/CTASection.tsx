import React from 'react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { AnimatedBackground } from '../ui/AnimatedBackground';
import { site } from '../../data/site';

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
  primaryLabel = 'Start a Project',
  primaryTo = '/contact',
  secondaryLabel = 'Chat on WhatsApp',
  secondaryTo
}: CTASectionProps) {
  return (
    <section aria-labelledby="cta-heading" className="relative">
      <div className="shell py-16 md:py-24">
        {/* A contained, left-aligned panel so the closing call-to-action reads differently from content sections. */}
        <Reveal className="relative grid gap-8 overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/25 via-ink-800/80 to-aqua/15 p-8 shadow-glow-lg md:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <AnimatedBackground variant="aurora" />
          <div className="relative flex max-w-2xl flex-col gap-5">
            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-accent-soft">
              {eyebrow}
            </span>
            <h2
              id="cta-heading"
              className="text-balance text-[clamp(1.75rem,3.8vw,2.85rem)] font-semibold leading-[1.08] tracking-tightest text-white">

              {title}
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed text-mist md:text-[17px]">{body}</p>
          </div>
          <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button to={primaryTo} size="lg" withArrow>
              {primaryLabel}
            </Button>
            {/* Without an internal route, the second option is a direct WhatsApp chat. */}
            {secondaryTo ?
            <Button to={secondaryTo} size="lg" variant="secondary">
                {secondaryLabel}
              </Button> :

            <Button href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`} size="lg" variant="secondary">
                {secondaryLabel}
              </Button>
            }
          </div>
        </Reveal>
      </div>
    </section>);

}