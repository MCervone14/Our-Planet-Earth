/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    screens: {
      mobile: "450px",
      tablet: "850px",
      desktop: "1325px",
    },
    extend: {
      boxShadow: {
        2: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
