export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blood red palette
        blood: {
          DEFAULT: '#8B0000',
          dark: '#5C0000',
          deep: '#720000',
          main: '#A00000',
          bright: '#B11217',
          highlight: '#C1121F',
          accent: '#D51F2A'
        },
        // Dirty white / off-white
        white: {
          dirty: '#E8E4DC',
          subtle: '#D8D3C9',
          faded: '#C8C2B8'
        },
        // Dark gray for subtle elements
        gray: {
          subtle: '#777777',
          dark: '#444444'
        },
        // Black palette
        black: {
          DEFAULT: '#050505',
          light: '#080808',
          mid: '#0B0B0B'
        }
      },
      fontFamily: {
        // Dry brush / hand-painted for HEYNA logo
        brush: ['Permanent Marker', 'cursive'],
        // Rough brush for section titles
        'brush-display': ['Knewave', 'cursive'],
        // Japanese fonts
        japanese: ['Noto Serif JP', 'serif'],
        'japanese-mincho': ['Shippori Mincho', 'serif'],
        'japanese-gothic': ['BIZ UDGothic', 'sans-serif'],
        // Monospace for usernames
        mono: ['Space Mono', 'monospace'],
        // Monospace for metadata
        meta: ['IBM Plex Mono', 'monospace'],
        // Navigation
        nav: ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
