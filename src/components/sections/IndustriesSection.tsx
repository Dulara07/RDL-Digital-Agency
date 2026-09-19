import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { IndustryCard } from '../cards/IndustryCard';
import { industries } from '../../data/industries';

interface IndustriesSectionProps {
  limit?: number;
  showAction?: boolean;
}

export function IndustriesSection({ limit, showAction = true }: IndustriesSectionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const items = limit ? industries.slice(0, limit) : industries;

  return (
    <section aria-labelledby="industries-heading" className="relative">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Industries"
          title={<span id="industries-heading">Sector knowledge that shortens discovery</span>}
          subtitle="Hover or focus an industry to see the solutions we most often deploy there."
          action={
          showAction ?
          <Button to="/industries" variant="secondary" size="sm" withArrow>
                All industries
              </Button> :
          undefined
          } />
        

        <div className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {items.map((industry) =>
          <IndustryCard
            key={industry.id}
            industry={industry}
            active={activeId === industry.id}
            onActivate={() => setActiveId(industry.id)}
            onDeactivate={() => setActiveId((current) => current === industry.id ? null : current)} />

          )}
        </div>
      </div>
    </section>);

}