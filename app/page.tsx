import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F4F1EA] text-[#1B263B]">
      <Navbar />
      <Hero />
    </main>
  );
}
