import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Factory, MapPin, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useTranslation("hero");
  const scrollToContact = () => {
    const section = document.querySelector("#contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as any },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/hero-manufacturing-v2.png" 
          alt="Paper Manufacturing"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-grid-industrial opacity-[0.1]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="container mx-auto container-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-2xl"
              variants={itemVariants}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/80 font-semibold">
                {t("badge")}
              </span>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[1.05] tracking-tight">
                {t("title")}
                <span className="block italic text-primary mt-2">
                  {t("titleHighlight")}
                </span>
              </h1>
              <p className="text-body-large text-muted-foreground max-w-xl leading-relaxed">
                {t("description")}
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="h-16 px-10 text-lg font-display font-semibold transition-all duration-500 bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(255,65,27,0.3)] hover:shadow-[0_0_50px_rgba(255,65,27,0.5)] group relative overflow-hidden"
                onClick={scrollToContact}
              >
                <span className="relative z-10 flex items-center">
                  {t("cta.primary")}
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-10 text-lg font-display font-semibold border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500"
                onClick={scrollToContact}
              >
                {t("cta.secondary")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Visual Element: Industrial Pattern */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

            <div className="grid gap-6 relative">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className={`${index === 1 ? 'lg:translate-x-12' : ''}`}
                >
                  <Card
                    className="group border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl hover:border-primary/40 transition-all duration-500"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <stat.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-1">
                          {stat.label}
                        </div>
                        <div className="text-3xl font-display font-bold text-foreground">
                          {stat.value}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 hidden md:block">
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="flex flex-col items-center space-y-2"
               >
                 <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-muted-foreground">Discover</span>
                 <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
