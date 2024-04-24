/** @type {import('tailwindcss').Config} */

// const colors = require('tailwind/colors')
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#34CAA5',
      secondary: '#34CAA50',
      tertiary: '#FAFAFA',
      light: '#EBECF2',
      bar: '#34CAA500',
      purple: 'purple',
      blue: 'blue',
      yellow: 'yellow',
      red: 'red',
      black: '#282C35',
      dark: '#36454F',
      orange: 'orange'
    },
    extend: {

    },
  },
  plugins: [],
})

