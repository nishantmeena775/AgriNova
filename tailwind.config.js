/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        agri: {
          darkest: '#091911',
          forest: '#133E2B',
          deep: '#1B4332',
          emerald: '#2D6A4F',
          leaf: '#40916C',
          bright: '#52B788',
          mint: '#74C69D',
          sage: '#95D5B2',
          pale: '#D8F3DC',
          cream: '#F7F9F6',
          sand: '#E9E4DC',
          earth: '#BC6C25',
          amber: '#DDA15E',
          accent: '#10B981',
          soil: '#603813'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(19, 62, 43, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow': '0 0 25px -5px rgba(82, 183, 136, 0.4)',
        'soft': '0 4px 20px -2px rgba(19, 62, 43, 0.06), 0 2px 6px -1px rgba(19, 62, 43, 0.04)',
        'card': '0 10px 30px -5px rgba(19, 62, 43, 0.08), 0 4px 10px -2px rgba(19, 62, 43, 0.03)',
        'elevation': '0 20px 40px -10px rgba(15, 46, 30, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
