import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "آکادمی عشق و صمیمیت | مشاوره رابطه و ارتباط مؤثر – مهری آهوئی",
  description: "آموزش و همراهی برای ساختن رابطه‌ای سالم، امن و صمیمی. دوره‌های تخصصی ارتباط مؤثر، مشاوره فردی و زوجی.",
  keywords: ["عشق", "صمیمیت", "مشاوره رابطه", "ارتباط مؤثر", "مهری آهوئی", "آموزش رابطه"],
  openGraph: {
    title: "آکادمی عشق و صمیمیت | مهری آهوئی",
    description: "مسیر ساختن رابطه‌ای امن و آگاهانه",
    type: "website",
    locale: "fa_IR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir">{children}</body>
    </html>
  );
}
