import { Card } from "@/components/ui/card";
import {
  Lightbulb,
  Target,
  Award,
  Calendar,
  CheckCircle,
  ArrowRight,
  Building,
  Briefcase,
  Trophy,
  Rocket,
  Brain,
  Heart,
  FileText,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const { t, i18n } = useTranslation("about");
  const [activeTab, setActiveTab] = useState(0);

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
    <section id="about" className="section-padding-small bg-background animate-section">
      <div className="container mx-auto container-padding">
        {/* Header - Enhanced */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
            <Building className="icon-small mr-2" />
            {t("section.badge")}
          </div>

          <h2 className="heading-2 text-primary mb-4 sm:mb-6">
            {t("section.title")}
          </h2>

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





        {/* Business Advisory & Investment Services Section - HIDDEN */}
        <div className="mb-6 sm:mb-8 hidden">
          <div className="max-w-7xl mx-auto">
            <Card className="overflow-hidden bg-gradient-to-br from-card to-card/80 border border-primary-subtle shadow-xl">
              <div className="card-padding lg:card-padding-large">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-3 sm:mb-4 border border-primary-subtle">
                    <FileText className="icon-small mr-2" />
                    {t("businessServices.badge")}
                  </div>

                  <h3 className="heading-3 lg:heading-2 text-primary mb-2 sm:mb-3">
                    {t("businessServices.title")}
                  </h3>

                  <p className="text-body lg:text-body-large text-primary/80 font-semibold mb-3 sm:mb-4">
                    {t("businessServices.subtitle")}
                  </p>

                  <div className="max-w-4xl mx-auto">
                    <p className="text-body text-muted-foreground">
                      {t("businessServices.description")}
                    </p>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {/* Pelindo 1 */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.projects.pelindo1.sector")}
                      </div>

                      <div className="flex items-center justify-center h-12 sm:h-16 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-ski-sponsor-pelindo.png"
                          alt="Pelindo"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-body-small font-semibold text-foreground text-center">
                          {t("businessServices.projects.pelindo1.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.projects.pelindo1.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Pelindo 2 */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.projects.pelindo2.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-ski-sponsor-pelindo.png"
                          alt="Pelindo"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t("businessServices.projects.pelindo2.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.projects.pelindo2.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Pelindo 3 */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.projects.pelindo3.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-ski-sponsor-pelindo.png"
                          alt="Pelindo"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t("businessServices.projects.pelindo3.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.projects.pelindo3.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Pelindo 4 */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.projects.pelindo4.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-ski-sponsor-pelindo.png"
                          alt="Pelindo"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t("businessServices.projects.pelindo4.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.projects.pelindo4.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* WSKT */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.projects.wskt.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-sgk-wskt.jpg"
                          alt="WSKT"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t("businessServices.projects.wskt.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.projects.wskt.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* WR Realty */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.projects.wrRealty.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-sgk-wrealty.jpg"
                          alt="Wrealty"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t("businessServices.projects.wrRealty.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.projects.wrRealty.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Angkasa Pura II 1 */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.projects.angkasa1.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/logologo/angkasa.png"
                          alt="Angkasa Pura II"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t("businessServices.projects.angkasa1.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.projects.angkasa1.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Angkasa Pura II 2 */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.projects.angkasa2.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/logologo/angkasa.png"
                          alt="Angkasa Pura II"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t("businessServices.projects.angkasa2.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.projects.angkasa2.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Finance - SBI & Bajaj Finserv */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase">
                        {t("businessServices.projects.finance.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <div className="flex items-center justify-center space-x-3">
                          <img
                            src="/Sponsor/logo-sponsor-sgk-sbi.jpg"
                            alt="SBI"
                            className="h-10 w-auto object-contain opacity-100"
                          />
                          <img
                            src="/Sponsor/logo-sgk-bajaj2.png"
                            alt="Bajaj Finserv"
                            className="h-10 w-auto object-contain opacity-100"
                          />
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground">
                          {t("businessServices.projects.finance.service")}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {t("businessServices.projects.finance.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Twenty One Development */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.projects.twentyOne.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <div className="text-center">
                          <div className="text-red-600 font-bold text-lg">
                            PT Twenty One Development
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t("businessServices.projects.twentyOne.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.projects.twentyOne.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Falakwati Group */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.projects.falakwati.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <div className="text-center">
                          <div className="text-orange-600 font-bold text-lg">
                            Falakwati Group
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t("businessServices.projects.falakwati.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.projects.falakwati.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Hotel Panghegar */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.projects.hotel.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <div className="text-center">
                          <div className="text-orange-600 font-bold text-sm">
                            Hotel Panghegar (Pt. Royale)
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t("businessServices.projects.hotel.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.projects.hotel.year")}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-8 pt-6 border-t border-border/30">
                  <p className="text-muted-foreground mb-4 text-center">
                    Strictly Confidential
                  </p>
                </div>

                {/* Additional Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-8">
                  {/* PT Citra Mustika Besten */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t(
                          "businessServices.additionalProjects.citraMustika.sector"
                        )}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <div className="text-center flex items-center justify-center">
                          <div className="text-orange-600 font-bold text-base text-center">
                            PT Citra Mustika Besten
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.citraMustika.service"
                          )}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.citraMustika.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* LSW */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.additionalProjects.lsw.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-gsk-sponsor-jjsw.jpg"
                          alt="JJSW"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t("businessServices.additionalProjects.lsw.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.lsw.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* JJSM */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.additionalProjects.jjsm.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-gsk-sponsor-jjsm.png"
                          alt="JJSM"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.jjsm.service"
                          )}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.jjsm.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* BEMAESTEX */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t(
                          "businessServices.additionalProjects.bemaestex.sector"
                        )}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-gsk-sponsor-bemaestex.jpg"
                          alt="Bemaestex"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.bemaestex.service"
                          )}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.bemaestex.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* MEGACORP altobank */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t(
                          "businessServices.additionalProjects.megacorp.sector"
                        )}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <div className="flex items-center justify-center space-x-2">
                          <img
                            src="/Sponsor/logo-gsk-sponsor-megacorp.png"
                            alt="Mega CORP"
                            className="h-8 sm:h-10 lg:h-12 w-auto object-contain opacity-100"
                          />
                          <img
                            src="/Sponsor/logo-gsk-sponsor-alllobank.png"
                            alt="Allo Bank"
                            className="h-8 sm:h-10 lg:h-12 w-auto object-contain opacity-100"
                          />
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.megacorp.service"
                          )}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.megacorp.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* BRAVA */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.additionalProjects.brava.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-gsk-sponsor-brava.png"
                          alt="Brava"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.brava.service"
                          )}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.brava.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* WIMCYCLE */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t(
                          "businessServices.additionalProjects.wimcycle.sector"
                        )}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-gsk-sponsor-wimcycle.webp"
                          alt="Wimcycle"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.wimcycle.service"
                          )}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.wimcycle.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Maybank */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t(
                          "businessServices.additionalProjects.maybank.sector"
                        )}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-sponsor-gsk-maybank.jpg"
                          alt="Maybank"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.maybank.service"
                          )}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.maybank.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Aset&u */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.additionalProjects.asetku.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-gsk-sponsor-asetkuu.png"
                          alt="Asetku"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.asetku.service"
                          )}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.asetku.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* TRANS */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.additionalProjects.trans.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-gsk-sponsor-trans.png"
                          alt="Trans"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.trans.service"
                          )}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.trans.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Toyota Automotive */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t(
                          "businessServices.additionalProjects.automotive.sector"
                        )}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-gsk-sponsor-bank-resona.png"
                          alt="Bank Resona"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.automotive.service"
                          )}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.automotive.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* SIP */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.additionalProjects.sip.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-gsk-sponsor-sip.png"
                          alt="SIP"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t("businessServices.additionalProjects.sip.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.sip.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* DCP */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t("businessServices.additionalProjects.dcp.sector")}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-gsk-sponsor-dcp.png"
                          alt="DCP"
                          className="h-18 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t("businessServices.additionalProjects.dcp.service")}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.dcp.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Select Hotels Group */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t(
                          "businessServices.additionalProjects.selectHotels.sector"
                        )}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-gsk-sponsor-select-hotels.png"
                          alt="Select Hotels"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.selectHotels.service"
                          )}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.selectHotels.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Real Estate Developer */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        {t(
                          "businessServices.additionalProjects.realEstate.sector"
                        )}
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <div className="text-center flex items-center justify-center">
                          <div className="text-orange-600 font-bold text-sm text-center">
                            PT Regency Utama Indonesia dan PT Putriko Nusantara
                            Indonesia
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.realEstate.service"
                          )}
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.realEstate.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Mega Corp Bank Sumsel */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        Financial Services
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <div className="flex items-center justify-center space-x-2">
                          <img
                            src="/Sponsor/logo-gsk-sponsor-megacorp.png"
                            alt="Mega Corp"
                            className="h-8 sm:h-10 lg:h-12 w-auto object-contain opacity-100"
                          />
                          <img
                            src="/Sponsor/logo-gsk-sponsor-bank-sumsel.jpg"
                            alt="Bank Sumsel"
                            className="h-8 sm:h-10 lg:h-12 w-auto object-contain opacity-100"
                          />
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          Business Advisory & IPO Consulting
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          2024
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Bank BSG */}
                  <Card className="card-padding bg-white border border-subtle animate-card">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-body-small text-primary/60 font-medium uppercase text-center">
                        Financial Services
                      </div>

                      <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 w-full">
                        <img
                          src="/Sponsor/logo-gsk-sponsor-bank-bsg.jpg"
                          alt="Bank BSG"
                          className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-100"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          Business Advisory & IPO Consulting
                        </div>
                        <div className="text-body-small text-muted-foreground text-center">
                          2024
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-8 pt-6 border-t border-border/30">
                  <p className="text-muted-foreground mb-4 text-center">
                    Strictly Confidential
                  </p>
                </div>
              </div>
            </Card>
          </div>
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

        {/* Team Section */}
        {/* <div className="mb-8">
          <h3 className="heading-4 text-primary text-center mb-6">
            {t("team.title")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((memberKey, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 group border border-border/50 hover:border-primary/30">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-bold text-primary font-display mb-1">
                  {t(`team.members.${memberKey}.name`)}
                </h4>
                <p className="text-primary/70 font-semibold mb-2 text-sm">
                  {t(`team.members.${memberKey}.position`)}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  {t(`team.members.${memberKey}.experience`)}
                </p>
                <div className="space-y-1">
                  {(
                    t(`team.members.${memberKey}.credentials`, {
                      returnObjects: true,
                    }) as string[]
                  ).map((cred, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center text-xs text-muted-foreground">
                      <CheckCircle className="icon-small mr-1 text-primary" />
                      {cred}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
