import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import Image from "next/image";

export function Hero() {
  console.log('[HeroSection]', 'Component rendered');
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
      <Image
        src="https://i.postimg.cc/fym4p5Wq/Gemini-Generated-Image-zfv8stzfv8stzfv8.png"
        alt="Mechanic working on fleet vehicles"
        fill
        className="object-cover object-center z-0"
        data-ai-hint="mechanic car"
        priority
      />
      <div className="relative z-20 container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-gold sm:text-5xl lg:text-6xl">
            Reduza 40% os custos da sua frota
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-100">
            Manutenção preventiva especializada que evita paradas inesperadas e aumenta a vida útil dos seus veículos. Menos gastos, mais produtividade.
          </p>
          <div className="mt-10">
            <WhatsAppButton size="lg">
              SOLICITE SUA PROPOSTA PERSONALIZADA
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
