/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bego__white: '#ffffff',
        bego__lightBlack: '#0E1113',
        bego__darkBlack: '#080C0F',
        bego__yellow: '#FFFF00',
        bego__lightGray: '#7B7B7B',
        bego_ligtherGray: '#979797',
        bego__darkGray: '#5B5B5B',
        bego__darkerGray: '#2C2C2C',
        bego__blue: '#0275FF',
      },
    },

    fontFamily: {
      bego: ['Avenir Medium', 'Open Sans'],
    },
  },
  plugins: [],
};
