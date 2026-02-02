import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const productImages = [
  "/assets/images/products/cardboard-boxes.jpg",
  "/assets/images/products/paper-rolls.jpg",
  "/assets/images/products/packaging-materials.jpg",
  "/assets/images/sustainability.jpg",
];

const ServicesSection = () => {
  const { t } = useTranslation("services");
  const items = t("items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" as any },
    },
  };

  return (
    <section
      id="products"
      className="section-padding bg-gradient-subtle relative overflow-hidden"
    >
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--primary)/0.08) 0%, transparent 40%),
                             radial-gradient(circle at 80% 20%, hsl(var(--accent)/0.08) 0%, transparent 40%)`,
          }}
        />
      </div>

      <div className="container mx-auto container-padding max-w-7xl relative z-10">
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

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((item, index) => (
            <motion.div key={item.title} variants={cardVariants}>
              <Card
                className="card-surface card-inset card-hover-premium group h-full overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={productImages[index % productImages.length]} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Floating Number Badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                <div className="card-padding pt-4">
                  <div className="card-accent-line" />
                  <h3 className="heading-5 text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-body-small text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
