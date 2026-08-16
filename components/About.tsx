export default function About() {
  return (
    <section id="about" className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 text-center md:text-right">
          <span className="inline-block text-sm text-terracotta bg-peach-50 border border-peach-500/30 rounded-full px-4 py-1 mb-6">
            درباره من
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sage-600 mb-6">
            سلام، من اینجام تا <span className="text-terracotta">کنارت باشم</span>
          </h2>
          <p className="text-sage-500 leading-relaxed mb-4">
            سال‌هاست روی موضوع رابطه، صمیمیت و زبان عشق مطالعه و کار می‌کنم. هدفم این است که مفاهیم پیچیده‌ی روان‌شناسی را به زبانی ساده و قابل اجرا تبدیل کنم.
          </p>
          <p className="text-sage-500 leading-relaxed">
            «پنج زبان یک رابطه» حاصل تجربه، مطالعه و باور عمیق من است: هر رابطه‌ای می‌تواند نجات پیدا کند، اگر زبان درست را یاد بگیریم.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-square max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-sage-500/30 via-white/40 to-peach-500/30 border border-sage-100 shadow-xl flex items-center justify-center">
            <span className="text-sage-500 font-bold">عکس شما</span>
          </div>
        </div>
      </div>
    </section>
  );
}
