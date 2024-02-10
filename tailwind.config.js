/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      yellow: "#EFB300",
      blue: "#222A5B",
      white: "#fff",
    },
  },
  plugins: [require("daisyui")],
};
