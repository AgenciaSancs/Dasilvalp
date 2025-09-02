import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function HeroText() {
  return (
    <section className="bg-background py-16 sm:py-20 text-center">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Reduza 40% os custos da sua frota
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
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
