/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#13ADB7',
        hover: '#108087',
      },
      backgroundColor: {
        primary: '#13ADB7',
        background: '#f7f7f7',
        hover: '#108087',
      },
      fontFamily: {
        Ubuntu: ['Ubuntu', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'login-background': "url('/src/assets/login-background.png')",
        'register-background': "url('/src/assets/register-background.png')",
        'registerchoice-background':
          "url('/src/assets/registerchoice-background.png')",
      },
      screens: {
        xs: '428px',
      },
    },
  },
  plugins: [],
};
