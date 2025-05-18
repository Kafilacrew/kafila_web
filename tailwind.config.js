// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // adjust this to your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        times: ['"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
};
