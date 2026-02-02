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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" as any },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" as any },
    },
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/assets/images/hero-manufacturing-v2.png" 
          alt="Paper Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Paper Elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-16 h-20 bg-white/20 rounded-sm shadow-lg backdrop-blur-sm rotate-12"
        animate={{ 
          y: [0, -20, 0],
          rotate: [12, 15, 12],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/6 w-12 h-16 bg-white/15 rounded-sm shadow-lg backdrop-blur-sm -rotate-6"
        animate={{ 
          y: [0, -15, 0],
          rotate: [-6, -10, -6],
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M60 0H0V60' fill='none' stroke='rgba(0,0,0,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto container-padding section-padding relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center bg-white/90 text-primary px-4 py-2 rounded-full text-body-small font-semibold border border-primary/20 shadow-sm backdrop-blur-sm"
              variants={itemVariants}
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              {t("badge")}
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="heading-1 text-primary">
                {t("title")}
                <span className="text-gradient block mt-3">
                  {t("titleHighlight")}
                </span>
              </h1>
              <p className="text-body-large text-muted-foreground max-w-2xl">
                {t("description")}
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="btn-gradient-brand shadow-brand text-body font-semibold px-6 sm:px-8 py-4 h-auto group relative overflow-hidden"
                onClick={scrollToContact}
              >
                <span className="relative z-10 flex items-center">
                  {t("cta.primary")}
                  <ArrowRight className="ml-2 icon-small group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-body font-semibold px-6 sm:px-8 py-4 h-auto border-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-all"
                onClick={scrollToContact}
              >
                {t("cta.secondary")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statsVariants}
                transition={{ delay: 0.3 + index * 0.15 }}
              >
                <Card
                  className="card-padding card-surface card-inset card-hover-premium bg-white/90 backdrop-blur-sm group"
                >
                  <div className="card-accent-line" />
                  <div className="card-corner-cut" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="icon-medium text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        {stat.value}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
