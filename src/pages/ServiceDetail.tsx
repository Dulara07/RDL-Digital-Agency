import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { TechnologyBadge } from '../components/ui/TechnologyBadge';
import { FAQAccordion } from '../components/sections/FAQAccordion';
import { PortfolioCard } from '../components/cards/PortfolioCard';
import { CaseStudyModal } from '../components/sections/CaseStudyModal';
import { ContactSection } from '../components/sections/ContactSection';
import { CTASection } from '../components/sections/CTASection';
import { getServiceDetail } from '../data/serviceDetails';
import { getCaseStudies } from '../data/work';
import type { CaseStudy } from '../types';

export function ServiceDetail() {
  const { slug = '' } = useParams();
  const detail = getServiceDetail(slug);
  const [active, setActive] = React.useState<CaseStudy | null>(null);

  if (!detail) return <Navigate to="/services" replace />;

  const studies = getCaseStudies(detail.caseStudySlugs);

  return (
    <>
      <Seo
        title={detail.metaTitle}
        description={detail.metaDescription}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: detail.name,
          description: detail.metaDescription,
          serviceType: detail.name
        }} />
      

      <PageHero
        kicker={detail.heroKicker}
        title={
        <>
            {detail.heroHeadline}{' '}
            <span className="font-display font-normal italic text-accent-soft">
              {detail.heroHighlight}
            </span>
            .
          </>
        }
        intro={detail.heroSub}
        actions={
        <>
            <Button to="/contact" size="lg" withArrow>
              Discuss Your Business
            </Button>
            <Button to="/work" size="lg" variant="secondary">
              Related Work
            </Button>
          </>
        } />
      

      {/* Problem */}
      <section aria-labelledby="problem" className="relative">
        <div className="shell grid gap-12 py-20 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading eyebrow="The problem" title={<span id="problem">{detail.problem.headline}</span>} />
          <ul className="flex flex-col">
            {detail.problem.points.map((point, index) =>
            <Reveal
              as="li"
              key={point}
              delay={Math.min(index * 0.05, 0.2)}
              className="flex items-baseline gap-5 border-t border-line py-4 last:border-b">
              
                <span className="font-mono text-[11.5px] text-mist-faint/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[14.5px] leading-relaxed text-mist-dim">{point}</span>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section aria-labelledby="solution" className="border-y border-line bg-ink-950/60">
        <div className="shell py-20 md:py-24">
          <SectionHeading
            eyebrow="Our solution"
            title={<span id="solution">{detail.solution.headline}</span>}
            subtitle={detail.solution.body} />
          
          <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
            {detail.solution.pillars.map((pillar, index) =>
            <Reveal
              as="li"
              key={pillar.title}
              delay={index * 0.05}
              className="flex flex-col gap-3 bg-ink-900 p-7">
              
                <span className="font-mono text-[11.5px] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[17px] font-medium tracking-tight text-white">{pillar.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-mist-faint">{pillar.body}</p>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      {/* Capabilities */}
      <section aria-labelledby="capabilities">
        <div className="shell py-20 md:py-24">
          <SectionHeading eyebrow="Capabilities" title={<span id="capabilities">What is included</span>} />
          <ul className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {detail.capabilities.map((capability, index) =>
            <Reveal
              as="li"
              key={capability.name}
              delay={Math.min(index * 0.04, 0.2)}
              className="group flex flex-col gap-3 border-b border-r border-line p-6 transition-colors duration-300 ease-premium hover:bg-white/[0.025]">
              
                <capability.icon
                aria-hidden="true"
                className="h-4 w-4 text-mist-faint transition-colors duration-300 ease-premium group-hover:text-accent-soft" />
              
                <h3 className="text-[16px] font-medium tracking-tight text-white">{capability.name}</h3>
                <p className="text-[13px] leading-relaxed text-mist-faint">{capability.detail}</p>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      {/* Process + Technology */}
      <section aria-labelledby="engagement" className="border-y border-line bg-ink-950/60">
        <div className="shell grid gap-14 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="How it runs"
              title={<span id="engagement">Engagement process</span>}
              level="h2" />
            
            <ol className="mt-10 flex flex-col">
              {detail.process.map((step) =>
              <Reveal as="li" key={step.step} className="flex gap-6 border-t border-line py-5">
                  <span className="font-display text-[22px] leading-none text-accent-soft">
                    {step.step}
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className="text-[16px] font-medium text-white">{step.title}</span>
                    <span className="text-[13.5px] leading-relaxed text-mist-faint">{step.body}</span>
                  </span>
                </Reveal>
              )}
            </ol>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent-soft">
                Technology
              </h2>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {detail.technologies.map((tech) =>
                <li key={tech}>
                    <TechnologyBadge>{tech}</TechnologyBadge>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent-soft">
                Business benefits
              </h2>
              <ul className="mt-5 flex flex-col gap-4">
                {detail.benefits.map((benefit) =>
                <li
                  key={benefit.title}
                  className="flex gap-4 rounded-lg border border-line bg-white/[0.02] p-5">
                  
                    <benefit.icon
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                  
                    <span className="flex flex-col gap-1">
                      <span className="text-[15px] font-medium text-white">{benefit.title}</span>
                      <span className="text-[13px] leading-relaxed text-mist-faint">{benefit.body}</span>
                    </span>
                  </li>
                )}
              </ul>
            </div>

            <ul className="flex flex-col gap-2.5 rounded-lg border border-line bg-ink-800/40 p-5">
              {['Fixed-price discovery', 'Two-week review cadence', 'Documented handover'].map(
                (item) =>
                <li key={item} className="flex items-center gap-2.5 text-[13.5px] text-mist-dim">
                    <CheckIcon aria-hidden="true" className="h-3.5 w-3.5 text-aqua" />
                    {item}
                  </li>

              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section aria-labelledby="related-work">
        <div className="shell py-20 md:py-24">
          <SectionHeading
            eyebrow="Proof"
            title={<span id="related-work">Related case studies</span>}
            action={
            <Button to="/work" variant="secondary" size="sm" withArrow>
                All work
              </Button>
            } />
          
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {studies.map((study) =>
            <Reveal key={study.slug}>
                <PortfolioCard study={study} onOpen={() => setActive(study)} />
              </Reveal>
            )}
          </div>
        </div>
        <CaseStudyModal study={active} onClose={() => setActive(null)} />
      </section>

      {/* FAQ */}
      <section aria-labelledby="service-faq" className="border-y border-line bg-ink-950/60">
        <div className="shell grid gap-12 py-20 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="FAQ" title={<span id="service-faq">Common questions</span>} />
          <Reveal>
            <FAQAccordion items={detail.faqs} idPrefix={`faq-${detail.slug}`} />
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title={`Let’s talk about ${detail.name.toLowerCase()}.`}
        body="A short call is enough to establish whether this is the right investment for you right now."
        primaryLabel="Talk to an Expert"
        secondaryLabel="See Our Process"
        secondaryTo="/about" />
      
      <ContactSection />
    </>);

}