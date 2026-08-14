import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "آکادمی عشق و صمیمیت | مهری آهوئی",
  description: "آموزش روابط آگاهانه و صمیمیت",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
