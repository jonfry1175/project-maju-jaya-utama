import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeDropdownTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
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
      {
        label: t("nav.career"),
        path: "/career/employee",
        matcher: (pathname) => pathname.startsWith("/career"),
        children: [
          { label: t("nav.careerEmployee"), path: "/career/employee" },
          { label: t("nav.careerIntern"), path: "/career/intern" },
        ],
      },
      { label: t("nav.sustainability"), path: "/news" },
      { label: t("nav.contact"), path: "/contact" },
    ],
    [t],
  );

  const isActive = (item: NavItem) => {
    if (item.matcher) return item.matcher(location.pathname);
    return location.pathname === item.path;
  };

  const navPillClass = (active: boolean, open = false) =>
    cn(
      "group relative isolate inline-flex items-center rounded-full",
      "py-1.5 px-1.5 xl:px-1.5 2xl:px-3",
      "text-[13px] 2xl:text-[15px] font-medium tracking-[0.004em] whitespace-nowrap leading-none",
      "transition-[color,background-color,box-shadow,border-color] duration-300",
      "ring-1 ring-transparent",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      active || open
        ? cn(
            "text-foreground font-semibold",
            "bg-foreground/[0.055] ring-primary/25",
            "shadow-[0_18px_55px_-46px_hsl(var(--primary)_/_0.70)]",
            "before:absolute before:inset-0 before:rounded-full before:pointer-events-none",
            "before:bg-[radial-gradient(140%_120%_at_20%_0%,hsl(var(--primary)_/_0.18)_0%,transparent_60%)] before:opacity-100",
            "after:absolute after:left-3 after:right-3 after:top-1.5 after:h-px after:pointer-events-none",
            "after:bg-gradient-to-r after:from-white/70 after:via-white/25 after:to-transparent after:opacity-80",
          )
        : cn(
            "text-foreground/70",
            "hover:text-foreground hover:bg-foreground/[0.045] hover:ring-border/45",
            "hover:shadow-[0_14px_40px_-44px_hsl(var(--foreground)_/_0.65)]",
            "before:absolute before:inset-0 before:rounded-full before:pointer-events-none",
            "before:bg-[radial-gradient(140%_120%_at_20%_0%,hsl(var(--primary)_/_0.12)_0%,transparent_60%)] before:opacity-0",
            "hover:before:opacity-100",
          ),
    );

  const navUnderlineClass = (active: boolean, open = false) =>
    cn(
      "absolute left-3 right-3 bottom-0 rounded-full",
      "bg-gradient-to-r from-primary via-primary to-accent/70 origin-left",
      "transition-transform duration-300",
      active || open
        ? "scale-x-100 h-[3px] shadow-[0_10px_24px_-14px_hsl(var(--primary)_/_0.95)]"
        : "scale-x-0 h-[2px] group-hover:scale-x-100",
    );

  const clearCloseTimer = () => {
    if (closeDropdownTimer.current) {
      window.clearTimeout(closeDropdownTimer.current);
      closeDropdownTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeDropdownTimer.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 260);
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

        <div className="container mx-auto container-padding relative z-10 max-w-[90rem]">
          <div
            className={cn(
              "relative mx-auto flex items-center justify-between gap-2 xl:gap-2.5 rounded-[2rem] border px-4 xl:px-4.5 py-3 bg-white shadow-[0_22px_70px_-50px_hsl(var(--foreground)_/_0.45)]",
              isScrolled
                ? "border-border/70 shadow-[0_22px_70px_-48px_hsl(var(--foreground)_/_0.55)]"
                : "border-border/60",
            )}
          >
            <div className="absolute inset-0 bg-noise opacity-[0.045] pointer-events-none rounded-[2rem]" />
            <div className="absolute inset-0 pointer-events-none rounded-[2rem] card-inset opacity-70" />

            <Link
              to="/"
              className="group relative flex items-center gap-3 select-none shrink-0"
            >
              <div className="pointer-events-none absolute -inset-10 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src="/logo.png"
                alt={t("companyName")}
                className={cn(
                  "relative z-10 w-auto object-contain transition-all duration-300",
                  "h-10 sm:h-11 md:h-12",
                  "max-w-[170px] sm:max-w-[200px] md:max-w-[220px] xl:max-w-[185px] 2xl:max-w-[240px]",
                )}
              />
            </Link>

            <div className="hidden xl:flex flex-1 justify-center min-w-0">
              <div className="relative max-w-full">
                <nav
                  className={cn(
                    "flex items-center gap-0 px-1 2xl:px-4",
                  )}
                  aria-label={t("accessibility.primaryNavigation")}
                >
                {navItems.map((item) => {
                  const active = isActive(item);
                  if (item.children?.length) {
                    const open = openDropdown === item.path;
                    return (
                      <PopoverPrimitive.Root
                        key={item.path}
                        open={openDropdown === item.path}
                        onOpenChange={(nextOpen) =>
                          setOpenDropdown(nextOpen ? item.path : null)
                        }
                      >
                        <div
                          className="relative"
                          onMouseEnter={() => {
                            clearCloseTimer();
                            setOpenDropdown(item.path);
                          }}
                          onMouseLeave={() => {
                            scheduleClose();
                          }}
                        >
                          <PopoverPrimitive.Anchor asChild>
                            <div className={navPillClass(active, open)}>
                              <Link
                                to={item.path}
                                className={cn(
                                  "relative z-10 px-1.5",
                                  "rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                )}
                                aria-current={active ? "page" : undefined}
                              >
                                {item.label}
                              </Link>

                              <PopoverPrimitive.Trigger asChild>
                                <button
                                  type="button"
                                  className={cn(
                                    "relative z-10 ml-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full",
                                    "text-foreground/55 group-hover:text-foreground/85",
                                    "hover:text-foreground hover:bg-transparent",
                                    "transition-colors duration-200",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35",
                                    "data-[state=open]:bg-transparent data-[state=open]:text-foreground",
                                    "data-[state=open]:[&>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-200",
                                  )}
                                  aria-label={`${item.label} menu`}
                                  aria-expanded={open}
                                >
                                  <ChevronDown className="h-4 w-4 opacity-70" />
                                </button>
                              </PopoverPrimitive.Trigger>

                              <span className={navUnderlineClass(active, open)} />
                            </div>
                          </PopoverPrimitive.Anchor>

                              <PopoverPrimitive.Portal>
                                <PopoverPrimitive.Content
                                  align="center"
                                  side="bottom"
                                  sideOffset={12}
                                  onOpenAutoFocus={(e) => e.preventDefault()}
                                  className={cn(
                                    "relative min-w-[280px] rounded-2xl border border-border/70 bg-white/95 shadow-[0_30px_90px_-55px_hsl(var(--foreground)_/_0.85)] outline-none backdrop-blur-xl",
                                    "data-[state=open]:animate-in data-[state=closed]:animate-out",
                                    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                                    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                                    "data-[side=bottom]:slide-in-from-top-2",
                                  )}
                                  onMouseEnter={() => {
                                    clearCloseTimer();
                                    setOpenDropdown(item.path);
                                  }}
                                  onMouseLeave={() => {
                                    scheduleClose();
                                  }}
                                >
                                  <div className="absolute inset-0 bg-noise opacity-[0.035] pointer-events-none rounded-2xl" />
                                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/70 via-accent/30 to-transparent" />
                                  <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

                                  <div className="relative rounded-2xl overflow-hidden">
                                    <div className="px-4 pt-3 pb-2">
                                      <div className="flex items-center justify-between gap-3">
                                        <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.26em] text-foreground/55">
                                          {item.label}
                                        </p>
                                        <Link
                                          to={item.path}
                                          onClick={() => setOpenDropdown(null)}
                                          className={cn(
                                            "inline-flex items-center justify-center h-8 w-8 rounded-xl",
                                            "text-foreground/55 hover:text-foreground hover:bg-foreground/[0.04]",
                                            "transition-colors duration-200",
                                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                                          )}
                                          aria-label={`${item.label} overview`}
                                        >
                                          <ArrowUpRight className="h-4 w-4" />
                                        </Link>
                                      </div>
                                    </div>

                                    <div className="mx-3 h-px bg-gradient-to-r from-border/50 via-border to-transparent" />

                                    <div className="p-2">
                                      {item.children.map((child) => {
                                        const childActive =
                                          location.pathname === child.path;
                                        return (
                                          <Link
                                            key={child.path}
                                            to={child.path}
                                            onClick={() => setOpenDropdown(null)}
                                            className={cn(
                                              "group relative isolate flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[14px] font-semibold outline-none",
                                              "transition-colors duration-200",
                                              "focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                                              childActive
                                                ? "bg-primary/10 text-foreground ring-1 ring-primary/20"
                                                : "text-foreground/80 hover:bg-foreground/[0.04] hover:text-foreground focus-visible:bg-foreground/[0.04] focus-visible:text-foreground",
                                            )}
                                          >
                                            <span
                                              className={cn(
                                                "pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200",
                                                "bg-[radial-gradient(120%_120%_at_20%_0%,rgba(255,80,0,0.12)_0%,transparent_55%)]",
                                                childActive
                                                  ? "opacity-100"
                                                  : "group-hover:opacity-100 group-focus-visible:opacity-100",
                                              )}
                                            />

                                            <span
                                              className={cn(
                                                "relative h-2 w-2 rounded-full transition-colors",
                                                childActive
                                                  ? "bg-primary"
                                                  : "bg-border group-hover:bg-primary/70 group-focus-visible:bg-primary/70",
                                              )}
                                            />
                                            <span className="relative flex-1">
                                              {child.label}
                                            </span>
                                            <ChevronRight
                                              className={cn(
                                                "relative h-4 w-4",
                                                "text-foreground/45 opacity-0 -translate-x-1 transition-all duration-200",
                                                "group-hover:opacity-100 group-hover:translate-x-0",
                                                "group-focus-visible:opacity-100 group-focus-visible:translate-x-0",
                                                childActive
                                                  ? "opacity-100 translate-x-0 text-primary"
                                                  : null,
                                              )}
                                            />
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </PopoverPrimitive.Content>
                              </PopoverPrimitive.Portal>
                        </div>
                      </PopoverPrimitive.Root>
                    );
                  }

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={navPillClass(active)}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className={navUnderlineClass(active)} />
                    </Link>
                  );
                })}
                </nav>
              </div>
            </div>

            <div className="flex items-center gap-2 xl:gap-2.5 shrink-0">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>

              <Button
                asChild
                className={cn(
                  "hidden sm:inline-flex group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground text-[14px] 2xl:text-[16px] font-semibold tracking-[0.01em] shadow-[0_18px_55px_-28px_hsl(var(--primary)_/_0.65)] hover:shadow-[0_22px_70px_-28px_hsl(var(--primary)_/_0.78)] transition-all duration-500 rounded-2xl h-11 2xl:h-12 px-4 xl:px-4 2xl:px-6 whitespace-nowrap",
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
