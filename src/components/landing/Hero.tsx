import Image from "next/image";

export function Hero() {
  console.log('[HeroSection]', 'Component rendered');
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <Image
        src="https://i.postimg.cc/05J8FFCW/REDUZA-EM-40-SEUS-CUSTOS-2.png"
        alt="Promotional banner for fleet maintenance cost reduction"
        fill
        className="object-cover"
        data-ai-hint="promotional banner"
        priority
      />
    </section>
  );
}
