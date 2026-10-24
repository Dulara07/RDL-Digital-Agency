import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  BrainCircuitIcon,
  CloudIcon,
  GlobeIcon,
  UsersIcon,
  WorkflowIcon } from
'lucide-react';

const trend = [8, 22, 18, 34, 30, 48, 58, 54, 72, 84, 92, 100];

const linePath = trend.
map((value, index) => {
  const x = index / (trend.length - 1) * 260;
  const y = 92 - value / 100 * 82;
  return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
}).
join(' ');

const nodes = [
{ id: 'site', label: 'Website', icon: GlobeIcon, x: 8, y: 6 },
{ id: 'crm', label: 'Customers', icon: UsersIcon, x: 72, y: 2 },
{ id: 'auto', label: 'Less paperwork', icon: WorkflowIcon, x: 78, y: 54 },
{ id: 'cloud', label: 'Online 24/7', icon: CloudIcon, x: 2, y: 76 },
{ id: 'ai', label: 'AI', icon: BrainCircuitIcon, x: 42, y: 88 }];


/** Events the panel cycles through, so the hero reads as a business at work. */
const events = [
{ title: 'New enquiry received', detail: 'from website form' },
{ title: 'Order #1042 paid', detail: 'card payment · online shop' },
{ title: 'Invoice sent', detail: 'automatically · no typing' },
{ title: 'New 5★ review', detail: 'on Google Maps' }];


/** Ticks the example figures upward while the hero is on screen. */
function useLiveFigures(enabled: boolean) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const timer = window.setInterval(() => setTick((value) => value + 1), 3200);
    return () => window.clearInterval(timer);
  }, [enabled]);
  return {
    event: events[tick % events.length],
    eventKey: tick,
    visitors: 18420 + tick * 7,
    enquiries: 312 + Math.floor((tick + 3) / events.length)
  };
}

/**
 * Digital business ecosystem: a live performance panel surrounded by the
 * connected systems that feed it. Motion is limited to the data itself.
 */
export function HeroVisual() {
  const prefersReduced = useReducedMotion();
  const live = useLiveFigures(!prefersReduced);

  return (
    <div className="relative mx-auto w-full max-w-[540px] sm:aspect-[5/4.4]" aria-hidden="true">
      {/* Connection field (floating layout only — too cramped on phones) */}
      <svg className="absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[
        [14, 12, 50, 50],
        [78, 8, 50, 50],
        [84, 60, 50, 50],
        [8, 68, 50, 50],
        [48, 92, 50, 50]].
        map(([x1, y1, x2, y2], index) =>
        <line
          key={index}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          className="fx-flow"
          style={{ animationDuration: `${2.2 + index * 0.3}s` }}
          stroke="rgba(110,86,255,0.4)"
          strokeWidth="0.25"
          strokeDasharray="1.5 3" />

        )}
      </svg>

      {/* Central performance panel. Centering lives on the wrapper so it is not
          overridden by the transform framer-motion writes for the entrance. */}
      <div className="sm:absolute sm:left-1/2 sm:top-1/2 sm:w-[76%] sm:-translate-x-1/2 sm:-translate-y-1/2">
      <motion.div
        initial={prefersReduced ? undefined : { opacity: 0, y: 14, scale: 0.97 }}
        animate={prefersReduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        className="rounded-xl border border-line-strong bg-ink-800/90 p-5 shadow-panel backdrop-blur-xl">
        
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[12px] uppercase tracking-[0.14em] text-mist-faint">
              Example month online
            </p>
            <p className="mt-1 font-display text-[28px] leading-none text-white">+41%</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-aqua/30 bg-aqua/10 px-2 py-1 text-[12px] text-aqua">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
            </span>
            Live
          </span>
        </div>

        <svg viewBox="0 0 260 100" className="mt-4 h-[86px] w-full overflow-visible">
          <defs>
            <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6E56FF" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#6E56FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[24, 48, 72].map((y) =>
          <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          )}
          <motion.path
            d={`${linePath} L260,92 L0,92 Z`}
            fill="url(#heroFill)"
            initial={prefersReduced ? undefined : { opacity: 0 }}
            animate={prefersReduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }} />
          
          <motion.path
            d={linePath}
            fill="none"
            stroke="#9483FF"
            strokeWidth="2"
            strokeLinecap="round"
            initial={prefersReduced ? undefined : { pathLength: 0 }}
            animate={prefersReduced ? undefined : { pathLength: 1 }}
            transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1], delay: 0.35 }} />
          
          <circle className="fx fx-pulse" cx="260" cy={92 - 82} r="9" fill="#9483FF" />
          <circle cx="260" cy={92 - 82} r="3.5" fill="#fff" />
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-line pt-4">
          {[
          { label: 'Visitors', value: live.visitors.toLocaleString('en-US') },
          { label: 'Enquiries', value: String(live.enquiries) },
          { label: 'Return on ads', value: '3.7x' }].
          map((metric) =>
          <div key={metric.label}>
              <p className="text-[15px] font-medium tabular-nums text-white">{metric.value}</p>
              <p className="text-[11.5px] uppercase tracking-[0.12em] text-mist-faint">
                {metric.label}
              </p>
            </div>
          )}
        </div>
      </motion.div>
      </div>

      {/* Connected systems — a simple chip row on phones */}
      <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:hidden">
        {nodes.map((node) =>
        <li
          key={node.id}
          className="flex items-center gap-2 rounded-lg border border-line bg-ink-900/85 px-2.5 py-2">

            <node.icon className="h-3.5 w-3.5 text-accent-soft" />
            <span className="text-[12px] text-mist-dim">{node.label}</span>
          </li>
        )}
      </ul>

      {/* Connected systems — floating around the panel from sm up */}
      {nodes.map((node, index) =>
      <motion.div
        key={node.id}
        initial={prefersReduced ? undefined : { opacity: 0, scale: 0.96 }}
        animate={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.5 + index * 0.08, ease: [0.23, 1, 0.32, 1] }}
        className="absolute hidden sm:block"
        style={{ left: `${node.x}%`, top: `${node.y}%` }}>
        
          <div
          className={`flex items-center gap-2 rounded-lg border border-line bg-ink-900/85 px-2.5 py-2 backdrop-blur-md ${
          prefersReduced ? '' : 'animate-drift'}`
          }
          style={{ animationDelay: `${index * 0.9}s` }}>
          
            <node.icon className="h-3.5 w-3.5 text-accent-soft" />
            <span className="text-[12px] text-mist-dim">{node.label}</span>
          </div>
        </motion.div>
      )}

      {/* Code fragment */}
      <motion.div
        initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
        animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.95 }}
        className="absolute bottom-[2%] right-0 hidden min-w-[220px] rounded-lg border border-line bg-ink-900/85 px-3 py-2.5 font-mono text-[11.5px] leading-relaxed text-mist-faint backdrop-blur-md sm:block">
        
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={live.eventKey}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>

            <span className="text-aqua">✓</span> {live.event.title}
            <br />
            <span className="text-accent-soft">·</span> {live.event.detail}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>);

}