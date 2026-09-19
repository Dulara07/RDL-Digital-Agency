import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ActivityIcon,
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
{ id: 'auto', label: 'Automation', icon: WorkflowIcon, x: 78, y: 54 },
{ id: 'cloud', label: 'Cloud', icon: CloudIcon, x: 2, y: 62 },
{ id: 'ai', label: 'AI', icon: BrainCircuitIcon, x: 42, y: 88 }];


/**
 * Digital business ecosystem: a live performance panel surrounded by the
 * connected systems that feed it. Motion is limited to the data itself.
 */
export function HeroVisual() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[5/4.4] w-full max-w-[540px]" aria-hidden="true">
      {/* Connection field */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
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
          stroke="rgba(110,86,255,0.28)"
          strokeWidth="0.25"
          strokeDasharray="1.6 1.6" />

        )}
      </svg>

      {/* Central performance panel */}
      <motion.div
        initial={prefersReduced ? undefined : { opacity: 0, y: 14, scale: 0.97 }}
        animate={prefersReduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        className="absolute left-1/2 top-1/2 w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-line-strong bg-ink-800/90 p-5 shadow-panel backdrop-blur-xl">
        
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-mist-faint">
              Growth performance
            </p>
            <p className="mt-1 font-display text-[28px] leading-none text-white">+41%</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-aqua/30 bg-aqua/10 px-2 py-1 text-[11px] text-aqua">
            <ActivityIcon className="h-3 w-3" />
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
          
          <circle cx="260" cy={92 - 82} r="3.5" fill="#fff" />
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-line pt-4">
          {[
          { label: 'Visitors', value: '18.4k' },
          { label: 'Leads', value: '312' },
          { label: 'Ad Return', value: '3.7x' }].
          map((metric) =>
          <div key={metric.label}>
              <p className="text-[15px] font-medium text-white">{metric.value}</p>
              <p className="text-[10.5px] uppercase tracking-[0.12em] text-mist-faint">
                {metric.label}
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Connected systems */}
      {nodes.map((node, index) =>
      <motion.div
        key={node.id}
        initial={prefersReduced ? undefined : { opacity: 0, scale: 0.96 }}
        animate={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.5 + index * 0.08, ease: [0.23, 1, 0.32, 1] }}
        className="absolute"
        style={{ left: `${node.x}%`, top: `${node.y}%` }}>
        
          <div
          className={`flex items-center gap-2 rounded-lg border border-line bg-ink-900/85 px-2.5 py-2 backdrop-blur-md ${
          prefersReduced ? '' : 'animate-drift'}`
          }
          style={{ animationDelay: `${index * 0.9}s` }}>
          
            <node.icon className="h-3.5 w-3.5 text-accent-soft" />
            <span className="text-[11.5px] text-mist-dim">{node.label}</span>
          </div>
        </motion.div>
      )}

      {/* Code fragment */}
      <motion.div
        initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
        animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.95 }}
        className="absolute bottom-[2%] right-0 hidden rounded-lg border border-line bg-ink-900/85 px-3 py-2.5 font-mono text-[10.5px] leading-relaxed text-mist-faint backdrop-blur-md sm:block">
        
        <span className="text-aqua">✓</span> New lead saved
        <br />
        <span className="text-accent-soft">from</span> website form · 2s ago
      </motion.div>
    </div>);

}