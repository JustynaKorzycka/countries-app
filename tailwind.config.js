/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 darkMode: "class",
 theme: {
  extend: {
   screens: {
    sm: "35rem",
    md: "54rem",
   },
  },
  colors: {
   primary: "#111517",
   secondary: "#2B3844",
   searchColor: "#848484",
   white: "#fff",
   lightGray: "#F2F2F2",
   dark: "#202C36",
   lightDark: "#2B3844",
  },
 },
 plugins: [],
};
