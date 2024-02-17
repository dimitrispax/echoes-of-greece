/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      theme: ['"Cormorant Garamond"', "sans-serif"],
      copyright: ["'Fira Mono'", "monospace"]
      // Add more custom font families as needed
    },
    extend: {
      backgroundImage: {
        'background': 'url("/background.jpg")',
        
      }
    },
  },
  plugins: [],
}

