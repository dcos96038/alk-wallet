/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#AF06FF",
      secondary: "#6909F5",
      accent: "#F234CB",
      black: "#0D0D0E",
      white: "#FFFFFF",
      inherit: "inherit",
      green: "#00CC00",
      red: "#CC0000",
    },
  },
  plugins: [],
};
