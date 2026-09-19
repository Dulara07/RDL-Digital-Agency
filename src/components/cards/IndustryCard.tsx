import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Industry } from '../../types';

interface IndustryCardProps {
  industry: Industry;
  active: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

export function IndustryCard({ industry, active, onActivate, onDeactivate }: IndustryCardProps) {
  const Icon = industry.icon;
  const prefersReduced = useReducedMotion();

  return (
    <div
      className={[
      'group relative flex min-h-[188px] flex-col justify-between border-b border-r border-line p-6 transition-colors duration-300 ease-premium',
      active ? 'bg-white/[0.04]' : 'bg-transparent'].
      join(' ')}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      tabIndex={0}
      role="group"
      aria-label={`${industry.name} — ${industry.description}`}>
      
      <span
        aria-hidden="true"
        className={[
        'absolute inset-x-0 top-0 h-px bg-accent transition-transform duration-300 ease-premium',
        active ? 'scale-x-100' : 'scale-x-0'].
        join(' ')} />
      
      <div className="flex flex-col gap-3">
        <Icon
          aria-hidden="true"
          className={[
          'h-5 w-5 transition-colors duration-300 ease-premium',
          active ? 'text-accent-soft' : 'text-mist-dim'].
          join(' ')} />
        
        <h3 className="text-[16px] font-medium tracking-tight text-white">{industry.name}</h3>
        <p className="text-[13px] leading-relaxed text-mist-faint">{industry.description}</p>
      </div>

      <AnimatePresence initial={false}>
        {active &&
        <motion.ul
          initial={prefersReduced ? undefined : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReduced ? undefined : { opacity: 0, y: 4 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mt-5 flex flex-wrap gap-1.5">
          
            {industry.solutions.map((solution) =>
          <li
            key={solution}
            className="rounded-md border border-line bg-ink-900/70 px-2 py-1 text-[11.5px] text-mist-dim">
            
                {solution}
              </li>
          )}
          </motion.ul>
        }
      </AnimatePresence>
    </div>);

}