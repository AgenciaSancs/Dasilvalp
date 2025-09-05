import Image from "next/image";
import { Check } from "lucide-react";

const checklistItems = [
  "Evita gastos emergenciais desnecessários",
  "Mantém sua operação funcionando sem interrupções",
  "Recebe relatórios completos para controle financeiro",
  "Conta com atendimento prioritário quando precisar",
];

export function Urgency() {
  return (
    <section className="relative py-20 sm:py-32 flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://i.postimg.cc/ZRnn8Cpf/arte-1.png"
          alt="Promotional banner for fleet maintenance"
          fill
          className="object-cover object-center"
          data-ai-hint="promotional banner"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold uppercase text-primary drop-shadow-[0_2px_4px_rgba(249,115,22,0.5)] mb-8">
            Não espere sua frota parar.
          </h2>
          <ul className="space-y-4 text-left max-w-md mx-auto">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <span className="text-base sm:text-lg text-neutral-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
