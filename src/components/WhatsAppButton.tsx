import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "5511999999999";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de DPO Online.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-card rounded-lg shadow-lg text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale conosco
      </span>
    </a>
  );
}
