/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '0 0 10px rgba(255, 255, 255, 0.8)',
        'md': '0 0 15px rgba(255, 255, 255, 0.6)',
        'lg': '0 0 20px rgba(255, 255, 255, 1)',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}