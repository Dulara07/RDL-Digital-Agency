import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { explorerTracks } from '../../data/services';

export function ServiceExplorer() {
  const [activeId, setActiveId] = useState(explorerTracks[0].id);
  const active = explorerTracks.find((track) => track.id === activeId) ?? explorerTracks[0];
  const prefersReduced = useReducedMotion();

  return (
    <section
      aria-labelledby="explorer-heading"
      className="relative border-y border-line bg-ink-950/60">
      
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Service explorer"
          title={<span id="explorer-heading">Find the capability that fits your problem</span>}
          subtitle="Pick a practice to see exactly what it includes and how an engagement usually runs." />
        

        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          <div role="tablist" aria-label="Service practices" className="flex flex-col gap-2">
            {explorerTracks.map((track) => {
              const isActive = track.id === activeId;
              return (
                <button
                  key={track.id}
                  role="tab"
                  id={`tab-${track.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${track.id}`}
                  type="button"
                  onClick={() => setActiveId(track.id)}
                  className={[
                  'group relative flex items-center gap-4 rounded-lg border px-4 py-4 text-left',
                  'transition-[background-color,border-color,color] duration-250 ease-premium',
                  isActive ?
                  'border-accent/45 bg-accent/[0.08] text-white' :
                  'border-line bg-transparent text-mist-dim hover:border-line-strong hover:text-white'].
                  join(' ')}>
                  
                  <track.icon
                    aria-hidden="true"
                    className={`h-4 w-4 shrink-0 ${isActive ? 'text-accent-soft' : 'text-mist-faint'}`} />
                  
                  <span className="flex-1 text-[15px] font-medium tracking-tight">{track.label}</span>
                  <ArrowRightIcon
                    aria-hidden="true"
                    className={`h-4 w-4 transition-transform duration-250 ease-premium ${
                    isActive ? 'translate-x-0 text-accent-soft' : '-translate-x-1 opacity-0'}`
                    } />
                  
                </button>);

            })}

            <p className="mt-4 rounded-lg border border-line bg-white/[0.02] p-4 text-[12.5px] leading-relaxed text-mist-faint">
              Not sure where to start? The digital assessment maps your situation to the right
              starting point in about a minute.
            </p>
          </div>

          <div className="relative min-h-[420px] rounded-xl border border-line bg-ink-800/50 p-6 md:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                role="tabpanel"
                id={`panel-${active.id}`}
                aria-labelledby={`tab-${active.id}`}
                initial={prefersReduced ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col gap-7">
                
                <div className="flex flex-col gap-4">
                  <h3 className="text-balance text-[24px] font-semibold leading-tight tracking-tight text-white md:text-[30px]">
                    {active.headline}
                  </h3>
                  <p className="max-w-2xl text-[14.5px] leading-relaxed text-mist-dim">
                    {active.description}
                  </p>
                </div>

                <ul className="grid gap-x-8 gap-y-5 border-t border-line pt-7 sm:grid-cols-2">
                  {active.capabilities.map((capability, index) =>
                  <motion.li
                    key={capability.name}
                    initial={prefersReduced ? undefined : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: Math.min(index * 0.04, 0.2),
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className="flex gap-3">
                    
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="flex flex-col gap-1">
                        <span className="text-[14.5px] font-medium text-white">{capability.name}</span>
                        <span className="text-[13px] leading-relaxed text-mist-faint">
                          {capability.detail}
                        </span>
                      </span>
                    </motion.li>
                  )}
                </ul>

                <div className="mt-auto flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-mono text-[12px] text-mist-dim">{active.outcome}</p>
                  <Button to={`/services/${active.id}`} size="sm" variant="secondary" withArrow>
                    Service details
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}