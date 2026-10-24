import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { IndustryCard } from '../cards/IndustryCard';
import { industries } from '../../data/industries';

interface IndustriesSectionProps {
  limit?: number;
  showAction?: boolean;
}

export function IndustriesSection({ limit, showAction = true }: IndustriesSectionProps) {
  const items = limit ? industries.slice(0, limit) : industries;

  return (
    <section aria-labelledby="industries-heading" className="relative">
      {/* Split layout: the heading stays pinned while the sector rows scroll past. */}
      <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-20">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Industries"
            title={<span id="industries-heading">Sector knowledge that shortens discovery</span>}
            subtitle="The solutions we most often deploy in each sector." />

          {showAction &&
          <div>
              <Button to="/industries" variant="secondary" size="sm" withArrow>
                All industries
              </Button>
            </div>
          }
        </div>

        <div className="border-t border-line">
          {items.map((industry) =>
          <IndustryCard key={industry.id} industry={industry} />
          )}
        </div>
      </div>
    </section>);

}
