/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D8085",
          50: "#57D3DA",
          100: "#47CFD6",
          200: "#2CC0C8",
          300: "#25A0A7",
          400: "#1D8085",
          500: "#166050",
          600: "#166064",
          700: "#020808",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
