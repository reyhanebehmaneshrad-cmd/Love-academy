import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="badge">آکادمی عشق و صمیمیت</span>
          <h1>پنج زبان یک رابطه</h1>
          <p className="lead">
            یک مسیر آرام برای فهمیدن زبان عشق و ساختن صمیمیتی که بماند.
          </p>
          <div className="hero-actions">
            <Link href="/course" className="btn btn-primary">
              مشاهده دوره
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
