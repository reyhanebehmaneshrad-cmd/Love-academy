export default function Footer() {
  return (
    <footer id="contact" className="bg-sage-600 text-ivory">
      <div className="container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-white mb-4">آکادمی عشق و صمیمیت</h3>
            <p className="text-sage-100/80 text-sm leading-relaxed">
              یادگیری زبان عشق، برای ساختن رابطه‌ای که شایسته‌اش هستی.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm text-sage-100/80">
              <li><a href="#course" className="hover:text-white">دوره</a></li>
              <li><a href="#about" className="hover:text-white">درباره من</a></li>
              <li><a href="#testimonials" className="hover:text-white">نظرات</a></li>
              <li><a href="#pricing" className="hover:text-white">ثبت‌نام</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">در ارتباط باشیم</h4>
            <ul className="space-y-2 text-sm text-sage-100/80">
              <li>📱 تلگرام</li>
              <li>📸 اینستاگرام</li>
              <li>✉️ ایمیل</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-sage-100/20 mt-10 pt-6 text-center text-sm text-sage-100/60">
          © تمامی حقوق برای آکادمی عشق و صمیمیت محفوظ است.
        </div>
      </div>
    </footer>
  );
      }
