import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "آکادمی عشق و صمیمیت",
  description: "مسیر آرام شناخت زبان عشق و ساختن صمیمیت پایدار.",
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
