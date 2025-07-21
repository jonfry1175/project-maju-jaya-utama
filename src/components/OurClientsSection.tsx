import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import LazyImage from "@/components/LazyImage";

const OurClientsSection = () => {
  const { t } = useTranslation("about");

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary/20">
              <Building2 className="icon-small mr-2" />
              {t("mainClients.badge")}
            </div>
            
            <h2 className="heading-2 font-bold text-primary font-display mb-4 leading-tight">
              {t("mainClients.title")}
            </h2>
            
            <p className="text-body-large text-primary/80 font-semibold mb-3 sm:mb-4">
              {t("mainClients.subtitle")}
            </p>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-body text-muted-foreground leading-relaxed">
                {t("mainClients.description.main")}
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                {t("mainClients.description.secondary")}
              </p>
            </div>
          </div>

          {/* Client Logo Section */}
          <div className="flex justify-center">
            <Card className="card-padding bg-white border border-subtle hover:shadow-xl transition-all duration-300 group hover:scale-105 border-medium hover:border-primary/20">
              <div className="flex items-center justify-center">
                <LazyImage
                  src="/logologo/pandu-logistic.png"
                  alt="Pandu Logistic"
                  className="h-24 sm:h-32 lg:h-36 w-auto max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Card>
          </div>

          {/* Additional Context */}
          <div className="mt-8 text-center">
            <div className="inline-block card-padding bg-muted/30 rounded-2xl">
              <p className="text-body-small text-muted-foreground">
                Trusted partnership in logistics and transportation excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;