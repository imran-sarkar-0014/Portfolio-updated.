module.exports = {
  content: ["./src/**/*.{html,js}"],

  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'display': ['Roboto Mono', 'monospace']
      },

      screens: {
        mid: '960px'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
