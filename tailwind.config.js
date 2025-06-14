/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure this matches your file locations
  ],
  theme: {
    extend: {
      colors: {
        coral: { 500: '#FF6F61', 600: '#E65B52' },
        teal: { 500: '#00C4CC', 600: '#00AEB7' },
      },
    },
  },
  plugins: [
    require('@tailwindcss/postcss'),
  ],
};