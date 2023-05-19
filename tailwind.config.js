/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(rgb(0 0 0/40%) 0 0)",
      },
    },
  },
  plugins: [],
};
