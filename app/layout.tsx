import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "آکادمی عشق و صمیمیت | مهری آهوئی",
  description: "آموزش و همراهی برای ساختن رابطه‌ای سالم و صمیمی",
  openGraph: {
    title: "آکادمی عشق و صمیمیت | مهری آهوئی",
    description: "مسیر ساختن رابطه‌ای امن و آگاهانه",
    type: "website",
    locale: "fa_IR",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir">{children}</body>
    </html>
  );
}
