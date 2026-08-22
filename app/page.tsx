import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">آکادمی عشق و صمیمیت</span>
            <h1>پنج زبان یک رابطه</h1>
            <p className="lead">
              یک مسیر آرام برای فهمیدن زبان عشق، ترمیم ارتباط
              و ساختن صمیمیتی که در زندگی روزمره بماند.
            </p>
            <div className="hero-actions">
              <Link href="/course" className="btn btn-primary">
                مشاهده دوره
              </Link>
              <a href="#languages" className="btn btn-ghost">
                پنج زبان
              </a>
            </div>
          </div>

          <aside className="panel">
            <h2>این مسیر برای شماست اگر</h2>
            <ul>
              <li>حرف می‌زنید، ولی احساس می‌کنید شنیده نمی‌شوید</li>
              <li>محبت می‌کنید، اما به زبان طرف مقابل نیست</li>
              <li>می‌خواهید صمیمیت را از حدس زدن بیرون بیاورید</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="languages" className="section">
        <div className="container">
          <span className="badge">پنج زبان</span>
          <h2>محبت وقتی می‌رسد که به زبان درست گفته شود</h2>
          <div className="grid-5">
            {["کلمات تأیید", "وقت کیفی", "هدیه", "خدمات", "لمس"].map(
              (title) => (
                <article key={title} className="card">
                  <h3>{title}</h3>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section id="path" className="section">
        <div className="container panel">
          <span className="badge">قدم بعد</span>
          <h2>از صفحه دوره شروع کنید</h2>
          <p className="lead">
            جزئیات دوره و فرم ثبت‌نام در یک صفحه جدا آماده است.
          </p>
          <Link href="/course" className="btn btn-primary">
            رفتن به صفحه دوره
          </Link>
        </div>
      </section>
    </main>
  );
          }
