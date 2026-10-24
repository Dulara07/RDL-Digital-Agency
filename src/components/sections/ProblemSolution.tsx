import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { smeChallenges } from '../../data/services';
import { approachStages } from '../../data/process';

export function ProblemSolution() {
  return (
    <section aria-labelledby="problem-heading" className="relative">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Sound familiar?"
          title={
          <span id="problem-heading">
              Problems we fix for small businesses every week
            </span>
          }
          subtitle="If any of these sound like your business, you are not alone — and each one has a practical, affordable fix." />
        

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h3 className="text-[12px] font-medium uppercase tracking-[0.18em] text-mist-faint">
              What owners tell us
            </h3>
            <ul className="mt-6 flex flex-col">
              {smeChallenges.map((challenge, index) =>
              <Reveal
                as="li"
                key={challenge.title}
                delay={Math.min(index * 0.04, 0.24)}
                className="group flex items-baseline gap-5 border-t border-line py-4 transition-colors duration-250 ease-premium hover:bg-white/[0.02]">
                
                  <span className="font-mono text-[12px] font-semibold text-coral">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="text-[16px] font-medium text-white">“{challenge.title}”</span>
                    <span className="text-[14px] leading-relaxed text-mist-dim sm:max-w-[52%]">
                      {challenge.detail}
                    </span>
                  </span>
                </Reveal>
              )}
            </ul>
          </div>

          <Reveal className="flex flex-col gap-8 rounded-2xl border border-mint/25 bg-gradient-to-br from-mint/[0.09] via-ink-800/70 to-accent/[0.08] p-7 md:p-9">
            <div className="flex flex-col gap-3">
              <h3 className="text-[12px] font-medium uppercase tracking-[0.18em] text-mint">
                How we fix it
              </h3>
              <p className="text-[15px] leading-relaxed text-mist-dim">
                Five simple steps. We never build anything until you understand what it is, what it
                costs and how it will help.
              </p>
            </div>

            <ol className="flex flex-col">
              {approachStages.map((stage, index) =>
              <li key={stage.label} className="relative flex gap-4 pb-6 last:pb-0">
                  {index < approachStages.length - 1 &&
                <span
                  aria-hidden="true"
                  className="absolute left-[11px] top-6 h-[calc(100%-12px)] w-px bg-line" />

                }
                  <span className="relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-mint/50 bg-mint/10 font-mono text-[11.5px] font-semibold text-mint">
                    {index + 1}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[14.5px] font-medium text-white">{stage.label}</span>
                    <span className="text-[14px] text-mist-dim">{stage.detail}</span>
                  </span>
                </li>
              )}
            </ol>

            <div className="flex flex-wrap items-center gap-3 border-t border-line pt-6 text-[12.5px] text-mist-dim">
              <span className="rounded-md border border-line px-2.5 py-1.5">Your problem</span>
              <ArrowRightIcon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              <span className="rounded-md border border-accent/40 bg-accent/10 px-2.5 py-1.5 text-white">
                A simple fix
              </span>
              <ArrowRightIcon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              <span className="rounded-md border border-aqua/30 bg-aqua/10 px-2.5 py-1.5 text-aqua">
                A growing business
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}