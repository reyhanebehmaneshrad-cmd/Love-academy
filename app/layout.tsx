import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "آکادمی عشق و صمیمیت | مهری آهوئی",
  description: "مرجع تخصصی آموزش صمیمیت و روابط آگاهانه تحت نظارت مهری آهوئی. دوره‌های تخصصی، پادکست و تست‌های خودشناسی.",
  keywords: ["مهری آهوئی", "عشق و صمیمیت", "آموزش رابطه", "هنر گفتگو", "تست سبک عاطفی"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
