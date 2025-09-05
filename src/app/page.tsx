import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HeroText } from "@/components/landing/HeroText";
import { Benefits } from "@/components/landing/Benefits";
import { AuthorityExperience } from "@/components/landing/AuthorityExperience";
import { Trust } from "@/components/landing/Trust";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Urgency } from "@/components/landing/Urgency";
import { Footer } from "@/components/landing/Footer";
import { FadeInOnScroll } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <FadeInOnScroll>
          <Hero />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <HeroText />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Benefits />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <AuthorityExperience />
        </FadeInOnScroll>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
        <FadeInOnScroll>
          <Trust />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Faq />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Urgency />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Testimonials />
        </FadeInOnScroll>
      </main>
      <Footer />
    </div>
  );
}
