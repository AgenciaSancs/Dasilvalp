import Image from "next/image";

export function Hero() {
  console.log('[HeroSection]', 'Component rendered');
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <Image
        src="https://i.postimg.cc/cH609Q8P/Gemini-Generated-Image-ifwy1uifwy1uifwy.png"
        alt="Car being serviced in a garage"
        fill
        className="object-cover"
        data-ai-hint="mechanic workshop"
        priority
      />
    </section>
  );
}
