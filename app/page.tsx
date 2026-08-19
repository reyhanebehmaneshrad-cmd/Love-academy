import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#2d2a29]">
      <Navbar />
      <main className="mx-auto max-w-4xl p-6">
        <h1 className="text-3xl font-bold">تست Navbar</h1>
      </main>
    </div>
  );
}
