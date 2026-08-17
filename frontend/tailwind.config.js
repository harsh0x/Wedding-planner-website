/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          DEFAULT: '#B07D87',
          50: '#FAF5F6',
          100: '#F5EBEF',
          200: '#EBD7DF',
          300: '#D8B4C2',
          400: '#C594A5',
          500: '#B07D87', // Primary dusty rose from spec
          600: '#9E6772',
          700: '#834F59',
          800: '#693C44',
          900: '#4F2B31',
        },
        mauve: {
          DEFAULT: '#B07D87',
          light: '#C89BA4',
          dark: '#8C5662',
          bg: '#C59B9F',
        },
        cream: {
          50: '#FDFCFB',
          100: '#FAF6F3',
          200: '#F5EFEA',
          300: '#EFE5DD',
        },
        charcoal: {
          DEFAULT: '#2E282A',
          light: '#423E40',
          muted: '#696164',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          muted: '#C5A880',
        }
      },
      fontFamily: {
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        alex: ['"Alex Brush"', 'cursive'],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
