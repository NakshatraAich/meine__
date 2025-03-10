/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter : ['Inter', 'sans-serif'],
      },
      colors: {
        brand: '#B5D411',
        head: '#222222',
        altHead: '#333333',
        text: '#626262',
      },
    },
  },
  plugins: [],
}