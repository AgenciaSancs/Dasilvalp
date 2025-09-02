import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of vehicles do you service?",
    answer: "We service a wide range of commercial vehicles, including light-duty trucks, heavy-duty trucks, vans, and specialized fleet vehicles. Our technicians are trained to handle various makes and models.",
  },
  {
    question: "How does your pricing work?",
    answer: "Our pricing is transparent and tailored to your fleet's specific needs. We offer various packages, from per-service billing to comprehensive monthly maintenance contracts. Contact us for a custom quote.",
  },
  {
    question: "What is the typical turnaround time for maintenance?",
    answer: "Turnaround time depends on the services required. We prioritize efficiency to minimize your fleet's downtime. For standard preventive maintenance, we aim for same-day service.",
  },
  {
    question: "Do you offer emergency repair services?",
    answer: "Yes, we offer emergency repair services to our contract clients. Our goal is to get your vehicles back on the road as quickly and safely as possible.",
  },
];

export function Faq() {
  return (
    <section className="py-20 sm:py-28 bg-card">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find quick answers to common questions about our services.
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
