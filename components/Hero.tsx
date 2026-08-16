// components/Hero.tsx
export default function Hero() {
  return (
    <section className="py-20 px-6 flex flex-col items-center justify-center text-center bg-ivory">
      {/* نام آکادمی و مدرس */}
      <h2 className="text-sage font-bold tracking-widest uppercase mb-2">آکادمی عشق و صمیمیت</h2>
      <h1 className="text-5xl md:text-6xl font-bold text-terracotta mb-6">
        مهری آهوئی
      </h1>
      
      {/* عنوان اصلی */}
      <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-8 leading-relaxed">
        رابطه‌ات را به زبان خودش حرف بزن؛ مسیر رسیدن به درک متقابل از اینجا شروع می‌شود.
      </p>

      {/* تصویر Hero که بعداً جایگزین می‌شود */}
      <div className="w-full max-w-4xl h-64 md:h-96 bg-rose rounded-3xl shadow-lg mb-10 overflow-hidden flex items-center justify-center">
        <span className="text-gold text-xl font-medium">تصویر کاور آکادمی</span>
      </div>

      <button className="bg-terracotta text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-sage transition-all shadow-md">
        شروع یادگیری
      </button>
    </section>
  );
}
