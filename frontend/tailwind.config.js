/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: {
          50: '#d8d8d8',
          100: '#d8d8d8',
          200: '#d8d8d8',
          300: '#d8d8d8',
          400: '#e8e8e8',
          500: '#f8f8f8',
          600: '#f8f8f8',
          700: '#f8f8f8',
          800: '#f8f8f8',
          900: '#ffffff',
        },
        black: {
          50: '#282828',
          100: '#282828',
          200: '#282828',
          300: '#282828',
          400: '#282828',
          500: '#282828',
          600: '#282828',
          700: '#282828',
          800: '#282828',
          900: '#000000',
        },
        gold: {
          50: '#d1ad54',
          100: '#d1ad54',
          200: '#d1ad54',
          300: '#d1ad54',
          400: '#d1ad54',
          500: '#d1ad54',
          600: '#d1ad54',
          700: '#d1ad54',
          800: '#d1ad54',
          900: '#d1ad54',
        },
      },
    },
  },
  plugins: [],
};
