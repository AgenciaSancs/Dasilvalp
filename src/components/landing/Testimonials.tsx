import Image from 'next/image';

const partnerLogos = [
  { src: 'https://picsum.photos/150/80?grayscale&random=1', alt: 'Partner 1', hint: 'company logo' },
  { src: 'https://picsum.photos/150/80?grayscale&random=2', alt: 'Partner 2', hint: 'company logo' },
  { src: 'https://picsum.photos/150/80?grayscale&random=3', alt: 'Partner 3', hint: 'company logo' },
  { src: 'https://picsum.photos/150/80?grayscale&random=4', alt: 'Partner 4', hint: 'company logo' },
  { src: 'https://picsum.photos/150/80?grayscale&random=5', alt: 'Partner 5', hint: 'company logo' },
  { src: 'https://picsum.photos/150/80?grayscale&random=6', alt: 'Partner 6', hint: 'company logo' },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Clientes e Parceiros
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Empresas que confiam na FleetValue para a gestão e manutenção de suas frotas.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {partnerLogos.map((logo) => (
            <div key={logo.alt} className="flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={80}
                className="object-contain"
                data-ai-hint={logo.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
