import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    // اینجا رنگ Ivory رو به عنوان پس‌زمینه کل سایت ست می‌کنیم
    <main className="min-h-screen bg-[#F9F7F2] overflow-x-hidden">
      
      {/* هدر سایت */}
      <Navbar />

      {/* بخش هیرو با تصویر و متن جدید */}
      <Hero />

      {/* بخش معرفی (Problem/Solution) با استایل رنگی */}
      <section className="section-padding bg-white/40">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-terracotta mb-8">
            چرا روابط ما به بن‌بست می‌رسند؟
          </h2>
          <p className="text-xl text-sage leading-relaxed mb-12">
            بزرگترین بحران در روابط امروز، نه نبودِ عشق، بلکه نبودِ «گفتگوی امن» است. 
            جایی که کلمات به جای پل، تبدیل به دیوار می‌شوند.
          </p>
          
          {/* کارت‌های پالت رنگی */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-premium border-t-4 border-sage">
              <h3 className="text-xl font-bold text-terracotta mb-4">احیای عشق</h3>
              <p className="text-gray-600">بازگرداندن شور و اشتیاق به رابطه‌های سرد شده.</p>
            </div>
            <div className="card-premium border-t-4 border-gold">
              <h3 className="text-xl font-bold text-terracotta mb-4">امنیت روانی</h3>
              <p className="text-gray-600">ساختن فضایی که در آن هر دو نفر شنیده می‌شوند.</p>
            </div>
            <div className="card-premium border-t-4 border-rose">
              <h3 className="text-xl font-bold text-terracotta mb-4">نجات رابطه</h3>
              <p className="text-gray-600">جلوگیری از فروپاشی با مهارت‌های گفتگو.</p>
            </div>
          </div>
        </div>
      </section>

      {/* یک بخش با رنگ تیره برند برای تنوع بصری */}
      <section className="py-20 bg-sage text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">آماده تغییر هستید؟</h2>
          <p className="text-xl mb-10 opacity-90">دوره جامع «گفتگوی امن»؛ مسیری برای صمیمیت پایدار</p>
          <button className="bg-terracotta hover:bg-gold text-white px-10 py-4 rounded-full text-xl font-bold transition-all shadow-xl">
            همین حالا شروع کنید
          </button>
        </div>
      </section>

    </main>
  );
        }
import FaqPreview from "@/components/home/FaqPreview";

export default function Home() {
  return (
    <main>
      {/* سایر بخش‌ها */}
      <FaqPreview />
      {/* بخش قیمت و فوتر */}
    </main>
  );
}
