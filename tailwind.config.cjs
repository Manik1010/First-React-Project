/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ea8388",

          "secondary": "#285e9b",

          "accent": "#fcc2d7",

          "neutral": "#211523",

          "base-100": "#363437",

          "info": "#6FA5E7",

          "success": "#23B35D",

          "warning": "#F9D73E",

          "error": "#F94D75",
        },
      },
    ],
  },
  // plugins: [],
  plugins: [require("daisyui")],
}
