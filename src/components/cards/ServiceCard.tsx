import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { enquiryOptionFor } from '../../data/services';
import { servicePrices } from '../../data/pricing';
import { PriceTag } from '../ui/PriceTag';
import type { Service } from '../../types';

/** Warm for "get more customers", cool for "run your business" — matches the group headers. */
const groupTone = {
  'digital-growth': { icon: 'bg-coral/15 text-coral', bar: 'from-coral to-amber' },
  technology: { icon: 'bg-aqua/15 text-aqua', bar: 'from-aqua to-sky' }
} as const;

export function ServiceCard({ service, wide = false }: {service: Service;wide?: boolean;}) {
  const Icon = service.icon;
  const tone = groupTone[service.group];
  const enquiry = enquiryOptionFor[service.slug];
  const target = service.hasDetailPage ?
  `/services/${service.slug}` :
  `/contact?service=${encodeURIComponent(enquiry ?? 'Other')}#form`;

  return (
    <Link
      to={target}
      data-cursor="grow"
      className={[
      'group relative flex h-full flex-col gap-3 border-b border-r border-line bg-transparent p-5 transition-[background-color,transform] duration-300 ease-premium hover:-translate-y-0.5 hover:bg-white/[0.025] sm:gap-4 md:p-7',
      // A full-row card lays out horizontally so it does not look stretched.
      wide ? 'sm:flex-row sm:items-start sm:gap-6' : ''].
      join(' ')}>

      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 ease-premium group-hover:scale-x-100 ${tone.bar}`} />

      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 ${tone.icon}`}>
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>

      <div className={['flex flex-1 flex-col gap-2.5 sm:gap-3', wide ? 'sm:max-w-2xl' : ''].join(' ')}>
        {/* Everyday wording leads; the industry term sits underneath for people searching for it. */}
        <h3 className="text-[17.5px] font-medium leading-snug tracking-tight text-white">{service.plainName}</h3>
        <span className="w-fit rounded-md border border-line bg-white/[0.03] px-2 py-0.5 text-[12px] text-mist-dim">
          {service.name}
        </span>
        <p className="text-[14.5px] leading-relaxed text-mist-dim">{service.summary}</p>
        <PriceTag price={servicePrices[service.slug]} className="mt-1 border-t border-line pt-3" />
      </div>
      <span
        className={[
        'mt-auto inline-flex items-center gap-1.5 pt-1 text-[13px] text-mist-dim transition-colors duration-200 ease-premium group-hover:text-accent-soft sm:pt-3',
        wide ? 'sm:ml-auto sm:mt-0 sm:shrink-0 sm:pt-0' : ''].
        join(' ')}>

        {service.hasDetailPage ? 'See how it works' : 'Ask us about this'}
        <ArrowRightIcon
          aria-hidden="true"
          className="h-3.5 w-3.5 transition-transform duration-300 ease-premium group-hover:translate-x-1" />

      </span>
    </Link>);

}
