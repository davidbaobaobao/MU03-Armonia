import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Superficies
        'surface':              '#FAF9F6',
        'surface-low':          '#F4F4F0',
        'surface-container':    '#EDEEEA',
        'surface-high':         '#E6E9E4',
        'surface-highest':      '#E0E4DE',
        'surface-white':        '#FFFFFF',
        'surface-dim':          '#D6DBD5',
        // Texto
        'on-surface':           '#2F3430',
        'on-surface-variant':   '#5C605C',
        'text-muted':           '#505050',
        'on-primary':           '#FAF7F6',
        // Primarios (escala grafito)
        'primary':              '#5F5E5E',
        'primary-dim':          '#535252',
        'graphite':             '#2F3430',
        'graphite-deep':        '#1A1A1B',
        // Contornos
        'outline':              '#777C77',
        'outline-variant':      '#AFB3AE',
        // Semánticos
        'dark':                 '#1A1A1B',
        'light':                '#FAF9F6',
        'accent':               '#2F3430',
        'neutral':              '#AFB3AE',
        // Error
        'color-error':          '#9F403D',
      },
      borderRadius: {
        'none':    '0rem',
        'DEFAULT': '0rem',
        'sm':      '0rem',
        'md':      '0rem',
        'lg':      '0rem',
        'xl':      '0rem',
        '2xl':     '0rem',
        '3xl':     '0rem',
        'full':    '9999px',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        'display-lg':  ['clamp(4rem,9vw,7.5rem)',    { lineHeight: '1.0',  letterSpacing: '-0.03em' }],
        'display-md':  ['clamp(3rem,6vw,5rem)',       { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm':  ['clamp(2rem,4vw,3rem)',       { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'headline-lg': ['clamp(1.875rem,3.5vw,3rem)',   { lineHeight: '1.15' }],
        'headline-md': ['clamp(1.5rem,2.5vw,2.25rem)', { lineHeight: '1.2'  }],
        'headline-sm': ['1.25rem',                    { lineHeight: '1.3'  }],
        'body-lg':     ['1.125rem',                   { lineHeight: '1.7'  }],
        'body-md':     ['1rem',                       { lineHeight: '1.65' }],
        'body-sm':     ['0.875rem',                   { lineHeight: '1.6'  }],
        'label-lg':    ['0.875rem',                   { lineHeight: '1.4', letterSpacing: '0.15em' }],
        'label-md':    ['0.75rem',                    { lineHeight: '1.4', letterSpacing: '0.15em' }],
        'label-sm':    ['0.625rem',                   { lineHeight: '1.4', letterSpacing: '0.4em'  }],
      },
      maxWidth: {
        'container': '1440px',
      },
      boxShadow: {
        'ambient': '0 16px 64px rgba(47,52,48,0.04)',
        'float':   '0 16px 64px rgba(47,52,48,0.04)',
      },
    },
  },
  plugins: [],
}

export default config
