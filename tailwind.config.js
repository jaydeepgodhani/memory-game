/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
  });
});

module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        hflip: {
          "0%": { opacity: '0' },
          "100%": { opacity: '100' },
        },
      },
      animation: {
        hflip: "hflip 0.5s ease",
        longflip: "hflip 2s ease",
      },
    },
    colors: {
      bground: '#dbeafe',
      fground: '#172554',
      hover: '#bfdbfe',
      dbground: '#172554',
      dfground: '#bfdbfe',
      dhover: '#1e3a8a',
    }
  },
  plugins: [backfaceVisibility],
};

