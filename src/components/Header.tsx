
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Proses", href: "#process" },
    { name: "Kontak", href: "#contact" }
  ];

  return (
    <header className="bg-background/80 blur-backdrop border-b border-border/60 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - More Compact */}
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 bg-gradient-brand rounded-xl flex items-center justify-center shadow-soft">
              <span className="text-white font-bold text-base">G</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary font-poppins leading-tight">
                Global Sinergi Kapital
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Mitra Strategis IPO</p>
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
            <Button variant="ghost" size="sm" className="text-sm font-medium">
              Konsultasi Gratis
            </Button>
            <Button className="bg-gradient-brand hover:opacity-90 shadow-brand text-sm font-medium px-6">
              Hubungi Kami
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
                <Button variant="ghost" size="sm" className="justify-start">
                  Konsultasi Gratis
                </Button>
                <Button className="bg-gradient-brand hover:opacity-90 justify-start">
                  Hubungi Kami
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
