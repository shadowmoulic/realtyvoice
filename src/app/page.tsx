"use client"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
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
      <Comparison />
      <Booking />
      <Footer />
    </main>
  );
}

