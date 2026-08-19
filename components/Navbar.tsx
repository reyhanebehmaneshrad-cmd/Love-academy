"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { title: "صفحه اصلی", href: "/" },
  { title: "دوره‌های آموزشی", href: "/courses" },
  { title: "مقالات", href: "/articles" },
  { title: "درباره من", href: "/about" },
  { title: "تماس با من", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 w-full border-b border-[#ded8cc] bg-[#faf6f0]"
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* لوگو و نام برند */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="آکادمی عشق و صمیمیت"
        >
          {/* عکس کوچک و گرد */}
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-[#b88472] bg-[#e8ddd0]">
            <Image
              src="/mehri%20Ahooei.jpg"
              alt="مهری آهوئی"
              width={44}
              height={44}
              priority
              className="block h-11 w-11 object-cover object-center"
            />
          </div>

          {/* نام آکادمی و مدرس */}
          <div className="flex flex-col whitespace-nowrap leading-tight">
            <span className="text-sm font-bold text-[#304b47] sm:text-base">
              آکادمی عشق و صمیمیت
            </span>

            <span className="mt-1 text-[11px] font-medium text-[#a56f61] sm:text-xs">
              مهری آهوئی
            </span>
          </div>
        </Link>

        {/* منوی دسکتاپ */}
        <nav
          aria-label="منوی اصلی"
          className="hidden items-center gap-6 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#4d5c57] transition-colors hover:text-[#a56f61]"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* دکمه سمت چپ */}
        <div className="flex items-center gap-3">
          <Link
            href="/consultation"
            className="hidden rounded-full bg-[#ad7565] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#965e50] sm:inline-flex"
          >
            رزرو وقت مشاوره
          </Link>

          {/* دکمه موبایل */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8cfc2] text-[#304b47] lg:hidden"
          >
            {isMenuOpen ? (
              <span className="text-xl">×</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {isMenuOpen && (
        <div className="border-t border-[#ded8cc] bg-[#faf6f0] px-5 pb-5 lg:hidden">
          <nav className="flex flex-col" aria-label="منوی موبایل">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-[#e6ded3] py-4 text-sm font-medium text-[#4d5c57]"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="/consultation"
              onClick={() => setIsMenuOpen(false)}
              className="mt-5 flex justify-center rounded-full bg-[#ad7565] px-4 py-3 text-sm font-semibold text-white"
            >
              رزرو وقت مشاوره
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
            }
