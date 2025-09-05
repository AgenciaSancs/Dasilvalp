import { AnimatedNumber } from "@/components/ui/animated-number";

export function Trust() {
  return (
    <section className="pt-10 sm:pt-14 pb-10 sm:pb-14 bg-card relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 text-center">
          <div className="flex flex-col items-center">
            <div className="font-headline text-5xl sm:text-6xl font-bold text-gold flex items-center">
              <AnimatedNumber finalValue={5} />+
            </div>
            <p className="mt-2 text-lg sm:text-xl font-headline uppercase">Anos de Experiência</p>
            <p className="mt-1 text-sm sm:text-base text-muted-foreground max-w-md">
              Servindo a indústria com dedicação e conhecimento incomparável em manutenção de veículos.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-headline text-5xl sm:text-6xl font-bold text-gold flex items-center">
              +<AnimatedNumber finalValue={1000} />
            </div>
            <p className="mt-2 text-lg sm:text-xl font-headline uppercase">Clientes Satisfeitos</p>
            <p className="mt-1 text-sm sm:text-base text-muted-foreground max-w-md">
              Nossa equipe é formada por profissionais altamente qualificados e certificados, comprometidos com a qualidade.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-headline text-5xl sm:text-6xl font-bold text-gold flex items-center">
              +<AnimatedNumber finalValue={30} suffix="%" />
            </div>
            <p className="mt-2 text-lg sm:text-xl font-headline uppercase">Redução nos Custos de Manutenção</p>
            <p className="mt-1 text-sm sm:text-base text-muted-foreground max-w-md">
              Com nossa gestão inteligente e processos otimizados, ajudamos empresas a economizar significativamente no cuidado de suas frotas.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
}
