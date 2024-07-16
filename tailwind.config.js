/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syncopate: ['Syncopate', 'sans-serif'],
        'red-hat-display': ['RedHatDisplay', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
