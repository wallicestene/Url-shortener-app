/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: "Raleway",
        Montserrat: "Montserrat",
        Poppins: "Poppins"
      }
    },
  },
  plugins: [],
}