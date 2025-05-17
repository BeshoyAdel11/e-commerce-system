/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/images/menu-images/wave.png')",
      },
      theme: {
  extend: {
    fontFamily: { roboto: ['Roboto', 'sans-serif'] },
  },
},
    },
  },
  plugins: [],
}