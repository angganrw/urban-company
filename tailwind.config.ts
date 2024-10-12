import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-icon-sm": "url('/img/header-icon-sm.webp')",
        "home-icon-md": "url('/img/header-icon-md.webp')",
        "home-icon-lg": "url('/img/header-icon-lg.webp')",
        "home-icon-xl": "url('/img/header-icon-xl.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
