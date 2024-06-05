/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {
      backgroundColor: {
        'brand-blue': '#00427b',
        'brand-deepblue': '#00429b',
        'brand-brightblue': '#0068b1',
        'brand-lightyellow': '#FDEBE2',
        'brand-lightblue': '#00329b'

      },
      colors: {
        "brand-blue": "#00427b",
        "brand-deepblue": "#375f82",
        "brand-coal": "#313131",
        "brand-milk": "#F4F7FD",
        "brand-light": "#FFFCF7",
        "brand-lightblue": "#078ae0",
        "brand-bright": "#E2E2E2",
        "brand-brightblue": "#0068b1",
        "brand-yellow": "#FFA800",
        "brand-muted": "#767676",
      }
    },
  },
  plugins: [],
}
