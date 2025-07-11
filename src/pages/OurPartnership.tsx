import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnershipSection from "@/components/PartnershipSection";
// import OurExpertiseSection from "@/components/OurExpertiseSection";
import PartnershipBenefitsSection from "@/components/PartnershipBenefitsSection";
import PartnershipProcessSection from "@/components/PartnershipProcessSection";
import PartnershipFAQSection from "@/components/PartnershipFAQSection";
import { Building2, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";

const OurPartnership = () => {
  const { t } = useTranslation(['our-partnership', 'about']);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
              <Building2 className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              Our Partnership
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display mb-4 sm:mb-6 leading-tight">
              Strategic Partners
              <span className="text-gradient block mt-2">
                & Global Expertise
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Building strong partnerships and leveraging our expertise to deliver exceptional IPO consulting services across Indonesia and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* RITZ Partnership Section */}
      <PartnershipSection />

      {/* Our Main Clients Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
                          <Card className="overflow-hidden bg-gradient-to-br from-card to-muted border border-subtle shadow-xl animate-card">
              <div className="card-padding lg:card-padding-large">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                  <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
                    <Users className="icon-small mr-2" />
                    {t("mainClients.badge", { ns: "about" })}
                  </div>

                  <h3 className="heading-3 lg:heading-2 text-primary mb-3 sm:mb-4">
                    {t("mainClients.title", { ns: "about" })}
                  </h3>

                  <p className="text-body lg:text-body-large text-primary/80 font-semibold mb-4 sm:mb-6">
                    {t("mainClients.subtitle", { ns: "about" })}
                  </p>

                  <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
                    <p className="text-body text-muted-foreground">
                      {t("mainClients.description.main", { ns: "about" })}
                    </p>
                    <p className="text-body text-muted-foreground">
                      {t("mainClients.description.secondary", { ns: "about" })}
                    </p>
                  </div>
                </div>

                {/* Client Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center">
                  {/* Row 1 */}
                  <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                    <img
                      src="/logologo/mandiri.png"
                      alt="Mandiri"
                      className="h-12 sm:h-14 lg:h-16 xl:h-18 w-auto max-w-full object-contain opacity-100"
                    />
                  </div>

                  <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                    <img
                      src="/logologo/bni.png"
                      alt="BNI"
                      className="h-12 sm:h-14 lg:h-16 xl:h-18 w-auto max-w-full object-contain opacity-100"
                    />
                  </div>

                  <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                    <img
                      src="/Sponsor/logo-sponsor-gsk-maybank.jpg"
                      alt="Maybank"
                      className="h-10 sm:h-12 lg:h-14 xl:h-16 w-auto max-w-full object-contain opacity-100"
                    />
                  </div>

                  <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                    <img
                      src="/logologo/angkasa.png"
                      alt="Angkasa Pura II"
                      className="h-10 sm:h-12 lg:h-14 xl:h-16 w-auto max-w-full object-contain opacity-100"
                    />
                  </div>

                  <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                    <img
                      src="/logologo/bri.png"
                      alt="BRI Agro"
                      className="h-10 sm:h-12 lg:h-14 xl:h-16 w-auto max-w-full object-contain opacity-100"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                    <img
                      src="/logologo/telkomsel.png"
                      alt="Telkomsel"
                      className="h-12 sm:h-14 lg:h-16 xl:h-18 w-auto max-w-full object-contain opacity-100"
                    />
                  </div>

                  <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                    <img
                      src="/Sponsor/logo-ski-sponsor-pelindo.png"
                      alt="Pelindo"
                      className="h-12 sm:h-14 lg:h-16 xl:h-18 w-auto max-w-full object-contain opacity-100"
                    />
                  </div>

                  <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                    <img
                      src="/Sponsor/logo-sponsor-gsk-tempo.png"
                      alt="Tempo Media Group"
                      className="h-12 sm:h-14 lg:h-16 xl:h-18 w-auto max-w-full object-contain opacity-100"
                    />
                  </div>

                  <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                    <img
                      src="/Sponsor/logo-sponsor-gsk-alif.png"
                      alt="Alif"
                      className="h-12 sm:h-14 lg:h-16 xl:h-18 w-auto max-w-full object-contain opacity-100"
                    />
                  </div>

                  {/* Logo Pertamina */}
                  <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                    <img
                      src="/logologo/pertamina.png"
                      alt="Pertamina"
                      className="h-10 sm:h-12 lg:h-14 xl:h-16 w-auto max-w-full object-contain opacity-100"
                    />
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-border/30">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 text-center">
                    <div className="space-y-1 sm:space-y-2">
                      <div className="heading-4 lg:heading-3 text-primary">
                        10+
                      </div>
                      <div className="text-body-small text-muted-foreground">
                        Major Clients
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="heading-4 lg:heading-3 text-primary">
                        15+
                      </div>
                      <div className="text-body-small text-muted-foreground">
                        Industries Served
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="heading-4 lg:heading-3 text-primary">
                        98%
                      </div>
                      <div className="text-body-small text-muted-foreground">
                        Client Satisfaction
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="heading-4 lg:heading-3 text-primary">
                        24/7
                      </div>
                      <div className="text-body-small text-muted-foreground">
                        Support Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
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