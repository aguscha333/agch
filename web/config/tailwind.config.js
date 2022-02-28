const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#474747',
        secondary: '#FFBA9D',
        'dark-neutral': '#777',
        neutral: '#dfdfdf',
        'light-neutral': '#F4F4F4',
        error: '#891900',
      },
      fontFamily: {
        roboto: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
