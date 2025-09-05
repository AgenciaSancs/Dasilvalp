import Image from "next/image";

export function Urgency() {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
      <Image
        src="https://i.postimg.cc/ZRnn8Cpf/arte-1.png"
        alt="Promotional banner for fleet maintenance"
        fill
        className="object-cover object-center z-0"
        data-ai-hint="promotional banner"
      />
    </section>
  );
}
