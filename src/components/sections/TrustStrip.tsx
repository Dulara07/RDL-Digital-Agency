import React from 'react';
import { clientLogos, stats } from '../../data/site';
import { StatCounter } from '../ui/StatCounter';
import { Reveal } from '../ui/Reveal';

export function TrustStrip() {
  return (
    <section aria-labelledby="trust-heading" className="border-y border-line bg-ink-950/60">
      <div className="shell py-12 md:py-14">
        <Reveal className="flex flex-col gap-8">
          <h2
            id="trust-heading"
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-mist-faint">
            
            Trusted by ambitious businesses
          </h2>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((logo) =>
            <li key={logo.name} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-line font-mono text-[12px] text-mist-faint">
                  {logo.mark}
                </span>
                <span className="text-[13.5px] text-mist-dim">{logo.name}</span>
              </li>
            )}
          </ul>
        </Reveal>

        <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-10 md:grid-cols-4">
          {stats.map((stat, index) =>
          <Reveal key={stat.label} delay={index * 0.06}>
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </Reveal>
          )}
        </dl>
      </div>
    </section>);

}