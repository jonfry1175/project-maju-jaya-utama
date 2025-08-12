
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Target,
  Award,
  Building,
  Briefcase,
  Trophy,
  FileText,
  Scale,
  ChartLine,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  BookOpen,
  Download,
  ArrowRight,
  Lightbulb,
  Phone,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Index = () => {
  const { t, i18n } = useTranslation(["about", "services"]);

  // AboutCompany data
  const roadmap = [
    {
      step: "1",
      titleKey: "mapping",
      route: "/ipo-process/mapping",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      step: "2",
      titleKey: "scenario",
      route: "/ipo-process/scenario-plans",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    {
      step: "3",
      titleKey: "proforma",
      route: "/ipo-process/proforma-financial-report",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    },
    {
      step: "4",
      titleKey: "management",
      route: "/ipo-process/management-improvement-plans",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    },
    {
      step: "5",
      titleKey: "bridging",
      route: "/ipo-process/bridging-financing",
      image:
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=600&fit=crop",
    },
    {
      step: "6",
      titleKey: "compliance",
      route: "/ipo-process/compliance-plans",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
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

  // ProfessionalServices data
  const serviceCategories = {
    ipoAdvisory: {
      title: t("services:categories.ipoAdvisory.title"),
      icon: Briefcase,
      description: t("services:categories.ipoAdvisory.description"),
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop",
      services: [
        {
          icon: FileText,
          title: t("services:categories.ipoAdvisory.services.documentation.title"),
          description: t("services:categories.ipoAdvisory.services.documentation.description"),
          features: t("services:categories.ipoAdvisory.services.documentation.features", { returnObjects: true }),
          price: t("services:categories.ipoAdvisory.services.documentation.price"),
        },
        {
          icon: ChartLine,
          title: t("services:categories.ipoAdvisory.services.valuation.title"),
          description: t("services:categories.ipoAdvisory.services.valuation.description"),
          features: t("services:categories.ipoAdvisory.services.valuation.features", { returnObjects: true }),
          price: t("services:categories.ipoAdvisory.services.valuation.price"),
        },
        {
          icon: Target,
          title: t("services:categories.ipoAdvisory.services.strategy.title"),
          description: t("services:categories.ipoAdvisory.services.strategy.description"),
          features: t("services:categories.ipoAdvisory.services.strategy.features", { returnObjects: true }),
          price: t("services:categories.ipoAdvisory.services.strategy.price"),
        },
      ],
    },
    compliance: {
      title: t("services:categories.compliance.title"),
      icon: Scale,
      description: t("services:categories.compliance.description"),
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      services: [
        {
          icon: Scale,
          title: t("services:categories.compliance.services.regulatory.title"),
          description: t("services:categories.compliance.services.regulatory.description"),
          features: t("services:categories.compliance.services.regulatory.features", { returnObjects: true }),
          price: t("services:categories.compliance.services.regulatory.price"),
        },
        {
          icon: BookOpen,
          title: t("services:categories.compliance.services.corporate.title"),
          description: t("services:categories.compliance.services.corporate.description"),
          features: t("services:categories.compliance.services.corporate.features", { returnObjects: true }),
          price: t("services:categories.compliance.services.corporate.price"),
        },
        {
          icon: Award,
          title: t("services:categories.compliance.services.reporting.title"),
          description: t("services:categories.compliance.services.reporting.description"),
          features: t("services:categories.compliance.services.reporting.features", { returnObjects: true }),
          price: t("services:categories.compliance.services.reporting.price"),
        },
      ],
    },
    education: {
      title: t("services:categories.education.title"),
      icon: Building,
      description: t("services:categories.education.description"),
      image:
        "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&h=600&fit=crop",
      services: [
        {
          icon: Users,
          title: t("services:categories.education.services.management.title"),
          description: t("services:categories.education.services.management.description"),
          features: t("services:categories.education.services.management.features", { returnObjects: true }),
          price: t("services:categories.education.services.management.price"),
        },
        {
          icon: BookOpen,
          title: t("services:categories.education.services.employee.title"),
          description: t("services:categories.education.services.employee.description"),
          features: t("services:categories.education.services.employee.features", { returnObjects: true }),
          price: t("services:categories.education.services.employee.price"),
        },
        {
          icon: Award,
          title: t("services:categories.education.services.certification.title"),
          description: t("services:categories.education.services.certification.description"),
          features: t("services:categories.education.services.certification.features", { returnObjects: true }),
          price: t("services:categories.education.services.certification.price"),
        },
      ],
    },
  };

  const stats = [
    { icon: TrendingUp, value: "100%", label: "Komitmen" },
    { icon: Clock, value: "6-12", label: "Bulan Proses" },
    { icon: Award, value: "24/7", label: "Dukungan" },
    { icon: Users, value: "30+", label: "Tim Profesional" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <HeroSection />
      
      {/* About Company Section */}
      <section id="about" className="section-padding-small bg-background animate-section">
        <div className="container mx-auto container-padding">
          {/* Header - Enhanced */}
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
              <Building className="icon-small mr-2" />
              {t("about:section.badge")}
            </div>

            <h1 className="heading-2 text-primary mb-4 sm:mb-6">
              {t("about:section.title")}
            </h1>

            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              {t("about:section.description")}
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-6 lg:p-8 text-white shadow-xl max-w-7xl mx-auto mb-6 sm:mb-8">
            <h3 className="text-2xl font-bold font-display text-center mb-4">
              {t("about:whyChooseUs.title")}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center space-y-1 sm:space-y-2">
                  <item.icon className="icon-large mx-auto mb-2" />
                  <div className="font-bold text-body-small">
                    {t(`about:whyChooseUs.reasons.${item.key}.title`)}
                  </div>
                  <p className="text-body-small text-white/80">
                    {t(`about:whyChooseUs.reasons.${item.key}.description`)}
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
                {t("about:vision.title")}
              </h3>
              <p className="text-body-small text-muted-foreground">
                {t("about:vision.description")}
              </p>
            </Card>
            <Card className="card-padding-small bg-white border border-primary-subtle animate-card">
              <div className="icon-large bg-primary rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="icon-medium text-white" />
              </div>
              <h3 className="heading-5 text-primary mb-3">
                {t("about:mission.title")}
              </h3>
              <p className="text-body-small text-muted-foreground">
                {t("about:mission.description")}
              </p>
            </Card>
          </div>

          {/* Roadmap Section */}
          <div className="mb-8" style={{marginTop: '8rem'}}>
            <h3 className="heading-4 text-primary text-center mb-6">
              {t("about:roadmap.title")}
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
                        alt={t(`about:roadmap.items.${item.titleKey}.title`)}
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
                        {t(`about:roadmap.items.${item.titleKey}.title`)}
                      </h4>
                      <p className="text-body-small text-muted-foreground">
                        {t(`about:roadmap.items.${item.titleKey}.description`)}
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

      {/* Professional Services Section */}
      <section
        id="services"
        className="section-padding bg-gradient-subtle max-w-7xl mx-auto animate-section">
        <div className="container mx-auto container-padding">
          {/* Header */}
          <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
              <Lightbulb className="icon-small mr-2" />
              {t("services:section.badge")}
            </div>

            <h1 className="heading-2 text-primary mb-4 sm:mb-6">
              {t("services:section.title")} <span className="text-gradient">{t("services:section.titleHighlight")}</span>
            </h1>

            <p className="text-body-large text-muted-foreground whitespace-nowrap">
              {t("services:section.description")}
            </p>
          </div>

          {/* Service Categories Tabs */}
          <Tabs defaultValue="ipoAdvisory" className="w-full mb-8 sm:mb-12 lg:mb-18">
            <TabsList className="grid w-full max-w-full sm:max-w-4xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-0 mb-8 sm:mb-12 h-auto sm:h-10 p-1">
              {Object.entries(serviceCategories).map(([key, category]) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="flex items-center justify-center space-x-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-white h-12 sm:h-auto text-body-small">
                    <Icon className="icon-small" />
                    <span>{category.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(serviceCategories).map(([key, category]) => (
              <TabsContent
                key={key}
                value={key}
                className="space-y-6 sm:space-y-8">
                <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                  <div className="relative max-w-4xl mx-auto mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden h-48 sm:h-56 lg:h-64">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
                    <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex items-center justify-center text-center">
                      <div className="text-white">
                        <h3 className="heading-3 xl:heading-2 mb-2 sm:mb-3">
                          {category.title}
                        </h3>
                        <p className="text-body lg:text-body-large opacity-90 max-w-2xl">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {category.services.map((service, serviceIndex) => {
                    const ServiceIcon = service.icon;
                    return (
                      <Card
                        key={serviceIndex}
                        className="group relative bg-white border border-subtle hover:border-primary-medium hover:shadow-xl transition-all duration-300 card-padding animate-card h-full flex flex-col">
                        {/* Icon */}
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform">
                          <ServiceIcon
                            className="icon-medium lg:icon-large text-white"
                            strokeWidth={1.5}
                          />
                        </div>

                        {/* Content */}
                        <div className="space-y-3 sm:space-y-4 flex-grow">
                          <h4 className="heading-5 text-foreground">
                            {service.title}
                          </h4>
                          <p className="text-body-small text-muted-foreground">
                            {service.description}
                          </p>

                          {/* Features */}
                          <ul className="space-y-1 sm:space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-start text-body-small">
                                <CheckCircle className="icon-small text-primary flex-shrink-0 mt-0.5 mr-2" />
                                <span className="text-muted-foreground">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* Price Badge */}
                          <div className="pt-2 sm:pt-3">
                            <span className="inline-flex items-center bg-white text-primary px-2 sm:px-3 py-1 rounded-full text-body-small font-semibold">
                              {service.price}
                            </span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                          className="w-full btn-gradient-brand group-hover:shadow-lg transition-all text-body-small mt-4"
                          size="sm">
                          {i18n.language === "id"
                            ? "Konsultasi Sekarang"
                            : "Consult Now"}
                          <ArrowRight className="ml-1 sm:ml-2 icon-small group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Stats Section - Our Commitment */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="max-w-4xl mx-auto">
              <h3 className="heading-3 text-primary text-center mb-6 sm:mb-8 lg:mb-12">
                {i18n.language === "id" ? "Komitmen Kami" : "Our Commitment"}
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card
                      key={index}
                      className="text-center card-padding bg-white border border-subtle animate-card">
                      <div className="icon-large sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Icon className="icon-medium lg:icon-large text-primary" />
                      </div>
                      <div className="heading-4 xl:heading-2 text-foreground mb-1 sm:mb-2">
                        {stat.value}
                      </div>
                      <div className="text-body-small lg:text-body text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <Card className="max-w-4xl mx-auto card-padding lg:card-padding-large bg-gradient-to-br from-card to-white/80 border border-primary-subtle animate-card">
              <h3 className="heading-3 text-primary mb-3 sm:mb-4">
                {i18n.language === "id"
                  ? "Siap Memulai Perjalanan IPO Anda?"
                  : "Ready to Start Your IPO Journey?"}
              </h3>
              <p className="text-body text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                {i18n.language === "id"
                  ? "Dapatkan konsultasi gratis dengan para ahli kami dan temukan solusi terbaik untuk perusahaan Anda."
                  : "Get a free consultation with our experts and discover the best solutions for your company."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="btn-gradient-brand shadow-brand text-body font-semibold px-6 sm:px-8 group w-full sm:w-auto">
                  <Phone className="mr-2 icon-small" />
                  {i18n.language === "id"
                    ? "Konsultasi Gratis"
                    : "Free Consultation"}
                  <ArrowRight className="ml-2 icon-small group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-body font-semibold px-6 sm:px-8 border-2 w-full sm:w-auto">
                  <Download className="mr-2 icon-small" />
                  {i18n.language === "id"
                    ? "Download Brosur"
                    : "Download Brochure"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
