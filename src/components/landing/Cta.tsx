import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function Cta() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary drop-shadow-[0_2px_4px_rgba(249,115,22,0.5)] sm:text-4xl">
          MANTENHA SUA FROTA SEMPRE ECONÔMICA
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Não espere mais. Fale com um de nossos especialistas e descubra como nosso plano de gestão de frotas pode transformar o seu negócio.
        </p>
        <div className="mt-10">
          <WhatsAppButton size="lg" className="h-12 px-8 text-base">
            Quero uma Proposta
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
