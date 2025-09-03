import { Check } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const advantages = [
  "Evita gastos emergenciais desnecessários",
  "Mantém sua operação funcionando sem interrupções",
  "Recebe relatórios completos para controle financeiro",
  "Conta com atendimento prioritário quando precisar",
];

export function Urgency() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
      <Image
        src="https://i.postimg.cc/fym4p5Wq/Gemini-Generated-Image-zfv8stzfv8stzfv8.png"
        alt="Mechanic working on a car"
        fill
        className="object-cover object-center z-0"
        data-ai-hint="mechanic car"
      />
      <div className="relative z-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-neutral-100">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-gold sm:text-4xl">
                  🎯 POR QUE CONTRATAR AGORA?
                </h2>
                <p className="mt-4 text-lg">
                  Cada dia de frota parada representa perda de faturamento. Com nossa manutenção preventiva, você:
                </p>
                <ul className="mt-6 space-y-4">
                    {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-center">
                        <Check className="h-6 w-6 text-primary mr-3 shrink-0" />
                        <span className="text-lg">{advantage}</span>
                    </li>
                    ))}
                </ul>
            </div>
            <Card className="flex flex-col items-center justify-center text-center bg-card/80 p-8 rounded-lg shadow-lg">
                <CardContent className="p-0">
                    <p className="text-xl font-bold text-primary uppercase">
                        Oferta Especial
                    </p>
                    <p className="mt-2 text-lg text-foreground font-semibold">
                        Primeira avaliação técnica da sua frota GRATUITA!
                    </p>
                    <div className="mt-6">
                        <WhatsAppButton size="lg">
                          FALE COM UM CONSULTOR HOJE MESMO
                        </WhatsAppButton>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
