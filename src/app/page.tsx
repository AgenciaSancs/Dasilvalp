import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HeroText } from "@/components/landing/HeroText";
import { Benefits } from "@/components/landing/Benefits";
import { Trust } from "@/components/landing/Trust";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Urgency } from "@/components/landing/Urgency";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HeroText />
        <Benefits />
        <Trust />
        <Testimonials />
        <Faq />
        <Urgency />
      </main>
      <Footer />
    </div>
  );
}
