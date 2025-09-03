import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingDown, Clock, Wrench, ClipboardList, Users } from "lucide-react";

const benefits = [
  {
    icon: <TrendingDown className="w-10 h-10 text-primary" />,
    title: "Redução de até 40% nos custos",
    description: "Manutenção preventiva evita reparos caros e otimiza o desempenho da sua frota.",
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Menos tempo de frota parada",
    description: "Atendimento rápido e eficiente em oficina própria para minimizar o tempo inativo.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: "Maior vida útil dos veículos",
    description: "Cuidado especializado que prolonga a durabilidade e a vida útil dos seus ativos.",
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-primary" />,
    title: "Controle total de gastos",
    description: "Relatórios detalhados para uma gestão financeira transparente e eficaz.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Suporte técnico dedicado",
    description: "Nossa equipe de especialistas está pronta para atender as necessidades da sua frota.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary drop-shadow-[0_2px_4px_rgba(249,115,22,0.5)] sm:text-4xl">
             Benefícios que Fazem a Diferença
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Veja como nosso serviço de manutenção de frotas pode impulsionar seus resultados.
          </p>
        </div>
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title} 
              className={`text-center bg-card/80 backdrop-blur-sm transition-all border border-primary/50 shadow-lg shadow-primary/20 hover:scale-105 hover:shadow-primary/40 ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary/10">
                  {benefit.icon}
                </div>
                <CardTitle className="mt-4 font-headline text-lg sm:text-xl">{benefit.title}</CardTitle>
                <CardDescription className="mt-2 text-sm sm:text-base text-muted-foreground">{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
