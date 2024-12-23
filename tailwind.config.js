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
        zest: {
          50: "#fdf8ef",
          100: "#fbefd9",
          200: "#f6dbb2",
          300: "#f0c281",
          400: "#e9a04e",
          500: "#e68f3d",
          600: "#d56d21",
          700: "#b1531d",
          800: "#8d421f",
          900: "#72381c",
          950: "#3d1b0d",
        },
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
