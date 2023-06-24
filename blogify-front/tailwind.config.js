/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': {
          500: '#bf947a',
          600: '#A6806A',
          700: '#826351'
        }
      },
      fontFamily: {
        'open-sans': ['Open-sans', 'sans-serif'],
        'lora': ['Lora', 'sans-serif']
      },
    },
  },
  plugins: [],
}
