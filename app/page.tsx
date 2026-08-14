export default function Home() {
  const courses = [
    {
      title: "هنر گفتگو",
      description: "چگونه بدون قضاوت بشنویم، دقیق‌تر حرف بزنیم و امنیت عاطفی بسازیم.",
      tag: "مبانی ارتباط",
    },
    {
      title: "زبان‌های عشق",
      description: "شناخت روش‌های ابراز علاقه و تبدیل تفاوت‌ها به نزدیکی بیشتر.",
      tag: "شناخت رابطه",
    },
    {
      title: "مدیریت تعارض",
      description: "یاد می‌گیرید تنش را به گفتگو، و اختلاف را به صمیمیت تبدیل کنید.",
      tag: "حل مسئله",
    },
  ];

  const steps = [
    "پاسخ به چند سؤال کوتاه",
    "تحلیل الگوی عاطفی شما",
    "دریافت پیشنهاد مسیر مناسب",
  ];

  return (
    <main className="min-h-screen bg-[#fbf8f2] text-stone-900">
      {/* Background ornaments */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-[-6rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(188,180,165,0.24),_transparent_70%)] blur-2xl" />
        <div className="absolute right-[-5rem] top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(214,184,164,0.20),_transparent_68%)] blur-2xl" />
        <div className="absolute bottom-[-7rem] left-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(170,192,173,0.16),_transparent_70%)] blur-2xl" />
      </div>

      {/* Header */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div>
          <p className="text-xs tracking-[0.35em] text-stone-500">ACADEMY</p>
          <h1 className="mt-2 text-lg font-semibold tracking-tight">آکادمی عشق و صمیمیت</h1>
        </div>

        <a
          href="#test"
          className="rounded-full border border-stone-300 bg-white/70 px-5 py-2 text-sm text-stone-700 shadow-sm backdrop-blur transition hover:border-stone-400 hover:bg-white"
        >
          شروع تست
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-20 pt-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:px-10 lg:pb-28 lg:pt-12">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-stone-300 bg-white/70 px-4 py-1 text-xs tracking-[0.25em] text-stone-600 backdrop-blur">
            رابطه آگاهانه، صمیمیت پایدار
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-5xl lg:text-7xl">
            رابطه‌ای بسازید که
            <span className="block text-stone-500">واقعاً امن، عمیق و قابل‌فهم باشد.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            مسیرهای آموزشی، تست‌های کاربردی و محتوای ساختاریافته برای شناخت الگوهای عاطفی،
            بهتر حرف‌زدن، و ساختن نزدیکی پایدار در رابطه.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#courses"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              مشاهده دوره‌ها
            </a>
            <a
              href="#test"
              className="rounded-full border border-stone-300 bg-white/70 px-6 py-3 text-sm font-medium text-stone-800 backdrop-blur transition hover:border-stone-400"
            >
              تست سبک عاطفی
            </a>
          </div>
        </div>

        {/* Editorial card */}
        <div className="relative">
          <div className="rounded-[2rem] border border-stone-200 bg-white/75 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-[#e6ddd2] via-[#f5ede3] to-[#d9e4d7] p-6">
              <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/50 bg-white/35 p-5">
                <div className="space-y-2">
                  <p className="text-xs tracking-[0.3em] text-stone-600">EDITORIAL GUIDE</p>
                  <p className="max-w-xs text-2xl font-medium leading-snug text-stone-900">
                    سه مسیر برای فهم بهترِ خود و شریک عاطفی‌تان
                  </p>
                </div>

                <div className="space-y-3 text-sm text-stone-700">
                  <div className="flex items-center justify-between border-b border-white/50 pb-2">
                    <span>شناخت</span>
                    <span>01</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/50 pb-2">
                    <span>گفتگو</span>
                    <span>02</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>صمیمیت</span>
                    <span>03</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.35em] text-stone-500">COURSES</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
              دوره‌های تخصصی
            </h3>
          </div>
          <p className="max-w-md text-sm leading-7 text-stone-600">
            محتوای ساختاریافته برای یادگیری عمیق، بدون شلوغی بصری و با تأکید بر وضوح.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group rounded-[1.75rem] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs tracking-[0.25em] text-stone-500">{course.tag}</p>
              <h4 className="mt-4 text-2xl font-semibold tracking-tight text-stone-950">
                {course.title}
              </h4>
              <p className="mt-3 leading-8 text-stone-600">{course.description}</p>
              <div className="mt-6 h-px w-full bg-stone-200" />
              <a
                href="#test"
                className="mt-5 inline-flex text-sm font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 transition group-hover:decoration-stone-900"
              >
                مشاهده مسیر مرتبط
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Test */}
      <section id="test" className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-6 rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur lg:grid-cols-[1fr_0.9fr] lg:p-8">
          <div>
            <p className="text-xs tracking-[0.35em] text-stone-500">PERSONAL TEST</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
              سبک عاطفی شما چیست؟
            </h3>
            <p className="mt-4 max-w-2xl leading-8 text-stone-600">
              با این تست ۵ دقیقه‌ای، الگوهای ناخودآگاه خود در رابطه را کشف کنید و ببینید
              کدام مسیر آموزشی برای شما مناسب‌تر است.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-700"
                >
                  <span className="ml-2 font-semibold text-stone-950">{index + 1}</span>
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <a
              href="#"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-stone-900 px-7 py-4 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              شروع تست ۵ دقیقه‌ای
            </a>
          </div>
        </div>
      </section>
    </main>
  );
                    }
