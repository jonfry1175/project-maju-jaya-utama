import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Handshake, 
  FileSearch, 
  Target, 
  Rocket,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const PartnershipProcessSection = () => {
  const { t } = useTranslation("partners-page");

  const steps = [
    {
      icon: FileSearch,
      title: t("process.steps.step1.title"),
      description: t("process.steps.step1.description"),
      duration: t("process.steps.step1.duration"),
    },
    {
      icon: Handshake,
      title: t("process.steps.step2.title"),
      description: t("process.steps.step2.description"),
      duration: t("process.steps.step2.duration"),
    },
    {
      icon: Target,
      title: t("process.steps.step3.title"),
      description: t("process.steps.step3.description"),
      duration: t("process.steps.step3.duration"),
    },
    {
      icon: Rocket,
      title: t("process.steps.step4.title"),
      description: t("process.steps.step4.description"),
      duration: t("process.steps.step4.duration"),
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary/20">
              <CheckCircle className="icon-small mr-2" />
              {t("process.badge")}
            </div>
            
            <h2 className="heading-2 font-bold text-primary font-display mb-4 leading-tight">
              {t("process.title")}
            </h2>
            
            <p className="text-body-large text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("process.description")}
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <h3 className="heading-5 font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-body text-muted-foreground mb-2 leading-relaxed">
                        {step.description}
                      </p>
                      <span className="inline-flex items-center text-body-small text-primary font-semibold">
                        <ArrowRight className="icon-small mr-1" />
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center relative z-10 border-strong border-primary/10">
                      <step.icon className="icon-large text-primary" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-body-small z-20">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content (other side) */}
                  <div className="flex-1 hidden lg:block">
                    {/* Empty space for alternating layout */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block card-padding bg-white rounded-2xl">
              <h3 className="heading-6 font-bold text-foreground mb-2">
                {t("process.cta.title")}
              </h3>
              <p className="text-body text-muted-foreground mb-4">
                {t("process.cta.description")}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                {t("process.cta.button")}
                <ArrowRight className="ml-2 icon-small" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipProcessSection;