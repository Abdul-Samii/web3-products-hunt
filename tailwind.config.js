/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarydark: '#012169',
        secondarydark: '#003087',
        primarylight: '#009cde',
        secondarylight: '#F6F7F8'
      }
    },
  },
  plugins: [],
}

