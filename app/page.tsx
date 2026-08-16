// اگر فایل شما در app/page.tsx است و پوشه کامپوننت‌ها کنار app است:
import Navbar from '../components/Navbar'; 

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      {/* بقیه کامپوننت‌ها را فعلاً کامنت کنید تا یکی یکی بسازید */}
      {/* <Hero /> */}
    </main>
  );
}
