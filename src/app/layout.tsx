import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FloatingWhatsAppButton } from '@/components/landing/FloatingWhatsAppButton';
import { oswald, futura } from '@/lib/fonts';
import { cn } from '@/lib/utils';


export const metadata: Metadata = {
  title: 'Da Silva Automotivo',
  description: 'Reduza em 40% os custos da sua frota',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", oswald.variable, futura.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-body antialiased overflow-x-hidden">
        {children}
        <Toaster />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
