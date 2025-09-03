import Image from "next/image";

export function Urgency() {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
      <Image
        src="https://i.postimg.cc/8CMmw3Br/REDUZA-EM-40-SEUS-CUSTOS-3.png"
        alt="Mechanic working on a car"
        fill
        className="object-cover object-center z-0"
        data-ai-hint="mechanic car"
      />
    </section>
  );
}
