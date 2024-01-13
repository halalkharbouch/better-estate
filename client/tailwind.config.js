/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#696970',
        'secondary': '#525CEB',
        'accent': '#131315',
        
      }
    },
  },
  plugins: [],
}