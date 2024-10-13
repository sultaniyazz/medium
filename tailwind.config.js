/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Nunito Sans": '"Nunito Sans", system-ui',
      },
      colors: {
        hoverBlack: "#262626",
        black: "#0a0a0a",
        ligthBlack: "#171717",
        white: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
