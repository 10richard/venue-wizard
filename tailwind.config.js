/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#27005D",
        secondary: "#9400FF",
        pink: "#DF4FF2",
        babyblue: "#AED2FF",
        lightblue: "#E4F1FF"
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

