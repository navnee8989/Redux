/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e84735',
        secondary: '#ffed4a',
        customBackground: '#f0f0f0',
      },
      backgroundColor: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        customBackground: '#f0f0f0',
      },
    },
  },
  plugins: [],
}
