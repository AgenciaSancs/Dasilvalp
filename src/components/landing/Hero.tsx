import Image from "next/image";

export function Hero() {
  console.log('[HeroSection]', 'Component rendered');
  return (
    <section className="relative w-full overflow-hidden flex justify-center items-center bg-background">
      <Image
        src="https://i.postimg.cc/05J8FFCW/REDUZA-EM-40-SEUS-CUSTOS-2.png"
        alt="Promotional banner for fleet maintenance cost reduction"
        width={1920}
        height={781}
        className="object-contain max-w-full h-auto"
        data-ai-hint="promotional banner"
        priority
      />
    </section>
  );
}
