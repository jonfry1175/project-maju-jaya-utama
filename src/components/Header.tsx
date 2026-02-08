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
        children: [
          { label: t("nav.aboutCompany"), path: "/about-us/our-company" },
          { label: t("nav.aboutTeam"), path: "/about-us/our-team" },
          {
            label: t("nav.aboutCertifications"),
            path: "/about-us/certifications",
          },
          { label: t("nav.aboutAwards"), path: "/about-us/company-awards" },
        ],
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
            ? "bg-transparent py-3"
            : "bg-transparent py-5 lg:py-6",
        )}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-noise opacity-[0.02]" />
        </div>

        <div className="container mx-auto container-padding relative z-10 max-w-7xl">
          <div
            className={cn(
              "relative mx-auto flex items-center justify-between gap-3 rounded-[2rem] border px-4 xl:px-5 py-3 bg-white shadow-[0_22px_70px_-50px_hsl(var(--foreground)_/_0.45)]",
              isScrolled
                ? "border-border/70 shadow-[0_22px_70px_-48px_hsl(var(--foreground)_/_0.55)]"
                : "border-border/60",
            )}
          >
            <div className="absolute inset-0 bg-noise opacity-[0.045] pointer-events-none rounded-[2rem]" />
            <div className="absolute inset-0 pointer-events-none rounded-[2rem] card-inset opacity-70" />

            <Link
              to="/"
              className="group flex items-center gap-3 select-none shrink-0"
            >
              <div className="absolute -inset-10 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src="/logo.png"
                alt={t("companyName")}
                className={cn(
                  "relative z-10 w-auto object-contain transition-all duration-300",
                  "h-10 sm:h-11 md:h-12",
                  "max-w-[170px] sm:max-w-[200px] md:max-w-[220px] xl:max-w-[220px] 2xl:max-w-[260px]",
                )}
              />
            </Link>

            <div className="hidden xl:flex flex-1 justify-center min-w-0">
              <div
                className={cn(
                  "relative max-w-full overflow-hidden",
                  // Soft edge fades to hint horizontal scroll when space is tight.
                  "before:absolute before:inset-y-0 before:left-0 before:w-10 before:bg-gradient-to-r before:from-white before:to-transparent before:pointer-events-none before:z-10",
                  "after:absolute after:inset-y-0 after:right-0 after:w-10 after:bg-gradient-to-l after:from-white after:to-transparent after:pointer-events-none after:z-10",
                )}
              >
                <nav
                  className={cn(
                    "flex items-center gap-0.5 px-1",
                    "max-w-full overflow-x-auto overscroll-x-contain",
                    // Hide scrollbar (cross-browser) to keep the header clean.
                    "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                  )}
                  aria-label="Primary"
                >
                {navItems.map((item) => {
                  const active = isActive(item);
                  if (item.children?.length) {
                    return (
                      <div key={item.path} className="relative group/career">
                        <Link
                          to={item.path}
                          className={cn(
                            "relative inline-flex items-center gap-1 rounded-full px-2 2xl:px-3.5 py-2 text-[13px] 2xl:text-[16px] font-medium tracking-[0.005em] transition-colors duration-300 whitespace-nowrap leading-none",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                            active
                              ? "text-foreground bg-muted/60 font-semibold"
                              : "text-foreground/70 hover:text-foreground hover:bg-muted/40",
                          )}
                        >
                          <span className="relative z-10">{item.label}</span>
                          <ChevronDown className="w-4 h-4 opacity-70 shrink-0" />
                          <span
                            className={cn(
                              "absolute left-3 right-3 bottom-1.5 h-[2px] rounded-full bg-gradient-to-r from-primary via-primary to-accent/70 origin-left transition-transform duration-300",
                              active
                                ? "scale-x-100"
                                : "scale-x-0 group-hover/career:scale-x-100",
                            )}
                          />
                        </Link>

                        <div className="absolute left-1/2 top-[calc(100%+12px)] -translate-x-1/2 min-w-[260px] rounded-2xl border border-border/70 bg-white p-2 shadow-2xl opacity-0 invisible translate-y-2 group-hover/career:opacity-100 group-hover/career:visible group-hover/career:translate-y-0 group-focus-within/career:opacity-100 group-focus-within/career:visible group-focus-within/career:translate-y-0 transition-all duration-200 overflow-hidden">
                          <div className="absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white border-l border-t border-border/60" />
                          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-accent/35 to-transparent" />
                          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none rounded-2xl" />
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={cn(
                                "group/item flex items-center gap-3 rounded-xl px-4 py-2.5 text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35",
                                location.pathname === child.path
                                  ? "bg-primary text-primary-foreground"
                                  : "text-foreground/85 hover:bg-muted/60 hover:text-foreground",
                              )}
                            >
                              <span
                                className={cn(
                                  "h-2 w-2 rounded-full bg-border transition-colors",
                                  location.pathname === child.path
                                    ? "bg-primary-foreground/90"
                                    : "group-hover/item:bg-primary/70",
                                )}
                              />
                              <span className="flex-1">{child.label}</span>
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
                        "group relative rounded-full px-2 2xl:px-3.5 py-2 text-[13px] 2xl:text-[16px] font-medium tracking-[0.005em] transition-colors duration-300 whitespace-nowrap leading-none",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        active
                          ? "text-foreground bg-muted/60 font-semibold"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted/40",
                      )}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span
                        className={cn(
                          "absolute left-3 right-3 bottom-1.5 h-[2px] rounded-full bg-gradient-to-r from-primary via-primary to-accent/70 origin-left transition-transform duration-300",
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        )}
                      />
                    </Link>
                  );
                })}
                </nav>
              </div>
            </div>

            <div className="flex items-center gap-2 xl:gap-3 shrink-0">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>

              <Button
                asChild
                className={cn(
                  "hidden sm:inline-flex group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground text-[14px] 2xl:text-[16px] font-semibold tracking-[0.01em] shadow-[0_18px_55px_-28px_hsl(var(--primary)_/_0.65)] hover:shadow-[0_22px_70px_-28px_hsl(var(--primary)_/_0.78)] transition-all duration-500 rounded-2xl h-11 2xl:h-12 px-4 2xl:px-7 whitespace-nowrap",
                )}
              >
                <Link to="/contact" className="relative">
                  <span className="absolute -inset-x-6 -inset-y-3 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.25)_35%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative">{t("cta.contact")}</span>
                </Link>
              </Button>

              <button
                className="xl:hidden w-12 h-12 flex items-center justify-center rounded-2xl border border-border/70 bg-white hover:bg-muted/50 transition-all"
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
            className="fixed inset-0 z-40 xl:hidden bg-background flex flex-col pt-32 px-6 overflow-hidden"
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
