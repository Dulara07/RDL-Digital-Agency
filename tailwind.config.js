export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Midnight indigo instead of neutral black: richer, warmer darks.
        ink: {
          DEFAULT: '#0B0A1C',
          950: '#080716',
          900: '#0E0D23',
          800: '#151331',
          700: '#1D1A3F',
          600: '#27234F',
          500: '#363163',
        },
        line: {
          DEFAULT: 'rgba(196,186,255,0.11)',
          strong: 'rgba(196,186,255,0.22)',
          soft: 'rgba(196,186,255,0.05)',
        },
        mist: {
          DEFAULT: '#EDEBFA',
          dim: '#C5C3DD',
          faint: '#AEABCB',
        },
        accent: {
          DEFAULT: '#6E56FF',
          soft: '#A391FF',
          deep: '#5338F0',
        },
        // Friendly secondary colours, used to tell goals and service groups apart.
        aqua: '#3ED8D0',
        gold: '#E8C37A',
        coral: '#FF7E6B',
        amber: '#FFBA4A',
        mint: '#3DDC97',
        sky: '#56B4FF',
        rose: '#FF6FB1',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
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
        'glow-lg': '0 20px 70px -25px rgba(110,86,255,0.7)',
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
