import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#8A9A86",
        "muted-peach": "#E8C5C8",
        "dusty-rose": "#D4A373",
        terracotta: "#B07D62",
      },
    },
  },
  plugins: [],
};
export default config;
