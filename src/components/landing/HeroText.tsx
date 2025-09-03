import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function HeroText() {
  return (
    <section className="bg-background py-16 sm:py-20 text-center">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-primary drop-shadow-[0_2px_4px_rgba(249,115,22,0.5)] sm:text-5xl lg:text-6xl">
            Manutenção preventiva especializada que evita paradas inesperadas e aumenta a vida útil dos seus veículos. Menos gastos, mais produtividade.
          </h1>
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
