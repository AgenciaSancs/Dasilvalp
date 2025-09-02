import Image from "next/image";

export function Hero() {
  console.log('[HeroSection]', 'Component rendered');
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <Image
        src="https://i.postimg.cc/cH609Q8P/Gemini-Generated-Image-ifwy1uifwy1uifwy.png"
        alt="Car being serviced in a garage"
        fill
        className="object-cover opacity-50"
        data-ai-hint="mechanic workshop"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
    </section>
  );
}
