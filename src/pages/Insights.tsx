import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { BlogCard } from '../components/cards/BlogCard';
import { CTASection } from '../components/sections/CTASection';
import { insightCategories, posts } from '../data/insights';
import { site } from '../data/site';

export function Insights() {
  const [category, setCategory] = useState('All');
  const prefersReduced = useReducedMotion();

  const visible = useMemo(
    () => category === 'All' ? posts : posts.filter((post) => post.category === category),
    [category]
  );

  return (
    <>
      <Seo
        title={`Insights | Digital Marketing & Software Tips for Sri Lankan SMEs | ${site.name}`}
        description="Practical writing on digital marketing, SEO, business technology, software, AI, SME growth and e-commerce for businesses in Sri Lanka." />
      
      <PageHero
        kicker="Insights"
        title={
        <>
            Notes from the{' '}
            <span className="font-display font-normal italic text-accent-soft">work</span>.
          </>
        }
        intro="What we have learned building and marketing for small and medium businesses — written for owners and operators, not for search engines." />
      

      <section aria-labelledby="articles-heading">
        <div className="shell py-16 md:py-20">
          <h2 id="articles-heading" className="sr-only">
            Articles
          </h2>
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            {insightCategories.map((item) => {
              const isActive = category === item;
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setCategory(item)}
                  className={[
                  'rounded-full border px-4 py-2 text-[13px] transition-[background-color,border-color,color] duration-200 ease-premium',
                  isActive ?
                  'border-accent bg-accent text-white' :
                  'border-line text-mist-dim hover:border-line-strong hover:text-white'].
                  join(' ')}>
                  
                  {item}
                </button>);

            })}
          </div>

          <div className="mt-12 grid gap-10 border-t border-line pt-12 md:grid-cols-3 md:gap-8">
            <AnimatePresence mode="popLayout">
              {visible.map((post, index) =>
              <motion.div
                key={post.slug}
                layout={!prefersReduced}
                initial={prefersReduced ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, y: 8 }}
                transition={{ duration: 0.26, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
                className="h-full">
                
                  <BlogCard post={post} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {visible.length === 0 &&
          <p className="mt-12 rounded-xl border border-line bg-ink-800/40 p-8 text-center text-[14px] text-mist-faint">
              No articles in this category yet — new writing is published monthly.
            </p>
          }
        </div>
      </section>

      <CTASection
        eyebrow="Apply it"
        title="Want this applied to your business instead of read about?"
        primaryLabel="Talk to an Expert" />
      
    </>);

}