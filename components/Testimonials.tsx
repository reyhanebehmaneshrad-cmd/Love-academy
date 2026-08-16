export default function Testimonials() {
  const reviews = [
    { name: 'مریم', text: 'بالاخره فهمیدم چرا همسرم محبتم رو حس نمی‌کرد. الان زبان همدیگه رو می‌دونیم.' },
    { name: 'علی', text: 'ساده و عملی. تمرین‌های هفتگی واقعاً گفتگوهای ما رو تغییر داد.' },
    { name: 'نگار', text: 'حس می‌کنم برای اولین بار صدای واقعی رابطه‌م رو شنیدم.' },
  ];

  return (
    <section id="testimonials" className="bg-white/40 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-600 mb-4">یادگیرنده‌ها چی می‌گن؟</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="card-premium">
              <div className="text-gold mb-3 text-lg">★★★★★</div>
              <p className="text-sage-500 leading-relaxed mb-6 text-sm">«{r.text}»</p>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-peach-500/40 flex items-center justify-center text-peach-500 font-bold">
                  {r.name[0]}
                </span>
                <span className="font-bold text-sage-600">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
