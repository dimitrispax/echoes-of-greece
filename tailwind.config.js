/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      custom: ['"Cormorant Garamond"', "sans-serif"],
      // Add more custom font families as needed
    },
    extend: {
      backgroundImage: {
        'background': 'url("./src/assets/background.jpg")',
        
      }
    },
  },
  plugins: [],
}

