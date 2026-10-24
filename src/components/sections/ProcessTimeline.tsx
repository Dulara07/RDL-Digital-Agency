import React from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { processSteps } from '../../data/process';

export function ProcessTimeline() {
  const containerRef = React.useRef<HTMLOListElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 60%']
  });
  const rawHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const progressHeight = useSpring(rawHeight, { stiffness: 120, damping: 30 });

  return (
    <section aria-labelledby="process-heading" className="relative">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="How it works"
          title={<span id="process-heading">Working with us, step by step</span>}
          subtitle="Six simple steps. At each one you know what is happening, what you will receive and what it costs." />
        

        <ol ref={containerRef} className="relative mt-14 flex flex-col">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px bg-line md:block" />
          
          {!prefersReduced &&
          <motion.span
            aria-hidden="true"
            style={{ height: progressHeight }}
            className="absolute left-[7px] top-2 hidden w-px bg-accent md:block" />

          }

          {processSteps.map((step, index) =>
          <Reveal
            as="li"
            key={step.step}
            delay={Math.min(index * 0.04, 0.2)}
            className="group relative border-t border-line py-8 md:pl-12">
            
              <span
              aria-hidden="true"
              className="absolute left-0 top-[42px] hidden h-[15px] w-[15px] items-center justify-center rounded-full border border-line-strong bg-ink transition-colors duration-300 ease-premium group-hover:border-accent md:flex">
              
                <span className="h-[5px] w-[5px] rounded-full bg-mist-faint transition-colors duration-300 ease-premium group-hover:bg-accent" />
              </span>

              <div className="grid gap-5 md:grid-cols-[88px_1fr_minmax(0,300px)] md:items-start md:gap-8">
                <span className="font-display text-[26px] leading-none text-accent-soft">
                  {step.step}
                </span>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[20px] font-medium tracking-tight text-white md:text-[23px]">
                    {step.title}
                  </h3>
                  <p className="max-w-lg text-[14px] leading-relaxed text-mist-dim">{step.body}</p>
                </div>
                <ul className="flex flex-wrap gap-1.5 md:justify-end">
                  {step.deliverables.map((deliverable) =>
                <li
                  key={deliverable}
                  className="rounded-md border border-line bg-white/[0.02] px-2.5 py-1.5 text-[12px] text-mist-faint">
                  
                      {deliverable}
                    </li>
                )}
                </ul>
              </div>
            </Reveal>
          )}
        </ol>
      </div>
    </section>);

}