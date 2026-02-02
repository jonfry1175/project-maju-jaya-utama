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
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" as any },
    },
  };

  return (
    <section
      id="about"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <img 
          src="/assets/images/factory-interior.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background to-transparent" />

      <div className="container mx-auto container-padding relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 border border-primary-subtle shadow-sm">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            {t("section.badge")}
          </div>
          <h2 className="heading-2 text-primary mb-4">
            {t("section.title")}
          </h2>
          <p className="text-body-large text-muted-foreground">
            {t("section.description")}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 max-w-6xl mx-auto">
          <AnimatedSection delay={0.1} direction="left">
            <Card className="card-padding-large card-surface card-inset h-full relative overflow-hidden group">
              <div className="card-accent-line" />
              <div className="card-corner-cut" />
              
              {/* Factory Image */}
              <div className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <img 
                  src="/assets/images/factory-interior.jpg" 
                  alt="" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h3 className="heading-4 text-primary mb-4 relative z-10">{t("profile.title")}</h3>
              <p className="text-body text-muted-foreground mb-6 relative z-10">
                {t("profile.description")}
              </p>
              <motion.div 
                className="grid sm:grid-cols-3 gap-4 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label} 
                    className="text-center"
                    variants={itemVariants}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="icon-medium text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="text-base font-semibold text-foreground">
                      {stat.value}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </AnimatedSection>

          <motion.div 
            className="grid gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={itemVariants}>
              <Card className="card-padding card-surface card-inset card-hover-premium group">
                <div className="card-accent-line" />
                <div className="card-corner-cut" />
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="icon-small text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {t("address.title")}
                    </div>
                    <p className="text-body-small text-muted-foreground">
                      {t("address.value")}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="card-padding card-surface card-inset card-hover-premium group">
                <div className="card-accent-line" />
                <div className="card-corner-cut" />
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="icon-small text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {t("contact.title")}
                    </div>
                    <p className="text-body-small text-muted-foreground">
                      {t("contact.value")}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="card-padding card-surface card-inset card-hover-premium group">
                <div className="card-accent-line" />
                <div className="card-corner-cut" />
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="icon-small text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {t("industry.title")}
                    </div>
                    <p className="text-body-small text-muted-foreground">
                      {t("industry.value")}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
