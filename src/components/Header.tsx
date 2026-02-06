import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

type NavItem = {
  label: string;
  path: string;
  matcher?: (pathname: string) => boolean;
  children?: Array<{ label: string; path: string }>;
};

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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: t("nav.home"), path: "/" },
      {
        label: t("nav.about"),
        path: "/about-us/our-company",
        matcher: (pathname) => pathname.startsWith("/about-us"),
      },
      { label: t("nav.products"), path: "/products" },
      { label: t("nav.gallery"), path: "/gallery" },
      { label: t("nav.capabilities"), path: "/services" },
      { label: t("nav.sustainability"), path: "/news" },
      {
        label: t("nav.career"),
        path: "/career/employee",
        matcher: (pathname) => pathname.startsWith("/career"),
        children: [
          { label: t("nav.careerEmployee"), path: "/career/employee" },
          { label: t("nav.careerIntern"), path: "/career/intern" },
        ],
      },
      { label: t("nav.contact"), path: "/contact" },
    ],
    [t],
  );

  const isActive = (item: NavItem) => {
    if (item.matcher) return item.matcher(location.pathname);
    return location.pathname === item.path;
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
            : "bg-transparent py-6 lg:py-8",
        )}
      >
        {isScrolled && (
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        )}

        <div className="container mx-auto container-padding relative z-10 max-w-7xl">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="group flex items-center gap-3 select-none">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src="/logo.png"
                  alt="Maju Jaya Utama Lestari"
                  className={cn(
                    "relative z-10 w-auto transition-all duration-500",
                    isScrolled ? "h-12 md:h-14" : "h-14 md:h-20",
                  )}
                />
              </div>

            </Link>

            <nav className="hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-xl px-2 py-2 rounded-full border border-white/20 shadow-xl relative group">
              <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none rounded-full" />
              {navItems.map((item) => {
                const active = isActive(item);
                if (item.children?.length) {
                  return (
                    <div key={item.path} className="relative group/career">
                      <Link
                        to={item.path}
                        className={cn(
                          "px-4 py-2 text-xs sm:text-sm font-semibold relative inline-flex items-center gap-1 transition-all duration-300 rounded-full",
                          active
                            ? "text-primary bg-primary/10"
                            : "text-foreground/70 hover:text-primary",
                        )}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                        <span className="absolute inset-0 bg-primary/10 scale-0 group-hover/career:scale-100 transition-transform duration-300 rounded-full" />
                      </Link>

                      <div className="absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 min-w-[200px] rounded-2xl border border-white/20 bg-card/95 backdrop-blur-xl p-2 shadow-2xl opacity-0 invisible translate-y-2 group-hover/career:opacity-100 group-hover/career:visible group-hover/career:translate-y-0 transition-all duration-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={cn(
                              "block rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors",
                              location.pathname === child.path
                                ? "bg-primary text-white"
                                : "text-foreground/80 hover:bg-primary/10 hover:text-primary",
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "px-4 py-2 text-xs sm:text-sm font-semibold relative group/item transition-all duration-300 rounded-full",
                      active
                        ? "text-primary bg-primary/10"
                        : "text-foreground/70 hover:text-primary",
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 bg-primary/10 scale-0 group-hover/item:scale-100 transition-transform duration-300 rounded-full" />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>

              <Button
                asChild
                size={isScrolled ? "default" : "lg"}
                className={cn(
                  "hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white font-display font-black tracking-wide shadow-[0_0_20px_rgba(255,65,27,0.2)] hover:shadow-[0_0_30px_rgba(255,65,27,0.4)] transition-all duration-500 rounded-xl",
                  isScrolled ? "h-11 px-6" : "h-14 px-8",
                )}
              >
                <Link to="/contact">{t("cta.contact")}</Link>
              </Button>

              <button
                className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-primary/5 border border-primary/20 text-foreground transition-all hover:bg-primary/10"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-label={t("accessibility.toggleMenu")}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-background flex flex-col pt-32 px-6 overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-grid-industrial opacity-[0.05]" />
              <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            </div>

            <nav className="relative z-10 flex flex-col gap-8 items-center text-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="w-full max-w-xs"
                >
                  <div className="space-y-3">
                    <Link
                      to={item.path}
                      className="heading-1 hover:text-primary transition-all duration-300 transform hover:scale-110 block"
                    >
                      {item.label}
                    </Link>
                    {item.children?.length ? (
                      <div className="mx-auto w-full rounded-2xl border border-primary/20 bg-card/70 p-2 backdrop-blur-md">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={cn(
                              "block rounded-xl px-3 py-2 text-base font-semibold transition-colors",
                              location.pathname === child.path
                                ? "bg-primary text-white"
                                : "text-foreground/80 hover:bg-primary/10 hover:text-primary",
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </motion.div>
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
                  asChild
                  className="w-full h-16 text-lg sm:text-xl font-display font-black tracking-widest bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 rounded-2xl"
                >
                  <Link to="/contact">{t("cta.contact")}</Link>
                </Button>
              </motion.div>
            </nav>

            <div className="absolute bottom-12 left-0 right-0 text-center">
              <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground opacity-50">
                PT MAJU JAYA UTAMA LESTARI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
