'use client';

import { useState } from 'react';

const links = [
  { href: '#hero', label: 'خانه' },
  { href: '#course', label: 'دوره' },
  { href: '#about', label: 'درباره من' },
  { href: '#testimonials', label: 'نظرات' },
  { href: '#contact', label: 'تماس' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/80 backdrop-blur-md border-b border-sage-100">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-terracotta to-rose-500 flex items-center justify-center text-white font-bold">
            ع
          </span>
          <span className="font-bold text-sage-600">آکادمی عشق و صمیمیت</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-sage-500">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-terracotta transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#pricing"
          className="hidden md:inline-block btn-premium bg-terracotta text-white hover:bg-rose-500 text-sm"
        >
          شروع یادگیری
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-sage-600 text-2xl"
          aria-label="منو"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-sage-100 bg-ivory px-6 py-4">
          <ul className="flex flex-col gap-4 text-sage-600">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#pricing" className="btn-premium bg-terracotta text-white inline-block text-center">
                شروع یادگیری
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

