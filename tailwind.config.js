/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,css}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:   '#6C3FF5',
          secondary: '#A855F7',
          dark:      '#0A0A14',
          surface:   '#12121F',
          muted:     '#1E1E32',
          accent:    '#E879F9',
          text:      '#F0EEFF',
          subtle:    '#AABBDD',
          border:    '#2A2A45',
        }
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
