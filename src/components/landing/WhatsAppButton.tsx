import { Button, type ButtonProps } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

export function WhatsAppButton(props: ButtonProps) {
  const phoneNumber = "5511987654321"; // Placeholder phone number
  const message = "Olá! Gostaria de saber mais sobre os serviços da FleetValue.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button asChild {...props}>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="mr-2 h-5 w-5" />
        Contact on WhatsApp
      </a>
    </Button>
  );
}
