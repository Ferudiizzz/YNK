export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paint Gang vibrant colors
        paint: {
          red: '#FF3B30',
          orange: '#FF9500',
          yellow: '#FFCC00',
          blue: '#007AFF',
          purple: '#AF52DE',
          pink: '#FF2D55',
          green: '#34C759',
          cyan: '#32ADE6'
        },
        // Keep some blood red for connection
        blood: {
          DEFAULT: '#8B0000',
          dark: '#5C0000',
          deep: '#720000',
          main: '#A00000',
          bright: '#B11217',
          highlight: '#C1121F',
          accent: '#D51F2A'
        },
        white: {
          dirty: '#D8D0C4',
          subtle: '#C8C0B5'
        },
        gray: {
          subtle: '#777777',
          dark: '#444444'
        },
        black: {
          DEFAULT: '#050505',
          light: '#080808',
          mid: '#0B0B0B'
        }
      },
      fontFamily: {
        blackletter: ['UnifrakturMaguntia', 'cursive'],
        paint: ['Knewave', 'cursive'],
        brush: ['Permanent Marker', 'cursive'],
        japanese: ['Noto Serif JP', 'serif'],
        'japanese-gothic': ['BIZ UDGothic', 'sans-serif'],
        'japanese-ui': ['Zen Kaku Gothic New', 'sans-serif'],
        meta: ['IBM Plex Mono', 'monospace'],
        mono: ['Space Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
