import { Button } from "@/components/ui/button";

export function FloatingWhatsAppButton() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5519971300486&text&type=phone_number&app_absent=0";

  return (
    <Button
      asChild
      className="fixed bottom-4 right-4 z-50 h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center bg-transparent hover:bg-transparent shadow-none transition-transform duration-200 hover:scale-110"
      size="icon"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <img width="64" height="64" src="https://img.icons8.com/fluency/48/whatsapp.png" alt="whatsapp" className="h-12 w-12 md:h-16 md:w-16" />
      </a>
    </Button>
  );
}
