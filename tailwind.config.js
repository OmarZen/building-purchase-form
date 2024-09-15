/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'neo-sans': ['"Neo Sans Arabic"', 'sans-serif'], // Register your custom font
      },
    },
  },
  plugins: [],
}

