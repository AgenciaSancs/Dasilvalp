import Image from "next/image";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center text-center">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Mechanic working on a truck"
        data-ai-hint="truck mechanic"
        fill
        className="object-cover object-center brightness-50"
      />
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-gold sm:text-5xl lg:text-6xl">
            Maximize Your Fleet's Uptime and Value
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-200">
            Specialized maintenance that reduces costs and keeps your vehicles running. Trust Da Silva Automotivo to deliver excellence and reliability.
          </p>
          <div className="mt-10">
            <WhatsAppButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
