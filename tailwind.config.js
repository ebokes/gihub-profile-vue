/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      "light-1": "#ffffff",
      "dark-c1-1": "#1b1b1b",
      "dark-c1-3": "#0d1117",
      "light-2": "#eef0f5",
      "dark-c2-1": "#c7c7c7",
      "dark-c2-2": "#dcdcdc",
      "light-3": "#f3f7fc",
      "light-4": "#8d8d8d",
      "light-5": "#c4c4c4",
      "blue-1": "#2b64cf",
      "blue-c1-1": "#1E90FF",
      "blue-c1-2": "#6aa6e4",
      "blue-2": "#6185d8",
      "blue-3": "#3c74da",
      "blue-4": "#5d90f0",
      "light-back": "#eef0f5",
      "dark-back": "#0d1117",
      vue: "#41b883",
      js: "#f1e05a",
      html: "#e34c26",
      css: "#563d7c",
    },
    fontFamily: {
      Mulish: ["Mulish", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
