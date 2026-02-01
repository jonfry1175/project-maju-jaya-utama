import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation("header");
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 blur-backdrop border-b border-medium shadow-soft"
          : "bg-background/80 blur-backdrop border-b border-subtle"
      }`}
    >
      <div
        className={`container mx-auto container-padding ${
          isScrolled ? "py-2" : "py-3"
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-between gap-3">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex flex-col leading-none"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              PT
            </span>
            <span className="text-lg sm:text-xl lg:text-2xl font-display font-semibold text-primary">
              Maju Jaya Utama Lestari
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="sm"
              className="hidden lg:inline-flex border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={(e) => handleNavClick(e as any, "#contact")}
            >
              {t("cta.contact")}
            </Button>
            <button
              className="lg:hidden p-2 rounded-md border border-border"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-border pt-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={(e) => handleNavClick(e as any, "#contact")}
            >
              {t("cta.contact")}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
