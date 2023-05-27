/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/screens/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#E5E5E5',
      },
      padding: {
        screenTop: '55px',
        screenX: '24px',
      },
      spacing: {
        '2x': '20px',
        '3x': '30px',
      },
      borderRadius: {
        '4xl': '40px',
      },
      fontFamily: {
        greycliffcf: ['greycliffcf-bold.otf'],
      },
    },
  },
  plugins: [],
};
