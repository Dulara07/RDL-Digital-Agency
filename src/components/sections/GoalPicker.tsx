import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { goals } from '../../data/goals';
import { GoalIllustration } from '../ui/GoalIllustrations';
import { PriceTag } from '../ui/PriceTag';
import { pricingPromise, servicePrices } from '../../data/pricing';

/**
 * Entry point for owners who don't know the industry terms: they pick a goal
 * in their own words and land on the service that delivers it.
 */
/** Feeds the pointer position to the card's `.spotlight` glow. */
function followCursor(event: React.MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
}

/**
 * One colour per goal so the six options are easy to tell apart at a glance.
 * Full class strings (not built dynamically) so Tailwind keeps them.
 */
const tones: Record<string, {bar: string;panel: string;chip: string;link: string;hover: string;spot: string;}> = {
  found: {
    bar: 'from-aqua to-sky', panel: 'from-aqua/20', chip: 'border-aqua/30 bg-aqua/10 text-aqua',
    link: 'text-aqua', hover: 'hover:border-aqua/50', spot: 'rgba(62,216,208,0.14)'
  },
  website: {
    bar: 'from-accent to-rose', panel: 'from-accent/25', chip: 'border-accent/40 bg-accent/15 text-accent-soft',
    link: 'text-accent-soft', hover: 'hover:border-accent/60', spot: 'rgba(110,86,255,0.18)'
  },
  sell: {
    bar: 'from-amber to-coral', panel: 'from-amber/20', chip: 'border-amber/30 bg-amber/10 text-amber',
    link: 'text-amber', hover: 'hover:border-amber/50', spot: 'rgba(255,186,74,0.13)'
  },
  advertise: {
    bar: 'from-coral to-rose', panel: 'from-coral/20', chip: 'border-coral/30 bg-coral/10 text-coral',
    link: 'text-coral', hover: 'hover:border-coral/50', spot: 'rgba(255,126,107,0.14)'
  },
  time: {
    bar: 'from-mint to-aqua', panel: 'from-mint/20', chip: 'border-mint/30 bg-mint/10 text-mint',
    link: 'text-mint', hover: 'hover:border-mint/50', spot: 'rgba(61,220,151,0.13)'
  },
  it: {
    bar: 'from-sky to-accent', panel: 'from-sky/20', chip: 'border-sky/30 bg-sky/10 text-sky',
    link: 'text-sky', hover: 'hover:border-sky/50', spot: 'rgba(86,180,255,0.14)'
  }
};

export function GoalPicker() {
  return (
    <section id="help" aria-labelledby="help-heading" className="relative">
      {/* Colour wash behind the cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_420px_at_50%_0%,rgba(110,86,255,0.18),transparent_70%)]" />
      <div className="shell relative py-20 md:py-28">
        <SectionHeading
          align="center"
          eyebrow="Start here"
          title={<span id="help-heading">What do you need help with?</span>}
          subtitle={`Pick the one that sounds most like you — no technical terms needed. ${pricingPromise}`} />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal, index) => {
            const tone = tones[goal.id] ?? tones.website;
            return (
          <Reveal as="li" key={goal.id} delay={Math.min(index * 0.05, 0.25)} className="h-full">
              <Link
              to={goal.href}
              onMouseMove={followCursor}
              style={{ '--spot-color': tone.spot } as React.CSSProperties}
              className={`spotlight group flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-ink-800/70 p-6 transition-[border-color,background-color,transform,box-shadow] duration-300 ease-premium hover:-translate-y-1 hover:bg-ink-700/70 hover:shadow-panel md:p-7 ${tone.hover}`}>

                <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tone.bar}`} />
                <div className={`relative -mx-2 -mt-1 aspect-[2/1] overflow-hidden rounded-xl border border-line bg-gradient-to-br ${tone.panel} via-ink-900 to-ink-900 transition-transform duration-500 ease-premium group-hover:scale-[1.02]`}>
                  <GoalIllustration id={goal.id} />
                </div>
                <h3 className="text-[19px] font-medium leading-snug tracking-tight text-white">
                  “{goal.need}”
                </h3>
                <p className="text-[15px] leading-relaxed text-mist-dim">{goal.answer}</p>
                <ul aria-label="Also known as" className="flex flex-wrap gap-1.5">
                  {goal.services.map((service) =>
                <li
                  key={service}
                  className={`rounded-md border px-2 py-0.5 text-[12px] ${tone.chip}`}>

                      {service}
                    </li>
                )}
                </ul>
                <PriceTag
                price={servicePrices[goal.href.replace('/services/', '')]}
                className="mt-auto border-t border-line pt-4" />
                <span className={`inline-flex items-center gap-1.5 text-[14px] font-medium ${tone.link}`}>
                  See how we help
                  <ArrowRightIcon
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>);

          })}
        </ul>

        <Reveal className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/15 via-ink-800/60 to-aqua/10 p-6 text-center md:flex-row md:justify-between md:p-7 md:text-left">
          <div>
            <p className="text-[17px] font-medium text-white">Not sure which one you need?</p>
            <p className="mt-1 text-[15px] text-mist-dim">
              Answer six quick questions and we’ll suggest where to start. It takes about a minute.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/#assessment" withArrow>
              Take the 1-Minute Quiz
            </Button>
            <Button to="/services" variant="secondary">
              See All Services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>);

}
