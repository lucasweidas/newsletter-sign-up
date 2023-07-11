/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
      colors: {
        tomato: {
          400: 'hsl(4, 100%, 67%)',
        },
        grey: {
          400: 'hsl(231, 7%, 60%)',
          700: 'hsl(235, 18%, 26%)',
          800: 'hsl(234, 29%, 20%)',
        },
      },
    },
  },
  plugins: [],
};
