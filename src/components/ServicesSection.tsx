import { MotionSection } from "@/components/MotionSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/services";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type ServicesSectionProps = {
  limit?: number;
};

const ServicesSection = ({ limit }: ServicesSectionProps) => {
  const { t, i18n } = useTranslation(["services", "common"]);
  const prefersReduced = useReducedMotion();

  const localizedItems = t("services:items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const localizedServices = services.map((service, index) => ({
    ...service,
    localizedTitle: localizedItems[index]?.title ?? service.title,
    localizedDescription:
      localizedItems[index]?.description ?? service.shortDescription,
  }));

  const visibleServices =
    typeof limit === "number"
      ? localizedServices.slice(0, Math.max(limit, 1))
      : localizedServices;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 },
    },
  };

  const item = {
    hidden: { y: 16, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 180, damping: 18 },
    },
  };

  return (
    <MotionSection
      id="services"
      className="section-padding bg-background-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-industrial opacity-[0.1]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      </div>

      <div className="container mx-auto container-padding max-w-7xl relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-14"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={item}
            className="text-accent font-medium text-sm uppercase tracking-[0.16em]"
          >
            {t("services:section.badge")}
          </motion.p>
          <motion.h2 variants={item} className="heading-md mt-3">
            {t("services:section.title")}
          </motion.h2>
          <motion.p variants={item} className="text-body text-muted-foreground mt-4">
            {t("services:section.description")}
          </motion.p>
        </motion.div>

        <motion.div
          key={`${i18n.language}-${visibleServices.length}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {visibleServices.map((service) => (
            <motion.div
              key={`${i18n.language}-${service.slug}`}
              variants={item}
              whileHover={{ y: -4, scale: prefersReduced ? 1 : 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <Card className="group h-full bg-card border-card-border overflow-hidden card-hover">
                <Link
                  to={`/services/${service.slug}`}
                  className="block aspect-[16/10] overflow-hidden"
                  aria-label={`${service.localizedTitle} - ${t("common:learnMore")}`}
                >
                  <img
                    src={service.image}
                    alt={service.localizedTitle}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <CardContent className="p-6 md:p-7">
                  <h3 className="heading-sm text-foreground">
                    {service.localizedTitle}
                  </h3>
                  <p className="mt-3 text-body text-muted-foreground">
                    {service.localizedDescription}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="mt-5 h-auto p-0 text-primary hover:text-primary"
                  >
                    <Link to={`/services/${service.slug}`}>
                      {t("common:learnMore")}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {typeof limit === "number" && localizedServices.length > limit ? (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/services">
                {t("common:viewAll")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        ) : null}
      </div>
    </MotionSection>
  );
};

export default ServicesSection;
