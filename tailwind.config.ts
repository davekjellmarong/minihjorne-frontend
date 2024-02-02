import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#e5e1f9",
          200: "#cbc3f2",
          300: "#b1a6ec",
          400: "#9788e5",
          500: "#7d6adf",
          600: "#6455b2",
          700: "#4b4086",
          800: "#322a59",
          900: "#19152d",
        },

        // #708BF4 - lilla
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        homeHeroMobile: "url('/home-hero-mobile.jpg')",
        homeHeroDesktop: "url('/home-hero-desktop.jpg')",
        boyOutM: "url('/boy-out-M.jpg')",
        girlBackM: "url('/girl-back-M.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
