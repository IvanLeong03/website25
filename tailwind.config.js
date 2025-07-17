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
        purple70: "#b366ff",
        purple60: "#9933ff",
        purple90: "#e6ccff",
        purple30: "#4d0099",
        blue70: "#6699ff",
        blue80: "#99bbff",
        blue90: "#ccddff",
        blue50: "#0055ff",
        //bluepurple80: "#adadeb",
        //bluepurple60: "#5c5cd6",
        //bluepurple40: "#2929a3",
        yellowHighlight: "#ffff66",
        egg: "#ffdb4d"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        geist: ['Geist', 'sans-serif']
      }
    },
  },
  plugins: [],
}