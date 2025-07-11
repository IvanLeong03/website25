/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige90: "#fff5cc",
        grey80: "#cccccc",
        grey60: "#999999",    
        grey40: "#666666",
        grey20: "#333333",
        purple80: "#cc99ff",
        purple60: "#9933ff",
        purple40: "#6600cc",
        purple90: "#e6ccff",
        blue80: "#99ccff",
        blue60: "#3399ff",
        blue40: "#0066cc",
        bluepurple80: "#adadeb",
        bluepurple60: "#5c5cd6",
        bluepurple40: "#2929a3",
        yellowHighlight: "#ffff66"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        geist: ['Geist', 'sans-serif']
      }
    },
  },
  plugins: [],
}