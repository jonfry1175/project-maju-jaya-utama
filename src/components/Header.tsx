import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Header = () => {
  const { t } = useTranslation("header");
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.products"), href: "#products" },
    { name: t("nav.capabilities"), href: "#capabilities" },
    { name: t("nav.sustainability"), href: "#sustainability" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out font-sans",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/20 py-3 shadow-sm"
            : "bg-transparent py-5 lg:py-6"
        )}
      >
        <div className="container mx-auto container-padding">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="group flex items-center gap-3 md:gap-4 select-none"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src="/logo.png" 
                  alt="Maju Jaya Utama Lestari" 
                  className={cn(
                    "relative z-10 w-auto transition-all duration-300",
                    isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
                  )} 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
                  PT Maju Jaya
                </span>
                <span className={cn(
                  "font-display font-bold leading-none text-primary transition-all duration-300",
                  isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
                )}>
                  Utama Lestari
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/20 shadow-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-5 py-2 text-sm font-medium text-foreground/70 hover:text-primary relative group overflow-hidden rounded-full transition-colors"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
              
              <Button
                size={isScrolled ? "sm" : "default"}
                className={cn(
                  "hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/25 transition-all duration-300",
                  isScrolled ? "px-4" : "px-6"
                )}
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                {t("cta.contact")}
              </Button>

              <button
                className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors relative z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-xl flex flex-col pt-32 px-6"
          >
            <nav className="flex flex-col gap-6 items-center text-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8 flex flex-col gap-4 w-full max-w-xs"
              >
                <LanguageSwitcher />
                <Button 
                  className="w-full h-12 text-lg shadow-xl shadow-primary/20"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  {t("cta.contact")}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
