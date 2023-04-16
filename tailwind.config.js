/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        'Pink': 'hsl(322, 100%, 66%)',
        'VeryPaleCyan': 'hsl(193, 100%, 96%)',
        'VeryDarkCyan': 'hsl(192, 100%, 9%)',
        'GrayishBlue': 'hsl(208, 11%, 55%)'
      },
      fontFamily:{
        'OpenSans': 'Open Sans, sans-serif',
        'Poppins': 'Poppins, sans-serif'
      },
      container:{
        padding:{
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      }
    },
  },
  plugins: [],
}

