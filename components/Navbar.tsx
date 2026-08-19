"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "دوره‌های آموزشی",
    href: "/courses",
  },
  {
    title: "مقالات",
    href: "/articles",
  },
  {
    title: "درباره من",
    href: "/about",
  },
  {
    title: "تماس با من",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 w-full border-b border-[#ded8cc]/70 bg-[#faf6f0]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* لوگو و نام برند */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="آکادمی عشق و صمیمیت"
        >
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[#b88472] bg-[#e8ddd0] shadow-sm">
            <Image
              src="/mehri%20Ahooei.jpg"
              alt="مهری آهوئی"
              fill
              priority
              sizes="48px"
              className="object-cover object-center transition duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-[15px] font-bold tracking-tight text-[#304b47] sm:text-[17px]">
              آکادمی عشق و صمیمیت
            </span>

            <span className="mt-1 text-[11px] font-medium text-[#a56f61] sm:text-xs">
              با مهری آهوئی
            </span>
          </div>
        </Link>

        {/* منوی دسکتاپ */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="منوی اصلی"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm font-medium text-[#4d5c57] transition-colors duration-200 hover:text-[#a56f61] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#b88472] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* دکمه مشاوره و منوی موبایل */}
        <div className="flex items-center gap-3">
          <Link
            href="/consultation"
            className="hidden rounded-full bg-[#ad7565] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#965e50] hover:shadow-md sm:inline-flex"
          >
            رزرو وقت مشاوره
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8cfc2] text-[#304b47] transition-colors hover:bg-[#eee5da] lg:hidden"
            aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {isMenuOpen && (
        <div className="border-t border-[#ded8cc]/70 bg-[#faf6f0] px-5 pb-5 pt-3 lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col"
            aria-label="منوی موبایل"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-[#e6ded3] py-4 text-sm font-medium text-[#4d5c57] transition-colors hover:text-[#a56f61]"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="/consultation"
              onClick={() => setIsMenuOpen(false)}
              className="mt-5 flex items-center justify-center rounded-full bg-[#ad7565] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#965e50]"
            >
              رزرو وقت مشاوره
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
          }
