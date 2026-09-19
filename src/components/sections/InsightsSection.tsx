import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { BlogCard } from '../cards/BlogCard';
import { posts } from '../../data/insights';

export function InsightsSection() {
  return (
    <section aria-labelledby="insights-heading" className="relative">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Insights"
          title={<span id="insights-heading">Notes from the work</span>}
          subtitle="Practical writing on marketing, technology and growth for small and medium businesses."
          action={
          <Button to="/insights" variant="secondary" size="sm" withArrow>
              All insights
            </Button>
          } />
        

        <div className="mt-12 grid gap-10 border-t border-line pt-12 md:grid-cols-3 md:gap-8">
          {posts.slice(0, 3).map((post, index) =>
          <Reveal key={post.slug} delay={index * 0.06} className="h-full">
              <BlogCard post={post} />
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}