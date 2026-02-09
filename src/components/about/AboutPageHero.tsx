import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

type AboutPageHeroStat = {
  label: string;
  value: string;
  icon?: LucideIcon;
};

type AboutPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: AboutPageHeroStat[];
  backgroundImage?: string;
  watermark?: string;
};

type AboutLinkItem = {
  path: string;
  label: string;
  matcher: (pathname: string) => boolean;
};

const AboutPageHero = ({
  eyebrow,
  title,
  description,
  stats = [],
  backgroundImage,
  watermark,
}: AboutPageHeroProps) => {
  const location = useLocation();
  const { t } = useTranslation("header");

  const aboutLinks: AboutLinkItem[] = [
    {
      path: "/about-us/our-company",
      label: t("nav.aboutCompany"),
      matcher: (pathname) => pathname.startsWith("/about-us/our-company"),
    },
    {
      path: "/about-us/our-team",
      label: t("nav.aboutTeam"),
      matcher: (pathname) => pathname.startsWith("/about-us/our-team"),
    },
    {
      path: "/about-us/certifications",
      label: t("nav.aboutCertifications"),
      matcher: (pathname) => pathname.startsWith("/about-us/certifications"),
    },
    {
      path: "/about-us/company-awards",
      label: t("nav.aboutAwards"),
      matcher: (pathname) => pathname.startsWith("/about-us/company-awards"),
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-secondary/95 pt-32 pb-12 text-secondary-foreground">
      <div className="pointer-events-none absolute inset-0">
        {backgroundImage ? (
          <>
            <img
              src={backgroundImage}
              alt=""
              className="h-full w-full object-cover opacity-20"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-secondary/96" />
          </>
        ) : null}
        <div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(255,210,120,0.16),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:36px_36px]" />
        {watermark ? (
          <p className="absolute right-4 bottom-3 text-[9px] font-semibold uppercase tracking-[0.38em] text-white/45 sm:right-8 sm:bottom-5">
            {watermark}
          </p>
        ) : null}
      </div>

      <div className="container mx-auto max-w-6xl container-padding relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-secondary-foreground/80"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          className="mt-5 max-w-4xl heading-lg text-secondary-foreground"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14, ease: "easeOut" }}
          className="mt-4 max-w-3xl text-body text-secondary-foreground/85"
        >
          {description}
        </motion.p>

        {stats.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={`${stat.label}-${stat.value}`}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 text-secondary-foreground/75">
                    {Icon ? <Icon className="h-4 w-4" /> : null}
                    <p className="text-[10px] uppercase tracking-[0.22em]">{stat.label}</p>
                  </div>
                  <p className="mt-2 text-xl font-semibold font-display text-secondary-foreground">{stat.value}</p>
                </div>
              );
            })}
          </motion.div>
        ) : null}

        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center gap-2"
          aria-label={t("accessibility.aboutSectionNavigation")}
        >
          {aboutLinks.map((item) => {
            const active = item.matcher(location.pathname);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                  active
                    ? "border-accent/70 bg-accent text-accent-foreground"
                    : "border-white/20 bg-white/10 text-secondary-foreground/80 hover:bg-white/20"
                )}
              >
                <span>{item.label}</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            );
          })}
        </motion.nav>
      </div>
    </section>
  );
};

export default AboutPageHero;
