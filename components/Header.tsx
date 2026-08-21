import Link from "next/link";

const links = [
  { href: "#languages", label: "پنج زبان" },
  { href: "#path", label: "مسیر یادگیری" },
  { href: "#course", label: "دوره" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand">
          آکادمی عشق و صمیمیت
        </Link>

        <nav>
          <ul className="nav-links">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="#course" className="btn btn-primary">
          شروع مسیر
        </Link>
      </div>
    </header>
  );
}
