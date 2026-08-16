"use client";

import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center overflow-hidden bg-[#F9F7F2]">
      {/* تصویر پس‌زمینه که در سمت راست فیکس شده است */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-right-center md:bg-right"
        style={{ 
          backgroundImage: "url('/hero-cover.png')",
          backgroundSize: 'contain' 
        }}
      >
        {/* لایه گرادینت برای محو شدن تصویر در متن (در دسکتاپ) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-transparent via-[#F9F7F2]/20 to-[#F9F7F2] tracking-tighter"></div>
        {/* لایه شفاف برای خوانایی در موبایل */}
        <div className="md:hidden absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-2xl text-right">
          {/* نام برند با فونت ظریف */}
          <span className="text-sage font-medium tracking-[0.3em] text-sm md:text-base mb-4 block opacity-80 uppercase">
            آکادمی عشق و صمیمیت
          </span>
          
          {/* نام مدرس - بزرگ و تاثیرگذار */}
          <h2 className="text-gray-500 text-xl md:text-2xl font-light mb-2">مدرس:</h2>
          <h1 className="text-5xl md:text-[100px] font-bold text-terracotta leading-none mb-8 drop-shadow-sm">
            مهری آهوئی
          </h1>
          
          {/* خط دکوراتیو طلایی */}
          <div className="h-[2px] w-32 bg-gold/50 mb-8 mr-0"></div>

          {/* عنوان دوره */}
          <h3 className="text-3xl md:text-5xl text-gray-800 font-bold mb-6">
            دوره جامع <span className="text-sage italic">ارتباط موثر</span>
          </h3>
          
          {/* شعار دوره */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-lg font-light">
            «هنر گفتن، مهارت شنیدن؛ <br />
            <span className="font-medium text-gray-700">پلی برای درک متقابل و صمیمیت پایدار»</span>
          </p>

          {/* دکمه‌های فراخوان (CTA) */}
          <div className="flex flex-col md:flex-row gap-5 justify-start">
            <button className="bg-terracotta text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-sage transition-all duration-500 shadow-xl hover:-translate-y-1 active:scale-95">
              ثبت‌نام در دوره
            </button>
            <button className="bg-white/60 backdrop-blur-md border border-sage/30 text-sage px-12 py-5 rounded-full text-xl font-semibold hover:bg-sage hover:text-white transition-all duration-500">
              مشاهده سرفصل‌ها
            </button>
          </div>
        </div>
      </div>

      {/* المان تزیینی پایین صفحه برای اسکرول */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce opacity-30">
        <div className="w-[1px] h-16 bg-gray-400"></div>
      </div>
    </section>
  );
};

export default Hero;
