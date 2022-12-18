/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        reactjstheme: {
          "base-100": "#FFFFFF",
          primary: "#654ea3",
          secondary: "#eaafc8",
          accent: "#bde0fe",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
