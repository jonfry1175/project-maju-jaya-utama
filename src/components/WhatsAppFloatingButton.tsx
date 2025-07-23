import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslation } from "react-i18next";

const WhatsAppFloatingButton = () => {
  const { t } = useTranslation("common");

  const whatsappNumber = "6281290001234";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
            aria-label={t("whatsapp.tooltip")}
          >
            <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-background text-foreground border shadow-md">
          <p className="text-sm font-medium">{t("whatsapp.tooltip")}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default WhatsAppFloatingButton;