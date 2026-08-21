export default function TrustBar() {
  const stats = [
    { value: "۷۰۰+", label: "مراجع راضی" },
    { value: "۱۲۰+", label: "ساعت مشاوره" },
    { value: "۹۸٪", label: "رضایت از دوره‌ها" },
    { value: "۵+", label: "سال تجربه" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-5xl font-bold text-[#17314E] mb-2">{stat.value}</div>
              <div className="text-lg text-[#2FA9A0] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
