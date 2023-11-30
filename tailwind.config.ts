import { withRouter } from "next/router";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000112",
        darkGrey: "#2b2c37",
        mediumGrey: "#828fa3",
        lines: "#e4ebfa",
        lightGrey: "#f4f7fd",
        white: "#ffffff",
        purple: "#635fc7",
        purpleHover: "#a8a4ff",
        red: "#ea5555",
        redHover: "#ff9898",
      },
    },
  },
  plugins: [],
};
export default config;
