import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { ResultValue } from '../ui/ResultValue';
import type { CaseStudy } from '../../types';

interface PortfolioCardProps {
  study: CaseStudy;
  featured?: boolean;
}

export function PortfolioCard({ study, featured = false }: PortfolioCardProps) {
  return (
    <article
      className={[
      'group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-ink-800/60',
      'transition-[transform,border-color] duration-300 ease-premium hover:-translate-y-1 hover:border-line-strong',
      featured ? 'lg:flex-row' : ''].
      join(' ')}>

      <div className={['relative overflow-hidden', featured ? 'lg:w-[54%]' : ''].join(' ')}>
        <img
          src={study.image}
          alt={`${study.client} — ${study.projectType}`}
          loading="lazy"
          decoding="async"
          className={[
          'h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.03]',
          featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[340px]' : 'aspect-[16/10]'].
          join(' ')} />

        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-line-strong bg-ink-950/80 px-2.5 py-1 text-[12px] uppercase tracking-[0.12em] text-mist-dim backdrop-blur-sm">
          {study.projectType}
        </span>
      </div>

      <div className={['flex flex-1 flex-col gap-4 p-6 md:p-7', featured ? 'lg:justify-center' : ''].join(' ')}>
        <div className="flex items-center gap-2 text-[12.5px] text-mist-faint">
          <span>{study.industry}</span>
          <span aria-hidden="true">·</span>
          <span>{study.year}</span>
        </div>
        <h3
          className={[
          'font-semibold tracking-tight text-white',
          featured ? 'text-[22px] md:text-[26px]' : 'text-[18px]'].
          join(' ')}>

          {/* Stretched link: the whole card opens the case study page. */}
          <Link
            to={`/work/${study.slug}`}
            data-cursor="grow"
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">

            {study.client}
          </Link>
        </h3>
        <p className="text-[14px] leading-relaxed text-mist-dim">{study.summary}</p>

        <dl className="mt-1 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-4">
          {study.results.map((result) =>
          <div key={result.label} className="flex flex-col gap-1">
              <dt className="order-2 text-[12px] uppercase tracking-[0.12em] text-mist-faint">
                {result.label}
              </dt>
              <dd className="order-1">
                <ResultValue value={result.value} figureClassName="text-[22px]" textClassName="text-[15px]" />
              </dd>
            </div>
          )}
        </dl>

        <span
          aria-hidden="true"
          className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-[13px] text-accent-soft transition-colors duration-200 ease-premium group-hover:text-white">

          View case study
          <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>);

}
