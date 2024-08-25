import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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

        tan: {
          100: "#f7f6f4",
          200: "#efede9",
          300: "#e7e5dd",
          400: "#dfdcd2",
          500: "#d7d3c7",
          600: "#aca99f",
          700: "#817f77",
          800: "#565450",
          900: "#2b2a28",
        },
        secondary: {
          100: "#fdfaf1",
          200: "#faf6e3",
          300: "#f8f1d4",
          400: "#f5edc6",
          500: "#f3e8b8",
          600: "#c2ba93",
          700: "#928b6e",
          800: "#615d4a",
          900: "#312e25",
        },
        tertiary: {
          100: "#f3e8e1",
          200: "#e7d1c3",
          300: "#dab9a5",
          400: "#cea287",
          500: "#c28b69",
          600: "#9b6f54",
          700: "#74533f",
          800: "#4e382a",
          900: "#271c15",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;

export default config;
