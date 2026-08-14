import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDFB] text-[#4A4A4A] dir-rtl" dir="rtl">
      {/* Header */}
      <header className="py-10 text-center">
        <h1 className="text-4xl font-serif text-[#8C9A8E]">آکادمی عشق و صمیمیت</h1>
        <p className="mt-4 text-lg text-[#D4A373]">مرجعی برای یادگیری مهارت‌های ارتباطی عاطفی</p>
      </header>

      {/* Courses Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl mb-8 border-b pb-2 border-[#E5E5E5]">دوره‌های تخصصی</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {['هنر گفتگو', 'زبان‌های عشق', 'مدیریت تعارض'].map((course) => (
            <div key={course} className="p-6 bg-white border border-[#F0EAD6] rounded-lg shadow-sm">
              <h3 className="text-xl text-[#BC8F8F]">{course}</h3>
              <button className="mt-4 text-sm text-[#8C9A8E] underline">مشاهده جزئیات</button>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz Call to Action */}
      <section className="bg-[#F9F6F2] py-16 text-center">
        <h2 className="text-2xl mb-4">سبک عاطفی شما چیست؟</h2>
        <p className="mb-8">با انجام این تست ۵ دقیقه‌ای، الگوی ارتباطی خود را بشناسید.</p>
        <button className="bg-[#8C9A8E] text-white px-8 py-3 rounded-full hover:bg-[#7A897C] transition">
          شروع تست تعاملی
        </button>
      </section>
    </main>
  );
              }
        
