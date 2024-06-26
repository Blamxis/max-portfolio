/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {

      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#FF8C00',
          hover: '#FFA500',
        }
      },

      keyframes: {
        neon: {
          '0%, 100%': { textShadow: '0 0 10px #FF8C00, 0 0 20px #FF8C00, 0 0 30px #FF8C00, 0 0 40px #FFA500, 0 0 70px #FFA500, 0 0 80px #FFA500, 0 0 100px #FFA500' },
          '50%': { textShadow: '0 0 5px #FF8C00, 0 0 10px #FF8C00, 0 0 15px #FF8C00, 0 0 20px #FFA500, 0 0 35px #FFA500, 0 0 40px #FFA500, 0 0 50px #FFA500' }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "neon": "neon 3s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}