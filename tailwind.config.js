/** @type {import('tailwindcss').Config} */

// const colors = require('tailwind/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#34CAA5',
      secondary: '#34CAA50',
      tertiary: '#FAFAFA',
      light: '#EBECF2',
      bar: '#34CAA500'
    },
    extend: {
      
    },
  },
  plugins: [],
}

