/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-red": "#CD291E",
        "accent-yellow": "#FDB912",
        "light-white": "#FFF9EE",
        "custom-grey": "#231F20",
        "dark-green": "#316131",
      },
      fontFamily: {
        'lilita': ['Lilita One', 'cursive'],
      },
    },
  },
  plugins: [],
} 