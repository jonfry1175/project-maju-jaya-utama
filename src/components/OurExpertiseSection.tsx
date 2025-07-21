import { Card } from "@/components/ui/card";
import { Brain, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const OurExpertiseSection = () => {
  const { t } = useTranslation("partners-page");

  const expertiseAreas = [
    {
      title: t("ourExpertise.areas.ipo.title"),
      description: t("ourExpertise.areas.ipo.description"),
      features: t("ourExpertise.areas.ipo.features", { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    {
      title: t("ourExpertise.areas.restructuring.title"),
      description: t("ourExpertise.areas.restructuring.description"),
      features: t("ourExpertise.areas.restructuring.features", { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    },
    {
      title: t("ourExpertise.areas.ma.title"),
      description: t("ourExpertise.areas.ma.description"),
      features: t("ourExpertise.areas.ma.features", { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop",
    },
    {
      title: t("ourExpertise.areas.capitalMarkets.title"),
      description: t("ourExpertise.areas.capitalMarkets.description"),
      features: t("ourExpertise.areas.capitalMarkets.features", { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary/20">
              <Brain className="icon-small mr-2" />
              {t("ourExpertise.badge")}
            </div>
            
            <h2 className="heading-2 font-bold text-primary font-display mb-4 leading-tight">
              {t("ourExpertise.title")}
            </h2>
            
            <p className="text-body-large text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("ourExpertise.description")}
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-5 h-full">
                  {/* Image */}
                  <div className="lg:col-span-2 h-48 lg:h-full">
                    <img 
                      src={area.image} 
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-3 card-padding">
                    <h3 className="heading-5 font-bold text-foreground mb-3">
                      {area.title}
                    </h3>
                    
                    <p className="text-body-small text-muted-foreground mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {area.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-body-small">
                          <CheckCircle className="icon-small text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-body-small">
              {t("ourExpertise.cta")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertiseSection;