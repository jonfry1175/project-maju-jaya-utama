import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import {
  Target,
  Award,
  Building,
  Briefcase,
  Trophy,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  const { t } = useTranslation("about");

  const roadmap = [
    {
      step: "1",
      titleKey: "mapping",
      route: "/ipo-process/mapping",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Business analysis and mapping
    },
    {
      step: "2",
      titleKey: "scenario",
      route: "/ipo-process/scenario-plans",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", // Strategic planning and scenarios
    },
    {
      step: "3",
      titleKey: "proforma",
      route: "/ipo-process/proforma-financial-report",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop", // Financial reports and analysis
    },
    {
      step: "4",
      titleKey: "management",
      route: "/ipo-process/management-improvement-plans",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop", // Team management and improvement
    },
    {
      step: "5",
      titleKey: "bridging",
      route: "/ipo-process/bridging-financing",
      image:
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=600&fit=crop", // People connecting/celebrating representing bridging partnerships
    },
    {
      step: "6",
      titleKey: "compliance",
      route: "/ipo-process/compliance-plans",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop", // Compliance and documentation
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      key: "professional",
    },
    {
      icon: Target,
      key: "innovative",
    },
    {
      icon: Building,
      key: "network",
    },
    {
      icon: Trophy,
      key: "commitment",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={t("section.badge")}
        description={t("section.description")}
      />
      <Header />
      
        <section id="about" className="section-padding-small bg-background animate-section">
          <div className="container mx-auto container-padding">
            {/* Header - Enhanced */}
            <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
                <Building className="icon-small mr-2" />
                {t("section.badge")}
              </div>

              <h1 className="heading-2 text-primary mb-4 sm:mb-6">
                {t("section.title")}
              </h1>

              <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
                {t("section.description")}
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-6 lg:p-8 text-white shadow-xl max-w-7xl mx-auto mb-6 sm:mb-8">
              <h3 className="text-2xl font-bold font-display text-center mb-4">
                {t("whyChooseUs.title")}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="text-center space-y-1 sm:space-y-2">
                    <item.icon className="icon-large mx-auto mb-2" />
                    <div className="font-bold text-body-small">
                      {t(`whyChooseUs.reasons.${item.key}.title`)}
                    </div>
                    <p className="text-body-small text-white/80">
                      {t(`whyChooseUs.reasons.${item.key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-4 mb-12 sm:mb-16 max-w-7xl mx-auto">
              <Card className="card-padding-small bg-white border border-primary-subtle animate-card">
                <div className="icon-large bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Target className="icon-medium text-white" />
                </div>
                <h3 className="heading-5 text-primary mb-3">
                  {t("vision.title")}
                </h3>
                <p className="text-body-small text-muted-foreground">
                  {t("vision.description")}
                </p>
              </Card>
              <Card className="card-padding-small bg-white border border-primary-subtle animate-card">
                <div className="icon-large bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Briefcase className="icon-medium text-white" />
                </div>
                <h3 className="heading-5 text-primary mb-3">
                  {t("mission.title")}
                </h3>
                <p className="text-body-small text-muted-foreground">
                  {t("mission.description")}
                </p>
              </Card>
            </div>

            {/* Roadmap Section - Enhanced with Images */}
            <div className="mb-8" style={{marginTop: '8rem'}}>
              <h3 className="heading-4 text-primary text-center mb-6">
                {t("roadmap.title")}
              </h3>
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {roadmap.map((item, index) => (
                    <Link
                      key={index}
                      to={item.route}
                      className="block transform hover:scale-105 transition-all duration-300"
                    >
                      <Card
                        className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-card cursor-pointer"
                        style={{ animationDelay: `${index * 0.1}s` }}>
                      {/* Image Section */}
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={item.image}
                          alt={t(`roadmap.items.${item.titleKey}.title`)}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Step Badge */}
                        <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-subtle">
                          <span className="text-white font-bold text-lg">
                            {item.step}
                          </span>
                        </div>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
                      </div>

                      {/* Content Section */}
                      <div className="card-padding-small space-y-1 sm:space-y-2">
                        <h4 className="heading-6 text-foreground">
                          {t(`roadmap.items.${item.titleKey}.title`)}
                        </h4>
                        <p className="text-body-small text-muted-foreground">
                          {t(`roadmap.items.${item.titleKey}.description`)}
                        </p>

                        {/* Progress Indicator */}
                        <div className="pt-2">
                          <div className="h-2 bg-border/30 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all duration-1000"
                              style={{
                                width: `${((index + 1) / roadmap.length) * 100}%`,
                              }}></div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </div>
  );
};

export default AboutCompany;