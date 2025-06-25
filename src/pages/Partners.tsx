import Header from "@/components/Header";
import PartnershipSection from "@/components/PartnershipSection";
import OurPartnershipSection from "@/components/OurPartnershipSection";
import OurExpertiseSection from "@/components/OurExpertiseSection";
import Footer from "@/components/Footer";
import { Building } from "lucide-react";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation('partners-page');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
              <Building className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              {t('hero.badge')}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display mb-4 sm:mb-6 leading-tight">
              {t('hero.title')}
              <span className="text-gradient block mt-2">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      <PartnershipSection />
      <OurPartnershipSection />
      <OurExpertiseSection />
      
      <Footer />
    </div>
  );
};

export default Partners;