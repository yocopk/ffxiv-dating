/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-spinner")({
      className: "spinner", // Nome della classe per lo spinner
      theme: {
        spinner: (theme) => ({
          default: {
            color: theme("colors.blue.500", "blue"),
            size: "1em",
            border: "2px",
            speed: "500ms",
          },
        }),
      },
    }),
    // ... altri plugin se necessario
  ],
};
