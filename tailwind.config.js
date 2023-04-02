/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      },
      container: {
        center: true,
      },
      spacing: {
        "big": "40rem"
      }
    },
    fontFamily: {
      "nunito": ['Nunito', 'sansserif']
    }
  },

  plugins: [],
}

