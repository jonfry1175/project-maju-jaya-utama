
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle, Globe, User } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
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
    { name: "Beranda", href: "#hero" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Proses IPO", href: "#process" },
    { name: "Klien & Testimoni", href: "#testimonials" },
    { name: "Kontak", href: "#contact" }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 blur-backdrop border-b border-border/60 shadow-soft' : 'bg-background/80 blur-backdrop border-b border-border/40'}`}>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-6 flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+622112345678" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Phone size={14} />
              <span>(021) 1234-5678</span>
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="h-7 text-xs text-primary-foreground hover:text-primary-foreground hover:bg-white/10">
              <User size={14} className="mr-1" />
              Portal Klien
            </Button>
            <button className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
              <Globe size={14} />
              <span>EN</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`container mx-auto px-6 ${isScrolled ? 'py-3' : 'py-4'} transition-all duration-300`}>
        <div className="flex items-center justify-between">
          {/* Logo - More Compact */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Global Sinergi Kapital Logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary font-display leading-tight">
                Global Sinergi Kapital
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Konsultan IPO Terpercaya</p>
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
            <Button variant="outline" size="sm" className="text-sm font-medium border-primary/20 hover:border-primary/40">
              <Phone size={16} className="mr-2" />
              Konsultasi Gratis
            </Button>
            <Button className="btn-gradient-brand shadow-brand text-sm font-medium px-6">
              Mulai Perjalanan IPO
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
                <Button variant="outline" size="sm" className="justify-start border-primary/20">
                  <Phone size={16} className="mr-2" />
                  Konsultasi Gratis
                </Button>
                <Button className="btn-gradient-brand justify-start">
                  Mulai Perjalanan IPO
                </Button>
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-border/40">
                  <a href="tel:+622112345678" className="flex items-center text-sm text-muted-foreground">
                    <Phone size={14} className="mr-2" />
                    (021) 1234-5678
                  </a>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground">
                    <MessageCircle size={14} className="mr-2" />
                    WhatsApp
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
