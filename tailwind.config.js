import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      const allColors = theme("colors");
      const newVars = Object.fromEntries(
          Object.entries(allColors).flatMap(([key, val]) =>
              typeof val === "string"
                  ? [[`--${key}`, val]]
                  : Object.entries(val).map(([shade, color]) => [`--${key}-${shade}`, color])
          )
      );

      addBase({
        ":root": newVars,
      });
    }),
  ],
};
