import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const PartnerLogosSection = () => {
  const { t } = useTranslation("partners-page");

  // Placeholder partner logos - replace with actual partner logos
  const partners = [
    { name: "BNI", logo: "/partners/bni.png" },
    { name: "Bank Mandiri", logo: "/partners/mandiri.png" },
    { name: "BCA", logo: "/partners/bca.png" },
    { name: "CIMB Niaga", logo: "/partners/cimb.png" },
    { name: "Bank BTN", logo: "/partners/btn.png" },
    { name: "Bank Danamon", logo: "/partners/danamon.png" },
    { name: "Panin Bank", logo: "/partners/panin.png" },
    { name: "Bank Permata", logo: "/partners/permata.png" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary/20">
              <Award className="icon-small mr-2" />
              {t("partnerLogos.badge")}
            </div>
            
            <h2 className="heading-2 font-bold text-primary font-display mb-4 leading-tight">
              {t("partnerLogos.title")}
            </h2>
            
            <p className="text-body-large text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("partnerLogos.description")}
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-muted rounded-xl card-padding flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-subtle"
              >
                <div className="relative w-full h-20">
                  {/* Placeholder for logo - replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-full h-12 bg-border rounded mb-2 group-hover:bg-primary/10 transition-colors"></div>
                      <p className="text-body-small text-muted-foreground font-medium">{partner.name}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="heading-3 font-bold text-primary mb-2">50+</h3>
              <p className="text-body-small text-muted-foreground">{t("partnerLogos.stats.partners")}</p>
            </div>
            <div className="text-center">
              <h3 className="heading-3 font-bold text-primary mb-2">15+</h3>
              <p className="text-body-small text-muted-foreground">{t("partnerLogos.stats.years")}</p>
            </div>
            <div className="text-center">
              <h3 className="heading-3 font-bold text-primary mb-2">100%</h3>
              <p className="text-body-small text-muted-foreground">{t("partnerLogos.stats.satisfaction")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;