/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   screens: {
    md: "54rem",
   },
  },
  colors: {
   primary: "#111517",
   secondary: "#2B3844",
   searchColor: "#848484",
   white: "#fff",
   lightGray: "#F2F2F2",
  },
 },
 plugins: [],
};
