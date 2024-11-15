/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1280': '1280px',
        '1600': '1600px'
      },
      colors:{
        mainTitle: '#373f50',
        bottomBorder: '#ccc', 
        active:'#BB986C',
        red:'red',
        muted:'#7d879c',
        success:'#02C874',
        error:'#CE0000',
        border:'#dae1e7',
      },
      fontFamily: {
        'title': ['worker', 'serif']
      },
      borderRadius: {
        '5':'0.3125rem',
        '10': '0.625rem'
      },
    },
  },
  plugins: [],
}
