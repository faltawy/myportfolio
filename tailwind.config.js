/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      brand:'#FF506E',
      darkBlue:'#1E293B',
      lightBlue:'#475569',
      lightWhite:'#F1F5F9',
      white:'#FFF',
    },
    fontFamily:{
      inter:["Inter", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}