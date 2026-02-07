import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Factory, MapPin, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { t } = useTranslation("hero");
  const easing: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

  const chipsRaw = t("chips", { returnObjects: true });
  const chips = Array.isArray(chipsRaw) ? (chipsRaw as string[]) : [];

  const stats = [
    {
      icon: Users,
      label: t("stats.employees.label"),
      value: t("stats.employees.value"),
    },
    {
      icon: Factory,
      label: t("stats.industry.label"),
      value: t("stats.industry.value"),
    },
    {
      icon: MapPin,
      label: t("stats.location.label"),
      value: t("stats.location.value"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easing },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden bg-background pt-28 pb-16 flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/hero-manufacturing-v2.png"
          className="h-full w-full object-cover scale-105"
        >
          <source src="/assets/videos/hero-maju.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-dot-pattern opacity-[0.35]" />
        <div className="absolute inset-0 bg-noise opacity-[0.035] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/55 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/35 via-transparent to-background/25" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/85 to-transparent pointer-events-none" />

      <div className="container mx-auto container-padding relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
          <motion.div
            className="space-y-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md shadow-soft"
              variants={itemVariants}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-foreground/85 font-semibold">
                {t("badge")}
              </span>
              <span className="hidden sm:inline text-[11px] font-mono uppercase tracking-[0.22em] text-white/45">
                {"//"}
              </span>
              <span className="hidden sm:inline text-[11px] font-mono uppercase tracking-[0.22em] text-white/70">
                {t("stats.location.value")}
              </span>
            </motion.div>

            <motion.div className="space-y-5" variants={itemVariants}>
              <h1 className="heading-1 max-w-3xl text-foreground">
                {t("title")}
                <span className="mt-2 block italic text-primary">
                  {t("titleHighlight")}
                </span>
              </h1>
              <p className="text-body-large text-muted-foreground max-w-2xl">
                {t("description")}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-display font-semibold bg-primary hover:bg-primary/90 text-primary-foreground button-glow"
              >
                <Link to="/contact">
                  {t("cta.primary")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base font-display border-white/25 bg-white/10 hover:bg-white/20 text-foreground backdrop-blur-md"
              >
                <Link to="/services">{t("cta.secondary")}</Link>
              </Button>
            </motion.div>

            {chips.length ? (
              <motion.div
                className="flex flex-wrap gap-2 pt-2"
                variants={itemVariants}
              >
                {chips.slice(0, 6).map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-white/80 backdrop-blur-md"
                  >
                    {chip}
                  </span>
                ))}
              </motion.div>
            ) : null}
          </motion.div>

          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute -top-20 -right-14 h-56 w-56 rounded-full bg-primary/10 blur-[80px]" />
            <div className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-accent/10 blur-[80px]" />

            <motion.div variants={itemVariants} className="relative">
              <Card className="relative overflow-hidden rounded-[2rem] border border-white/18 bg-white/10 backdrop-blur-xl p-7 lg:p-8 shadow-strong">
                <div className="card-noise opacity-10" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-accent/30 to-transparent" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/60">
                        {t("stats.industry.label")}
                      </div>
                      <div className="mt-2 text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                        {t("stats.industry.value")}
                      </div>
                    </div>
                    <div className="relative shrink-0">
                      <div className="h-20 w-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm grid place-items-center">
                        <div className="h-14 w-14 rounded-full border border-accent/40 bg-accent/10 grid place-items-center">
                          <span className="font-mono text-xs font-semibold tracking-[0.22em] text-accent">
                            QC
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full border border-white/10 rotate-12" />
                    </div>
                  </div>

                  <div className="mt-7 space-y-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/5 px-5 py-4 hover:border-primary/30 transition-colors"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                          <stat.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/55">
                            {stat.label}
                          </div>
                          <div className="mt-1 text-base sm:text-lg font-semibold text-white truncate">
                            {stat.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-white/25 to-transparent" />
                    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/60">
                      {t("badge")}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-l from-white/25 to-transparent" />
                  </div>
                </div>
              </Card>

              <div className="pointer-events-none absolute -left-5 -bottom-5 h-24 w-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm rotate-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
