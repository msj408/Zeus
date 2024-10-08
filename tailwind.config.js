/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A5531", // Dark Green
        secondary: "#C68D2F", // Goldish Yellow
      },
    },
  },
  plugins: [],
};
