/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/layouts/**/*.{js,jsx,ts,tsx}',
    './src/assets/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        bgComponent: '#F3F4F6',
        borderColor: '#E5E7EB',
        grayText: '#6B7280',
      },
      padding: {
        screenY: '55px',
        screenX: '24px',
      },
      spacing: {
        38: '38px',
        textComponent: '230px',
        avatar: '32px',
        bigAvatar: '75px',
        itemListH: '72px',
      },
      borderRadius: {
        '4xl': '40px',
      },
      fontFamily: {
        greycliffcfBold: ['greycliffcf-bold.otf'],
        greycliffcfSemiBold: ['greycliffcf-demibold.otf'],
        greycliffcf: ['greycliffcf-regular.otf'],
      },
    },
  },
  plugins: [],
};
