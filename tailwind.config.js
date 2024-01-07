/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/**/*.{edge,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#A73831',
        beige: '#E6D7C7',
        grey: '#211C1F',
        bg_color: '#291e21',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
