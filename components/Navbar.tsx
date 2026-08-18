'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#faf6f0] border-b border-[#ebd8c3] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* لوگو / عنوان برند */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-[#2d2a29] hover:text-[#5c6e58] transition-colors duration-200">
              آکادمی عشق و صمیمیت
            </Link>
          </div>

          {/* منوی دسکتاپ */}
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline space-x-reverse space-x-8">
              <Link href="/" className="text-[#2d2a29] hover:text-[#5c6e58] font-medium transition-colors duration-200">
                صفحه اصلی
              </Link>
              <Link href="/about" className="text-[#2d2a29]/80 hover:text-[#5c6e58] font-medium transition-colors duration-200">
                درباره ما
              </Link>
              <Link href="/faq" className="text-[#2d2a29]/80 hover:text-[#5c6e58] font-medium transition-colors duration-200">
                سوالات متداول
              </Link>
              <Link href="/contact" className="text-[#2d2a29]/80 hover:text-[#5c6e58] font-medium transition-colors duration-200">
                تماس با ما
              </Link>
            </div>
          </div>

          {/* دکمه منوی موبایل */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2d2a29] hover:text-[#5c6e58] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* منوی کشویی موبایل */}
      {isOpen && (
        <div className="md:hidden bg-[#faf6f0] border-t border-[#ebd8c3]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-[#2d2a29] hover:bg-[#5c6e58]/10 hover:text-[#5c6e58] font-medium"
            >
              صفحه اصلی
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-[#2d2a29]/80 hover:bg-[#5c6e58]/10 hover:text-[#5c6e58] font-medium"
            >
              درباره ما
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-[#2d2a29]/80 hover:bg-[#5c6e58]/10 hover:text-[#5c6e58] font-medium"
            >
              سوالات متداول
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-[#2d2a29]/80 hover:bg-[#5c6e58]/10 hover:text-[#5c6e58] font-medium"
            >
              تماس با ما
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
