/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'blue': '#6F85C5',
      'dark-blue': '#29334E',
      'red': '#E55F7F',
      'white': '#FFFFFF',
      'grey': '#D2D2D2',
      'footer-divider': 'rgba(255,255,255,0.1)'
    },
    fontFamily: {
      'heading': ['Quicksand'],
      'text': ['Poppins'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1120px',
        '2xl': '1240px',
      },
    }
  },
  plugins: [],
}
