export default function CourseFeatures() {
  const features = [
    { icon: '🎧', title: '۵ فصل صوتی اختصاصی', desc: 'هر زبان عشق در یک فصل عمیق و کاربردی توضیح داده شده.' },
    { icon: '📄', title: 'جزوه PDF قابل دانلود', desc: 'خلاصه‌ای ساختارمند برای مرور همیشگی.' },
    { icon: '🧠', title: 'تمرین‌های عملی', desc: 'کاربرگ‌های هفتگی برای تبدیل یادگیری به عادت.' },
    { icon: '💬', title: 'پاسخ به سؤال‌ها', desc: 'پشتیبانی برای رفع ابهام در مسیر یادگیری.' },
  ];

  return (
    <section id="course" className="bg-sage-100/40 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-600 mb-4">داخل دوره چه خبره؟</h2>
          <p className="text-sage-500">هر چیزی که برای شروع یک رابطه‌ی صمیمی‌تر لازم داری.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card-premium text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-sage-600 mb-2">{f.title}</h3>
              <p className="text-sm text-sage-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
