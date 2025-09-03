import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function HeroText() {
  return (
    <section className="bg-background py-16 sm:py-20 text-center">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground sm:text-2xl">
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
