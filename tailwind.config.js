/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008289',
        secondary: '#5271FF',
        info: '#06C3B4',
        danger: '#C34F06',
        active: '#FFF5A7',
        footer: '#60ced4',
      },
      fontFamily: {
        body: ['Poppins']
      }
    },
  },
  plugins: [],
}
