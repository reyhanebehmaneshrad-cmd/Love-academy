import "./globals.css";

export const metadata = {
  title: "آکادمی عشق و صمیمیت",
  description: "مرجعی برای یادگیری مهارت‌های ارتباطی و پیوندهای پایدار",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-[#FDFBF7] antialiased text-right">
        {children}
      </body>
    </html>
  );
}
