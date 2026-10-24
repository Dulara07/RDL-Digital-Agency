import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { NotFound } from './NotFound';
import { ResultValue } from '../components/ui/ResultValue';
import { ArrowLeftIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { TechnologyBadge } from '../components/ui/TechnologyBadge';
import { CTASection } from '../components/sections/CTASection';
import { caseStudies, getCaseStudy } from '../data/work';
import { site } from '../data/site';

export function WorkDetail() {
  const { slug = '' } = useParams();
  const study = getCaseStudy(slug);

  if (!study) return <NotFound />;

  const others = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${study.client} — ${study.projectType} | ${site.name}`}
        description={study.summary}
        image={study.image}
        type="article"
        structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: `${study.client} — ${study.projectType}`,
          description: study.summary,
          image: `${site.url}${study.image}`,
          about: study.industry,
          creator: { '@type': 'Organization', name: site.name, url: site.url }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Work', item: `${site.url}/work` },
          { '@type': 'ListItem', position: 3, name: study.client, item: `${site.url}/work/${study.slug}` }]

        }]} />



      <article>
        <header className="border-b border-line pt-[104px] md:pt-[132px]">
          <div className="shell pb-12">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-[13px] text-mist-dim transition-colors duration-200 ease-premium hover:text-white">
              
              <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
              All work
            </Link>
            <p className="mt-8 text-[12px] uppercase tracking-[0.16em] text-accent-soft">
              {study.industry} · {study.projectType} · {study.year}
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-[clamp(2.1rem,5vw,3.6rem)] font-semibold leading-[1.05] tracking-tightest text-white">
              {study.client}
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-mist-dim md:text-[18px]">
              {study.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {study.liveUrl &&
              <Button href={study.liveUrl} withArrow>
                  View Live Project
                </Button>
              }
              <Button to="/contact" variant={study.liveUrl ? 'secondary' : 'primary'}>
                Start a Similar Project
              </Button>
            </div>
          </div>
        </header>

        <div className="shell py-14 md:py-20">
          <Reveal className="overflow-hidden rounded-xl border border-line">
            <img
              src={study.image}
              alt={`${study.client} — ${study.projectType}`}
              className="aspect-[16/9] w-full object-cover"
              loading="lazy" />
            
          </Reveal>

          <Reveal>
            <dl className="mt-12 grid gap-8 border-y border-line py-10 sm:grid-cols-3">
              {study.results.map((result) =>
              <div key={result.label} className="flex flex-col-reverse gap-2">
                  <dt className="text-[12px] uppercase tracking-[0.12em] text-mist-faint">
                    {result.label}
                  </dt>
                  <dd>
                    <ResultValue
                    value={result.value}
                    figureClassName="text-[clamp(2rem,3.5vw,2.8rem)]"
                    textClassName="text-[clamp(1.25rem,2vw,1.6rem)]" />

                  </dd>
                </div>
              )}
            </dl>
          </Reveal>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div className="flex flex-col gap-10">
              {[
              { title: 'Client challenge', body: study.challenge },
              { title: 'Strategy', body: study.strategy },
              { title: 'What we delivered', body: study.solution }].
              map((block) =>
              <Reveal key={block.title} className="flex flex-col gap-3">
                  <h2 className="text-[12px] uppercase tracking-[0.16em] text-accent-soft">
                    {block.title}
                  </h2>
                  <p className="max-w-2xl text-[15px] leading-relaxed text-mist-dim">{block.body}</p>
                </Reveal>
              )}

              <Reveal className="flex flex-col gap-4">
                <h2 className="text-[12px] uppercase tracking-[0.16em] text-accent-soft">
                  Project gallery
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {study.gallery.map((item) =>
                  <figure key={item.caption} className="flex flex-col gap-2">
                      <img
                      src={item.src}
                      alt={item.caption}
                      loading="lazy"
                      className="aspect-[16/10] w-full rounded-lg border border-line object-cover transition-transform duration-500 ease-premium hover:scale-[1.01]" />
                    
                      <figcaption className="text-[12px] text-mist-faint">{item.caption}</figcaption>
                    </figure>
                  )}
                </div>
              </Reveal>
            </div>

            <Reveal className="flex h-fit flex-col gap-8 rounded-xl border border-line bg-ink-800/40 p-6 lg:sticky lg:top-28">
              <div className="flex flex-col gap-3">
                <h2 className="text-[12px] uppercase tracking-[0.16em] text-mist-faint">
                  Services delivered
                </h2>
                <ul className="flex flex-col gap-2">
                  {study.services.map((service) =>
                  <li key={service} className="flex items-baseline gap-2.5 text-[13.5px] text-mist-dim">
                      <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {service}
                    </li>
                  )}
                </ul>
              </div>
              <div className="flex flex-col gap-3 border-t border-line pt-6">
                <h2 className="text-[12px] uppercase tracking-[0.16em] text-mist-faint">
                  Technologies used
                </h2>
                <ul className="flex flex-wrap gap-1.5">
                  {study.technologies.map((tech) =>
                  <li key={tech}>
                      <TechnologyBadge>{tech}</TechnologyBadge>
                    </li>
                  )}
                </ul>
              </div>
            </Reveal>
          </div>

          <section aria-labelledby="more-work" className="mt-20 border-t border-line pt-12">
            <h2 id="more-work" className="text-[12px] uppercase tracking-[0.18em] text-mist-faint">
              More work
            </h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {others.map((item) =>
              <li key={item.slug}>
                  <Link
                  to={`/work/${item.slug}`}
                  className="group flex flex-col gap-3 rounded-lg border border-line p-5 transition-[border-color,transform] duration-300 ease-premium hover:-translate-y-0.5 hover:border-line-strong">
                  
                    <span className="text-[12px] uppercase tracking-[0.12em] text-mist-faint">
                      {item.projectType}
                    </span>
                    <span className="text-[16px] font-medium text-white">{item.client}</span>
                    <span className="text-[13px] leading-relaxed text-mist-faint">
                      {item.results[0].label} {item.results[0].value}
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </section>
        </div>
      </article>

      <CTASection
        eyebrow="Similar challenge?"
        title="Let’s see whether the same approach fits your business."
        primaryLabel="Start a Project" />
      
    </>);

}