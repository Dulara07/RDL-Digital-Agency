import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { TechnologyBadge } from '../ui/TechnologyBadge';
import type { CaseStudy } from '../../types';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  return (
    <Modal open={Boolean(study)} onClose={onClose} label={study ? `${study.client} case study` : 'Case study'}>
      {study &&
      <div className="max-h-[86vh] overflow-y-auto">
          <img
          src={study.image}
          alt={`${study.client} — ${study.projectType}`}
          className="aspect-[16/9] w-full object-cover"
          loading="lazy" />
        
          <div className="flex flex-col gap-8 p-6 md:p-9">
            <header className="flex flex-col gap-3">
              <p className="text-[11.5px] uppercase tracking-[0.14em] text-accent-soft">
                {study.industry} · {study.projectType} · {study.year}
              </p>
              <h2 className="text-[26px] font-semibold tracking-tight text-white md:text-[32px]">
                {study.client}
              </h2>
              <p className="text-[14.5px] leading-relaxed text-mist-dim">{study.summary}</p>
            </header>

            <dl className="grid grid-cols-3 gap-6 border-y border-line py-6">
              {study.results.map((result) =>
            <div key={result.label} className="flex flex-col-reverse gap-1.5">
                  <dt className="text-[11px] uppercase tracking-[0.12em] text-mist-faint">
                    {result.label}
                  </dt>
                  <dd className="font-display text-[26px] leading-none text-white">{result.value}</dd>
                </div>
            )}
            </dl>

            <div className="grid gap-7 md:grid-cols-2">
              {[
            { title: 'The challenge', body: study.challenge },
            { title: 'Strategy', body: study.strategy }].
            map((block) =>
            <section key={block.title} className="flex flex-col gap-2.5">
                  <h3 className="text-[11.5px] uppercase tracking-[0.14em] text-mist-faint">
                    {block.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-mist-dim">{block.body}</p>
                </section>
            )}
            </div>

            <section className="flex flex-col gap-2.5">
              <h3 className="text-[11.5px] uppercase tracking-[0.14em] text-mist-faint">
                What we delivered
              </h3>
              <p className="text-[14px] leading-relaxed text-mist-dim">{study.solution}</p>
            </section>

            <div className="grid gap-7 md:grid-cols-2">
              <section className="flex flex-col gap-3">
                <h3 className="text-[11.5px] uppercase tracking-[0.14em] text-mist-faint">
                  Services delivered
                </h3>
                <ul className="flex flex-col gap-2">
                  {study.services.map((service) =>
                <li key={service} className="flex items-baseline gap-2.5 text-[13.5px] text-mist-dim">
                      <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {service}
                    </li>
                )}
                </ul>
              </section>
              <section className="flex flex-col gap-3">
                <h3 className="text-[11.5px] uppercase tracking-[0.14em] text-mist-faint">
                  Technologies used
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {study.technologies.map((tech) =>
                <li key={tech}>
                      <TechnologyBadge>{tech}</TechnologyBadge>
                    </li>
                )}
                </ul>
              </section>
            </div>

            <section className="flex flex-col gap-3">
              <h3 className="text-[11.5px] uppercase tracking-[0.14em] text-mist-faint">
                Project gallery
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {study.gallery.map((item) =>
              <figure key={item.caption} className="flex flex-col gap-2">
                    <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-lg border border-line object-cover" />
                
                    <figcaption className="text-[12px] text-mist-faint">{item.caption}</figcaption>
                  </figure>
              )}
              </div>
            </section>

            <div className="flex flex-col gap-3 border-t border-line pt-7 sm:flex-row">
              <Button href={study.liveUrl} withArrow>
                View Live Project
              </Button>
              <Button to="/contact" variant="secondary">
                Start a Similar Project
              </Button>
              <Button to={`/work/${study.slug}`} variant="ghost">
                Full case study page
              </Button>
            </div>
          </div>
        </div>
      }
    </Modal>);

}