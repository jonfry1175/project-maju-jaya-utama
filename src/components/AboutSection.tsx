import { Card } from "@/components/ui/card";
import { Building2, MapPin, Phone, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const AboutSection = () => {
  const { t } = useTranslation("about");

  const stats = [
    {
      icon: Users,
      label: t("stats.employees.label"),
      value: t("stats.employees.value"),
    },
    {
      icon: Building2,
      label: t("stats.sales.label"),
      value: t("stats.sales.value"),
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as any },
    },
  };

  return (
    <section
      id="about"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-industrial opacity-[0.1]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto container-padding relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <AnimatedSection className="text-left m-0">
              <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-primary/80">
                  {t("section.badge")}
                </span>
              </div>
              <h2 className="heading-1 mb-8">
                {t("section.title")}
              </h2>
              <p className="text-body-large text-muted-foreground leading-relaxed">
                {t("section.description")}
              </p>
            </AnimatedSection>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={itemVariants} className="group">
                  <div className="p-6 bg-card/40 backdrop-blur-md border border-primary/10 rounded-2xl hover:border-primary/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-xl sm:text-2xl font-display font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <AnimatedSection direction="right" className="relative group m-0">
            {/* Main Profile Card */}
            <Card className="relative z-10 overflow-hidden bg-card/60 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl p-10">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <div className="card-noise opacity-10" />
              
              <h3 className="heading-3 mb-6">
                {t("profile.title")}
              </h3>
              <p className="text-body-large text-muted-foreground mb-10">
                {t("profile.description")}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">{t("address.title")}</div>
                    <div className="text-body text-foreground font-semibold leading-snug">{t("address.value")}</div>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">{t("contact.title")}</div>
                    <div className="text-body text-foreground font-semibold leading-snug">{t("contact.value")}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Decorative Image Overlays */}

            
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
