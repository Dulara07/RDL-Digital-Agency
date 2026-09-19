import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { whyChooseUs } from '../../data/services';

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="relative border-y border-line bg-ink-950/60">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Why work with us"
          title={<span id="why-heading">A digital partner built around your business</span>}
          subtitle="Six commitments that shape how every engagement runs — from the first call to the third year." />
        

        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) =>
          <Reveal
            as="li"
            key={item.title}
            delay={Math.min(index * 0.05, 0.25)}
            className="group relative flex flex-col gap-4 bg-ink-900 p-7 transition-colors duration-300 ease-premium hover:bg-ink-800">
            
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/[0.03] transition-colors duration-300 ease-premium group-hover:border-accent/40 group-hover:bg-accent/10">
                  <item.icon
                  aria-hidden="true"
                  className="h-4 w-4 text-mist-dim transition-colors duration-300 ease-premium group-hover:text-accent-soft" />
                
                </span>
                <span className="font-mono text-[11.5px] text-mist-faint/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-[17px] font-medium tracking-tight text-white">{item.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-mist-faint">{item.body}</p>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}