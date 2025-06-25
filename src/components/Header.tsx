
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { t } = useTranslation('header');
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
    { name: t('nav.partners'), href: "/partners" },
    { 
      name: t('nav.ipoProcess'), 
      href: "#",
      subItems: [
        { name: t('nav.ipoProcess.mapping'), href: "#" },
        { name: t('nav.ipoProcess.scenarioPlans'), href: "#" },
        { name: t('nav.ipoProcess.proformaFinancialReport'), href: "#" },
        { name: t('nav.ipoProcess.managementImprovementPlans'), href: "#" },
        { name: t('nav.ipoProcess.bridgingFinancing'), href: "#" },
        { name: t('nav.ipoProcess.ipoCompliancePlans'), href: "#" }
      ]
    },
    { name: t('nav.testimonials'), href: "#testimonials" },
    { name: t('nav.faq'), href: "#faq" },
    { name: t('nav.contact'), href: "#contact" }
  ];

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If it's a hash link
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        // We're on the home page, just scroll to the section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // We're on a different page, navigate to home then scroll
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 blur-backdrop border-b border-medium shadow-soft' : 'bg-background/80 blur-backdrop border-b border-subtle'}`}>
      {/* Main Header */}
      <div className={`container mx-auto container-padding ${isScrolled ? 'py-3' : 'py-4'} transition-all duration-300`}>
        <div className="flex items-center justify-between">
          {/* Logo - More Compact */}
          {location.pathname === '/' ? (
            <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
              <img 
                src="/logo.png" 
                alt="Global Sinergi Kapital Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="heading-4 text-primary">
                  {t('companyName')}
                </h1>
                <p className="text-body-small text-muted-foreground font-medium">{t('tagline')}</p>
              </div>
            </div>
          ) : (
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Global Sinergi Kapital Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="heading-4 text-primary">
                  {t('companyName')}
                </h1>
                <p className="text-body-small text-muted-foreground font-medium">{t('tagline')}</p>
              </div>
            </Link>
          )}

          {/* Desktop Navigation - Refined */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              // Handle dropdown menu
              if (item.subItems) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="px-4 py-2 text-body-small font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 flex items-center">
                      {item.name}
                      <ChevronDown className="ml-1 icon-small" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <a
                            href={subItem.href}
                            className="cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              // Handle navigation when implemented
                            }}
                          >
                            {subItem.name}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              
              const isExternal = item.href.startsWith('/');
              if (isExternal) {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-4 py-2 text-body-small font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                );
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons - More Professional */}
          <div className="hidden lg:flex items-center space-x-3">
            <LanguageSwitcher />
            <Button className="btn-gradient-brand shadow-brand text-body-small font-medium px-6">
              {t('cta.startIPOJourney')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="icon-medium" /> : <Menu className="icon-medium" />}
          </button>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-medium animate-fade-up">
            <nav className="flex flex-col space-y-1 mt-4">
              {navItems.map((item) => {
                // Handle dropdown in mobile
                if (item.subItems) {
                  return (
                    <div key={item.name}>
                      <button
                        className="w-full px-4 py-3 text-body-small font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 flex items-center justify-between"
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      >
                        {item.name}
                        <ChevronDown className={`icon-small transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdownOpen && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-body-small text-foreground/70 hover:text-primary hover:bg-muted/30 rounded-lg transition-all duration-200"
                              onClick={(e) => {
                                e.preventDefault();
                                setIsMenuOpen(false);
                              }}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                const isExternal = item.href.startsWith('/');
                if (isExternal) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-4 py-3 text-body-small font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                }
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="flex flex-col space-y-2 pt-4 px-4">
                <div className="flex items-center justify-between mb-2">
                  <LanguageSwitcher />
                  <Button className="btn-gradient-brand">
                    {t('cta.startIPOJourney')}
                  </Button>
                </div>
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-subtle">
                  <a href="tel:+622112345678" className="flex items-center text-body-small text-muted-foreground">
                    <Phone className="icon-small mr-2" />
                    {t('phone')}
                  </a>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-body-small text-muted-foreground">
                    <MessageCircle className="icon-small mr-2" />
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
