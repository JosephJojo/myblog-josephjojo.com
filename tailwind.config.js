module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
