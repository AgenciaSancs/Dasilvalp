import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wrench, ShieldCheck, TrendingUp, ClipboardList } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "Cost Reduction",
    description: "Our proactive maintenance plans save you money by preventing major repairs and optimizing vehicle performance.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Increased Availability",
    description: "Keep your fleet on the road. We minimize downtime with efficient service and quick turnarounds.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: "Specialized Technicians",
    description: "Our certified professionals have the expertise to handle the specific needs of your diverse fleet vehicles.",
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-primary" />,
    title: "Detailed Reports",
    description: "Receive transparent, comprehensive reports on all services performed, helping you track and manage your assets.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            The FleetValue Advantage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover how our tailored maintenance services can transform your fleet management.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center bg-card/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  {benefit.icon}
                </div>
                <CardTitle className="mt-4 font-headline text-xl">{benefit.title}</CardTitle>
                <CardDescription className="mt-2 text-base text-muted-foreground">{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
