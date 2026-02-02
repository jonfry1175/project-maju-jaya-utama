import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import SectionArt from "@/components/SectionArt";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const FAQSection = () => {
  const { t } = useTranslation("faq");
  const items = t("items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section
      id="faq"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-industrial opacity-[0.05]" />
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      </div>

      <div className="container mx-auto container-padding relative z-10 max-w-5xl">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16 underline-glow">
          <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-primary/80">
              {t("section.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-[1.1] mb-6">
            {t("section.title")}
          </h2>
          <p className="text-body-large text-muted-foreground">
            {t("section.description")}
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`faq-${index}`}
                  className="border border-primary/10 rounded-2xl bg-card/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary/30"
                >
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group">
                    <span className="text-lg font-display font-bold text-foreground group-data-[state=open]:text-primary transition-colors pr-4">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
