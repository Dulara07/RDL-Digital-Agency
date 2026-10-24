import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { NotFound } from './NotFound';
import { ArrowLeftIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { Reveal } from '../components/ui/Reveal';
import { BlogCard } from '../components/cards/BlogCard';
import { CTASection } from '../components/sections/CTASection';
import { getPost, posts } from '../data/insights';
import { site } from '../data/site';

const formatDate = (iso: string) =>
new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export function InsightDetail() {
  const { slug = '' } = useParams();
  const post = getPost(slug);

  if (!post) return <NotFound />;

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Seo
        title={`${post.title} | ${site.name}`}
        description={post.excerpt}
        image={post.image}
        type="article"
        structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          datePublished: post.date,
          author: { '@type': 'Organization', name: post.author, url: site.url },
          publisher: { '@type': 'Organization', name: site.name, url: site.url },
          image: `${site.url}${post.image}`,
          description: post.excerpt
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Insights', item: `${site.url}/insights` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${site.url}/insights/${post.slug}` }]

        }]} />



      <article className="pt-[104px] md:pt-[132px]">
        <header className="shell pb-10">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-[13px] text-mist-dim transition-colors duration-200 ease-premium hover:text-white">
            
            <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
            All insights
          </Link>
          <p className="mt-8 flex flex-wrap items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-mist-faint">
            <span className="text-accent-soft">{post.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-[clamp(2rem,4.6vw,3.3rem)] font-semibold leading-[1.07] tracking-tightest text-white">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-mist-dim md:text-[18px]">
            {post.excerpt}
          </p>
          <p className="mt-6 text-[13px] text-mist-faint">By {post.author}</p>
        </header>

        <div className="shell">
          <Reveal className="overflow-hidden rounded-xl border border-line">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[3/2] w-full object-cover"
              loading="lazy" />
            
          </Reveal>
        </div>

        <div className="shell max-w-[720px] py-14 md:py-16">
          {post.body.map((block, index) =>
          <Reveal key={block.heading ?? index} className="mb-9 flex flex-col gap-4">
              {block.heading &&
            <h2 className="mt-3 text-[22px] font-medium tracking-tight text-white md:text-[26px]">
                  {block.heading}
                </h2>
            }
              {block.paragraphs.map((paragraph) =>
            <p key={paragraph.slice(0, 32)} className="text-[16px] leading-[1.75] text-mist-dim">
                  {paragraph}
                </p>
            )}
            </Reveal>
          )}
        </div>

        <section aria-labelledby="related-heading" className="shell border-t border-line py-14">
          <h2 id="related-heading" className="text-[12px] uppercase tracking-[0.18em] text-mist-faint">
            Keep reading
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-8">
            {related.map((item) =>
            <BlogCard key={item.slug} post={item} />
            )}
          </div>
        </section>
      </article>

      <CTASection
        eyebrow="Put it to work"
        title="Want help applying this to your business?"
        primaryLabel="Start a Project" />
      
    </>);

}