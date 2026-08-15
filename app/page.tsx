import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ProblemSolution from '@/components/ProblemSolution';
import CourseFeatures from '@/components/CourseFeatures';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import LeadMagnet from '@/components/LeadMagnet';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <CourseFeatures />
      <About />
      <Testimonials />
      <LeadMagnet />
      <Pricing />
      <Footer />
    </main>
  );
}
