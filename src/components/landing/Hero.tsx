import Image from "next/image";

export function Hero() {
  console.log('[HeroSection]', 'Component rendered');
  return (
    <section className="relative w-full overflow-hidden flex justify-center items-center bg-background">
      {/* Desktop Banner */}
      <div className="hidden md:block w-full">
        <Image
          src="https://i.postimg.cc/T20Zd0Nn/capa-dasilva.png"
          alt="Promotional banner for fleet maintenance cost reduction - Desktop"
          width={1920}
          height={781}
          className="object-contain w-full h-auto"
          data-ai-hint="promotional banner"
          priority
        />
      </div>
      {/* Mobile Banner - Using current as placeholder */}
      <div className="block md:hidden w-full">
        <Image
          src="https://i.postimg.cc/05J8FFCW/REDUZA-EM-40-SEUS-CUSTOS-2.png"
          alt="Promotional banner for fleet maintenance cost reduction - Mobile"
          width={750}
          height={1334}
          className="object-contain w-full h-auto"
          data-ai-hint="promotional banner"
          priority
        />
      </div>
    </section>
  );
}
