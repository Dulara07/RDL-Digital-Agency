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
          eyebrow="Our services"
          title={
          <span id="services-heading">
              Everything we can help with, in plain words
            </span>
          }
          subtitle="Each service starts with what it does for your business, then its starting price. The technical name is in the small tag, in case you have heard it before." />
        

        <div className="mt-14 flex flex-col gap-16">
          {serviceGroups.map((group) =>
          <div key={group.id}>
              <Reveal className="flex flex-col gap-3 border-t border-line pt-6 md:flex-row md:items-baseline md:justify-between">
                <div className="flex items-center gap-4">
                  <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg font-mono text-[12px] font-semibold text-ink-950 ${
                  group.id === 'digital-growth' ? 'bg-gradient-to-br from-coral to-amber' : 'bg-gradient-to-br from-aqua to-sky'}`
                  }>
                    {group.id === 'digital-growth' ? '01' : '02'}
                  </span>
                  <h3 className="text-[22px] font-medium tracking-tight text-white md:text-[26px]">
                    {group.label}
                  </h3>
                </div>
                <p className="max-w-md text-[13.5px] text-mist-faint">{group.description}</p>
              </Reveal>

              <div className="mt-8 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
                {servicesByGroup(group.id).map((service, index, list) => {
                // A lone trailing card stretches across the row instead of
                // leaving empty bordered cells beside it.
                const isLast = index === list.length - 1;
                const loneOnTwo = isLast && list.length % 2 === 1;
                const loneOnThree = isLast && list.length % 3 === 1;
                return (
                  <Reveal
                    key={service.slug}
                    delay={Math.min(index * 0.04, 0.2)}
                    className={[
                    loneOnTwo ? 'sm:col-span-2' : '',
                    loneOnThree ? 'lg:col-span-3' : loneOnTwo ? 'lg:col-span-1' : ''].
                    join(' ')}>

                      <ServiceCard service={service} wide={loneOnTwo} />
                    </Reveal>);

              })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}