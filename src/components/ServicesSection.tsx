import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Building,
  Calculator,
  Scale,
  ChartLine,
  CheckCircle,
  TrendingUp,
  Users,
  Shield,
  Clock,
  Award,
  BookOpen,
  Download,
  ArrowRight,
  Briefcase,
  Target,
  Lightbulb,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t, i18n } = useTranslation("services");
  const [activeCategory, setActiveCategory] = useState("advisory");

  const serviceCategories = {
    advisory: {
      title: "Konsultasi IPO",
      icon: Briefcase,
      description:
        "Layanan konsultasi komprehensif untuk persiapan dan pelaksanaan IPO",
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop", // Business consulting
      services: [
        {
          icon: FileText,
          title: "Persiapan Dokumen IPO",
          description:
            "Penyusunan prospektus, laporan keuangan, dan dokumen regulasi lengkap sesuai standar OJK dan BEI.",
          features: [
            "Prospektus & Profil Perusahaan",
            "Penyusunan Laporan Keuangan",
            "Tinjauan Dokumen Hukum",
            "Analisis Faktor Risiko",
          ],
          price: "Paket Premium",
        },
        {
          icon: ChartLine,
          title: "Valuasi & Analisis Pasar",
          description:
            "Penentuan nilai wajar perusahaan dan strategi pricing optimal berdasarkan kondisi pasar.",
          features: [
            "Valuasi Bisnis Komprehensif",
            "Analisis Industri & Pasar",
            "Studi Perbandingan Kompetitor",
            "Strategi Penetapan Harga IPO",
          ],
          price: "Konsultasi Khusus",
        },
        {
          icon: Target,
          title: "Strategi Go Public",
          description:
            "Perencanaan strategis timeline IPO, pemilihan underwriter, dan roadshow preparation.",
          features: [
            "Perencanaan Timeline IPO",
            "Pemilihan Penjamin Emisi",
            "Persiapan Investor Roadshow",
            "Strategi Pemasaran",
          ],
          price: "Layanan Penuh",
        },
      ],
    },
    restructuring: {
      title: "Restrukturisasi Perusahaan",
      icon: Building,
      description: "Restrukturisasi perusahaan untuk memenuhi syarat go public",
      image:
        "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&h=600&fit=crop", // Corporate structure
      services: [
        {
          icon: Building,
          title: "Restrukturisasi Entitas",
          description:
            "Penataan struktur kepemilikan dan entitas hukum sesuai persyaratan perusahaan terbuka.",
          features: [
            "Restrukturisasi Badan Hukum",
            "Desain Struktur Kepemilikan",
            "Integrasi Anak Perusahaan",
            "Optimasi Pajak",
          ],
          price: "Solusi Khusus",
        },
        {
          icon: Users,
          title: "Tata Kelola Perusahaan",
          description:
            "Implementasi GCG, pembentukan organ perusahaan, dan sistem pengendalian internal.",
          features: [
            "Pembentukan Dewan Direksi",
            "Komisaris Independen",
            "Pembentukan Komite Audit",
            "Sistem Pengendalian Internal",
          ],
          price: "Paket Tata Kelola",
        },
        {
          icon: Shield,
          title: "Manajemen Risiko",
          description:
            "Identifikasi, evaluasi, dan mitigasi risiko bisnis untuk perusahaan publik.",
          features: [
            "Kerangka Penilaian Risiko",
            "Manajemen Kepatuhan",
            "Pembentukan Audit Internal",
            "Rencana Manajemen Krisis",
          ],
          price: "Konsultasi Risiko",
        },
      ],
    },
    compliance: {
      title: "Hukum & Kepatuhan",
      icon: Scale,
      description: "Pendampingan hukum dan kepatuhan regulasi pasar modal",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop", // Legal/compliance
      services: [
        {
          icon: Scale,
          title: "Legal Due Diligence",
          description:
            "Pemeriksaan menyeluruh aspek hukum perusahaan untuk memastikan kesiapan IPO.",
          features: [
            "Tinjauan Hukum Perusahaan",
            "Penilaian Kontrak",
            "Pemeriksaan Litigasi",
            "Kepatuhan Regulasi",
          ],
          price: "Paket Uji Tuntas",
        },
        {
          icon: BookOpen,
          title: "Kepatuhan Regulasi",
          description:
            "Memastikan pemenuhan seluruh persyaratan OJK, BEI, dan regulator terkait.",
          features: [
            "Bantuan Pengajuan OJK",
            "Persyaratan Pencatatan BEI",
            "Dukungan Kepatuhan Berkelanjutan",
            "Pembaruan Regulasi",
          ],
          price: "Layanan Kepatuhan",
        },
        {
          icon: Award,
          title: "Dukungan Pasca IPO",
          description:
            "Pendampingan berkelanjutan pasca IPO untuk memenuhi kewajiban perusahaan terbuka.",
          features: [
            "Pelaporan Kuartalan",
            "Dukungan Aksi Korporasi",
            "Hubungan Investor",
            "Penyusunan Laporan Tahunan",
          ],
          price: "Retainer Tahunan",
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
    <section
      id="services"
      className="section-padding bg-gradient-subtle max-w-7xl mx-auto animate-section">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
            <Lightbulb className="icon-small mr-2" />
            {i18n.language === "id"
              ? "Layanan Profesional"
              : "Professional Services"}
          </div>

          <h2 className="heading-2 text-primary mb-4 sm:mb-6">
            {t("section.title")} <span className="text-gradient">{t("section.titleHighlight")}</span>
          </h2>

          <p className="text-body-large text-muted-foreground whitespace-nowrap">
            {t("section.description")}
          </p>
        </div>

        {/* Service Categories Tabs */}
        <Tabs defaultValue="advisory" className="w-full mb-8 sm:mb-12 lg:mb-18">
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

        {/* Stats Section */}
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
  );
};

export default ServicesSection;
