import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { TestimonialCard } from '../cards/TestimonialCard';
import { testimonials } from '../../data/testimonials';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const prefersReduced = useReducedMotion();
  const active = testimonials[index];

  const move = (direction: 1 | -1) =>
  setIndex((current) => (current + direction + testimonials.length) % testimonials.length);

  // Hidden until real client quotes are added in data/testimonials.ts.
  if (!active) return null;

  return (
    <section aria-labelledby="testimonials-heading" className="relative border-y border-line">
      <div className="shell py-20 md:py-28">
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2
              id="testimonials-heading"
              className="text-[12px] font-medium uppercase tracking-[0.2em] text-accent-soft">
              
              In their words
            </h2>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[12px] text-mist-faint">
                {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-mist-dim transition-colors duration-200 ease-premium hover:border-line-strong hover:text-white">
                  
                  <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-mist-dim transition-colors duration-200 ease-premium hover:border-line-strong hover:text-white">
                  
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div aria-live="polite" className="min-h-[300px] md:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={prefersReduced ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}>
                
                <TestimonialCard testimonial={active} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-1.5 border-t border-line pt-6">
            {testimonials.map((testimonial, dotIndex) =>
            <button
              key={testimonial.id}
              type="button"
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-current={dotIndex === index}
              onClick={() => setIndex(dotIndex)}
              className={[
              'h-0.5 flex-1 transition-colors duration-200 ease-premium',
              dotIndex === index ? 'bg-accent' : 'bg-white/10 hover:bg-white/25'].
              join(' ')} />

            )}
          </div>
        </Reveal>
      </div>
    </section>);

}