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
        // پالت رنگی آکادمی عشق و صمیمیت
        sage: "#8A9A5B",      // سبز ملایم (حس رشد و آرامش)
        peach: "#F4BB98",     // هلویی (حس صمیمیت)
        rose: "#D4A5A5",      // صورتی چرکی (حس عشق و لطافت)
        ivory: "#F9F7F2",     // استخوانی/عاجی (پس‌زمینه لوکس)
        terracotta: "#A65D50", // آجری (رنگ قدرت و اصالت)
        gold: "#D4AF37",      // طلایی (حس ارزش و پرمیوم بودن)
      },
      fontFamily: {
        // فرض بر این است که Vazirmatn را در Layout ست کرده‌اید
        sans: ["var(--font-vazirmatn)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
export default config;
