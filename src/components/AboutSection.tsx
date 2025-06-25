import { Card } from "@/components/ui/card";
import {
  Lightbulb,
  Target,
  Users,
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
  Check,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t, i18n } = useTranslation("about");
  const [activeTab, setActiveTab] = useState(0);

  const roadmap = [
    {
      step: "1",
      titleKey: "mapping",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Business analysis and mapping
    },
    {
      step: "2",
      titleKey: "scenario",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", // Strategic planning and scenarios
    },
    {
      step: "3",
      titleKey: "proforma",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop", // Financial reports and analysis
    },
    {
      step: "4",
      titleKey: "management",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop", // Team management and improvement
    },
    {
      step: "5",
      titleKey: "bridging",
      image:
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=600&fit=crop", // People connecting/celebrating representing bridging partnerships
    },
    {
      step: "6",
      titleKey: "compliance",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop", // Compliance and documentation
    },
  ];

  const team = ["ceo", "coo", "cfo"];

  const values = [
    {
      key: "innovation",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      key: "integrity",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    },
    {
      key: "collaboration",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    },
    {
      key: "excellence",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
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
    <section id="about" className="py-8 sm:py-12 bg-background">
      <div className="container mx-auto px-6">
        {/* Header - Enhanced */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
            <Building className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
            {t("section.badge")}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary font-display mb-4 sm:mb-6 leading-tight">
            {t("section.title")}
            <span className="text-gradient block mt-1 sm:mt-2 leading-normal">
              {t("section.titleHighlight")}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t("section.description")}
          </p>
        </div>

        {/* Values Grid - Clean Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-background border border-border/50">
              {/* Image Section */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={value.image}
                  alt={t(`values.${value.key}.title`)}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                  {t(`values.${value.key}.title`)}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {t(`values.${value.key}.description`)}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center text-center mb-8 sm:mb-12">
          <div className="inline-flex justify-center items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-primary/20">
            <Building className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
            Partership of RITZ Corp
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 text-center">
            About Ritz Corp
          </h3>
        </div>
        {/* RITZ Corp Partnership Section */}
        <div className="mb-6 sm:mb-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              {/* Content Section - Now Single Column and Centered */}
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center text-center">
                {/* Header */}
                <div className="mb-6"></div>

                {/* Image - Centered */}
                <div className="mb-8 flex justify-center">
                  <img
                    src="/orangorang.png"
                    alt="RITZ Corp Team"
                    className="max-w-4xl h-auto object-cover rounded-lg shadow-md"
                    style={{ maxHeight: "400px", width: "auto" }}
                  />
                </div>

                {/* Description - Centered and justified for better readability */}
                <div className="space-y-4 text-gray-800 max-w-4xl mx-auto">
                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    RITZ Corp is an integrated business that has two main
                    business lines, namely Financial and Business Consulting
                    through PT RITZ Konsultan Indonesia ("RKI") and PT RITZ
                    Investment Indonesia ("RII"). In addition, RITZ Corp offers
                    Corporate Law Services through RITZ & Partners Law Firm
                    ("R&P") and Commercial Litigation Services through Rivai &
                    Co. Law Firm ("RCO").
                  </p>

                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    RKI has experience and credentials, as well as an extensive
                    network in banking, commercial, investment banking, private
                    equity, and capital markets. Especially in assisting
                    companies with corporate restructuring, debt restructuring,
                    turn-around management/management changes,
                    divestments/investments, and Mergers & Acquisitions (M&A),
                    among others, acquisitions, spin-offs, mergers,
                    divestitures, and investments.
                  </p>

                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    RII, a sub-holding under the RITZ Corp, has experienced
                    partners from various professional backgrounds. Together
                    with its partners, RII establishes subsidiary companies in
                    various industrial sectors, managed by the partners. It is
                    also utilized to support the formation of consortium members
                    in project financing managed by RKI.
                  </p>

                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    R&P is a corporate law firm with experience and credentials
                    in Merger and Acquisition (M&A) transactions, Banking &
                    Finance and Pre-IPO Programs and other required corporate
                    transactions for companies and business groups in Indonesia.
                    RCO is a law firm focused on Commercial Litigation, such as
                    Alternative Dispute Resolutions, Suspension of Debt Payment
                    Obligations (PKPU) & Bankruptcy.
                  </p>

                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    RITZ Corp has a team consisting of more than 40 partners
                    with diverse executive backgrounds in banking, investment
                    banking & private equity, capital markets, the real sector,
                    legal, and arbitration. They also have regional desks in
                    Japan, South Korea, and Singapore. They possess broad
                    qualifications, including debt restructuring, debt
                    settlement through asset divestment, refinancing,
                    investments, and debt resolution through legal/PKPU
                    processes. RITZ Corp also has experience working with
                    several major state-owned enterprises (BUMN) across various
                    types of transactions, including business development,
                    restructuring, asset divestment, fundraising, and M&A
                    activities.
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                  <p className="text-xs text-gray-500">Strictly Confidential</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Main Client Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="max-w-7xl mx-auto">
            <Card className="overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 border border-border/50 shadow-xl">
              <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                  <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
                    <Users className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                    {t("mainClients.badge")}
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-primary font-display leading-tight mb-3 sm:mb-4">
                    {t("mainClients.title")}
                  </h3>

                  <p className="text-sm sm:text-base lg:text-lg text-primary/80 font-semibold mb-4 sm:mb-6 leading-relaxed">
                    {t("mainClients.subtitle")}
                  </p>

                  <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t("mainClients.description.main")}
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t("mainClients.description.secondary")}
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
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary leading-tight">
                        10+
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground leading-tight">
                        Major Clients
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary leading-tight">
                        15+
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground leading-tight">
                        Industries Served
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary leading-tight">
                        98%
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground leading-tight">
                        Client Satisfaction
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary leading-tight">
                        24/7
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground leading-tight">
                        Support Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Business Advisory & Investment Services Section */}
        <div className="mb-6 sm:mb-8">
          <div className="max-w-7xl mx-auto">
            <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 shadow-xl">
              <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-primary/20">
                    <FileText className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                    {t("businessServices.badge")}
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary font-display leading-tight mb-2 sm:mb-3">
                    {t("businessServices.title")}
                  </h3>

                  <p className="text-sm sm:text-base lg:text-lg text-primary/80 font-semibold mb-3 sm:mb-4 leading-relaxed">
                    {t("businessServices.subtitle")}
                  </p>

                  <div className="max-w-4xl mx-auto">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t("businessServices.description")}
                    </p>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {/* Pelindo 1 */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs sm:text-sm font-semibold text-foreground text-center leading-tight">
                          {t("businessServices.projects.pelindo1.service")}
                        </div>
                        <div className="text-xs text-muted-foreground text-center leading-tight">
                          {t("businessServices.projects.pelindo1.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Pelindo 2 */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.projects.pelindo2.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Pelindo 3 */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.projects.pelindo3.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Pelindo 4 */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.projects.pelindo4.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* WSKT */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.projects.wskt.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* WR Realty */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.projects.wrRealty.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Angkasa Pura II 1 */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.projects.angkasa1.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Angkasa Pura II 2 */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.projects.angkasa2.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Finance - SBI & Bajaj Finserv */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
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
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.projects.twentyOne.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Falakwati Group */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.projects.falakwati.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Hotel Panghegar */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
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
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.citraMustika.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* LSW */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.lsw.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* JJSM */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.jjsm.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* BEMAESTEX */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.bemaestex.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* MEGACORP altobank */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.megacorp.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* BRAVA */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.brava.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* WIMCYCLE */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.wimcycle.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Maybank */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.maybank.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Aset&u */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.asetku.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* TRANS */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.trans.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Toyota Automotive */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.automotive.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* SIP */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.sip.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* DCP */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t("businessServices.additionalProjects.dcp.year")}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Select Hotels Group */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.selectHotels.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Real Estate Developer */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          {t(
                            "businessServices.additionalProjects.realEstate.year"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Mega Corp Bank Sumsel */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
                          2024
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Bank BSG */}
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-800 border border-border/50">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
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
                        <div className="text-xs text-muted-foreground text-center">
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
        <div className="mb-8">
          <h3 className="text-xl font-bold text-primary font-display text-center mb-6">
            {t("roadmap.title")}
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmap.map((item, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Image Section */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={item.image}
                      alt={t(`roadmap.items.${item.titleKey}.title`)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Step Badge */}
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
                      <span className="text-white font-bold text-lg">
                        {item.step}
                      </span>
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 space-y-1 sm:space-y-2">
                    <h4 className="text-base font-bold text-foreground">
                      {t(`roadmap.items.${item.titleKey}.title`)}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
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
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="mb-8">
          <h3 className="text-xl font-bold text-primary font-display text-center mb-6">
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
                      <CheckCircle className="w-3 h-3 mr-1 text-primary" />
                      {cred}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-4 mb-4 max-w-7xl mx-auto">
          <Card className="p-4 bg-primary/5 border border-primary/20">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-4">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-primary font-display mb-3">
              {t("vision.title")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("vision.description")}
            </p>
          </Card>
          <Card className="p-4 bg-primary/5 border border-primary/20">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-4">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-primary font-display mb-3">
              {t("mission.title")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("mission.description")}
            </p>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-6 lg:p-8 text-white shadow-xl max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold font-display text-center mb-4">
            {t("whyChooseUs.title")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center space-y-1 sm:space-y-2">
                <item.icon className="w-10 h-10 mx-auto mb-2" />
                <div className="font-bold text-sm">
                  {t(`whyChooseUs.reasons.${item.key}.title`)}
                </div>
                <p className="text-xs text-white/80">
                  {t(`whyChooseUs.reasons.${item.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
