import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export function HeroText() {
  return (
    <section className="bg-background py-16 sm:py-20 text-center">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl text-foreground uppercase font-semibold">
            Manutenção preventiva especializada que evita paradas inesperadas e aumenta a vida útil dos seus veículos. Menos gastos, mais produtividade.
          </p>
          <div className="mt-10 mb-10 flex justify-center">
            <div className="w-full max-w-sm">
                <div className="aspect-square w-full">
                <iframe 
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/xVtqNzqLfi0" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
                </div>
            </div>
          </div>
          <div className="mt-10">
            <WhatsAppButton size="lg" className="h-10 px-6 text-sm sm:h-12 sm:px-8 sm:text-base">
              Solicite sua proposta
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
