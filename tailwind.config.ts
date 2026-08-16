import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#F3F7F4",
          100: "#E3ECE5",
          300: "#A9C0B0",
          500: "#7D9986",
          700: "#45604E",
          900: "#263B2F",
        },
        peach: "#E9B6A5",
        rose: "#BF7F82",
        terracotta: "#B9604F",
        gold: "#C9A66B",
        ivory: "#FCFAF7",
        ink: "#26332C",
        muted: "#66736C",
      },
      borderRadius: {
        xl: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
