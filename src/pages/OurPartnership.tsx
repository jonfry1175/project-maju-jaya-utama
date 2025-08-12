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
      <section className="relative py-12 sm:py-16 lg:py-20 bg-[url('/handshake.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
              <Building2 className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              {t('our-partnership:hero.badge')}
            </div> */}
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-4 sm:mb-6 leading-tight">
              {t('our-partnership:hero.title')}
              <span className="text-accent">
                {t('our-partnership:hero.titleHighlight')}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t('our-partnership:hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* RITZ Partnership Section - Removed */}
      {/* <PartnershipSection /> */}

      {/* Our Clients Section */}
      <OurClientsSection />

      {/* Affiliate by RITZ Consultant Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Affiliate by RITZ Consultant
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our strategic partnership with RITZ Corpora Indonesia brings additional expertise and trusted client relationships
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {[
                { name: 'Pertamina', logo: '/logologo/pertamina.png', alt: 'Pertamina Logo' },
                { name: 'BNI', logo: '/logologo/bni.png', alt: 'BNI Logo' },
                { name: 'Maybank', logo: '/Sponsor/logo-sponsor-gsk-maybank.jpg', alt: 'Maybank Logo' },
                { name: 'Angkasa Pura II', logo: '/logologo/angkasa.png', alt: 'Angkasa Pura II Logo' },
                { name: 'Bank Mandiri', logo: '/logologo/mandiri.png', alt: 'Bank Mandiri Logo' },
                { name: 'BRI Agro', logo: '/logologo/bri.png', alt: 'BRI Agro Logo' },
                { name: 'Telkomsel', logo: '/logologo/telkomsel.png', alt: 'Telkomsel Logo' },
                { name: 'Pelindo', logo: '/Sponsor/logo-ski-sponsor-pelindo.png', alt: 'Pelindo Logo' },
                { name: 'Tempo Media Group', logo: '/Sponsor/logo-sponsor-gsk-tempo.png', alt: 'Tempo Media Group Logo' },
                { name: 'Alif', logo: '/Sponsor/logo-sponsor-gsk-alif.png', alt: 'Alif Logo' }
              ].map((client, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft border border-subtle text-center hover:shadow-medium transition-all duration-300 group">
                  <div className="flex flex-col items-center justify-center h-20 mb-3">
                    <img 
                      src={client.logo} 
                      alt={client.alt}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="text-sm font-semibold text-foreground">${client.name}</div>`;
                        }
                      }}
                    />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{client.name}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Through our partnership with RITZ Consultant, we extend our reach to serve prestigious clients across diverse sectors, combining our IPO expertise with their comprehensive financial and business consulting services.
              </p>
            </div>
          </div>
        </div>
      </section>

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