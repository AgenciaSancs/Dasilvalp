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
    <section className="w-full bg-background py-16 sm:py-20">
      <div className="relative">
        <div className="relative inline-block w-full">
          <Image
            src="https://i.postimg.cc/ZRnn8Cpf/arte-1.png"
            alt="Promotional banner for fleet maintenance"
            width={1920}
            height={781}
            className="w-full h-auto"
            data-ai-hint="promotional banner"
          />
        </div>
        <div className="container">
            <div className="mt-8 max-w-2xl mx-auto text-center">
                <ul className="space-y-2 text-left inline-block">
                {checklistItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
}
