import React from 'react';
import { Link } from 'react-router-dom';
import { clients, stats } from '../../data/site';
import { StatCounter } from '../ui/StatCounter';
import { Reveal } from '../ui/Reveal';

export function TrustStrip() {
  return (
    <section aria-labelledby="trust-heading" className="border-y border-line bg-ink-950/60">
      <div className="shell py-12 md:py-14">
        <Reveal className="flex flex-col gap-8">
          <h2
            id="trust-heading"
            className="text-[12px] font-medium uppercase tracking-[0.2em] text-mist-faint">
            
            Recent clients
          </h2>
          {/* Endless scrolling strip: the list is repeated so the loop has no gap;
              copies after the first are hidden from screen readers. */}
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="marquee-track flex w-max animate-marquee">
              {[0, 1, 2, 3].map((copy) =>
              <ul
                key={copy}
                aria-hidden={copy > 0 ? true : undefined}
                className="flex shrink-0 items-center">

                  {clients.map((client) =>
                <li key={client.name} className="flex items-center">
                      <Link
                    to={client.href}
                    tabIndex={copy > 0 ? -1 : undefined}
                    className="whitespace-nowrap px-8 text-[18px] font-medium tracking-tight text-mist-dim transition-colors duration-200 ease-premium hover:text-white">

                        {client.name}
                      </Link>
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                    </li>
                )}
                </ul>
              )}
            </div>
          </div>
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