/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/index.html'],
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      display: ['Alexandria', 'sans-serif'],
      accent: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-200': '#ffd8bb',
        'primary-400': '#ff7d1b',
        'primary-500': '#e67118',
        'secondary-400': '#1A1B1F',
        'tertiary-400': '#a1a2a5',
      },
      gridTemplateColumns: {
        'product-description': 'minmax(0,1fr),minmax(0,2fr)',
      },
      gridTemplateRows: {
        'product-description': 'minmax(0,2fr),minmax(0,1fr)',
      },
    },
  },
  plugins: [],
};
