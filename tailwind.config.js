/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        baltic: '#292727',
        skin: '#F4EBDE',
        light: '#DDD9D4'
      },
      borderColor: {
        'oslo-grey': '#8E8D8D'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        crimson: ['Crimson Text', 'sans-serif'],
        montserrat: ['Montserrat'],
        cormorant: ['Cormorant Garamond', 'sans-serif'],
        'cormorant-sc': ['Cormorant SC', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: '.5rem'
    }
  },
  plugins: [],
}

