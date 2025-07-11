import { Card } from "@/components/ui/card";
import { Users, Building, Globe, Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";

const OurPartnershipSection = () => {
  const { t } = useTranslation("partners-page");

  const partnerships = [
    {
      icon: Building,
      title: t("ourPartnership.items.institutional.title"),
      description: t("ourPartnership.items.institutional.description"),
      partners: t("ourPartnership.items.institutional.partners", { returnObjects: true }) as string[],
    },
    {
      icon: Globe,
      title: t("ourPartnership.items.international.title"),
      description: t("ourPartnership.items.international.description"),
      partners: t("ourPartnership.items.international.partners", { returnObjects: true }) as string[],
    },
    {
      icon: Handshake,
      title: t("ourPartnership.items.strategic.title"),
      description: t("ourPartnership.items.strategic.description"),
      partners: t("ourPartnership.items.strategic.partners", { returnObjects: true }) as string[],
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary/20">
              <Users className="icon-small mr-2" />
              {t("ourPartnership.badge")}
            </div>
            
            <h2 className="heading-2 font-bold text-primary font-display mb-4 leading-tight">
              {t("ourPartnership.title")}
            </h2>
            
            <p className="text-body-large text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("ourPartnership.description")}
            </p>
          </div>

          {/* Partnership Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="card-padding hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <partnership.icon className="icon-medium text-primary" />
                </div>
                
                <h3 className="heading-6 font-bold text-foreground mb-3">
                  {partnership.title}
                </h3>
                
                <p className="text-body-small text-muted-foreground mb-4 leading-relaxed">
                  {partnership.description}
                </p>
                
                <div className="space-y-2">
                  {partnership.partners.map((partner, idx) => (
                    <div key={idx} className="flex items-start text-body-small">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{partner}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartnershipSection;