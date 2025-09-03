
'use client';
import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const partnerLogos = [
  { src: 'https://i.postimg.cc/J0JR969B/Logo-simples-circular-esmaltaria-preto-3.png', alt: 'Partner 1', hint: 'company logo' },
  { src: 'https://i.postimg.cc/qBskpYN1/Logo-simples-circular-esmaltaria-preto-5.png', alt: 'Partner 2', hint: 'company logo', className: 'transform scale-125' },
  { src: 'https://i.postimg.cc/d3cw2M0S/Logo-simples-circular-esmaltaria-preto-6.png', alt: 'Partner 3', hint: 'company logo' },
  { src: 'https://picsum.photos/150/80?grayscale&random=4', alt: 'Partner 4', hint: 'company logo' },
  { src: 'https://picsum.photos/150/80?grayscale&random=5', alt: 'Partner 5', hint: 'company logo' },
  { src: 'https://picsum.photos/150/80?grayscale&random=6', alt: 'Partner 6', hint: 'company logo' },
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

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
        <div className="mt-16">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {partnerLogos.map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6"
                >
                  <div className="flex items-center justify-center p-6">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={150}
                      height={80}
                      className={`object-contain ${logo.className || ''}`}
                      data-ai-hint={logo.hint}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
