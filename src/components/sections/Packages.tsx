import React from 'react';
import { CheckIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { packages } from '../../data/packages';

export function Packages() {
  return (
    <section aria-labelledby="packages-heading" className="relative">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Solution packages"
          title={<span id="packages-heading">Start where the return is clearest</span>}
          subtitle="Scope, sequencing and investment are set after a discovery call — these packages describe the shape of an engagement, not a fixed price list." />
        

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pack, index) =>
          <Reveal
            key={pack.id}
            delay={Math.min(index * 0.05, 0.2)}
            className={[
            'flex h-full flex-col rounded-xl border p-6 transition-[border-color,transform] duration-300 ease-premium hover:-translate-y-1',
            pack.featured ?
            'border-accent/50 bg-accent/[0.06]' :
            'border-line bg-ink-800/40 hover:border-line-strong'].
            join(' ')}>
            
              <div className="flex items-center justify-between">
                <h3 className="text-[19px] font-semibold tracking-tight text-white">{pack.name}</h3>
                {pack.featured &&
              <span className="rounded-full border border-accent/50 bg-accent/15 px-2.5 py-1 text-[10.5px] uppercase tracking-[0.12em] text-accent-soft">
                    Most chosen
                  </span>
              }
              </div>
              <p className="mt-2 text-[13.5px] text-accent-soft">{pack.tagline}</p>

              <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-mist-faint">Ideal for</p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-mist-dim">{pack.idealFor}</p>

              <p className="mt-6 text-[11px] uppercase tracking-[0.14em] text-mist-faint">Services</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {pack.services.map((service) =>
              <li
                key={service}
                className="rounded-md border border-line bg-white/[0.02] px-2 py-1 text-[11.5px] text-mist-dim">
                
                    {service}
                  </li>
              )}
              </ul>

              <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6">
                {pack.features.map((feature) =>
              <li key={feature} className="flex gap-2.5 text-[13px] leading-relaxed text-mist-dim">
                    <CheckIcon
                  aria-hidden="true"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-soft" />
                
                    {feature}
                  </li>
              )}
              </ul>

              <div className="mt-auto pt-7">
                <Button
                to="/contact"
                variant={pack.featured ? 'primary' : 'secondary'}
                size="sm"
                fullWidth>
                
                  Discuss Your Requirements
                </Button>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}