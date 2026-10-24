import React from 'react';
import type { Industry } from '../../types';

/** One industry as a list row: name and summary on the left, solution tags on the right. */
export function IndustryCard({ industry }: {industry: Industry;}) {
  const Icon = industry.icon;

  return (
    <article className="grid gap-4 border-b border-line py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-8">
      <div className="flex gap-4">
        <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent-soft" />
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[16px] font-medium tracking-tight text-white">{industry.name}</h3>
          <p className="text-[14px] leading-relaxed text-mist-dim">{industry.description}</p>
        </div>
      </div>
      <ul
        aria-label={`Common ${industry.name.toLowerCase()} solutions`}
        className="flex flex-wrap content-start gap-1.5 pl-9 md:pl-0">
        {industry.solutions.map((solution) =>
        <li
          key={solution}
          className="rounded-md border border-line bg-white/[0.02] px-2 py-1 text-[12px] text-mist-dim">

            {solution}
          </li>
        )}
      </ul>
    </article>);

}
