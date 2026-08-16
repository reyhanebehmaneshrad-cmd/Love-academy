"use client";

import { useState } from "react";

const questions = [
  {
    question: "این دوره برای چه کسانی مناسب است؟",
    answer:
      "برای افراد مجرد، در رابطه یا متأهل که می‌خواهند شیوه بیان محبت و گفت‌وگو در رابطه را بهتر بشناسند.",
  },
  {
    question: "دوره به چه شکلی ارائه می‌شود؟",
    answer:
      "پس از خرید، محتوای صوتی دوره، جزوه PDF و تمرین‌های عملی در اختیار شما قرار می‌گیرد.",
  },
  {
    question: "آیا دسترسی به دوره دائمی است؟",
    answer:
      "بله، پس از خرید به محتوای دوره دسترسی دائمی خواهید داشت و به‌روزرسانی‌های آینده نیز در دسترس شما خواهد بود.",
  },
  {
    question: "آیا این دوره جایگزین روان‌درمانی یا مشاوره تخصصی است؟",
    answer:
      "خیر. این دوره آموزشی است و برای افزایش آگاهی و مهارت‌های ارتباطی طراحی شده است. در موقعیت‌های بحرانی یا مسائل تخصصی، مراجعه به متخصص ضروری است.",
  },
];

export default function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sage-50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-sm font-semibold text-sage-700">پیش از شروع</p>
          <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
            سوال‌های پرتکرار
          </h2>
        </div>

        <div className="mt-10 divide-y divide-sage-100 rounded-xl border border-sage-100 bg-white">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink">{item.question}</span>
                  <span
                    className="shrink-0 text-xl text-sage-700"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="px-5 pb-5 leading-8 text-muted">
                    {item.answer}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
      }
