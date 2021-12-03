const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Montserrat, sans-serif']
    },
    screens: {
      xs: '490px',
      ...defaultTheme.screens
    }
  },
  variants: {
    extend: {},
    backgroundColor: ['focus'],
    textColor: ['focus']
  },
  plugins: [require('tailwind-scrollbar-hide')]
};
