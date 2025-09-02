import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "FleetValue transformed our fleet maintenance. We've saved over 20% on our annual costs and our vehicle uptime has never been better. Truly a game-changer.",
    name: "John Doe",
    company: "XYZ Logistics",
    avatar: "JD",
  },
  {
    quote: "The professionalism and expertise of the technicians at Da Silva Automotivo are top-notch. Their detailed reports help us make smarter decisions.",
    name: "Jane Smith",
    company: "Fast-Track Couriers",
    avatar: "JS",
  },
  {
    quote: "Switching to FleetValue was the best decision for our company. The service is reliable, efficient, and they always go the extra mile to ensure our fleet is in perfect condition.",
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
            Trusted by Companies Like Yours
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about their experience.
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
