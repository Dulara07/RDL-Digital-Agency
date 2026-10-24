import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../ui/Button';
import { AnimatedBackground } from '../ui/AnimatedBackground';
import { HeroVisual } from './HeroVisual';

const trustPoints = ['Based in Sri Lanka', 'No jargon', 'One team for everything'];

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
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] font-medium uppercase tracking-[0.16em] text-mist-dim">

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
              
              More customers, less paperwork —{' '}
              <span className="text-shimmer font-display font-normal italic">
                for Sri Lankan businesses
              </span>
              .
            </motion.h1>

            <motion.p {...fade(0.12)} className="max-w-xl text-[16px] leading-relaxed text-mist-dim md:text-[18px]">
              We build your website, help customers find you on Google and Facebook, and set up
              simple tools that save your team time. No jargon — we explain everything in plain
              words and handle the technical side for you.
            </motion.p>

            <motion.div {...fade(0.18)} className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact" size="lg" withArrow>
                Start a Project
              </Button>
              <Button to="/#help" size="lg" variant="secondary">
                What Can You Help With?
              </Button>
            </motion.div>

            <motion.dl
              {...fade(0.26)}
              className="mt-2 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
              
              {[
              { value: 'Get found', label: 'On Google & social media', dot: 'bg-coral' },
              { value: 'Win customers', label: 'With a website that sells', dot: 'bg-aqua' },
              { value: 'Save time', label: 'With simple business tools', dot: 'bg-mint' }].
              map((item) =>
              <div key={item.value}>
                  <dt className="flex items-center gap-2 text-[15px] font-medium text-white">
                    <span aria-hidden="true" className={`h-2 w-2 rounded-full ${item.dot}`} />
                    {item.value}
                  </dt>
                  <dd className="text-[13px] leading-snug text-mist-dim">{item.label}</dd>
                </div>
              )}
            </motion.dl>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>);

}