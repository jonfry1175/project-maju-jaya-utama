import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const PartnerLogosSection = () => {
  const { t, i18n } = useTranslation("capabilities");
  const items = t("items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="capabilities"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-grid-industrial opacity-[0.08]" />
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      </div>

      <div className="container mx-auto container-padding max-w-7xl relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/80">
              {t("section.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            {t("section.title")}
          </h2>
          <p className="text-body-large text-muted-foreground">
            {t("section.description")}
          </p>
        </AnimatedSection>

        <motion.div 
          key={i18n.language}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item, index) => (
            <motion.div key={`${i18n.language}-${index}`} variants={cardVariants}>
              <Card
                className="group relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 p-8 rounded-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-xl"
              >
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -mr-12 -mt-12 rounded-full group-hover:bg-primary/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-display font-bold mb-6 group-hover:scale-110 transition-transform duration-500">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Bottom Line Accent */}
                <div className="absolute bottom-0 left-0 h-1 bg-primary/0 group-hover:bg-primary transition-all duration-500 w-0 group-hover:w-full" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;
