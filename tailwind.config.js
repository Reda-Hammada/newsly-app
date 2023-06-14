/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        "main-text-color": "#262626",
        "dark-theme-color": "#2E2E2E",
      },
    },
  },
  plugins: [],
};
