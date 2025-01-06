/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"selector",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "purple-heart": {
          50: "#eeefff",
          100: "#e0e2ff",
          200: "#c6c9ff",
          300: "#a4a5fd",
          400: "#8980f9",
          500: "#7661f3",
          600: "#623de6",
          700: "#5a36cc",
          800: "#492fa4",
          900: "#3e2d82",
          950: "#251a4c",
        },
      },
    },
  },
  plugins: [],
};
