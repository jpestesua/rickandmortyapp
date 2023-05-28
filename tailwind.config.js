/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/layouts/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        bgComponent: '#F3F4F6',
      },
      padding: {
        screenTop: '55px',
        screenX: '24px',
      },
      spacing: {
        38: '38px',
        textComponent: '230px',
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
