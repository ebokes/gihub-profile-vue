/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-1": "#ffffff",
      "light-2": "#eef0f5",
      "light-3": "#f3f7fc",
      "light-4": "#8d8d8d",
      "light-5": "#c4c4c4",
      "blue-1": "#2b64cf",
      "blue-2": "#6185d8",
      "blue-3": "#3c74da",
      "blue-4": "#5d90f0",
      vue: "#41b883",
      js: "#f1e05a",
      html: "#e34c26",
      css: "#563d7c",
    },

    extend: {},
  },
  plugins: [],
};
