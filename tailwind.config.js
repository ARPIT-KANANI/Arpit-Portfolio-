/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        paper: {
          DEFAULT: '#F9F9F7',
          dark: '#121212',
        },
        ink: {
          DEFAULT: '#121212',
          dark: '#F9F9F7',
        },
        brand: {
          accent: 'var(--color-brand-accent)',
          muted: '#8D99AE',
        }
      },
    },
  },
  plugins: [],
}
