import Image from "next/image";

export default function Instructor() {
  return (
    <section id="instructor" className="py-24 bg-[#FBF8F2]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <Image
                src="/mehri-ahoei.jpg"
                alt="مهری آهوئی - مدرس آکادمی عشق و صمیمیت"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-3/5">
            <h2 className="text-4xl font-bold text-[#17314E] mb-6">
              مدرس دوره: <span className="text-[#2FA9A0]">مهری آهوئی</span>
            </h2>
            <div className="space-y-4 text-lg text-[#17314E]/80">
              <p>
                <strong>مشاور خانواده و ارتباط مؤثر</strong> با بیش از ۵ سال تجربه تخصصی در حوزه روانشناسی رابطه.
              </p>
              <p>
                دارای مدرک <strong>کارشناسی ارشد روانشناسی بالینی</strong> از دانشگاه اصفهان و گواهینامه‌های بین‌المللی مشاوره زوجین.
              </p>
              <p>
                برگزارکننده <strong>۱۰+ دوره‌ی آموزشی</strong> و ارائه‌دهنده <strong>۵۰۰+ جلسه مشاوره فردی و زوجی</strong>.
              </p>
              <p>
                باورمند به این اصل که <strong>«ارتباط مؤثر، زیربنای هر رابطه سالم است»</strong>.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-[#2FA9A0] px-6 py-3 font-bold text-white hover:bg-[#23877F]">
                مشاهده گواهی‌ها
              </button>
              <button className="rounded-full border-2 border-[#2FA9A0] px-6 py-3 font-bold text-[#2FA9A0] hover:bg-[#2FA9A0] hover:text-white">
                تماس با مدرس
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
                }
