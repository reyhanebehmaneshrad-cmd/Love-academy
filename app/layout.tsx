import "./globals.css";

export const metadata = {
  title: "آکادمی عشق و صمیمیت",
  description: "آموزش رابطه، صمیمیت و شناخت الگوهای عاطفی",
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
