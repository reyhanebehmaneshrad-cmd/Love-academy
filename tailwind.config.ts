import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#8A9A86",
        peach: "#E8C5C8",
        rose: "#D4A373",
        terracotta: "#B07D62",
        ivory: "#FDFBF7",
      },
    },
  },
  plugins: [],
};
export default config;
