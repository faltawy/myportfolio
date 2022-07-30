/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      inter: ["Inter", 'sans-serif']
    },
    extend: {
      colors: {
        brand: '#FF506E',
        darkBlue: '#1E293B',
        lightBlue: '#475569',
        lightWhite: '#F1F5F9',
        white: '#FFF',
      },
    },
  },
  plugins: [],
}