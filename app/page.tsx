export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 bg-ivory">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-terracotta mb-6">
          آکادمی عشق و صمیمیت
        </h1>
        <p className="text-lg text-sage-600 mb-12">
          تجربه‌ای متفاوت از یادگیری با استایل مینیمال و آکادمیک
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* کارت نمونه برای دوره */}
          <div className="card-premium">
            <div className="w-full h-48 bg-peach-50 rounded-xl mb-4 flex items-center justify-center border border-peach-500/20">
               <span className="text-peach-500 font-bold">کاور دوره (تصویر)</span>
            </div>
            <h2 className="text-xl font-bold text-sage-600 mb-2">پنج زبان یک رابطه</h2>
            <p className="text-sm text-gray-500 mb-4">سری آموزشی اختصاصی بر اساس متدهای روز دنیا</p>
            <button className="btn-premium bg-terracotta text-white hover:bg-rose-500 w-full">
              مشاهده دوره
            </button>
          </div>

          {/* کارت نمونه برای جزوه */}
          <div className="card-premium">
            <div className="w-full h-48 bg-sage-50 rounded-xl mb-4 flex items-center justify-center border border-sage-500/20">
               <span className="text-sage-500 font-bold">پیش‌نمایش جزوه</span>
            </div>
            <h2 className="text-xl font-bold text-sage-600 mb-2">جزوه کده علوم تجربی</h2>
            <p className="text-sm text-gray-500 mb-4">ساختاربندی شده و مینیمال برای یادگیری سریع</p>
            <button className="btn-premium border-terracotta text-terracotta hover:bg-peach-50 w-full">
              دانلود PDF
            </button>
          </div>
        </div>
      </div>
    </main>
  );
              }
