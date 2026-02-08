import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const languages = [
  { code: "id", name: "Indonesia", flag: "/flags/id.svg" },
  { code: "en", name: "English", flag: "/flags/gb.svg" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-11 2xl:h-12 px-2.5 2xl:px-3 bg-white border-border/70 hover:border-primary/35 text-foreground rounded-2xl transition-all duration-300 shadow-[0_18px_55px_-48px_hsl(var(--foreground)_/_0.35)]"
        >
          <img
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            className="w-5 h-3.5 object-cover rounded-sm mr-2 shadow-sm"
          />
          <span className="text-[12px] font-mono font-semibold uppercase tracking-[0.28em]">
            {currentLanguage.code}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="z-[100] mt-2 bg-white border border-border/70 rounded-2xl p-1 shadow-2xl overflow-hidden"
      >
        <div className="absolute left-6 -top-2 h-4 w-4 rotate-45 bg-white border-l border-t border-border/60" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-accent/35 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={cn(
              "gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer focus:bg-foreground/5 focus:text-foreground",
              i18n.language === lang.code
                ? "bg-primary/10 text-primary"
                : "text-foreground/70 hover:bg-muted/60 hover:text-foreground",
            )}
          >
            <img
              src={lang.flag}
              alt={lang.name}
              className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
            />
            <span className="text-sm font-semibold tracking-tight">
              {lang.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
