/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'inter': ['Inter', 'sans-serif'],
        },
        colors: {
          'nomed-primary': '#003A8F',
          'nomed-secondary': '#019EE6',
          'nomed-accent-dark': '#013763',
          'nomed-accent-light': '#6F4B24',
          'nomed-accent-medium': '#8C6430',
          'nomed-text': '#222221',
          'nomed-neutral-400': '#A4A59F',
          'nomed-background': '#FDFDFD',
          'nomed-gradient-start': '#013763',
          'nomed-gradient-end': '#019EE6'
        },
        animation: {
          'fade-in': 'fadeIn 0.8s ease-in-out',
          'slide-up': 'slideUp 0.8s ease-out',
          'slide-in-left': 'slideInLeft 0.8s ease-out',
          'slide-in-right': 'slideInRight 0.8s ease-out',
          'bounce-in': 'bounceIn 0.8s ease-out',
          'float': 'float 3s ease-in-out infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(50px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideInLeft: {
            '0%': { transform: 'translateX(-50px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          slideInRight: {
            '0%': { transform: 'translateX(50px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          bounceIn: {
            '0%': { transform: 'scale(0.3)', opacity: '0' },
            '50%': { transform: 'scale(1.05)' },
            '70%': { transform: 'scale(0.9)' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }
      }
    },
    plugins: [],
  }