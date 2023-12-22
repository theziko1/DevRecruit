/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        creamy_white: '#F1F2F6',
        saturated_Blue: '#27187E',
        light_Blue: '#758BFD',
        lighter_Blue: '#AEB8FE',
        saturatedOrange: '#FF8600',
      },
    },
  },
  plugins: [],
}

