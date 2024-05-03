/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#2A7DBC",
        secondary: "#f0f2f6",
        greyPrimary: "#8B8B8B",
        primayAlert: "#EB5757",
      },
    },
    container: {
      center: true,
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
