import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-ink">
      <Navbar />

      <Hero />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-sage-700">
              یک رابطه، دو دنیای متفاوت
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink md:text-5xl">
              چرا گاهی با وجود علاقه، از هم دور می‌شویم؟
            </h2>

            <p className="mt-6 text-lg leading-9 text-muted">
              مسئله همیشه کمبود عشق نیست. گاهی شیوه بیان محبت، شنیدن و گفت‌وگو
              با نیاز واقعی طرف مقابل هماهنگ نیست. در این دوره یاد می‌گیری
              رابطه را دقیق‌تر ببینی و برای ارتباطی روشن‌تر قدم برداری.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="border-t-4 border-rose bg-rose-50 p-6">
              <h3 className="text-xl font-bold text-ink">
                سوءتفاهم‌های تکراری
              </h3>
              <p className="mt-3 leading-8 text-muted">
                حرف‌ها گفته می‌شوند، اما معنای واقعی آن‌ها به طرف مقابل منتقل
                نمی‌شود.
              </p>
            </article>

            <article className="border-t-4 border-peach bg-[#fff7f3] p-6">
              <h3 className="text-xl font-bold text-ink">
                محبت دیده نمی‌شود
              </h3>
              <p className="mt-3 leading-8 text-muted">
                تلاش می‌کنی محبت کنی، اما طرف مقابل هنوز احساس تنهایی یا
                نادیده‌گرفته‌شدن دارد.
              </p>
            </article>

            <article className="border-t-4 border-gold bg-[#fffaf0] p-6">
              <h3 className="text-xl font-bold text-ink">
                گفت‌وگو به تنش می‌رسد
              </h3>
              <p className="mt-3 leading-8 text-muted">
                اختلاف‌های کوچک، به سکوت، دلخوری یا فاصله عاطفی تبدیل می‌شوند.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-sage-700 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-sm font-semibold text-peach">
            پنج زبان یک رابطه
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
            رابطه بهتر، از گفت‌وگوی امن‌تر شروع می‌شود
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-sage-50">
            یاد بگیر محبت را به زبانی بیان کنی که طرف مقابلت واقعاً آن را
            دریافت می‌کند.
          </p>

          <a
            href="#course"
            className="mt-8 inline-flex items-center justify-center bg-terracotta px-7 py-3 font-semibold text-white transition hover:bg-[#a94f40]"
          >
            مشاهده جزئیات دوره
          </a>
        </div>
      </section>
    </main>
  );
}
