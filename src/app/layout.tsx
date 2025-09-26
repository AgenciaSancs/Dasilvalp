import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FloatingWhatsAppButton } from '@/components/landing/FloatingWhatsAppButton';
import { Inter as FontSans, Space_Grotesk as FontMono } from 'next/font/google';
import { cn } from '@/lib/utils';


export const metadata: Metadata = {
  title: 'Da Silva Automotivo',
  description: 'Reduza em 40% os custos da sua frota',
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", fontSans.variable, fontMono.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Toaster />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
