/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans-serif': ['var(--font-roboto)'],
      },
      colors: {
        red: {
          400: 'hsl(4, 100%, 67%)',
        },
        rose: {
          400: 'hsl(346, 100%, 66%)',
        },
        gray: {
          400: 'hsl(231, 7%, 60%)',
          700: 'hsl(235, 18%, 26%)',
          800: 'hsl(234, 29%, 20%)',
        },
      },
      backgroundImage: {
        'linear-gradient-red-1': 'linear-gradient(90deg, hsl(346, 100%, 66%), hsl(4, 100%, 67%))',
      },
      screens: {
        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
