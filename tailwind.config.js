export default {
  content: ['./**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#08090C',
          950: '#06070A',
          900: '#0A0B10',
          800: '#0F1117',
          700: '#151822',
          600: '#1D212C',
          500: '#282D3B',
        },
        line: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          strong: 'rgba(255,255,255,0.16)',
          soft: 'rgba(255,255,255,0.04)',
        },
        mist: {
          DEFAULT: '#E7E9EF',
          dim: '#AFB5C4',
          faint: '#8890A0',
        },
        accent: {
          DEFAULT: '#6E56FF',
          soft: '#9483FF',
          deep: '#4B33E0',
        },
        aqua: '#3ED8D0',
        gold: '#E8C37A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(110,86,255,0.35), 0 18px 60px -20px rgba(110,86,255,0.55)',
        panel: '0 30px 80px -40px rgba(0,0,0,0.9)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sweep: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(300%)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        drift: 'drift 7s cubic-bezier(0.45,0,0.55,1) infinite',
        sweep: 'sweep 5.5s cubic-bezier(0.23,1,0.32,1) infinite',
      },
    },
  },
  plugins: [],
}
