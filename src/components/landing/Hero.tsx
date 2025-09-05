import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full bg-background">
      {/* Desktop Banner */}
      <div className="hidden md:block">
        <Image
          src="https://i.postimg.cc/T20Zd0Nn/capa-dasilva.png"
          alt="Promotional banner for fleet maintenance cost reduction - Desktop"
          width={1920}
          height={781}
          className="w-full h-auto"
          data-ai-hint="promotional banner"
          priority
        />
      </div>
      {/* Mobile Banner */}
      <div className="block md:hidden">
        <Image
          src="https://i.postimg.cc/pXYYbc0t/capa-cell-dasilva.png"
          alt="Promotional banner for fleet maintenance cost reduction - Mobile"
          width={750}
          height={1334}
          className="w-full h-auto"
          data-ai-hint="promotional banner"
          priority
        />
      </div>
    </section>
  );
}
