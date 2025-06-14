/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Scan all JS/TS files in src
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          500: '#FF6F61',
          600: '#E65B52',
        },
        teal: {
          500: '#00C4CC',
          600: '#00AEB7',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/postcss'),
  ],
};