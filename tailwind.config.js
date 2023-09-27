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
        blueshit: "#AED2FF",
        moreblueshit: "#E4F1FF"
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

