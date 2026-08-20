"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "صفحه اصلی", href: "/" },
  { title: "دوره‌های آموزشی", href: "/courses" },
  { title: "مجله صمیمیت", href: "/articles" },
  { title: "درباره مهری آهوئی", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // کنترل تغییر وضعیت Navbar هنگام اسکرول صفحه
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // جلوگیری از اسکرول صفحه هنگام باز بودن منوی موبایل
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        dir="rtl"
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#1B263B]/10 bg-[#F4F1EA]/95 py-2.5 shadow-sm backdrop-blur-md"
            : "border-b border-[#1B263B]/5 bg-[#F4F1EA]/85 py-4 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* لوگو و نام برند */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3 transition-transform duration-200 active:scale-95"
            aria-label="آکادمی عشق و صمیمیت | مهری آهوئی"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[#E07A5F] bg-white shadow-sm ring-2 ring-[#78C0E0]/30 transition-all duration-300 group-hover:ring-4 group-hover:ring-[#78C0E0]/50">
              <Image
                src="/mehri%20Ahooei.jpg"
                alt="مهری آهوئی"
                width={48}
                height={48}
                priority
                className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col text-right leading-tight">
              <span className="text-[15px] font-black tracking-tight text-[#1B263B] transition-colors group-hover:text-[#E07A5F] sm:text-base">
                آکادمی عشق و صمیمیت
              </span>
              <span className="mt-0.5 text-xs font-semibold text-[#E07A5F]">
                مهری آهوئی
              </span>
            </div>
          </Link>

          {/* منوی دسکتاپ */}
          <nav
            aria-label="منوی اصلی دسکتاپ"
            className="hidden items-center gap-7 lg:flex"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "font-bold text-[#1B263B]"
                      : "text-[#1B263B]/75 hover:text-[#1B263B]"
                  }`}
                >
                  {item.title}
                  {/* خط زیر دکمه فعال و Hover */}
                  <span
                    className={`absolute bottom-0 right-0 h-[2.5px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-full bg-[#E07A5F]"
                        : "w-0 bg-[#78C0E0] hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* دکمه اکشن (CTA) و دکمه باز کردن منوی موبایل */}
          <div className="flex items-center gap-3">
            <Link
              href="/consultation"
              className="hidden rounded-full bg-[#E07A5F] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#E07A5F]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#cf684d] hover:shadow-lg hover:shadow-[#E07A5F]/30 sm:inline-flex"
            >
              رزرو وقت مشاوره
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="باز کردن منو"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1B263B]/15 bg-white/60 text-[#1B263B] transition-colors hover:bg-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* کشوی منوی موبایل (Drawer) */}
      <div
        dir="rtl"
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* لایه پشت تیره و مات */}
        <div
          className="absolute inset-0 bg-[#1B263B]/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* بدنه کشوی منو */}
        <div
          className={`absolute bottom-0 right-0 top-0 w-[290px] max-w-[85vw] bg-[#F4F1EA] p-6 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            {/* بالای منو: بستن و نام برند */}
            <div className="flex items-center justify-between border-b border-[#1B263B]/10 pb-5">
              <div className="flex items-center gap-2.5">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#E07A5F]">
                  <Image
                    src="/mehri%20Ahooei.jpg"
                    alt="مهری آهوئی"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-sm font-bold text-[#1B263B]">
                    آکادمی عشق و صمیمیت
                  </span>
                  <span className="text-[11px] text-[#E07A5F]">
                    مهری آهوئی
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B263B]/5 text-[#1B263B] hover:bg-[#1B263B]/10"
                aria-label="بستن منو"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* لیست لینک‌های موبایل */}
            <nav className="mt-6 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-[#E07A5F]/10 text-[#E07A5F]"
                        : "text-[#1B263B]/80 hover:bg-white/80 hover:text-[#1B263B]"
                    }`}
                  >
                    <span>{item.title}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E07A5F]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* پایین کشو: CTA و متن کوتاه */}
          <div className="border-t border-[#1B263B]/10 pt-5">
            <Link
              href="/consultation"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-[#E07A5F] py-3.5 text-center text-sm font-bold text-white shadow-md shadow-[#E07A5F]/20 active:scale-[0.98]"
            >
              رزرو وقت مشاوره
            </Link>
            <p className="mt-3 text-center text-[11px] text-[#1B263B]/50">
              مسیر ساختن رابطه‌ای امن و آگاهانه
            </p>
          </div>
        </div>
      </div>
    </>
  );
        }
