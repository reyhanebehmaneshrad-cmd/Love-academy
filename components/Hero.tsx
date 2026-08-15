export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-peach-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-sage-500/20 blur-3xl" />

      <div className="container mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-right">
          <span className="inline-block text-sm text-terracotta bg-peach-50 border border-peach-500/30 rounded-full px-4 py-1 mb-6">
            دوره‌ی «پنج زبان یک رابطه»
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.3] mb-6 text-sage-600">
            رابطه‌ات را به
            <span className="text-gradient"> زبان خودش </span>
            حرف بزن
          </h1>
          <p className="text-lg md:text-xl text-sage-500 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            یاد بگیر چطور محبت، عذرخواهی و قدردانی را به زبانی بگویی که طرف مقابلت واقعاً می‌فهمد و احساس می‌کند.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#pricing" className="btn-premium bg-terracotta text-white hover:bg-rose-500 shadow-xl shadow-terracotta/20 text-center">
              شروع یادگیری
            </a>
            <a href="#course" className="btn-premium border border-terracotta text-terracotta hover:bg-peach-50 text-center">
              مشاهده سرفصل‌ها
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-peach-500/40 via-white/40 to-sage-500/30 border border-sage-100 shadow-2xl flex items-center justify-center">
            <span className="text-peach-500 font-bold">کاور دوره</span>
          </div>
        </div>
      </div>
    </section>
  );
}
