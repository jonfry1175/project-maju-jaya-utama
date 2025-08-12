import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RitzHeader = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToGSK = () => {
    navigate('/');
  };

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
        : 'bg-background/90 backdrop-blur-sm border-b border-border/50'
    }`}>
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src="/logo-ritz.png" 
              alt="RITZ Corp Logo" 
              className="h-8 lg:h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="ml-3 hidden sm:block">
              <div className="text-lg font-bold text-foreground">RITZ Corp</div>
              <div className="text-xs text-muted-foreground">Corpora Indonesia</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-200 relative"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button
              size="sm"
              onClick={handleBackToGSK}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to GSK
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
            <div className="py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-6 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-6 py-4 border-t border-border/50">
                <Button
                  size="sm"
                  onClick={handleBackToGSK}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to GSK
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default RitzHeader;