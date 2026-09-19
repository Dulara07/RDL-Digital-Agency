import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { PortfolioCard } from '../cards/PortfolioCard';
import { CaseStudyModal } from './CaseStudyModal';
import { caseStudies, workFilters } from '../../data/work';
import type { CaseStudy, WorkCategory } from '../../types';

interface WorkSectionProps {
  limit?: number;
  heading?: string;
  eyebrow?: string;
  subtitle?: string;
  featureFirst?: boolean;
}

export function WorkSection({
  limit,
  heading = 'Work that creates business impact',
  eyebrow = 'Selected work',
  subtitle = 'Six engagements across retail, manufacturing, trading and hospitality. Filter by the kind of work you need.',
  featureFirst = true
}: WorkSectionProps) {
  const [filter, setFilter] = useState<'all' | WorkCategory>('all');
  const [active, setActive] = useState<CaseStudy | null>(null);
  const prefersReduced = useReducedMotion();

  const visible = useMemo(() => {
    const filtered =
    filter === 'all' ? caseStudies : caseStudies.filter((study) => study.category === filter);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

  return (
    <section aria-labelledby="work-heading" className="relative">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow={eyebrow}
          title={<span id="work-heading">{heading}</span>}
          subtitle={subtitle} />
        

        <div
          role="group"
          aria-label="Filter case studies"
          className="mt-10 flex flex-wrap gap-2 border-t border-line pt-8">
          
          {workFilters.map((item) => {
            const isActive = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFilter(item.id)}
                className={[
                'rounded-full border px-4 py-2 text-[13px] transition-[background-color,border-color,color] duration-200 ease-premium',
                isActive ?
                'border-accent bg-accent text-white' :
                'border-line text-mist-dim hover:border-line-strong hover:text-white'].
                join(' ')}>
                
                {item.label}
              </button>);

          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((study, index) =>
            <motion.div
              key={study.slug}
              layout={!prefersReduced}
              initial={prefersReduced ? undefined : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReduced ? undefined : { opacity: 0, y: 8 }}
              transition={{
                duration: 0.28,
                delay: Math.min(index * 0.03, 0.15),
                ease: [0.23, 1, 0.32, 1]
              }}
              className={featureFirst && index === 0 && filter === 'all' ? 'lg:col-span-2' : ''}>
              
                <PortfolioCard
                study={study}
                onOpen={() => setActive(study)}
                featured={featureFirst && index === 0 && filter === 'all'} />
              
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {visible.length === 0 &&
        <p className="mt-10 rounded-xl border border-line bg-ink-800/40 p-8 text-center text-[14px] text-mist-faint">
            No case studies in this category yet. Try another filter.
          </p>
        }
      </div>

      <CaseStudyModal study={active} onClose={() => setActive(null)} />
    </section>);

}