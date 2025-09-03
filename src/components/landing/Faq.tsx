import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual o prazo de atendimento para frotas?",
    answer: "Atendemos em até 24 horas para manutenção preventiva e em até 4 horas para emergências.",
  },
  {
    question: "Vocês atendem todas as marcas de veículos?",
    answer: "Sim, nossa equipe está capacitada para trabalhar com todas as marcas nacionais e importadas.",
  },
  {
    question: "Existe contrato de fidelidade?",
    answer: "Oferecemos planos mensais flexíveis sem multa de cancelamento.",
  },
  {
    question: "Como funciona o orçamento para frotas?",
    answer: "Fazemos uma avaliação gratuita da sua frota e apresentamos um plano personalizado com valores fixos.",
  },
  {
    question: "Vocês fornecem relatórios de gastos?",
    answer: "Sim, você recebe relatórios mensais detalhados de todos os serviços realizados e gastos por veículo.",
  },
];

export function Faq() {
  return (
    <section className="py-20 sm:py-28 bg-card">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
             PERGUNTAS FREQUENTES
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Encontre respostas rápidas para perguntas comuns sobre nossos serviços.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
