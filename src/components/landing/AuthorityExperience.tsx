import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const authorityItems = [
  {
    title: 'Diagnóstico Preciso com Tecnologia de Ponta',
    description:
      'Utilizamos as ferramentas de diagnóstico mais avançadas do mercado para identificar rapidamente a causa raiz de qualquer problema. Isso nos permite realizar reparos precisos, economizando seu tempo e dinheiro, e garantindo que seus veículos voltem à estrada com segurança e eficiência.',
    imageUrl: 'https://picsum.photos/600/400',
    imageHint: 'diagnostic tools',
  },
  {
    title: 'Equipe de Especialistas Certificados',
    description:
      'Nossa equipe é formada por técnicos altamente qualificados e certificados, com anos de experiência em manutenção de frotas. Estamos em constante treinamento para nos mantermos atualizados com as últimas tecnologias e práticas do setor, garantindo um serviço de excelência.',
    imageUrl: 'https://picsum.photos/600/400',
    imageHint: 'certified mechanics',
  },
];

export function AuthorityExperience() {
  console.log('[AuthorityExperience]', 'Component rendered');
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A <em className="not-italic text-primary">Da Silva Automotivo</em> é referência em manutenção automotiva em Paulínia há mais de uma década.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Confie em quem entende do assunto para cuidar da sua frota.
          </p>
        </div>
        <div className="space-y-16">
          {authorityItems.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 even:md:flex-row-reverse"
            >
              <div className="md:w-1/2">
                <h3 className="font-headline text-2xl font-bold text-gold mb-4 md:text-3xl">
                  {item.title}
                </h3>
                <Card className="overflow-hidden bg-card shadow-md">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-auto rounded-t-2xl transition-transform duration-300 hover:scale-105"
                      data-ai-hint={item.imageHint}
                    />
                </Card>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
