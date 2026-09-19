import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { TechnologyBadge } from '../ui/TechnologyBadge';
import { technologyGroups } from '../../data/technology';

export function TechnologySection() {
  return (
    <section aria-labelledby="technology-heading" className="relative border-y border-line bg-ink-950/60">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Technology"
          title={<span id="technology-heading">Technology that works behind the scenes</span>}
          subtitle="We choose tools for what they let your business do — not for novelty. Here is what we build with, and why it matters commercially." />
        

        <ul className="mt-14 flex flex-col">
          {technologyGroups.map((group, index) =>
          <Reveal
            as="li"
            key={group.id}
            delay={Math.min(index * 0.04, 0.2)}
            className="grid gap-4 border-t border-line py-7 md:grid-cols-[200px_1fr_minmax(0,340px)] md:items-center md:gap-8">
            
              <div className="flex items-center gap-3">
                <group.icon aria-hidden="true" className="h-4 w-4 text-accent-soft" />
                <h3 className="text-[16px] font-medium tracking-tight text-white">{group.label}</h3>
              </div>
              <p className="text-[13.5px] leading-relaxed text-mist-faint">{group.businessValue}</p>
              <ul className="flex flex-wrap gap-1.5 md:justify-end">
                {group.items.map((item) =>
              <li key={item}>
                    <TechnologyBadge>{item}</TechnologyBadge>
                  </li>
              )}
              </ul>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}