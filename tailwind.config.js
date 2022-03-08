// const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#01064A',
        // amber: colors.amber,
        // purple: colors.purple,
        // teal: colors.teal,
        // cyan: colors.cyan,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
