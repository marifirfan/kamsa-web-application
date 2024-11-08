/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        'blue1': '#2C99FF',
        'blue-text': '#005BB0',
        'blue-black': '#002A51',
        'silver-custom1': '#222222',
        'silver-custom2': '#2B2B2B',
        'silver-text-custom': '#1F1F1F',
        'footer-baground': '#E1E1E1',
      },
      screens: {
        'miniphone': { 'min': '1px', 'max': '399px' },
        'phone': { 'min': '0px', 'max': '639px' },
        'tablet': { 'min': '640px', 'max': '1023px' },
        'laptop': { 'min': '1024px', 'max': '1279px' },
        'desktop': { 'min': '1280px' },
      },
      backgroundImage: {
        'landing-page2': "url('/img/kamsa/backgrond222.png')",
      }
    },
  },
  plugins: [],
}
