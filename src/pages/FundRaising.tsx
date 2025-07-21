import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEO from "@/components/SEO";
import {
  TrendingUp,
  DollarSign,
  Users,
  CheckCircle,
  BarChart3,
  Lightbulb,
  Target,
  FileSearch,
  Handshake,
  PieChart,
  Building,
  ShieldCheck,
  Clock,
  Award,
  Phone,
  Download,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const FundRaising = () => {
  const { t, i18n } = useTranslation("services");

  const fundRaisingCategories = {
    equity: {
      title: "Equity Funding",
      icon: TrendingUp,
      description: "Comprehensive equity fundraising solutions for growth-stage companies",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
      services: [
        {
          icon: BarChart3,
          title: "Series A/B/C Fundraising",
          description: "Strategic guidance through institutional funding rounds with optimal valuation and terms.",
          features: [
            "Investor Targeting & Outreach",
            "Pitch Deck Development",
            "Due Diligence Coordination",
            "Term Sheet Negotiation",
          ],
          price: "Premium Package",
        },
        {
          icon: Target,
          title: "Strategic Angel Investment",
          description: "Access to high-net-worth individuals and angel investor networks for early-stage funding.",
          features: [
            "Angel Network Access",
            "Investor Matching",
            "Presentation Coaching",
            "Deal Structuring",
          ],
          price: "Angel Round",
        },
        {
          icon: Building,
          title: "Private Equity Solutions",
          description: "Connecting mature companies with private equity firms for growth or exit opportunities.",
          features: [
            "PE Firm Identification",
            "Financial Modeling",
            "Management Presentation",
            "Exit Planning",
          ],
          price: "PE Advisory",
        },
      ],
    },
    debt: {
      title: "Debt Financing",
      icon: DollarSign,
      description: "Alternative debt financing solutions to fuel business growth",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      services: [
        {
          icon: FileSearch,
          title: "Bank Loan Facilitation",
          description: "Assistance in securing traditional bank loans with favorable terms and competitive rates.",
          features: [
            "Loan Application Preparation",
            "Bank Relationship Management",
            "Credit Enhancement Strategies",
            "Rate Negotiation",
          ],
          price: "Debt Advisory",
        },
        {
          icon: PieChart,
          title: "Alternative Lending",
          description: "Access to non-traditional lenders including fintech and revenue-based financing.",
          features: [
            "Fintech Lender Network",
            "Revenue-Based Financing",
            "Merchant Cash Advances",
            "Asset-Based Lending",
          ],
          price: "Alternative Finance",
        },
        {
          icon: ShieldCheck,
          title: "Bonds & Securities",
          description: "Corporate bond issuance and structured debt instruments for larger funding needs.",
          features: [
            "Bond Structuring",
            "Credit Rating Support",
            "Investor Relations",
            "Regulatory Compliance",
          ],
          price: "Securities Package",
        },
      ],
    },
    advisory: {
      title: "Strategic Advisory",
      icon: Lightbulb,
      description: "Comprehensive advisory services to optimize your fundraising strategy",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      services: [
    {
      icon: Users,
          title: "Fundraising Strategy",
          description: "Comprehensive strategic planning to determine optimal funding mix and timing.",
          features: [
            "Capital Needs Assessment",
            "Funding Timeline Planning",
            "Investor Readiness Evaluation",
            "Strategic Roadmap",
          ],
          price: "Strategy Consulting",
        },
        {
          icon: Handshake,
      title: "Investor Relations",
          description: "Building and maintaining strong relationships with existing and potential investors.",
          features: [
            "Investor Communication",
            "Quarterly Reporting",
            "Investor Meeting Coordination",
            "Relationship Management",
          ],
          price: "IR Services",
        },
        {
          icon: BarChart3,
          title: "Financial Modeling",
          description: "Detailed financial projections and valuation models to support funding decisions.",
          features: [
            "Financial Forecasting",
            "Scenario Analysis",
            "Valuation Models",
            "Sensitivity Testing",
          ],
          price: "Financial Advisory",
        },
      ],
    },
  };

  const stats = [
    { icon: TrendingUp, value: "$2.5B+", label: "Funds Raised" },
    { icon: Clock, value: "6-18", label: "Months Timeline" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Users, value: "200+", label: "Investor Network" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Fund Raising Services - Pendanaan Perusahaan"
        description="Layanan fund raising profesional untuk membantu perusahaan mendapatkan modal yang dibutuhkan untuk pertumbuhan, ekspansi, dan inisiatif strategis. Equity funding, debt financing, dan hybrid instruments."
        keywords="fund raising, pendanaan perusahaan, equity funding, debt financing, investor network, modal usaha, venture capital, private equity"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding relative animate-section">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
        </div>
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
              <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              Fund Raising Services
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-4 sm:mb-6 leading-tight">
              Professional Fund Raising
              <span className="text-white block mt-1 sm:mt-2">
                Solutions
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
              Comprehensive fund raising services to secure the capital your business needs for growth, expansion, and strategic initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="main-content" className="section-padding animate-section">
        <div className="container mx-auto container-padding">
          {/* Fund Raising Categories Tabs */}
          <Tabs defaultValue="equity" className="w-full mb-8 sm:mb-12 lg:mb-18">
            <TabsList className="grid w-full max-w-full sm:max-w-4xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-0 mb-8 sm:mb-12 h-auto sm:h-10 p-1">
              {Object.entries(fundRaisingCategories).map(([key, category]) => {
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

            {Object.entries(fundRaisingCategories).map(([key, category]) => (
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
                        className="group relative bg-white border border-subtle hover:border-primary-medium hover:shadow-xl transition-all duration-300 card-padding animate-card">
                        {/* Icon */}
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform">
                          <ServiceIcon
                            className="icon-medium lg:icon-large text-white"
                            strokeWidth={1.5}
                          />
                    </div>
                    
                        {/* Content */}
                        <div className="space-y-3 sm:space-y-4">
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

                          {/* CTA Button */}
                          <Button
                            className="w-full btn-gradient-brand group-hover:shadow-lg transition-all text-body-small"
                            size="sm">
                            Get Started
                            <ArrowRight className="ml-1 sm:ml-2 icon-small group-hover:translate-x-1 transition-transform" />
                          </Button>
                  </div>
                </Card>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Stats Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="max-w-4xl mx-auto">
              <h3 className="heading-3 text-primary text-center mb-6 sm:mb-8 lg:mb-12">
                Our Track Record
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
                          <Card className="max-w-4xl mx-auto card-padding lg:card-padding-large bg-white border border-primary-subtle animate-card">
              <h3 className="heading-3 text-primary mb-3 sm:mb-4">
                Ready to Secure Your Next Round of Funding?
              </h3>
              <p className="text-body text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                Get expert guidance on your fundraising journey. Our team will help you identify the right funding sources and optimize your strategy for success.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="btn-gradient-brand shadow-brand text-body font-semibold px-6 sm:px-8 group w-full sm:w-auto">
                  <Phone className="mr-2 icon-small" />
                  Start Your Fundraising
                  <ArrowRight className="ml-2 icon-small group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-body font-semibold px-6 sm:px-8 border-2 bg-white w-full sm:w-auto">
                  <Download className="mr-2 icon-small" />
                  Download Guide
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FundRaising; 