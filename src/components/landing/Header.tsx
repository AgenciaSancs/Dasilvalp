import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image 
              src="/images/logodasil.png"
              alt="FleetValue Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <WhatsAppButton />
        </div>
      </div>
    </header>
  );
}
