import React from 'react';

/**
 * Small scene illustrations for the "What do you need help with?" cards.
 * Inline SVG in the site palette so they stay crisp, light and on-brand.
 * The `fx-*` classes (index.css) add gentle looping motion; animated parts
 * sit in their own <g> so CSS transforms never fight SVG transform attributes.
 */

const C = {
  panel: '#1D1A3F',
  panel2: '#27234F',
  line: 'rgba(255,255,255,0.12)',
  faint: 'rgba(255,255,255,0.22)',
  text: 'rgba(231,233,239,0.85)',
  accent: '#6E56FF',
  soft: '#9483FF',
  aqua: '#3ED8D0',
  green: '#3DD68C',
  amber: '#F5B544'
};

const delay = (seconds: number): React.CSSProperties => ({ animationDelay: `${seconds}s` });

function Frame({ children, title }: {children: React.ReactNode;title: string;}) {
  return (
    // Decorative: the card heading already says the same thing in words.
    <svg viewBox="0 0 320 160" aria-hidden="true" data-scene={title} className="h-full w-full">
      <defs>
        <radialGradient id="goal-glow" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor={C.accent} stopOpacity="0.28" />
          <stop offset="100%" stopColor={C.accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="160" fill="url(#goal-glow)" />
      {children}
    </svg>);

}

/** Search bar with a top result and a map pin. */
function Found() {
  return (
    <Frame title="Your business at the top of Google search and Maps">
      <rect x="40" y="22" width="200" height="26" rx="13" fill={C.panel2} stroke={C.line} />
      <circle cx="56" cy="35" r="5" fill="none" stroke={C.soft} strokeWidth="2" />
      <line x1="60" y1="39" x2="64" y2="43" stroke={C.soft} strokeWidth="2" strokeLinecap="round" />
      <rect x="72" y="32" width="90" height="6" rx="3" fill={C.faint} />
      {/* blinking text cursor in the search box */}
      <rect className="fx-blink" x="166" y="30" width="2" height="10" rx="1" fill={C.soft} />
      {/* top result, highlighted */}
      <rect className="fx fx-glow" x="40" y="58" width="200" height="38" rx="8" fill={C.accent} fillOpacity="0.16" stroke={C.soft} strokeOpacity="0.6" />
      <rect x="52" y="67" width="96" height="7" rx="3.5" fill={C.soft} />
      <rect x="52" y="80" width="150" height="5" rx="2.5" fill={C.faint} />
      <text x="222" y="73" fontSize="9" fontFamily="Inter, sans-serif" fill={C.amber}>★★★★★</text>
      {/* lower results */}
      <rect x="40" y="104" width="200" height="16" rx="5" fill={C.panel} />
      <rect x="52" y="110" width="80" height="4" rx="2" fill={C.line} />
      <rect x="40" y="126" width="200" height="16" rx="5" fill={C.panel} />
      <rect x="52" y="132" width="110" height="4" rx="2" fill={C.line} />
      {/* map pin with a ripple under it */}
      <ellipse className="fx fx-pulse" cx="272" cy="126" rx="18" ry="6" fill={C.aqua} fillOpacity="0.5" />
      <g className="fx fx-bob">
        <path d="M272 70c-12 0-21 9-21 21 0 15 21 33 21 33s21-18 21-33c0-12-9-21-21-21z" fill={C.aqua} />
        <circle cx="272" cy="91" r="7" fill={C.panel} />
      </g>
    </Frame>);

}

/** Desktop browser and a phone showing the same site. */
function Website() {
  return (
    <Frame title="A modern website on a computer and a phone">
      <rect x="36" y="18" width="200" height="124" rx="10" fill={C.panel} stroke={C.line} />
      <rect x="36" y="18" width="200" height="18" rx="10" fill={C.panel2} />
      <circle cx="48" cy="27" r="3" fill="#FF6B6B" />
      <circle cx="58" cy="27" r="3" fill={C.amber} />
      <circle cx="68" cy="27" r="3" fill={C.green} />
      <rect x="50" y="48" width="96" height="9" rx="4.5" fill={C.text} />
      <rect x="50" y="62" width="70" height="9" rx="4.5" fill={C.soft} />
      <rect x="50" y="80" width="90" height="5" rx="2.5" fill={C.faint} />
      <rect x="50" y="90" width="76" height="5" rx="2.5" fill={C.faint} />
      <rect className="fx fx-glow" x="50" y="106" width="52" height="16" rx="8" fill={C.accent} />
      <rect x="158" y="46" width="64" height="76" rx="8" fill={C.accent} fillOpacity="0.18" />
      <circle className="fx fx-bob" cx="190" cy="76" r="14" fill={C.soft} fillOpacity="0.5" />
      <path d="M166 116l18-20 12 12 8-8 14 16z" fill={C.soft} fillOpacity="0.7" />
      {/* phone */}
      <g className="fx fx-bob" style={delay(0.6)}>
        <rect x="226" y="52" width="58" height="100" rx="11" fill={C.panel2} stroke={C.faint} />
        <rect x="248" y="58" width="14" height="3" rx="1.5" fill={C.line} />
        <rect x="236" y="70" width="38" height="6" rx="3" fill={C.text} />
        <rect x="236" y="80" width="28" height="6" rx="3" fill={C.soft} />
        <rect x="236" y="94" width="38" height="26" rx="5" fill={C.accent} fillOpacity="0.25" />
        <rect x="236" y="128" width="38" height="12" rx="6" fill={C.accent} />
      </g>
    </Frame>);

}

/** Product cards, a shopping bag and a payment card. */
function Sell() {
  return (
    <Frame title="An online shop with products, a cart and card payments">
      {[0, 1, 2].map((i) =>
      <g key={i} transform={`translate(${30 + i * 64} 26)`}>
          <g className="fx fx-bob" style={delay(i * 0.4)}>
            <rect width="56" height="80" rx="8" fill={C.panel} stroke={C.line} />
            <rect x="6" y="6" width="44" height="40" rx="5" fill={i === 1 ? C.aqua : C.soft} fillOpacity="0.25" />
            <circle cx="28" cy="26" r="10" fill={i === 1 ? C.aqua : C.soft} fillOpacity="0.6" />
            <rect x="6" y="52" width="34" height="5" rx="2.5" fill={C.faint} />
            <rect x="6" y="62" width="22" height="7" rx="3.5" fill={C.text} />
          </g>
        </g>
      )}
      {/* bag with an item counter that pops */}
      <path d="M232 62h52l-5 72h-42z" fill={C.accent} />
      <path d="M245 62v-8a13 13 0 0126 0v8" fill="none" stroke={C.soft} strokeWidth="4" strokeLinecap="round" />
      <g className="fx fx-pop">
        <circle cx="270" cy="58" r="11" fill={C.green} />
        <text x="270" y="62" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif" fill="#0E0D23">3</text>
      </g>
      {/* payment card */}
      <g transform="rotate(-8 120 132)">
        <g className="fx fx-slide">
          <rect x="78" y="112" width="92" height="40" rx="7" fill={C.panel2} stroke={C.soft} strokeOpacity="0.6" />
          <rect x="88" y="122" width="14" height="10" rx="2" fill={C.amber} />
          <rect x="88" y="139" width="60" height="5" rx="2.5" fill={C.faint} />
        </g>
      </g>
    </Frame>);

}

/** A sponsored social post with likes, plus a megaphone. */
function Advertise() {
  return (
    <Frame title="An advert on Facebook and Instagram reaching new customers">
      <rect x="40" y="16" width="150" height="130" rx="10" fill={C.panel} stroke={C.line} />
      <circle cx="58" cy="34" r="9" fill={C.accent} />
      <rect x="72" y="28" width="56" height="5" rx="2.5" fill={C.text} />
      <rect x="72" y="37" width="34" height="4" rx="2" fill={C.faint} />
      <rect x="140" y="28" width="38" height="12" rx="6" fill={C.soft} fillOpacity="0.2" />
      <text x="159" y="37" textAnchor="middle" fontSize="7" fontFamily="Inter, sans-serif" fill={C.soft}>Sponsored</text>
      <rect x="50" y="50" width="130" height="62" rx="6" fill={C.accent} fillOpacity="0.22" />
      <circle cx="96" cy="78" r="13" fill={C.soft} fillOpacity="0.55" />
      <path d="M58 108l30-26 18 16 14-12 28 22z" fill={C.soft} fillOpacity="0.6" />
      <path className="fx fx-pop" d="M58 128c0-5 6-9 9-4 3-5 9-1 9 4 0 5-9 10-9 10s-9-5-9-10z" fill="#FF6B8A" />
      <rect x="84" y="126" width="30" height="5" rx="2.5" fill={C.faint} />
      <rect className="fx fx-glow" x="140" y="121" width="40" height="14" rx="7" fill={C.accent} />
      {/* megaphone with pulsing sound waves */}
      <g transform="translate(206 50)">
        <path d="M0 26l46-22v64L0 46z" fill={C.aqua} />
        <rect x="-10" y="24" width="14" height="24" rx="4" fill={C.aqua} fillOpacity="0.7" />
        <path d="M6 46l6 22h10l-4-20" fill={C.aqua} fillOpacity="0.55" />
        <path className="fx-wave" d="M58 22q12 14 0 28" fill="none" stroke={C.aqua} strokeWidth="3" strokeLinecap="round" />
        <path className="fx-wave" style={delay(0.4)} d="M66 12q22 24 0 48" fill="none" stroke={C.aqua} strokeWidth="3" strokeLinecap="round" />
      </g>
    </Frame>);

}

/** A paper pile turning into ticked, automated tasks. */
function Time() {
  return (
    <Frame title="Paperwork turned into automatic, finished tasks">
      {/* messy pile */}
      <g transform="rotate(-10 72 84)">
        <rect x="40" y="40" width="64" height="84" rx="6" fill={C.panel2} stroke={C.line} />
      </g>
      <g transform="rotate(6 76 84)">
        <rect x="44" y="38" width="64" height="84" rx="6" fill={C.panel} stroke={C.faint} />
        {[54, 64, 74, 84, 94].map((y) =>
        <rect key={y} x="54" y={y} width={y % 20 === 14 ? 30 : 44} height="4" rx="2" fill={C.line} />
        )}
      </g>
      {/* flowing arrow with a turning gear */}
      <path className="fx-flow" d="M126 82h48" stroke={C.soft} strokeWidth="3" strokeLinecap="round" strokeDasharray="2 7" />
      <path d="M170 74l10 8-10 8" fill="none" stroke={C.soft} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(150 50)">
        <g className="fx fx-spin">
          <circle r="13" fill={C.accent} />
          <circle r="5" fill={C.panel} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) =>
          <rect key={a} x="-3" y="-17" width="6" height="7" rx="1.5" fill={C.accent} transform={`rotate(${a})`} />
          )}
        </g>
      </g>
      {/* checklist that ticks itself off */}
      <rect x="196" y="26" width="92" height="112" rx="10" fill={C.panel} stroke={C.line} />
      {[44, 72, 100].map((y, i) =>
      <g key={y}>
          <circle cx="214" cy={y + 6} r="8" fill={C.green} />
          <path
          className="fx-check"
          style={delay(i * 0.5)}
          d={`M210 ${y + 6}l3 3 5-6`}
          fill="none"
          stroke="#0E0D23"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round" />
          <rect x="228" y={y + 1} width="46" height="5" rx="2.5" fill={C.text} fillOpacity="0.8" />
          <rect x="228" y={y + 9} width="30" height="4" rx="2" fill={C.faint} />
        </g>
      )}
      {/* clock with a sweeping hand */}
      <circle cx="286" cy="132" r="16" fill={C.panel2} stroke={C.aqua} strokeWidth="2.5" />
      <g transform="translate(286 132)">
        <g className="fx-spin" style={{ transformOrigin: '0 0' }}>
          <path d="M0 0v-9" fill="none" stroke={C.aqua} strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <path d="M0 0l6 4" fill="none" stroke={C.aqua} strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </Frame>);

}

/** A server and cloud protected by a shield, with email and a support headset. */
function It() {
  return (
    <Frame title="Computers, email and website kept safe and running">
      <path d="M86 70a22 22 0 0142-10 18 18 0 0130 14 14 14 0 01-2 28H92a16 16 0 01-6-32z" fill={C.panel2} stroke={C.line} />
      {/* server with blinking status lights */}
      {[0, 1, 2].map((i) =>
      <g key={i} transform={`translate(92 ${84 + i * 20})`}>
          <rect width="72" height="16" rx="4" fill={C.panel} stroke={C.faint} />
          <circle className="fx-blink" style={delay(i * 0.3)} cx="10" cy="8" r="2.5" fill={C.green} />
          <circle className="fx-blink" style={delay(0.8 + i * 0.3)} cx="18" cy="8" r="2.5" fill={i === 1 ? C.amber : C.green} />
          <rect x="30" y="6" width="34" height="4" rx="2" fill={C.line} />
        </g>
      )}
      {/* glowing shield */}
      <g className="fx fx-glow">
        <path d="M210 30l34 12v26c0 24-16 38-34 46-18-8-34-22-34-46V42z" fill={C.accent} />
        <path d="M197 72l9 9 18-20" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* email */}
      <g transform="translate(36 30)">
        <g className="fx fx-bob">
          <rect width="44" height="30" rx="5" fill={C.panel} stroke={C.aqua} strokeOpacity="0.7" />
          <path d="M4 5l18 13 18-13" fill="none" stroke={C.aqua} strokeWidth="2" strokeLinejoin="round" />
        </g>
      </g>
      {/* support headset */}
      <g transform="translate(262 118)">
        <circle className="fx fx-pulse" r="18" fill={C.aqua} fillOpacity="0.35" />
        <path d="M-10 4v-4a10 10 0 0120 0v4" fill="none" stroke={C.aqua} strokeWidth="3" strokeLinecap="round" />
        <rect x="-13" y="1" width="6" height="10" rx="2" fill={C.aqua} />
        <rect x="7" y="1" width="6" height="10" rx="2" fill={C.aqua} />
      </g>
    </Frame>);

}

const illustrations: Record<string, () => React.ReactElement> = {
  found: Found,
  website: Website,
  sell: Sell,
  advertise: Advertise,
  time: Time,
  it: It
};

export function GoalIllustration({ id }: {id: string;}) {
  const Scene = illustrations[id];
  return Scene ? <Scene /> : null;
}
