/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {

      colors: {
        "cp-blue": "#00427b",
        "cp-coal": "#313131",
        "cp-milk": "#F4F7FD",
        "cp-light": "#FFFCF7",
        "cp-bright": "#E2E2E2",
        "cp-yellow": "#FFA800",
        "cp-muted": "#767676",
      }
    },
  },
  plugins: [],
}

