export default function Pricing() {
  return (
    <section id="pricing" className="container mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-sage-600 mb-4">سرمایه‌گذاری روی رابطه‌ات</h2>
        <p className="text-sage-500">یک بار پرداخت، دسترسی دائمی به تمام محتوا.</p>
      </div>
      <div className="max-w-md mx-auto">
        <div className="card-premium text-center relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-terracotta to-rose-500" />
          <h3 className="text-xl font-bold text-sage-600 mb-2">دوره کامل «پنج زبان یک رابطه»</h3>
          <div className="text-5xl font-bold text-terracotta my-6">
            ۴۹۰,۰۰۰ <span className="text-base font-normal text-sage-500">تومان</span>
          </div>
          <ul className="text-sage-500 text-sm space-y-3 mb-8 text-right">
            <li>✓ ۵ فصل صوتی کامل</li>
            <li>✓ جزوه PDF و تمرین‌های عملی</li>
            <li>✓ پشتیبانی و پاسخ به سؤال</li>
            <li>✓ دسترسی دائمی + آپدیت‌های آینده</li>
          </ul>
          <a href="#contact" className="btn-premium bg-terracotta text-white hover:bg-rose-500 w-full block text-center shadow-xl shadow-terracotta/20">
            همین حالا شروع کن
          </a>
          <p className="text-xs text-sage-500 mt-4">۷ روز ضمانت بازگشت وجه</p>
        </div>
      </div>
    </section>
  );
}
