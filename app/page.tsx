export default function Home() {
  const puzzleVideos = [
    { title: "امنیت عاطفی", size: "col-span-2 row-span-2", color: "bg-[#e6ddd2]" },
    { title: "هنر شنیدن", size: "col-span-1 row-span-1", color: "bg-[#d9e4d7]" },
    { title: "زبان بدن", size: "col-span-1 row-span-1", color: "bg-[#f5ede3]" },
    { title: "مدیریت خشم", size: "col-span-1 row-span-2", color: "bg-[#f0e6e1]" },
    { title: "شفقت", size: "col-span-1 row-span-1", color: "bg-stone-200" },
  ];

  return (
    <main className="min-h-screen bg-[#fbf8f2] font-[Vazirmatn] text-stone-900 overflow-x-hidden">
      
      {/* Editorial Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-8 py-10">
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.4em] text-stone-500 uppercase">Mehri Ahoui</span>
          <h1 className="mt-1 text-xl font-bold tracking-tighter text-stone-950">آکادمی عشق و صمیمیت</h1>
        </div>
        <nav className="hidden space-x-8 space-x-reverse text-sm font-medium text-stone-600 md:flex">
          <a href="#puzzle" className="hover:text-stone-950">دوره ها</a>
          <a href="#podcast" className="hover:text-stone-950">پادکست</a>
          <a href="#about" className="hover:text-stone-950">درباره مهری آهوئی</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-8 pt-12 pb-24 text-center">
        <h2 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.15] text-stone-950 md:text-7xl">
          روایتی مدرن از <span className="text-stone-400 font-light italic">صمیمیت</span> و آگاهی
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-stone-600">
          تحت نظارت مهری آهوئی؛ جایی برای یادگیری زبانِ گمشده‌ی رابطه‌ها در دنیای امروز.
        </p>
      </section>

      {/* Puzzle Grid Section (Instagram Style) */}
      <section id="puzzle" className="mx-auto max-w-7xl px-8 pb-32">
        <div className="mb-12 flex items-end justify-between border-b border-stone-200 pb-6">
          <h3 className="text-2xl font-semibold tracking-tight">مسیرهای ویدیویی (پازل آموزشی)</h3>
          <span className="text-sm text-stone-500">مشاهده همه</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {puzzleVideos.map((item, idx) => (
            <div 
              key={idx} 
              className={`${item.size} ${item.color} rounded-[2rem] relative overflow-hidden group cursor-pointer border border-white/40 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-6 right-6">
                <p className="text-xs tracking-[0.2em] text-stone-600 mb-1 uppercase">Chapter {idx + 1}</p>
                <h4 className="text-xl font-bold text-stone-900">{item.title}</h4>
              </div>
              <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[10px] border-r-stone-900 border-b-[6px] border-b-transparent mr-1 rotate-180" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Luxury Podcast Section */}
      <section id="podcast" className="bg-[#1a1a1a] text-[#fbf8f2] py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] tracking-[0.5em] text-stone-500 uppercase">Station</span>
              <h3 className="text-4xl md:text-6xl font-bold mt-4 mb-8 leading-tight">پادکست اختصاصی صمیمیت</h3>
              <p className="text-stone-400 text-lg leading-relaxed mb-12">
                هر هفته، تحلیل یک چالش واقعی در رابطه. بشنوید تا عمیق‌تر درک کنید.
              </p>
              
              {/* Fake Player */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-peach-200 to-rose-300 shadow-lg" />
                   <div className="flex-1">
                      <p className="text-sm font-bold text-white">اپیزود ۲۴: سایه‌های رابطه</p>
                      <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full w-1/3 bg-white" />
                      </div>
                   </div>
                   <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
                      ▶
                   </button>
                </div>
              </div>
            </div>
            
            <div className="relative">
               {/* Abstract decorative element */}
               <div className="absolute -inset-10 bg-[radial-gradient(circle,_rgba(255,255,255,0.05),_transparent_70%)]" />
               <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-12 animate-pulse-slow">
                  <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center p-12">
                     <div className="w-full h-full rounded-full bg-gradient-to-tr from-stone-800 to-stone-700 shadow-2xl flex items-center justify-center text-4xl">
                        🎙️
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-8 py-20 text-center">
        <div className="h-px w-full bg-stone-200 mb-12" />
        <p className="text-xs tracking-[0.3em] text-stone-400 uppercase">Designed for Excellence</p>
        <p className="mt-4 text-stone-600">© ۲۰۲۶ آکادمی عشق و صمیمیت - مهری آهوئی</p>
      </footer>
    </main>
  );
          }
