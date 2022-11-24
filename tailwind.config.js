/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      proximaNova100: ["ProximaNova100", "sans"],
      proximaNova200: ["ProximaNova200", "sans"],
      proximaNova300: ["ProximaNova300", "sans"],
      proximaNova400: ["ProximaNova400", "sans"],
      proximaNova500: ["ProximaNova500", "sans"],
      proximaNova600: ["ProximaNova600", "sans"],
      proximaNova700: ["ProximaNova700", "sans"],
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
      red: {
        500: '#F54E5A',
      },
      gray: {
        100: '#FFFFFF',
        200: '#F9F9FB',
        500: '#A6ADC7',
        900: '#002049',
      },
    },
    extend: {
      colors: {
        'white-opacity': 'rgba(20, 20, 20, 0.6)',
        'white': 'rgb(255 255 255)'

      },
      brightness: {
        40: '.4',
      },
      screens: {
        "2xl":"1632px",
        'lg': '1100px',
        'tablets': '900px',
        "tablets-m": {'min': '900px', 'max': '974px'},
        'small-notebooks': '1200px',
        'mobile-l':'475px',
        'small-phones': '400px',
        'smaller-phones': '350px',
        'smallest-phones': '280px',
      },
      backgroundImage: {
        'bg-ukraine': "url('/bg-ukraine.webp')",
      }
    }
  },
  plugins: [],
  mode: 'jit',
}
