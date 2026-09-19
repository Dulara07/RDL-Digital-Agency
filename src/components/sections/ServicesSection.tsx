import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { ServiceCard } from '../cards/ServiceCard';
import { serviceGroups, servicesByGroup } from '../../data/services';

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Capabilities"
          title={
          <span id="services-heading">
              Everything your business needs to grow digitally
            </span>
          }
          subtitle="From marketing campaigns to custom software, we bring strategy, creativity and technology together under one roof." />
        

        <div className="mt-14 flex flex-col gap-16">
          {serviceGroups.map((group) =>
          <div key={group.id}>
              <Reveal className="flex flex-col gap-3 border-t border-line pt-6 md:flex-row md:items-baseline md:justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[12px] text-accent">
                    {group.id === 'digital-growth' ? '01' : '02'}
                  </span>
                  <h3 className="text-[22px] font-medium tracking-tight text-white md:text-[26px]">
                    {group.label}
                  </h3>
                </div>
                <p className="max-w-md text-[13.5px] text-mist-faint">{group.description}</p>
              </Reveal>

              <div className="mt-8 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
                {servicesByGroup(group.id).map((service, index) =>
              <Reveal key={service.slug} delay={Math.min(index * 0.04, 0.2)}>
                    <ServiceCard service={service} />
                  </Reveal>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}