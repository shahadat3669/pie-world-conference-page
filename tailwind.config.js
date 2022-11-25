/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './public/js/*.{html,js}'],
  theme: {
    screens: {
      md: '768px',
    },
    extend: {
      sans: ['Lato', 'sans-serif'],
      colors: {
        'heavy-metal': '#272A31',
        metal: '#3E3E3E',
        'coral-red': '#EE523C',
        'coral-grey': '#E5E5E5',
        'metal-grey': '#5C5C5C',
      },
      keyframes: {
        'times-menu-open': {
          '0%': {
            transform: 'scaleY(0)',
          },
          '70%': {
            transform: 'scaleY(1.1)',
          },
          '100%': {
            transform: 'scaleY(1)',
          },
        },
      },
      animation: {
        'times-menu-animation': 'times-menu-open 0.5s ease-in-out forwards',
      },
      spacing: {
        'screen-94h': '94vh',
      },
    },
  },
  plugins: [],
};
