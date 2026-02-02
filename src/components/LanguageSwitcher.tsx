import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'id', name: 'Indonesia', flag: '/flags/id.svg' },
  { code: 'en', name: 'English', flag: '/flags/gb.svg' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-11 px-4 bg-white/5 border-white/10 hover:border-primary/50 text-foreground rounded-xl transition-all duration-300"
        >
          <img src={currentLanguage.flag} alt={currentLanguage.name} className="w-5 h-3.5 object-cover rounded-sm mr-2 shadow-sm" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest">{currentLanguage.code}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="z-[100] mt-2 bg-background/80 backdrop-blur-xl border border-primary/10 rounded-2xl p-1 shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={cn(
               "gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer focus:bg-primary/10",
               i18n.language === lang.code ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
            )}
          >
            <img src={lang.flag} alt={lang.name} className="w-5 h-3.5 object-cover rounded-sm shadow-sm" />
            <span className="text-sm font-semibold tracking-tight">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;