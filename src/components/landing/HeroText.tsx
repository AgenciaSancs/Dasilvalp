import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function HeroText() {
  return (
    <section className="bg-background py-16 sm:py-20 text-center">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl text-foreground uppercase font-semibold">
            Manutenção preventiva especializada que evita paradas inesperadas e aumenta a vida útil dos seus veículos. Menos gastos, mais produtividade.
          </p>
          <div className="mt-10">
            <WhatsAppButton size="lg" className="text-base sm:text-lg">
              Solicite sua proposta
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
