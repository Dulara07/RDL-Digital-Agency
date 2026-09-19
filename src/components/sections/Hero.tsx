import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../ui/Button';
import { AnimatedBackground } from '../ui/AnimatedBackground';
import { HeroVisual } from './HeroVisual';

const trustPoints = ['Digital Growth', 'Technology', 'Innovation'];

export function Hero() {
  const prefersReduced = useReducedMotion();
  const fade = (delay: number) =>
  prefersReduced ?
  {} :
  {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] as const }
  };

  return (
    <section className="relative overflow-hidden pt-[104px] md:pt-[132px]">
      <AnimatedBackground variant="aurora" />
      <div className="shell relative pb-16 md:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex flex-col gap-7">
            <motion.p
              {...fade(0)}
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium uppercase tracking-[0.2em] text-mist-faint">

              {trustPoints.map((point, index) =>
              <React.Fragment key={point}>
                  {index > 0 && <span className="text-accent">•</span>}
                  <span className="whitespace-nowrap">{point}</span>
                </React.Fragment>
              )}
            </motion.p>

            <motion.h1
              {...fade(0.06)}
              className="text-balance text-[clamp(2.4rem,5.6vw,4.3rem)] font-semibold leading-[1.02] tracking-tightest text-white">
              
              We build digital experiences that{' '}
              <span className="font-display font-normal italic text-accent-soft">grow businesses</span>.
            </motion.h1>

            <motion.p {...fade(0.12)} className="max-w-xl text-[16px] leading-relaxed text-mist-dim md:text-[18px]">
              Digital marketing, software and IT solutions designed to help SMEs grow faster, work
              smarter, and compete globally.
            </motion.p>

            <motion.div {...fade(0.18)} className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact" size="lg" withArrow>
                Start a Project
              </Button>
              <Button to="/services" size="lg" variant="secondary">
                Explore Our Services
              </Button>
            </motion.div>

            <motion.dl
              {...fade(0.26)}
              className="mt-2 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
              
              {[
              { value: 'Marketing', label: 'Demand & brand' },
              { value: 'Software', label: 'Systems & apps' },
              { value: 'IT', label: 'Cloud & support' }].
              map((item) =>
              <div key={item.value}>
                  <dt className="text-[14px] font-medium text-white">{item.value}</dt>
                  <dd className="text-[12px] text-mist-faint">{item.label}</dd>
                </div>
              )}
            </motion.dl>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>);

}