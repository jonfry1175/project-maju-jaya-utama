
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation('header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.process'), href: "#process" },
    { name: t('nav.contact'), href: "#contact" }
  ];

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 blur-backdrop border-b border-border/60 shadow-soft' : 'bg-background/80 blur-backdrop border-b border-border/40'}`}>
      {/* Main Header */}
      <div className={`container mx-auto px-6 ${isScrolled ? 'py-3' : 'py-4'} transition-all duration-300`}>
        <div className="flex items-center justify-between">
          {/* Logo - More Compact */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
            <img 
              src="/logo.png" 
              alt="Global Sinergi Kapital Logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary font-display leading-tight">
                {t('companyName')}
              </h1>
              <p className="text-xs text-muted-foreground font-medium">{t('tagline')}</p>
            </div>
          </div>

          {/* Desktop Navigation - Refined */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons - More Professional */}
          <div className="hidden lg:flex items-center space-x-3">
            <LanguageSwitcher />
            <Button variant="outline" size="sm" className="text-sm font-medium border-primary/20 hover:border-primary/40">
              <Phone size={16} className="mr-2" />
              {t('cta.freeConsultation')}
            </Button>
            <Button className="btn-gradient-brand shadow-brand text-sm font-medium px-6">
              {t('cta.startIPOJourney')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/60 animate-fade-up">
            <nav className="flex flex-col space-y-1 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 px-4">
                <LanguageSwitcher />
                <Button variant="outline" size="sm" className="justify-start border-primary/20">
                  <Phone size={16} className="mr-2" />
                  {t('cta.freeConsultation')}
                </Button>
                <Button className="btn-gradient-brand justify-start">
                  {t('cta.startIPOJourney')}
                </Button>
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-border/40">
                  <a href="tel:+622112345678" className="flex items-center text-sm text-muted-foreground">
                    <Phone size={14} className="mr-2" />
                    {t('phone')}
                  </a>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground">
                    <MessageCircle size={14} className="mr-2" />
                    {t('whatsapp')}
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
