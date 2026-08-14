export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] p-6 md:p-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center py-16">
        <h1 className="text-4xl md:text-6xl font-light text-[#B07D62] mb-6 tracking-tight">
          آکادمی عشق و صمیمیت
        </h1>
        <p className="text-lg md:text-xl text-[#8A9A86] leading-relaxed">
          مرجعی برای یادگیری مهارت‌های ارتباطی و خلق پیوندهای پایدار
        </p>
      </div>

      {/* Courses Section */}
      <section className="max-w-5xl mx-auto py-12">
        <h2 className="text-2xl font-medium text-[#4A4A4A] mb-8 border-r-4 border-[#E8C5C8] pr-4">
          دوره‌های تخصصی
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "هنر گفتگو", color: "bg-[#8A9A86]" },
            { title: "زبان‌های عشق", color: "bg-[#D4A373]" },
            { title: "مدیریت تعارض", color: "bg-[#B07D62]" }
          ].map((course, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8C5C8]/30 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium mb-4">{course.title}</h3>
              <button className="text-sm border border-[#4A4A4A] px-4 py-2 rounded-full hover:bg-[#4A4A4A] hover:text-white transition-colors">
                مشاهده جزئیات
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Section */}
      <section className="max-w-5xl mx-auto py-12 bg-[#E8C5C8]/20 rounded-3xl p-8 mt-12 text-center">
        <h2 className="text-2xl font-medium mb-4 text-[#B07D62]">سبک عاطفی شما چیست؟</h2>
        <p className="mb-6 opacity-80">با انجام این تست ۵ دقیقه‌ای، الگوی ارتباطی خود را بشناسید.</p>
        <button className="bg-[#B07D62] text-white px-8 py-3 rounded-full hover:bg-[#966a53] transition-all font-medium">
          شروع تست تعاملی
        </button>
      </section>
    </main>
  );
}
