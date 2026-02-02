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
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section
      id="products"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Premium Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-industrial opacity-[0.15]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--primary)/0.05) 0%, transparent 50%),
                             radial-gradient(circle at 80% 70%, hsl(var(--accent)/0.05) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto container-padding max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <AnimatedSection className="max-w-2xl text-left m-0">
            <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-primary/80">
                {t("section.badge")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6">
              {t("section.title")}
            </h2>
            <p className="text-body-large text-muted-foreground max-w-xl">
              {t("section.description")}
            </p>
          </AnimatedSection>
          
          <div className="hidden lg:block pb-2">
             <div className="flex items-center space-x-4 text-primary font-mono text-sm uppercase tracking-tighter opacity-50">
               <span>01. Manufacturing</span>
               <div className="w-12 h-px bg-primary/30" />
               <span>02. Excellence</span>
             </div>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item, index) => (
            <motion.div 
              key={item.title} 
              variants={cardVariants}
              className={`${index % 2 === 1 ? 'lg:translate-y-12' : ''}`}
            >
              <Card
                className="group relative h-full bg-card/40 backdrop-blur-md border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-500 rounded-2xl shadow-2xl"
              >
                {/* Product Image with sophisticated overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={productImages[index % productImages.length]} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Vertical Number */}
                  <div className="absolute top-6 left-6 overflow-hidden">
                    <span className="block font-display text-4xl font-bold text-white/20 group-hover:text-primary/40 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="p-8 relative">
                  <div className="w-8 h-1 bg-primary mb-6 transition-all duration-500 group-hover:w-full" />
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Decorative corner element */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-primary/5 -mr-6 -mb-6 rotate-45 group-hover:bg-primary/10 transition-colors" />
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

export default ServicesSection;
