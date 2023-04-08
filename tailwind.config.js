/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'tablet': '531px',
      // => @media (min-width: 640px) { ... }
      'desktop': '855px',
      '4k': '1182px',
      'ultra': '1600px'
    },
    extend: {},
  },
  plugins: [],
}

