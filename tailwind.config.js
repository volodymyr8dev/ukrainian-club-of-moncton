/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat, sans-serif',
      },
      colors: {
        blue: {
          500: '#5271F2',
        },
        yellow: {
          100: '#FCECDC',
          300: '#FFCE26',
          500: '#FEBB37',
          900: '#D4A780',
        },
        green: {
          500: '#AAB94D',
        },
        gray: {
          100: '#FFFFFF',
          500: '#A6ADC7',
          900: '#002049',
        },
      }
    },
  },
  plugins: [],
}
