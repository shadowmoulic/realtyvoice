import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Demos from "@/components/Demos";
import Comparison from "@/components/Comparison";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: 'var(--bg-primary)' }}>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Demos />
      <Comparison />
      <Booking />
      <Footer />
    </main>
  );
}
