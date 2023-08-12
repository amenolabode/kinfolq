/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#6D381C',
        black: '#111111',
        grey: '#C1C1C1',
        white: '#F9FAFB'
      },
    },
    fontSize: {
			sm: ["12px", "15px"],
			base: ["16px", "24px"],
			lg: ["20px", "28px"],
			xl: ["24px", "32px"],
		},
  },
  variants: {},
  plugins: [],
}

