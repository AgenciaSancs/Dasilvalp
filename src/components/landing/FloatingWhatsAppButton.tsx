import { Button } from "@/components/ui/button";

export function FloatingWhatsAppButton() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5519971300486&text&type=phone_number&app_absent=0";

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-20 w-20 rounded-full shadow-lg flex items-center justify-center bg-transparent hover:bg-transparent"
      size="icon"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <img width="64" height="64" src="https://img.icons8.com/fluency/48/whatsapp.png" alt="whatsapp"/>
      </a>
    </Button>
  );
}
