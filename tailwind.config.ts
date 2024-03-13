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
        gray: {
          0: "var(--gray-0)",
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
        },
        main: {
          100: "var(--main-100)",
          200: "var(--main-200)",
          300: "var(--main-300)",
          400: "var(--main-400)",
          500: "#692ca9",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
