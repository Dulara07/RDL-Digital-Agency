import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import type { Post } from '../../types';

const formatDate = (iso: string) =>
new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export function BlogCard({ post }: {post: Post;}) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        to={`/insights/${post.slug}`}
        data-cursor="grow"
        className="flex h-full flex-col gap-5"
        aria-label={post.title}>
        
        <div className="overflow-hidden rounded-lg border border-line">
          <img
            src={post.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="aspect-[3/2] w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.03]" />
          
        </div>
        <div className="flex items-center gap-2 text-[11.5px] uppercase tracking-[0.12em] text-mist-faint">
          <span className="text-accent-soft">{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="text-balance text-[19px] font-medium leading-snug tracking-tight text-white">
          {post.title}
        </h3>
        <p className="text-[13.5px] leading-relaxed text-mist-faint">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] text-mist-dim transition-colors duration-200 ease-premium group-hover:text-accent-soft">
          Read article
          <ArrowRightIcon
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
          
        </span>
      </Link>
    </article>);

}