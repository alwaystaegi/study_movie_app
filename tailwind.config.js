const { default: Youtube } = require("./src/components/Youtube_main");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    screens: {
      md: "992px",
      sm: { max: "532px" },
    },
    extend: {},
  },
  plugins: [],
};
