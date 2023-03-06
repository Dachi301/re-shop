/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "3xl": { max: "1500px" },
      "2xl": { max: "1200px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "800px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "500px" },
      // => @media (max-width: 1023px) { ... }
    },
  },
  plugins: [],
};
