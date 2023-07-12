/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
      fontSize: {
        '5.5xl': ['3.5rem', '1.125'],
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
        xsm: '550px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
