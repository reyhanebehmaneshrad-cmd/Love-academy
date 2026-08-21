import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-[#17314E]/70 via-[#17314E]/40 to-transparent" />
      </div>
      <div className="container relative z-10 mx-auto px-6 py-24 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            آکادمی عشق و صمیمیت
          </h1>
          <p className="text-2xl md:text-3xl mb-6 opacity-90">
            مدرس: <span className="font-bold">مهری آهوئی</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            دوره جامع ارتباط مؤثر
          </h2>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed">
            «هنر گفتن، مهارت شنیدن؛
            <br />
            پلی برای درک متقابل و صمیمیت پایدار»
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="#courses"
              className="rounded-full bg-[#E85B4F] px-8 py-4 text-center text-lg font-bold text-white shadow-xl hover:bg-[#CF4A3E]"
            >
              مشاهده دوره‌ها
            </Link>
            <Link
              href="#consultation"
              className="rounded-full bg-white/20 backdrop-blur-sm px-8 py-4 text-center text-lg font-bold text-white border-2 border-white/30 hover:bg-white/30"
            >
              رزرو مشاوره
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
