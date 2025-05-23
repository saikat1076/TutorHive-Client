/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}