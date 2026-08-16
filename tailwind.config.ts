// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#8A9A5B",
        peach: "#FFDAB9",
        rose: "#F4C2C2",
        ivory: "#FFFFF0",
        terracotta: "#E2725B",
        gold: "#D4AF37",
      },
    },
  },
  plugins: [],
};
export default config;
