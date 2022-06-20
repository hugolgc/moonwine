/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.js',
    './layouts/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './templates/**/*.liquid',
  ],
  theme: {
    extend: {
      maxWidth: {
        content: '1440px'
      }
    },
  },
  plugins: [],
}

//  npx tailwindcss -o ./assets/tailwind.css -w -m
