/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo-extracted primary coral crimson & royal red palette
        rose: {
          DEFAULT: '#E63956',
          50: '#FFF5F6',
          100: '#FFE6E9',
          200: '#FFCCD3',
          300: '#FFA1AD',
          400: '#FF6B81',
          500: '#E63956', // Primary royal coral crimson from logo
          600: '#CF203E',
          700: '#AC1630',
          800: '#891428',
          900: '#5C0D1B',
        },
        // Rich crimson & ruby accents
        crimson: {
          DEFAULT: '#E63956',
          light: '#FF6B81',
          dark: '#AC1630',
          glow: 'rgba(230, 57, 86, 0.35)',
        },
        mauve: {
          DEFAULT: '#E63956',
          light: '#FF6B81',
          dark: '#AC1630',
          bg: '#FFE6E9',
        },
        // Royal Heritage Cream & Ivory
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F5EFE6',
          300: '#EFE5D8',
        },
        // Deep Onyx & Charcoal from logo typography
        charcoal: {
          DEFAULT: '#1A1A1A',
          dark: '#111111',
          light: '#2E282A',
          muted: '#5A5255',
        },
        // Royal Rajasthani Gold & Amber Lighting
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5E7B2',
          dark: '#AA820A',
          muted: '#C5A880',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        serif: ['"Cinzel"', '"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
        script: ['"Cinzel"', 'serif'],
        alex: ['"Playfair Display"', 'serif'],
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
