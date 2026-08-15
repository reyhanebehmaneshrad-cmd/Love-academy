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
        // پالت رنگی اختصاصی آکادمی
        sage: {
          50: '#f4f7f5',
          100: '#e9efeb',
          500: '#8da399', // سبز ملایم
          600: '#7a8e85',
        },
        peach: {
          50: '#fffbf9',
          500: '#e5b5a2', // هلویی کدر
        },
        rose: {
          500: '#d9a7a7', // صورتی خاکی
        },
        ivory: '#fbfaf5', // رنگ پس‌زمینه اصلی (عاجی)
        terracotta: '#c68e7d', // رنگ بدنه سفالی
        gold: '#d4af37', // طلایی مات برای جزئیات
      },
      fontFamily: {
        // فرض بر این است که فونت Vazirmatn را در globals.css وارد کرده‌اید
        sans: ['Vazirmatn', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
export default config;
