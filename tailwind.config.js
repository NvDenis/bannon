/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'bg-logo': "url('/assets/bglogo.png')",
        
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'color-header': '#f3f3f3',
        'color-footer': '#f6f6f6',
        'primary-color': '#e21e70',
      },
    },
  },
  plugins: [
  ],
}

