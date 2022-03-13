// const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './assets/form/input-types.json',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#01064A',
        background: '#FEFEFE',
        primary: '#FF017B',
        secondary: '#2A2460',
        // amber: colors.amber,
        // purple: colors.purple,
        // teal: colors.teal,
        // cyan: colors.cyan,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
