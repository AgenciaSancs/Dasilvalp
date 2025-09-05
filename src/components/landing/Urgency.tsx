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
    <section className="w-full bg-background py-10">
      <div className="relative">
        <div className="relative inline-block w-full">
          {/* Desktop Banner */}
          <div className="hidden md:block">
            <Image
              src="https://i.postimg.cc/ZRnn8Cpf/arte-1.png"
              alt="Promotional banner for fleet maintenance"
              width={1920}
              height={781}
              className="w-full h-auto"
              data-ai-hint="promotional banner"
            />
          </div>
           {/* Mobile Banner */}
          <div className="block md:hidden">
            <Image
              src="https://i.postimg.cc/Bv2YsB6F/arte-2.png"
              alt="Promotional banner for fleet maintenance - Mobile"
              width={750}
              height={1334}
              className="w-full h-auto"
              data-ai-hint="promotional banner"
            />
          </div>
        </div>
        <div className="container">
            <div className="mt-8 max-w-3xl mx-auto text-center">
                <ul className="space-y-3 text-left inline-block">
                {checklistItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                    <Check className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-3 flex-shrink-0" />
                    <span className="text-lg sm:text-2xl text-foreground">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
}
