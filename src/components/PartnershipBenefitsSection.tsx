import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Zap, 
  Globe, 
  Award,
  Briefcase,
  HeartHandshake
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const PartnershipBenefitsSection = () => {
  const { t } = useTranslation("partners-page");

  const benefits = [
    {
      icon: TrendingUp,
      title: t("benefits.items.growth.title"),
      description: t("benefits.items.growth.description"),
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Shield,
      title: t("benefits.items.security.title"),
      description: t("benefits.items.security.description"),
      color: "text-info",
      bgColor: "bg-info/10",
    },
    {
      icon: Users,
      title: t("benefits.items.network.title"),
      description: t("benefits.items.network.description"),
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Zap,
      title: t("benefits.items.innovation.title"),
      description: t("benefits.items.innovation.description"),
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Globe,
      title: t("benefits.items.global.title"),
      description: t("benefits.items.global.description"),
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Award,
      title: t("benefits.items.excellence.title"),
      description: t("benefits.items.excellence.description"),
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-accent/20 text-accent px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-accent/30">
              <HeartHandshake className="icon-small mr-2" />
              {t("benefits.badge")}
            </div>
            
            <h2 className="heading-2 font-bold text-primary font-display mb-4 leading-tight">
              {t("benefits.title")}
              <span className="text-gradient block mt-2">
                {t("benefits.titleHighlight")}
              </span>
            </h2>
            
            <p className="text-body-large text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("benefits.description")}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-padding h-full hover:shadow-xl transition-all duration-300 group hover:scale-105 border-medium hover:border-primary/20">
                  <div className={`w-14 h-14 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className={`icon-medium ${benefit.color}`} />
                  </div>
                  
                  <h3 className="heading-6 font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-body-small text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center card-padding bg-card rounded-2xl shadow-lg border border-subtle">
              <Briefcase className="icon-large text-primary mr-4" />
              <div className="text-left">
                <h3 className="heading-6 font-bold text-foreground mb-1">
                  {t("benefits.cta.title")}
                </h3>
                <p className="text-body-small text-muted-foreground">
                  {t("benefits.cta.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipBenefitsSection;