"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-[#17314E]">
          آکادمی عشق و صمیمیت
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#17314E] hover:text-[#2FA9A0] font-medium">
            صفحه اصلی
          </Link>
          <Link href="#courses" className="text-[#17314E] hover:text-[#2FA9A0] font-medium">
            دوره‌ها
          </Link>
          <Link href="#instructor" className="text-[#17314E] hover:text-[#2FA9A0] font-medium">
            درباره مدرس
          </Link>
          <Link href="#contact" className="text-[#17314E] hover:text-[#2FA9A0] font-medium">
            تماس
          </Link>
          <Link
            href="#consultation"
            className="rounded-full bg-[#E85B4F] px-6 py-3 font-bold text-white shadow-lg hover:bg-[#CF4A3E]"
          >
            رزرو وقت مشاوره
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-2xl border-t">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            <Link href="/" className="text-2xl font-medium text-[#17314E] py-3 border-b">
              صفحه اصلی
            </Link>
            <Link href="#courses" className="text-2xl font-medium text-[#17314E] py-3 border-b">
              دوره‌ها
            </Link>
            <Link href="#instructor" className="text-2xl font-medium text-[#17314E] py-3 border-b">
              درباره مدرس
            </Link>
            <Link href="#contact" className="text-2xl font-medium text-[#17314E] py-3 border-b">
              تماس
            </Link>
            <Link
              href="#consultation"
              className="mt-4 rounded-full bg-[#E85B4F] py-4 text-center text-lg font-bold text-white"
            >
              رزرو وقت مشاوره
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
        }
      
