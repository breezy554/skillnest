/* eslint-env node */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#7e22ce', // purple-700
          light: '#c084fc',   // purple-300
          dark: '#6b21a8'     // purple-800
        }
      }
    }
  },
  plugins: []
};
