/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Covers all JS/TSX files inside src
      'node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}' , 
    ],
    theme: {
      extend: {
        colors: {
          neutralSilver: "#F5F7FA",
          neutralDGrey: "#4D4D4D",
          brandPrimary:  "#007BFF",
          neutralGrey: "#717171",
          gray900: "#18191F",
        },
      },
    },
    plugins: [require('flowbite/plugin')],
  };
  