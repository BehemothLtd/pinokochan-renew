/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Japandi palette - earth tones
        cream: '#FAF7F2',
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        // Pink brand accent
        pink: {
          DEFAULT: '#E8A0BF',
          50: '#FDF5F9',
          100: '#FCE7F1',
          200: '#F9D0E4',
          300: '#F3B3D2',
          400: '#EDA9C8',
          500: '#E8A0BF', // Primary brand
          600: '#DB7093', // Hover/active
          700: '#C15A7E',
          800: '#9E4865',
          900: '#7B384F',
        },
      },
      fontFamily: {
        sans: [
          'Be Vietnam Pro',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      borderRadius: {
        organic: '2rem 0.5rem 2rem 0.5rem',
      },
      boxShadow: {
        japandi: '0 4px 20px -4px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
