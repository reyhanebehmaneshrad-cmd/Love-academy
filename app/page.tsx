import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-sage-600">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-terracotta mb-6">
          رابطه‌ات را به زبان خودش حرف بزن
        </h1>
        <p className="text-xl md:text-2xl text-sage-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          در «آکادمی عشق و صمیمیت»، یاد می‌گیری چطور شکاف‌های عاطفی را پر کنی و پیوندی عمیق‌تر با کسی که دوستش داری بسازی.
        </p>
        <div className="flex justify-center gap-4">
          <button className="btn-premium bg-terracotta text-white hover:bg-rose-500 shadow-xl shadow-terracotta/20">
            شروع مسیر یادگیری
          </button>
        </div>
      </section>

      {/* Trust Bar (Social Proof) */}
      <section className="bg-white/30 py-8 border-y border-sage-100">
        <div className="container mx-auto px-6 flex justify-around text-center">
          <div>
            <div className="text-2xl font-bold text-terracotta">۱۵۰۰+</div>
            <div className="text-sm text-sage-500">دانشجو</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-terracotta">۵+</div>
            <div className="text-sm text-sage-500">فصل آموزشی</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-terracotta">۴.۹</div>
            <div className="text-sm text-sage-500">رضایت</div>
          </div>
        </div>
      </section>

      {/* Featured Course Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-sage-600 mb-12">دوره ویژه</h2>
        <div className="card-premium max-w-2xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 h-48 bg-peach-50 rounded-xl flex items-center justify-center border border-peach-500/10">
             <span className="text-peach-500 font-bold">کاور دوره</span>
          </div>
          <div className="flex-1 text-right">
            <h3 className="text-2xl font-bold text-terracotta mb-3">پنج زبان یک رابطه</h3>
            <p className="text-sage-500 mb-6 leading-relaxed">
              این دوره نقشه راه شماست برای درکِ عمیق‌ترِ نیازهای عاطفی طرف مقابل. تکنیک‌های عملی که زندگی مشترک شما را متحول می‌کند.
            </p>
            <button className="btn-premium border border-terracotta text-terracotta hover:bg-peach-50 w-full md:w-auto">
              اطلاعات بیشتر و ثبت‌نام
            </button>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section (ساخت دیتابیس مخاطب) */}
      <section className="bg-sage-100/50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-sage-600 mb-4">هدیه آموزشی</h3>
          <p className="text-sage-500 mb-8 max-w-md mx-auto">
            چک‌لیست «شناسایی زبان عشق» را همین حالا رایگان دریافت کنید تا اولین قدم را برای بهبود رابطه بردارید.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="ایمیل یا شماره شما" 
              className="px-4 py-2 rounded-full border border-sage-200 outline-none focus:border-terracotta"
            />
            <button className="btn-premium bg-sage-500 text-white hover:bg-sage-600">
              دریافت رایگان
            </button>
          </div>
        </div>
      </section>

    </main>
  );
          }
        
