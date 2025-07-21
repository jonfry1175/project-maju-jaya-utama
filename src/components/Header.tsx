
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation('header');
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: t('nav.home'), 
      href: "#hero"
    },
    { 
      name: t('nav.about'), 
      href: "#about",
      subItems: [
        { name: t('nav.about.overview'), href: "#about" },
        { name: t('nav.about.leadership'), href: "/our-leadership" }
      ]
    },
    { 
      name: t('nav.services'), 
      href: "#services",
      subItems: [
        { name: t('nav.services.professional'), href: "#services" },
        { name: t('nav.services.fundRaising'), href: "/fund-raising" }
      ]
    },
    { name: t('nav.partners'), href: "/our-partnership" },
    { 
      name: t('nav.ipoProcess'), 
      href: "#",
      subItems: [
        { name: t('nav.ipoProcess.mapping'), href: "/ipo-process/mapping" },
        { name: t('nav.ipoProcess.scenarioPlans'), href: "/ipo-process/scenario-plans" },
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
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

  const handleDropdownItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If it's a route link (starts with /)
    if (href.startsWith('/')) {
      navigate(href);
      // Scroll to top after navigation completes
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else if (href.startsWith('#')) {
      // Handle hash links same as handleNavClick
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
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

  const toggleMobileDropdown = (itemName: string) => {
    setMobileDropdownOpen(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 blur-backdrop border-b border-medium shadow-soft' : 'bg-background/80 blur-backdrop border-b border-subtle'}`}>
      {/* Main Header */}
      <div className={`container mx-auto container-padding ${isScrolled ? 'py-1.5' : 'py-2'} transition-all duration-300`}>
        <div className="flex items-center justify-between gap-2 min-h-[50px]">
          {/* Logo - Wording Only */}
          {location.pathname === '/' ? (
            <div className="cursor-pointer flex-shrink-0" onClick={handleLogoClick}>
              <img 
                src="/logo-wording.png" 
                alt="Global Sinergi Kapital Logo" 
                className="h-8 lg:h-10 xl:h-12 w-auto object-contain max-w-none"
                style={{width: 'auto', maxWidth: 'calc(50vw - 2rem)'}}
              />
            </div>
          ) : (
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/logo-wording.png" 
                alt="Global Sinergi Kapital Logo" 
                className="h-8 lg:h-10 xl:h-12 w-auto object-contain max-w-none"
                style={{width: 'auto', maxWidth: 'calc(50vw - 2rem)'}}
              />
            </Link>
          )}

          {/* Desktop Navigation - Ultra Compact */}
          <nav className="hidden lg:flex items-center space-x-0 xl:space-x-0.5 flex-1 justify-center">
            {navItems.map((item, index) => {
              // Hide less important items on smaller screens
              const isImportant = ['home', 'about', 'services', 'partners', 'contact'].includes(item.href.replace('#', '').replace('/', ''));
              const hideOnLG = !isImportant && index > 4;
              
              // Handle dropdown menu
              if (item.subItems) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className={`px-1.5 xl:px-2 py-1.5 text-xs xl:text-sm font-medium text-foreground/85 hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-200 flex items-center tracking-normal whitespace-nowrap ${hideOnLG ? 'hidden xl:flex' : ''}`}>
                      {item.name}
                      <ChevronDown className="ml-0.5 w-3 h-3" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <a
                            href={subItem.href}
                            className="cursor-pointer"
                            onClick={(e) => handleDropdownItemClick(e, subItem.href)}
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
                    className={`px-1.5 xl:px-2 py-1.5 text-xs xl:text-sm font-medium text-foreground/85 hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-200 tracking-normal whitespace-nowrap ${hideOnLG ? 'hidden xl:flex' : ''}`}
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
                  className={`px-1.5 xl:px-2 py-1.5 text-xs xl:text-sm font-medium text-foreground/85 hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-200 tracking-normal whitespace-nowrap ${hideOnLG ? 'hidden xl:flex' : ''}`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons - Ultra Compact */}
          <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
            <LanguageSwitcher />
            <Button 
              className="btn-gradient-brand shadow-brand text-xs font-medium px-2 xl:px-3 py-1.5 tracking-normal whitespace-nowrap"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span className="hidden xl:inline">{t('nav.contact')}</span>
              <span className="xl:hidden">{t('nav.contact')}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1.5 hover:bg-muted/50 rounded-lg transition-colors flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                        className="w-full px-4 py-3 text-sm font-semibold text-foreground/85 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 flex items-center justify-between tracking-wide"
                        onClick={() => toggleMobileDropdown(item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`icon-small transition-transform ${mobileDropdownOpen[item.name] ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdownOpen[item.name] && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-foreground/75 hover:text-primary hover:bg-muted/30 rounded-lg transition-all duration-200 tracking-wide font-medium"
                              onClick={(e) => handleDropdownItemClick(e, subItem.href)}
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
                      className="px-4 py-3 text-sm font-semibold text-foreground/85 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 tracking-wide"
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
                    className="px-4 py-3 text-sm font-semibold text-foreground/85 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 tracking-wide"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="flex flex-col space-y-2 pt-4 px-4">
                <div className="flex items-center justify-between mb-2">
                  <LanguageSwitcher />
                  <Button 
                    className="btn-gradient-brand text-sm font-semibold tracking-wide"
                    onClick={(e) => handleNavClick(e, '#contact')}
                  >
                    {t('nav.contact')}
                  </Button>
                </div>
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-subtle">
                  <a href="tel:+622112345678" className="flex items-center text-sm text-muted-foreground font-medium tracking-wide">
                    <Phone className="icon-small mr-2" />
                    {t('phone')}
                  </a>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground font-medium tracking-wide">
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
