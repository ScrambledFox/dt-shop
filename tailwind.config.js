/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-texture": "url('/media/bg.svg')",
      },
    },
  },
  plugins: [],
};
