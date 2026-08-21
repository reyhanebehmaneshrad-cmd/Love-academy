import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "دوره پنج زبان یک رابطه | آکادمی عشق و صمیمیت",
  description:
    "دوره ساختاریافته برای شناخت زبان عاطفی، گفت‌وگوی سالم و ساختن صمیمیت پایدار.",
};

const modules = [
  {
    title: "شناخت زبان خود",
    text: "می‌فهمید محبت را چطور می‌دهید و چطور می‌خواهید دریافت کنید.",
  },
  {
    title: "خواندن زبان طرف مقابل",
    text: "نشانه‌های واقعی نیاز عاطفی را می‌بینید، نه حدس و گلایه.",
  },
  {
    title: "گفت‌وگو در تعارض",
    text: "در sensitized شدن یا فاصله گرفتن، آرام و شفاف حرف می‌زنید.",
  },
  {
    title: "عادت‌های روزانه صمیمیت",
    text: "محبت را از حرف کلی به کار کوچک و تکرارپذیر تبدیل می‌کنید.",
  },
];

const languages = [
  "کلمات تأیید",
  "وقت کیفی",
  "هدیه",
  "خدمات",
  "لمس",
];

export default function CoursePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">دوره اصلی</span>
            <h1>پنج زبان یک رابطه</h1>
            <p className="lead">
              یک مسیر آرام و عملی برای فهمیدن زبان عشق، ترمیم ارتباط
              و ساختن صمیمیتی که در زندگی روزمره بماند.
            </p>
            <div className="hero-actions">
              <a href="#register" className="btn btn-primary">
                ثبت‌نام در دوره
              </a>
              <Link href="/#path" className="btn btn-ghost">
                مسیر یادگیری
              </Link>
            </div>
          </div>

          <aside className="panel">
            <h2>این دوره برای شماست اگر</h2>
            <ul>
              <li>حرف می‌زنید، ولی احساس می‌کنید شنیده نمی‌شوید</li>
              <li>محبت می‌کنید، اما به زبان طرف مقابل نیست</li>
              <li>می‌خواهید صمیمیت را از حدس زدن بیرون بیاورید</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="badge">محتوا</span>
          <h2>چه چیزی یاد می‌گیرید</h2>
          <div className="grid-3">
            {modules.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>پنج زبان دوره</h2>
          <p className="lead">
            هر بخش روی یک زبان تمرکز می‌کند تا محبت گم نشود و درست برسد.
          </p>
          <div className="grid-5">
            {languages.map((title) => (
              <article key={title} className="card">
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="section">
        <div className="container panel">
          <span className="badge">قدم بعد</span>
          <h2>شروع مسیر</h2>
          <p className="lead">
            اگر آماده‌اید رابطه را با یک چارچوب مشخص پیش ببرید،
            از همین‌جا ثبت‌نام کنید.
          </p>
          <div className="cta-actions">
            <a href="mailto:hello@love-academy.ir" className="btn btn-primary">
              درخواست ثبت‌نام
            </a>
            <Link href="/" className="btn btn-secondary">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </section>
    </>
  );
  }
      
