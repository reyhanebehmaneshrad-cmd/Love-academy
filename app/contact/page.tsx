export default function ContactPage() {
  return (
    <main className="bg-ivory py-16 md:py-24">
      <section className="mx-auto max-w-4xl px-5">
        <p className="text-sm font-semibold text-sage-700">ارتباط با آکادمی</p>

        <h1 className="mt-3 text-4xl font-bold text-ink md:text-5xl">
          تماس با ما
        </h1>

        <p className="mt-5 max-w-2xl leading-8 text-muted">
          برای پیگیری خرید، مسائل مربوط به دسترسی دوره، همکاری یا ارسال پرسش،
          از راه‌های زیر با تیم آکادمی عشق و صمیمیت در ارتباط باشید.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <section className="rounded-xl border border-sage-100 bg-white p-6">
            <h2 className="text-xl font-bold text-ink">پشتیبانی</h2>
            <p className="mt-3 leading-7 text-muted">
              پاسخ‌گویی به پرسش‌های مربوط به دوره‌ها و خرید.
            </p>

            <a
              href="mailto:support@love-academy.ir"
              className="mt-5 inline-block font-semibold text-sage-700 hover:text-terracotta"
            >
              support@love-academy.ir
            </a>
          </section>

          <section className="rounded-xl border border-sage-100 bg-white p-6">
            <h2 className="text-xl font-bold text-ink">زمان پاسخ‌گویی</h2>
            <p className="mt-3 leading-7 text-muted">
              درخواست‌ها در روزهای کاری بررسی می‌شوند. زمان پاسخ‌گویی معمولاً
              حداکثر تا یک روز کاری است.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
