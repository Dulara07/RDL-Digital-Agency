import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { InfoIcon, TrendingUpIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { channelSplit, dashboardMetrics, revenueSeries } from '../../data/dashboard';

const W = 640;
const H = 220;

const points = revenueSeries.map((point, index) => ({
  x: index / (revenueSeries.length - 1) * W,
  y: H - point.value / 100 * (H - 24),
  ...point
}));

const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

export function GrowthDashboard() {
  const prefersReduced = useReducedMotion();

  return (
    <section aria-labelledby="dashboard-heading" className="relative">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Data-driven delivery"
          title={<span id="dashboard-heading">Every decision has a number behind it</span>}
          subtitle="This is the shape of reporting our clients receive each month — one view of channels, pipeline and revenue." />
        

        <Reveal className="mt-12 overflow-hidden rounded-xl border border-line bg-ink-800/50">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-accent/40 bg-accent/10">
                <TrendingUpIcon className="h-3.5 w-3.5 text-accent-soft" aria-hidden="true" />
              </span>
              <h3 className="text-[15px] font-medium text-white">Growth overview · last 12 months</h3>
            </div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[12px] text-mist-faint">
              <InfoIcon className="h-3.5 w-3.5" aria-hidden="true" />
              Demonstration data — example figures, not a client account
            </p>
          </div>

          <div className="grid gap-px bg-line lg:grid-cols-[1.6fr_1fr]">
            <div className="bg-ink-900 p-6 md:p-8">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.14em] text-mist-faint">
                    Revenue from marketing
                  </p>
                  <p className="mt-1.5 font-display text-[36px] leading-none text-white">Rs. 8.6M</p>
                </div>
                <span className="rounded-full border border-aqua/30 bg-aqua/10 px-2.5 py-1 text-[12px] text-aqua">
                  +41% vs last year
                </span>
              </div>

              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="mt-6 w-full"
                role="img"
                aria-label="Example revenue trend rising across twelve months">
                
                <defs>
                  <linearGradient id="dashFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6E56FF" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#6E56FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0.25, 0.5, 0.75, 1].map((ratio) =>
                <line
                  key={ratio}
                  x1="0"
                  x2={W}
                  y1={H - ratio * (H - 24)}
                  y2={H - ratio * (H - 24)}
                  stroke="rgba(255,255,255,0.06)" />

                )}
                <motion.path
                  d={`${line} L${W},${H} L0,${H} Z`}
                  fill="url(#dashFill)"
                  initial={prefersReduced ? undefined : { opacity: 0 }}
                  whileInView={prefersReduced ? undefined : { opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }} />
                
                <motion.path
                  d={line}
                  fill="none"
                  stroke="#9483FF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={prefersReduced ? undefined : { pathLength: 0 }}
                  whileInView={prefersReduced ? undefined : { pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }} />
                
                {points.map((point) =>
                <circle key={point.month} cx={point.x} cy={point.y} r="2.5" fill="#0E0D23" stroke="#A391FF" />
                )}
              </svg>
              <ul className="mt-3 flex justify-between font-mono text-[11.5px] text-mist-faint">
                {revenueSeries.filter((_, index) => index % 2 === 0).map((point) =>
                <li key={point.month}>{point.month}</li>
                )}
              </ul>
            </div>

            <div className="flex flex-col gap-px bg-line">
              <div className="grid grid-cols-2 gap-px bg-line">
                {dashboardMetrics.slice(0, 4).map((metric) =>
                <div key={metric.id} className="bg-ink-900 p-5">
                    <p className="text-[12px] uppercase tracking-[0.12em] text-mist-faint">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-[22px] font-medium leading-none text-white">
                      {metric.value}
                    </p>
                    <p className="mt-1.5 text-[12px] text-aqua">{metric.delta}</p>
                  </div>
                )}
              </div>

              <div className="flex-1 bg-ink-900 p-5">
                <p className="text-[12px] uppercase tracking-[0.12em] text-mist-faint">
                  Channel contribution
                </p>
                <ul className="mt-4 flex flex-col gap-3.5">
                  {channelSplit.map((channel, index) =>
                  <li key={channel.channel} className="flex flex-col gap-1.5">
                      <span className="flex items-baseline justify-between text-[12.5px]">
                        <span className="text-mist-dim">{channel.channel}</span>
                        <span className="font-mono text-mist-faint">{channel.share}%</span>
                      </span>
                      <span className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.span
                        className="block h-full rounded-full bg-accent"
                        initial={prefersReduced ? undefined : { width: 0 }}
                        whileInView={{ width: `${channel.share * 2.4}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          delay: 0.2 + index * 0.06,
                          ease: [0.23, 1, 0.32, 1]
                        }} />
                      
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}