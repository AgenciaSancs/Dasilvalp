
import Image from 'next/image';
import { cn } from '@/lib/utils';

const partnerLogos = [
  { src: 'https://i.postimg.cc/J0JR969B/Logo-simples-circular-esmaltaria-preto-3.png', alt: 'Partner 1', hint: 'company logo' },
  { src: 'https://i.postimg.cc/qBskpYN1/Logo-simples-circular-esmaltaria-preto-5.png', alt: 'Partner 2', hint: 'company logo', className: 'w-36 md:w-48' },
  { src: 'https://i.postimg.cc/d3cw2M0S/Logo-simples-circular-esmaltaria-preto-6.png', alt: 'Partner 3', hint: 'company logo', className: 'w-36 md:w-48' },
  { src: 'https://picsum.photos/150/80?grayscale&random=4', alt: 'Partner 4', hint: 'company logo' },
  { src: 'https://picsum.photos/150/80?grayscale&random=5', alt: 'Partner 5', hint: 'company logo' },
  { src: 'https://picsum.photos/150/80?grayscale&random=6', alt: 'Partner 6', hint: 'company logo' },
];

export function Testimonials() {
  const logos = [...partnerLogos, ...partnerLogos]; // Duplicate for infinite scroll effect

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Clientes e Parceiros
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aqui esta algumas das empresas que confiam na <strong>DA SILVA</strong> para a gestão e manutenção de suas frotas.
          </p>
        </div>
        <div
          className="relative mt-16 w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex flex-nowrap gap-x-12 animate-scroll group-hover:pause">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160} // Corresponds to w-40
                  height={80}
                  className={cn(
                    'object-contain w-32 md:w-40 opacity-70 transition-opacity duration-300 hover:opacity-100',
                    logo.className
                  )}
                  data-ai-hint={logo.hint}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
