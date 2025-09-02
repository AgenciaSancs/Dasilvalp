import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center text-center overflow-hidden">
      <video
        src="/images/video/0902.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-50 z-0"
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
