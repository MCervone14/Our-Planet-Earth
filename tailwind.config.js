/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    screens: {
      mobile: { min: "360px", max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      laptop: { min: "1024px", max: "1374px" },
      desktop: "1375px",
    },
    extend: {
      boxShadow: {
        2: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animate")],
};
