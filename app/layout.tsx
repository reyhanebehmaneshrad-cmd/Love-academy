// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "آکادمی عشق و صمیمیت",
  description: "مرجعی برای یادگیری مهارت‌های ارتباطی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-[#FDFBF7] text-[#4A4A4A] antialiased">
        {children}
      </body>
    </html>
  );
}
