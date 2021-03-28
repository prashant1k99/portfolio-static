const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange
      }
    },
  },
  variants: {
    extend: {
      fontSize: ['hover']
    },
  },
  plugins: [],
}
