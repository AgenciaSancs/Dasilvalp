import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image 
              src="https://i.postimg.cc/9fvdxBDn/Logo-simples-circular-esmaltaria-preto-1.png"
              alt="Da Silva Automotivo Logo"
              width={120}
              height={34}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="ghost" size="icon">
            <Link href="https://www.instagram.com/p/DA9HGOhy6tq/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
          <WhatsAppButton size="sm" className="text-xs">
            <span className="hidden sm:inline">Fale com um especialista</span>
            <span className="sm:hidden">WhatsApp</span>
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
