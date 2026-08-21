import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://love-academy.ir"),
  title: "آکادمی عشق و صمیمیت | پنج زبان یک رابطه",
  description:
    "مسیر یادگیری ارتباط مؤثر، صمیمیت و پنج زبان عشق برای ساختن رابطه‌ای آرام و پایدار.",
  openGraph: {
    title: "آکادمی عشق و صمیمیت",
    description: "یادگیری عملی صمیمیت و ارتباط در رابطه.",
    locale: "fa_IR",
    type: "website",
    url: "https://love-academy.ir",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
