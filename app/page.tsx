export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      
      {/* Header / Hero */}
      <header className="text-center mb-20">
        <div className="inline-block px-4 py-1 border border-[#8A9A86] text-[#8A9A86] text-xs mb-6 tracking-[0.2em]">
          ACADEMY OF LOVE
        </div>
        <h1 className="text-5xl md:text-7xl font-light text-[#B07D62] mb-8 leading-tight">
          آکادمی عشق و صمیمیت
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#4A4A4A]/70 leading-relaxed font-light">
          آموزش مهارت‌هایی برای خلق روابط عمیق، صمیمانه و پایدار؛ جایی برای یادگیری زبانِ قلب.
        </p>
      </header>

      {/* Courses Grid */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-10 border-b border-[#E8C5C8] pb-4">
          <h2 className="text-2xl font-normal text-[#4A4A4A]">دوره‌های تخصصی</h2>
          <span className="text-sm text-[#8A9A86]">مشاهده همه</span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "هنر گفتگو", color: "bg-[#8A9A86]", desc: "چگونه بدون قضاوت بشنویم و حرف بزنیم." },
            { title: "زبان‌های عشق", color: "bg-[#D4A373]", desc: "شناخت روش‌های ابراز علاقه در شریک عاطفی." },
            { title: "مدیریت تعارض", color: "bg-[#B07D62]", desc: "تبدیل چالش‌ها به فرصتی برای صمیمیت بیشتر." }
          ].map((course, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className={`aspect-[4/5] ${course.color} mb-6 transition-transform duration-500 group-hover:scale-[1.02] rounded-sm shadow-sm`}></div>
              <h3 className="text-xl mb-2 text-[#4A4A4A]">{course.title}</h3>
              <p className="text-sm text-[#4A4A4A]/60 leading-relaxed mb-4">{course.desc}</p>
              <div className="h-[1px] w-8 bg-[#B07D62] group-hover:w-16 transition-all"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Test / Interactive Section */}
      <section className="bg-[#E8C5C8]/15 p-12 md:p-20 text-center rounded-sm">
        <h2 className="text-3xl font-light mb-6 text-[#B07D62]">سبک عاطفی شما چیست؟</h2>
        <p className="max-w-xl mx-auto mb-10 text-[#4A4A4A]/80 leading-relaxed">
          با انجام این تست ۵ دقیقه‌ای، الگوهای ناخودآگاه خود در رابطه را کشف کنید.
        </p>
        <button className="bg-[#4A4A4A] text-white px-10 py-4 rounded-full text-sm tracking-widest hover:bg-[#B07D62] transition-colors duration-300">
          شروع تست رایگان
        </button>
      </section>

      {/* Footer Minimal */}
      <footer className="mt-32 pt-8 border-t border-[#4A4A4A]/5 text-center text-[10px] uppercase tracking-widest text-[#4A4A4A]/40">
        © 2026 Love & Intimacy Academy | Isfahan, Iran
      </footer>
    </main>
  );
              }
