import React from 'react';
import { Seo } from '../components/ui/Seo';
import { Button } from '../components/ui/Button';
import { AnimatedBackground } from '../components/ui/AnimatedBackground';
import { site } from '../data/site';

export function NotFound() {
  return (
    <>
      <Seo
        title={`Page not found | ${site.name}`}
        description="The page you were looking for does not exist."
        noindex />

      <section className="relative overflow-hidden">
        <AnimatedBackground variant="aurora" />
        <div className="shell relative flex min-h-[70vh] flex-col items-start justify-center gap-6 py-24">
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-accent-soft">
            Error 404
          </span>
          <h1 className="max-w-2xl text-balance text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.05] tracking-tightest text-white">
            That page does not exist.
          </h1>
          <p className="max-w-xl text-[16px] leading-relaxed text-mist-dim">
            The link may be outdated. Start from the homepage, or tell us what you were looking for.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button to="/" size="lg" withArrow>
              Back to Home
            </Button>
            <Button to="/contact" size="lg" variant="secondary">
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </>);

}