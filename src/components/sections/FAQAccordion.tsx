import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import type { Faq } from '../../types';

interface FAQAccordionProps {
  items: Faq[];
  idPrefix?: string;
}

export function FAQAccordion({ items, idPrefix = 'faq' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReduced = useReducedMotion();

  return (
    <ul className="flex flex-col">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <li key={item.question} className="border-t border-line last:border-b">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-panel-${index}`}
                id={`${idPrefix}-button-${index}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-start justify-between gap-6 py-5 text-left">
                
                <span
                  className={[
                  'text-[15.5px] font-medium tracking-tight transition-colors duration-200 ease-premium md:text-[17px]',
                  isOpen ? 'text-white' : 'text-mist-dim group-hover:text-white'].
                  join(' ')}>
                  
                  {item.question}
                </span>
                <PlusIcon
                  aria-hidden="true"
                  className={[
                  'mt-1 h-4 w-4 shrink-0 transition-[transform,color] duration-250 ease-premium',
                  isOpen ? 'rotate-45 text-accent-soft' : 'text-mist-faint group-hover:text-white'].
                  join(' ')} />
                
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen &&
              <motion.div
                id={`${idPrefix}-panel-${index}`}
                role="region"
                aria-labelledby={`${idPrefix}-button-${index}`}
                initial={prefersReduced ? undefined : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={prefersReduced ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden">
                
                  <p className="max-w-3xl pb-6 pr-10 text-[14px] leading-relaxed text-mist-faint">
                    {item.answer}
                  </p>
                </motion.div>
              }
            </AnimatePresence>
          </li>);

      })}
    </ul>);

}