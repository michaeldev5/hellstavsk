module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary1: "#f6871f",
        primary1hover: "#f6aa62",
      },
      flex: {
        "1/4": "25%",
        "1/2": "50%",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
