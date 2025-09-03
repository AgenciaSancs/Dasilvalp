import { AnimatedNumber } from "@/components/ui/animated-number";

export function Trust() {
  return (
    <section className="pt-20 sm:pt-28 pb-20 sm:pb-28 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16 text-center">
          <div className="flex flex-col items-center">
            <div className="font-headline text-6xl font-bold text-gold flex items-center">
              <AnimatedNumber finalValue={5} />+
            </div>
            <p className="mt-2 text-xl font-medium">Anos de Experiência</p>
            <p className="mt-1 text-muted-foreground max-w-md">
              Serving the industry with dedication and unmatched expertise in vehicle maintenance.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-headline text-6xl font-bold text-gold flex items-center">
              +<AnimatedNumber finalValue={1000} />
            </div>
            <p className="mt-2 text-xl font-medium">Clientes Satisfeitos</p>
            <p className="mt-1 text-muted-foreground max-w-md">
              Our team consists of highly skilled and certified professionals committed to quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
