import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import PartnershipSection from "@/components/PartnershipSection";
// import OurExpertiseSection from "@/components/OurExpertiseSection";
import PartnershipBenefitsSection from "@/components/PartnershipBenefitsSection";
import OurClientsSection from "@/components/OurClientsSection";
import PartnershipProcessSection from "@/components/PartnershipProcessSection";
import PartnershipFAQSection from "@/components/PartnershipFAQSection";
import { Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";

const OurPartnership = () => {
  const { t } = useTranslation(['our-partnership', 'about']);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Our Clients - Partner Perusahaan IPO"
        description="Lihat daftar klien dan mitra strategis Global Sinergi Kapital. Kami telah membantu berbagai perusahaan dari berbagai sektor untuk sukses go public di Bursa Efek Indonesia."
        keywords="klien IPO, partner IPO, perusahaan go public, success story IPO, portofolio klien, mitra strategis"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
              <Building2 className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              {t('our-partnership:hero.badge')}
            </div> */}
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display mb-4 sm:mb-6 leading-tight">
              {t('our-partnership:hero.title')}
              <span className="text-gradient">
                {t('our-partnership:hero.titleHighlight')}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t('our-partnership:hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* RITZ Partnership Section - Removed */}
      {/* <PartnershipSection /> */}

      {/* Our Clients Section */}
      <OurClientsSection />

      {/* Our Main Clients Section - Removed */}

      {/* Partnership Benefits Section */}
      <PartnershipBenefitsSection />

      {/* Our Expertise Section */}
      {/* <OurExpertiseSection /> */}

      {/* Partnership Process Section */}
      <PartnershipProcessSection />

      {/* Partnership FAQ Section */}
      <PartnershipFAQSection />

      <Footer />
    </div>
  );
};

export default OurPartnership; 