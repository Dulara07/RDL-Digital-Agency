import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { Packages } from '../components/sections/Packages';
import { AssessmentWizard } from '../components/sections/AssessmentWizard';
import { GrowthDashboard } from '../components/sections/GrowthDashboard';
import { CTASection } from '../components/sections/CTASection';
import { site } from '../data/site';

const solutions = [
{
  id: 'sme-growth',
  name: 'SME Growth',
  problem: 'Steady work, but not enough new demand to plan around.',
  outcome: 'A repeatable enquiry engine with tracking from click to closed sale.',
  includes: ['Positioning & offer', 'SEO & paid channels', 'Landing pages', 'Lead tracking'],
  href: '/services/digital-marketing'
},
{
  id: 'automation',
  name: 'Business Automation',
  problem: 'Skilled staff spending hours on data entry and chasing approvals.',
  outcome: 'Repetitive, predictable work handled automatically, with anything unusual sent to a real person.',
  includes: ['Mapping how work gets done', 'Automating repetitive tasks', 'Auto-generated documents', 'AI assistants'],
  href: '/services/software-development'
},
{
  id: 'transformation',
  name: 'Digital Transformation',
  problem: 'Systems and data fragmented across tools nobody fully owns.',
  outcome: 'A clear, step-by-step plan that brings your systems together without stopping the business.',
  includes: ['Reviewing what you have now', 'Planning how it fits together', 'Moving over in stages', 'Support through the change'],
  href: '/services/it-solutions'
},
{
  id: 'ecommerce',
  name: 'E-commerce',
  problem: 'Online sales exist but the unit economics do not work yet.',
  outcome: 'An online store built to turn visitors into customers who spend more and come back.',
  includes: ['Online store build', 'Payments & stock', 'Bringing customers back', 'Sales reporting'],
  href: '/services/ecommerce'
},
{
  id: 'software',
  name: 'Custom Software',
  problem: 'Off-the-shelf tools force you to work against your own process.',
  outcome: 'Software shaped around the workflow your team already trusts.',
  includes: ['Discovery', 'Web & mobile apps', 'Customer & business systems', 'Connecting your tools'],
  href: '/services/software-development'
}];


export function Solutions() {
  return (
    <>
      <Seo
        title={`Digital & Technology Solutions for SMEs in Sri Lanka | ${site.name}`}
        description="Outcome-based digital and technology solutions for SMEs in Sri Lanka: growth programmes, business automation, digital transformation, e-commerce and custom software." />
      
      <PageHero
        kicker="Solutions"
        title={
        <>
            Start from the outcome, not the{' '}
            <span className="font-display font-normal italic text-accent-soft">deliverable</span>.
          </>
        }
        intro="Services describe what we do. Solutions describe what changes in your business. Pick the outcome that sounds like your situation."
        actions={
        <Button to="/contact" size="lg" withArrow>
            Get a Digital Assessment
          </Button>
        } />
      

      <section aria-labelledby="solutions-heading">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            eyebrow="Outcome areas"
            title={<span id="solutions-heading">Five ways businesses work with us</span>} />
          

          <ul className="mt-12 flex flex-col">
            {solutions.map((solution, index) =>
            <Reveal
              as="li"
              key={solution.id}
              id={solution.id}
              delay={Math.min(index * 0.05, 0.2)}
              className="group scroll-mt-28 border-t border-line py-9 last:border-b">
              
                <div className="grid gap-6 lg:grid-cols-[0.5fr_1fr_0.7fr] lg:items-start lg:gap-10">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11.5px] text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[22px] font-medium tracking-tight text-white">
                      {solution.name}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-[14.5px] leading-relaxed text-mist-dim">
                      <span className="text-mist-faint">Problem — </span>
                      {solution.problem}
                    </p>
                    <p className="text-[14.5px] leading-relaxed text-white">
                      <span className="text-mist-faint">Outcome — </span>
                      {solution.outcome}
                    </p>
                    <ul className="mt-1 flex flex-wrap gap-1.5">
                      {solution.includes.map((item) =>
                    <li
                      key={item}
                      className="rounded-md border border-line bg-white/[0.02] px-2 py-1 text-[11.5px] text-mist-faint">
                      
                          {item}
                        </li>
                    )}
                    </ul>
                  </div>
                  <div className="lg:text-right">
                    <Button to={solution.href} variant="secondary" size="sm">
                      <span className="inline-flex items-center gap-2">
                        Explore approach
                        <ArrowRightIcon
                        aria-hidden="true"
                        className="h-3.5 w-3.5 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
                      
                      </span>
                    </Button>
                  </div>
                </div>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      <GrowthDashboard />
      <Packages />
      <AssessmentWizard />
      <CTASection
        eyebrow="Get started"
        title="Describe your situation — we will map it to a solution."
        primaryLabel="Discuss Your Business" />
      
    </>);

}