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
        'slate-150':'rgb(234, 234, 234)',
        'sb-blue': '#21273f'
      },
      width:{
        '64':'272px'
      },
      margin:{
        '64':'272px'
      },
      screens:{
        'xs':'420px',
        'md':'925px',
        'lg':'1220px',
      },
      boxShadow:{
        'dim':'0 0 0 100vmax rgba(0, 0, 0, .3)'
      }
    },
  },
  plugins: [],
}

