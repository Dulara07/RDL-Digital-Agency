import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedBackground } from '../ui/AnimatedBackground';

interface PageHeroProps {
  kicker: string;
  title: React.ReactNode;
  intro?: string;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
}

export function PageHero({ kicker, title, intro, actions, aside }: PageHeroProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-line pt-[100px] md:pt-[128px]">
      <AnimatedBackground variant="aurora" />
      <div className="shell relative pb-14 md:pb-20">
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className={aside ? 'grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end' : ''}>
          
          <div className="flex flex-col gap-6">
            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-accent-soft">
              {kicker}
            </span>
            <h1 className="max-w-3xl text-balance text-[clamp(2.1rem,5vw,3.9rem)] font-semibold leading-[1.04] tracking-tightest text-white">
              {title}
            </h1>
            {intro &&
            <p className="max-w-2xl text-[15px] leading-relaxed text-mist-dim md:text-[17px]">
                {intro}
              </p>
            }
            {actions && <div className="mt-2 flex flex-wrap items-center gap-3">{actions}</div>}
          </div>
          {aside && <div>{aside}</div>}
        </motion.div>
      </div>
    </section>);

}