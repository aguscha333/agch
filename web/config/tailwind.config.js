const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
