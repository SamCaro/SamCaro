/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        military: '#1F5014',
        GrayishBlue: 'hsl(233, 8%, 79%)',
        DarkGrayisBlue: 'hsl(236, 13%, 42%)',
        VeryDarkBlue: 'hsl(236, 13%, 42%)',
        SoftOrange: 'hsl(35, 77%, 62%)',
      }
    }
  },
  plugins: [],
}