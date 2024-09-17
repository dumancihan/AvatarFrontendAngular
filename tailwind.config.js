/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        'move-slow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20px, -30px)' },
          '50%': { transform: 'translate(-15px, 20px)' },
          '75%': { transform: 'translate(30px, 15px)' },
        },
        'move-medium': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-30px, 20px)' },
          '50%': { transform: 'translate(25px, -10px)' },
          '75%': { transform: 'translate(-20px, -25px)' },
        },
        'move-fast': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(50px, -40px)' },
          '50%': { transform: 'translate(-35px, 30px)' },
          '75%': { transform: 'translate(45px, -20px)' },
        },
      },
      animation: {
        'move-slow': 'move-slow 15s linear infinite',
        'move-medium': 'move-medium 10s linear infinite',
        'move-fast': 'move-fast 5s linear infinite',
      },
    },
  },
  plugins: [require("daisyui")],
}
