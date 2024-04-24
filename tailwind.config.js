/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1280': '1280px'
      },
      colors:{
        mainTitle: '#373f50',
        bottomBorder: '#ccc', 
      },
    },
  },
  plugins: [],
}
