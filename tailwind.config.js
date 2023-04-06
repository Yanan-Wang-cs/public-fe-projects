/** @type {import('tailwindcss').Config} */
import homepage from 'apps/homepage/theme.js'
export default {
  content: [
    "./index.html",
    "./apps/**/**/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    colors: {
      homepage: {
        primary: homepage.primary,
        link: homepage.link,
        title: homepage.title
      }
    },
    extend: {},
  },
  plugins: [],
}