/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // Include your main HTML
    "./src/**/*.{js,jsx,ts,tsx}"  // Include all files in src/
  ],
  theme: {
    extend: {

      animation: {
        blob: "blob 7s infinite",
      },
      
      keyframes:{
        blob:{
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
