import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "A FleetValue transformou a manutenção da nossa frota. Economizamos mais de 20% nos custos anuais e a disponibilidade dos nossos veículos nunca esteve tão alta. Foi um divisor de águas.",
    name: "Marcos Andrade",
    company: "Andrade Log",
    avatar: "MA",
  },
  {
    quote: "O profissionalismo e a expertise dos técnicos da Da Silva Automotivo são incomparáveis. Os relatórios detalhados nos ajudam a tomar decisões mais inteligentes e a otimizar a operação.",
    name: "Juliana Costa",
    company: "JCS Transportes",
    avatar: "JC",
  },
  {
    quote: "Mudar para a FleetValue foi a melhor decisão para nossa empresa. O serviço é confiável, eficiente e eles sempre se superam para garantir que nossa frota esteja em perfeitas condições.",
    name: "Carlos Silva",
    company: "Urban Movers",
    avatar: "CS",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Clientes e Parceiros
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Não confie apenas na nossa palavra. Veja um pouco dos nossos clientes
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between bg-card">
              <CardContent className="pt-6">
                <blockquote className="text-lg italic text-foreground">
                  “{testimonial.quote}”
                </blockquote>
              </CardContent>
              <CardFooter className="mt-4 flex items-center">
                <Avatar>
                  <AvatarImage src={`https://i.pravatar.cc/40?u=${testimonial.name}`} />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
