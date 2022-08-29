const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit', // faster just-in-time mode
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: colors.neutral,
      },
    },
  },
  plugins: [],
};
