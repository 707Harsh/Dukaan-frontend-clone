/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'l-blue':'#326bae',
        'd-blue':'rgba(36,76,126,255)',
        'slate-150':'rgb(234, 234, 234)'
      }
    },
  },
  plugins: [],
}

