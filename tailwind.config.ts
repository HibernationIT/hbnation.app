import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#E6CFFF",
          200: "#CB99FF",
          300: "#AA5CFB",
          400: "#8942D3",
          500: "#692CA9",
          600: "#4A0083",
          700: "#2E005D",
          800: "#1D013A",
          900: "#120024",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
