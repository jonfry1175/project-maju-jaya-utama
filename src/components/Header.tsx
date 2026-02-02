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
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out font-sans",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-primary/10 py-3 shadow-2xl"
            : "bg-transparent py-6 lg:py-8"
        )}
      >
        {isScrolled && <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />}
        
        <div className="container mx-auto container-padding relative z-10 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="group flex items-center gap-3 select-none"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src="/logo.png" 
                  alt="Maju Jaya Utama Lestari" 
                  className={cn(
                    "relative z-10 w-auto transition-all duration-500",
                    isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
                  )} 
                />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-display font-bold leading-none text-foreground transition-all duration-500 whitespace-nowrap",
                  isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
                )}>
                  Maju Jaya <span className="text-primary">Utama Lestari</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-xl px-2 py-2 rounded-full border border-white/20 shadow-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-foreground/70 hover:text-primary relative group/item transition-all duration-300 rounded-full"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-primary/10 scale-0 group-hover/item:scale-100 transition-transform duration-300 rounded-full" />
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
              
              <Button
                size={isScrolled ? "default" : "lg"}
                className={cn(
                  "hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white font-display font-black tracking-wide shadow-[0_0_20px_rgba(255,65,27,0.2)] hover:shadow-[0_0_30px_rgba(255,65,27,0.4)] transition-all duration-500 rounded-xl",
                  isScrolled ? "h-11 px-6" : "h-14 px-8"
                )}
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                {t("cta.contact")}
              </Button>

              <button
                className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-primary/5 border border-primary/20 text-foreground transition-all hover:bg-primary/10"
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
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-background flex flex-col pt-32 px-6 overflow-hidden"
          >
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-grid-industrial opacity-[0.05]" />
              <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            </div>

            <nav className="relative z-10 flex flex-col gap-8 items-center text-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="heading-1 hover:text-primary transition-all duration-300 transform hover:scale-110"
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-12 flex flex-col gap-6 w-full max-w-xs"
              >
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
                <Button 
                  className="w-full h-16 text-lg sm:text-xl font-display font-black tracking-widest bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 rounded-2xl"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  {t("cta.contact")}
                </Button>
              </motion.div>
            </nav>
            
            <div className="absolute bottom-12 left-0 right-0 text-center">
               <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground opacity-50">
                  PT Maju Jaya Utama Lestari
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
