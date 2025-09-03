import Image from 'next/image';
import { Card } from '@/components/ui/card';

const authorityItems = [
  {
    title: 'Oficina própria com equipamentos modernos',
    description:
      'Nossa oficina está equipada com as mais recentes tecnologias para diagnóstico e reparo, garantindo um serviço ágil e de alta precisão para todos os veículos da sua frota.',
    imageUrl: 'https://i.postimg.cc/7Pd7j8Ds/imagem-2025-09-03-112210245.png',
    imageHint: 'modern workshop',
  },
  {
    title: 'Técnicos certificados e especializados',
    description:
      'Contamos com uma equipe de profissionais com vasta experiência e certificações nas principais montadoras, prontos para oferecer as melhores soluções em manutenção preventiva e corretiva.',
    imageUrl: 'https://i.postimg.cc/cH609Q8P/Gemini-Generated-Image-ifwy1uifwy1uifwy.png',
    imageHint: 'certified mechanics',
  },
  {
    title: 'Atendimento personalizado para cada empresa',
    description:
      'Entendemos que cada frota é única. Por isso, oferecemos um plano de manutenção totalmente personalizado, focado nas necessidades específicas do seu negócio para maximizar a eficiência e reduzir custos.',
    imageUrl: 'https://i.postimg.cc/8Cb24WfR/imagem-2025-09-03-120951564.png',
    imageHint: 'business meeting',
  },
];

export function AuthorityExperience() {
  console.log('[AuthorityExperience]', 'Component rendered');
  return (
    <section className="py-20 sm:py-28 bg-secondary">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl uppercase">
            A <em className="not-italic text-primary">Da Silva Automotivo</em> é referência em manutenção automotiva em Paulínia há mais de uma década.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nossa equipe altamente qualificada possui expertise específica em gestão de frotas empresariais.
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
                <Card className="overflow-hidden rounded-2xl shadow-md group relative">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="object-cover w-full aspect-[4/3] scale-105"
                      data-ai-hint={item.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </Card>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
            <div
              className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 even:md:flex-row-reverse"
            >
              <div className="md:w-1/2">
                <h3 className="font-headline text-2xl font-bold text-gold mb-4 md:text-3xl">
                  Localização estratégica em Paulínia
                </h3>
                <Card className="overflow-hidden rounded-2xl shadow-md">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3099.6292348691813!2d-47.1668848!3d-22.7537775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8950d2c44a30b%3A0xd71ec519160793d5!2sAv.%20Paulista%2C%20306%20-%20Jardim%20Planalto%2C%20Paul%C3%ADnia%20-%20SP%2C%2013145-089!5e1!3m2!1spt-BR!2sbr!4v1756916183409!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Card>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-muted-foreground">Nossa localização privilegiada em Paulínia facilita a logística para sua empresa, permitindo que seus veículos cheguem até nós rapidamente, otimizando o tempo de manutenção.</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
