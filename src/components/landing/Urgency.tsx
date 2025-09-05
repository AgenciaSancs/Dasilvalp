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
    <section className="relative w-full">
      <div className="relative">
        <Image
          src="https://i.postimg.cc/ZRnn8Cpf/arte-1.png"
          alt="Promotional banner for fleet maintenance"
          width={1920}
          height={1080}
          className="w-full h-auto"
          data-ai-hint="promotional banner"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-2 text-left">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-neutral-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
