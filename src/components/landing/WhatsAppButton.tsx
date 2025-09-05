import { Button, type ButtonProps } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

export function WhatsAppButton({ children, ...props }: React.PropsWithChildren<ButtonProps>) {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5519971300486&text&type=phone_number&app_absent=0";

  return (
    <Button asChild {...props}>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="mr-2 h-5 w-5" />
        {children || "Fale com um especialista"}
      </a>
    </Button>
  );
}
