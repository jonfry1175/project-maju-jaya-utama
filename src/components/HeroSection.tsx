import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Factory, MapPin, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { t } = useTranslation("hero");
  const easing: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

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
      className="relative min-h-screen overflow-hidden bg-background pt-24 pb-16 flex items-center"
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
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-grid-industrial opacity-[0.12]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="container mx-auto container-padding relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-12 items-center">
          <motion.div
            className="space-y-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
              variants={itemVariants}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/80 font-semibold">
                {t("badge")}
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
          </motion.div>

          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute -top-20 -right-14 h-56 w-56 rounded-full bg-primary/10 blur-[80px]" />
            <div className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-accent/10 blur-[80px]" />

            <div className="grid gap-5 relative">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className={index === 1 ? "lg:translate-x-8" : ""}
                >
                  <Card className="group rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 lg:p-7 transition-all duration-500 hover:border-primary/40">
                    <div className="flex items-center gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-transform duration-500 group-hover:scale-105">
                        <stat.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-1">
                          {stat.label}
                        </div>
                        <div className="text-xl sm:text-2xl font-display font-bold text-foreground">
                          {stat.value}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
