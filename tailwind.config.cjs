/** @type {import('tailwindcss').Config} */
const config = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: []
};

module.exports = config;
