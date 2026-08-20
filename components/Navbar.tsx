"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { title: "صفحه اصلی", href: "/" },
  { title: "دوره‌ها", href: "/courses" },
  { title: "مقالات", href: "/articles" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 w-full border-b border-[#1B263B]/10 bg-[#F4F1EA]/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[#E07A5F] bg-white shadow-sm">
            <Image
              src="/mehri-ahooei.jpg"
              alt="مهری آهوئی"
              width={44}
              height={44}
              priority
              className="h-11 w-11 object-cover object-center"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-[14px] font-black tracking-tight text-[#1B263B] sm:text-[15px]">
              آکادمی عشق و صمیمیت
            </span>
            <span className="text-[11px] font-medium text-[#E07A5F] sm:text-xs">
              مهری آهوئی
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="منوی اصلی"
          className="hidden items-center gap-6 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-[#1B263B]/80 transition-colors hover:text-[#1B263B] after:absolute after:-bottom-1 after:right-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[#78C0E0] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/consultation"
            className="hidden rounded-full bg-[#E07A5F] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#E07A5F]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d96d53] sm:inline-flex"
          >
            رزرو وقت مشاوره
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1B263B]/10 bg-white/70 text-[#1B263B] transition-colors hover:bg-white lg:hidden"
          >
            {isMenuOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="text-xl leading-none">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-[#1B263B]/10 bg-[#F4F1EA] px-4 pb-5 pt-3 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col" aria-label="منوی موبایل">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-[#1B263B]/8 py-4 text-sm font-medium text-[#1B263B]/80 transition-colors hover:text-[#E07A5F]"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="/consultation"
              onClick={() => setIsMenuOpen(false)}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[#E07A5F] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E07A5F]/20"
            >
              رزرو وقت مشاوره
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
