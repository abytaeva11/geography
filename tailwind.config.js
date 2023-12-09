/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:false,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      violet:"#8A2BE2FF",
      country:{
        100:"#0088FE",
        200:"#00C49F",
        300:"#FFBB28",
        400:"#FF8042",
        500:"#0B1F7C",
        600:"#8f8fe7",
        700:"rgba(128, 0, 128, 0.86)",

      },

      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "rgba(253,33,59,0.86)",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
      blue:{
        100:"rgba(73, 220, 255, 1)",
        200:"#2f2f72",
        300:"#2F2F72FF",
        400:"rgb(143,143,231)",
        500:"#3030f1"
      }
    },

    extend: {},
  },

  plugins: [
    require (
        "daisyui"
    )

  ],
  daisyui: {
    styled: true,
    themes: [false],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}