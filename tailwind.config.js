
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
      },
      colors: {
        'color-header': '#f3f3f3',
        'color-footer': '#f6f6f6',
        'primary-color': '#e21e70',
        'color-modal_overlay': "#999999",
      },
      keyframes: {
        slideUpOnLoad: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        growth: {
          '0%': { transform: 'scale(0.8)', opacity: 0.7 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        slideHorizontal: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
      },
      animation: {
        'slideUpOnLoad': 'slideUpOnLoad 1s linear 1',
        'growth': 'growth .3s linear 1',
        'slideHorizontal': 'slideHorizontal .3s linear 1 alternate',
      }


    },
  },
  plugins: [
  ],
}

