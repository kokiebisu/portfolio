/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "100px auto 140px",
        content: "410px auto",
        mobile: "200px auto",
        card: "1fr auto",
      },
    },
  },
  plugins: [],
};
