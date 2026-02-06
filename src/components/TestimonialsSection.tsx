import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t, i18n } = useTranslation("sustainability");
  const items = t("items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="sustainability"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-industrial opacity-[0.05]" />
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto container-padding relative z-10 max-w-7xl">
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-primary/80">
              {t("section.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            {t("section.title")}
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            {t("section.description")}
          </p>
        </AnimatedSection>

        <motion.div 
          key={i18n.language}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item, index) => (
            <motion.div key={`${i18n.language}-${index}`} variants={cardVariants}>
              <Card
                className="group relative h-full bg-card/40 backdrop-blur-md border border-primary/10 p-10 rounded-3xl hover:border-primary/30 transition-all duration-500 shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="text-4xl font-display font-bold text-primary/10 mb-6 group-hover:text-primary/20 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
                
                {/* Decorative Pattern */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
