/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkPurple": "#AD1FEA",
        "purpleBlue": "#4661E6",
        "darkBlue": '#4661E6',
        'lightblue': '#62BCFA',
        'salmon': '#F49F85',
        "whiteash": "#F2F4FF",
        'darkBlueXs': '#3A4374',
        "lightGray": "#647196"
      }
    },
  },
  plugins: [],
}
