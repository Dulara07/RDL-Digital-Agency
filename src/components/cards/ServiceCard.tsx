import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import type { Service } from '../../types';

export function ServiceCard({ service }: {service: Service;}) {
  const Icon = service.icon;
  const target = service.hasDetailPage ? `/services/${service.slug}` : '/contact';

  return (
    <Link
      to={target}
      data-cursor="grow"
      className="group relative flex h-full flex-col gap-4 border-b border-r border-line bg-transparent p-6 transition-[background-color,transform] duration-300 ease-premium hover:-translate-y-0.5 hover:bg-white/[0.025] md:p-7">
      
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px scale-x-0 bg-accent transition-transform duration-300 ease-premium group-hover:scale-x-100" />
      
      <Icon
        aria-hidden="true"
        className="h-5 w-5 text-mist-dim transition-[color,transform] duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:text-accent-soft" />
      
      <h3 className="text-[16.5px] font-medium tracking-tight text-white">{service.name}</h3>
      <p className="text-[13.5px] leading-relaxed text-mist-faint">{service.summary}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[12.5px] text-mist-dim transition-colors duration-200 ease-premium group-hover:text-accent-soft">
        {service.hasDetailPage ? 'Explore service' : 'Discuss this'}
        <ArrowRightIcon
          aria-hidden="true"
          className="h-3.5 w-3.5 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
        
      </span>
    </Link>);

}