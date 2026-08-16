export default function LeadMagnet() {
  return (
    <section className="bg-gradient-to-br from-sage-100/60 to-peach-50/60 py-20">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <span className="inline-block text-sm text-terracotta bg-white/60 border border-peach-500/30 rounded-full px-4 py-1 mb-6">
          هدیه رایگان
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-sage-600 mb-4">
          چک‌لیست «شناسایی زبان عشق»
        </h2>
        <p className="text-sage-500 leading-relaxed mb-8">
          همین حالا رایگان دریافت کن و اولین قدم برای فهمیدن زبان خودت و طرف مقابلت را بردار.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="ایمیل یا شماره تماس شما"
            className="px-5 py-3 rounded-full border border-sage-200 bg-white/70 outline-none focus:border-terracotta text-sage-600 w-full sm:w-auto sm:min-w-[280px]"
          />
          <button type="submit" className="btn-premium bg-terracotta text-white hover:bg-rose-500">
            دریافت رایگان
          </button>
        </form>
        <p className="text-xs text-sage-500 mt-4">بدون اسپم. فقط محتوای ارزشمند.</p>
      </div>
    </section>
  );
}
