import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1176px",
      },
      colors: {
       "lightBrown":"#4C4C4C",
       "lightSkyBlue":"#71CED0",
       "darkBlue":"#070508",
       "raisinBlack":"#0F0D10",
       "jetBlack":"#232224",
       "blueBlack":"#121212FA",
      },
    },
  },
  plugins: [],
} satisfies Config;
