export default function TrustBar() {
  const stats = [
    { value: '۲٬۵۰۰+', label: 'یادگیرنده' },
    { value: '۵', label: 'فصل آموزشی' },
    { value: '۴.۹', label: 'رضایت از دوره' },
    { value: '۹۰٪', label: 'احساس تغییر' },
  ];

  return (
    <section className="bg-white/40 border-y border-sage-100">
      <div className="container mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-bold text-terracotta mb-1">{s.value}</div>
            <div className="text-sm text-sage-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
