/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1E88E5",
        "primaryLight":"#6ab7ff",
        "primaryDark": "#005cb2"
      }
    },
  },
  plugins: [],
}
