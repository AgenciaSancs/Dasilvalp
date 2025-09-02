import { Check } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const advantages = [
  "Reduce unexpected breakdowns.",
  "Optimize fuel consumption.",
  "Extend the life of your vehicles.",
  "Gain peace of mind with a reliable fleet.",
];

export function Urgency() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <Card className="bg-gradient-to-r from-primary/10 to-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                <div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-gold sm:text-4xl">
                        Stop Losing Money on Inefficient Maintenance
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Every day you wait is another day of potential risk and unnecessary costs. Take action now and secure the future of your fleet.
                    </p>
                    <ul className="mt-8 space-y-4">
                        {advantages.map((advantage, index) => (
                        <li key={index} className="flex items-center">
                            <Check className="h-6 w-6 text-primary mr-3 shrink-0" />
                            <span className="text-lg">{advantage}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-card p-8 rounded-lg">
                    <p className="text-xl font-medium">Ready to Optimize Your Fleet?</p>
                    <p className="mt-2 text-muted-foreground">Click below to talk to a specialist right now.</p>
                    <div className="mt-6">
                        <WhatsAppButton size="lg" />
                    </div>
                </div>
            </div>
        </Card>
      </div>
    </section>
  );
}
