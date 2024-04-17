/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: 
      { Roboto: "'Roboto', sans-serif"
    },
    animation: {
      'bounce-2s': 'bounce 2s infinite',
      'flash-2s': 'flash 2s infinite',
      'heartBeat-2s': 'heartBeat 2s infinite',
      'swing-2s': 'swing 2s infinite',
    }
  },
},
  plugins: [require("daisyui")],
}


