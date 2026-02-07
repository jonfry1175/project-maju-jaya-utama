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
            ? "bg-background/82 backdrop-blur-xl border-b border-border/60 py-3 shadow-2xl"
            : "bg-transparent py-5 lg:py-6",
        )}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-noise opacity-[0.025]" />
          {/* A subtle top scrim for hero readability without turning the header opaque */}
          {!isScrolled ? (
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/55 to-transparent" />
          ) : null}
        </div>

        <div className="container mx-auto container-padding relative z-10 max-w-7xl">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="group flex items-center gap-3 select-none">
              <div
                className={cn(
                  "relative rounded-2xl border backdrop-blur-xl px-3 py-2 shadow-[0_20px_60px_-38px_hsl(var(--foreground)_/_0.45)] transition-colors duration-500",
                  isScrolled
                    ? "bg-card/70 border-border/70"
                    : "bg-background/45 border-white/18",
                )}
              >
                <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none rounded-2xl" />
                <div className="absolute -inset-8 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src="/logo.png"
                  alt={t("companyName")}
                  className={cn(
                    "relative z-10 w-auto transition-all duration-500",
                    isScrolled ? "h-9 md:h-10" : "h-10 md:h-12",
                  )}
                />
              </div>
            </Link>

            <div className="hidden lg:flex flex-1 justify-center">
              <nav
                className={cn(
                  "flex items-center gap-1 rounded-full border backdrop-blur-xl px-2 py-2 shadow-[0_22px_70px_-42px_hsl(var(--foreground)_/_0.55)] relative",
                  isScrolled
                    ? "bg-card/65 border-border/70"
                    : "bg-background/38 border-white/18",
                )}
                aria-label="Primary"
              >
                <div className="absolute inset-0 bg-noise opacity-[0.045] pointer-events-none rounded-full" />
                <div className="absolute inset-0 rounded-full pointer-events-none card-inset opacity-70" />
                {navItems.map((item) => {
                  const active = isActive(item);
                  if (item.children?.length) {
                    return (
                      <div key={item.path} className="relative group/career">
                        <Link
                          to={item.path}
                          className={cn(
                            "relative inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-[13px] font-medium tracking-[0.01em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                            active
                              ? "text-foreground bg-foreground/5 font-semibold"
                              : "text-foreground/70 hover:text-foreground hover:bg-foreground/5",
                          )}
                        >
                          <span className="relative z-10">{item.label}</span>
                          <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                          <span
                            className={cn(
                              "absolute inset-x-4 bottom-1 h-px bg-primary/0 transition-colors duration-300",
                              active
                                ? "bg-primary/70"
                                : "group-hover/career:bg-primary/35",
                            )}
                          />
                        </Link>

                        <div className="absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 min-w-[220px] rounded-2xl border border-border/70 bg-background/85 backdrop-blur-xl p-2 shadow-2xl opacity-0 invisible translate-y-2 group-hover/career:opacity-100 group-hover/career:visible group-hover/career:translate-y-0 group-focus-within/career:opacity-100 group-focus-within/career:visible group-focus-within/career:translate-y-0 transition-all duration-200">
                          <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none rounded-2xl" />
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={cn(
                                "block rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35",
                                location.pathname === child.path
                                  ? "bg-primary text-primary-foreground"
                                  : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground",
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
                        "relative rounded-full px-4 py-2.5 text-[13px] font-medium tracking-[0.01em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        active
                          ? "text-foreground bg-foreground/5 font-semibold"
                          : "text-foreground/70 hover:text-foreground hover:bg-foreground/5",
                      )}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span
                        className={cn(
                          "absolute inset-x-4 bottom-1 h-px bg-primary/0 transition-colors duration-300",
                          active ? "bg-primary/70" : "group-hover:bg-primary/35",
                        )}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>

              <Button
                asChild
                className={cn(
                  "hidden sm:inline-flex group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-[0.02em] shadow-[0_18px_55px_-28px_hsl(var(--primary)_/_0.65)] hover:shadow-[0_22px_70px_-28px_hsl(var(--primary)_/_0.78)] transition-all duration-500 rounded-2xl h-11 px-6",
                )}
              >
                <Link to="/contact" className="relative">
                  <span className="absolute -inset-x-6 -inset-y-3 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.25)_35%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative">{t("cta.contact")}</span>
                </Link>
              </Button>

              <button
                className={cn(
                  "lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl border backdrop-blur-xl transition-all",
                  isScrolled
                    ? "bg-card/70 border-border/70 text-foreground hover:bg-card"
                    : "bg-background/45 border-white/18 text-foreground hover:bg-background/55",
                )}
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
