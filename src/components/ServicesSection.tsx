import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, Building, Calculator, Scale, ChartLine, CheckCircle, 
  TrendingUp, Users, Shield, Clock, Award, BookOpen, 
  Download, ArrowRight, Briefcase, Target, Lightbulb, Phone
} from "lucide-react";
import { useState } from "react";

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("advisory");

  const serviceCategories = {
    advisory: {
      title: "IPO Advisory",
      icon: Briefcase,
      description: "Layanan konsultasi komprehensif untuk persiapan dan pelaksanaan IPO",
      services: [
        {
          icon: FileText,
          title: "Persiapan Dokumen IPO",
          description: "Penyusunan prospektus, laporan keuangan, dan dokumen regulasi lengkap sesuai standar OJK dan BEI.",
          features: [
            "Prospektus & Company Profile",
            "Financial Statement Preparation",
            "Legal Documentation Review",
            "Risk Factor Analysis"
          ],
          price: "Paket Premium"
        },
        {
          icon: ChartLine,
          title: "Valuasi & Analisis Pasar",
          description: "Penentuan nilai wajar perusahaan dan strategi pricing optimal berdasarkan kondisi pasar.",
          features: [
            "Comprehensive Business Valuation",
            "Industry & Market Analysis",
            "Peer Comparison Study",
            "IPO Pricing Strategy"
          ],
          price: "Konsultasi Khusus"
        },
        {
          icon: Target,
          title: "Strategi Go Public",
          description: "Perencanaan strategis timeline IPO, pemilihan underwriter, dan roadshow preparation.",
          features: [
            "IPO Timeline Planning",
            "Underwriter Selection",
            "Investor Roadshow Prep",
            "Marketing Strategy"
          ],
          price: "Full Service"
        }
      ]
    },
    restructuring: {
      title: "Corporate Restructuring",
      icon: Building,
      description: "Restrukturisasi perusahaan untuk memenuhi syarat go public",
      services: [
        {
          icon: Building,
          title: "Restrukturisasi Entitas",
          description: "Penataan struktur kepemilikan dan entitas hukum sesuai persyaratan perusahaan terbuka.",
          features: [
            "Legal Entity Restructuring",
            "Ownership Structure Design",
            "Subsidiary Integration",
            "Tax Optimization"
          ],
          price: "Customized Solution"
        },
        {
          icon: Users,
          title: "Tata Kelola Perusahaan",
          description: "Implementasi GCG, pembentukan organ perusahaan, dan sistem pengendalian internal.",
          features: [
            "Board of Directors Setup",
            "Independent Commissioner",
            "Audit Committee Formation",
            "Internal Control System"
          ],
          price: "Governance Package"
        },
        {
          icon: Shield,
          title: "Manajemen Risiko",
          description: "Identifikasi, evaluasi, dan mitigasi risiko bisnis untuk perusahaan publik.",
          features: [
            "Risk Assessment Framework",
            "Compliance Management",
            "Internal Audit Setup",
            "Crisis Management Plan"
          ],
          price: "Risk Advisory"
        }
      ]
    },
    compliance: {
      title: "Legal & Compliance",
      icon: Scale,
      description: "Pendampingan hukum dan kepatuhan regulasi pasar modal",
      services: [
        {
          icon: Scale,
          title: "Legal Due Diligence",
          description: "Pemeriksaan menyeluruh aspek hukum perusahaan untuk memastikan kesiapan IPO.",
          features: [
            "Corporate Legal Review",
            "Contract Assessment",
            "Litigation Check",
            "Regulatory Compliance"
          ],
          price: "Due Diligence Package"
        },
        {
          icon: BookOpen,
          title: "Kepatuhan Regulasi",
          description: "Memastikan pemenuhan seluruh persyaratan OJK, BEI, dan regulator terkait.",
          features: [
            "OJK Filing Assistance",
            "BEI Listing Requirements",
            "Ongoing Compliance Support",
            "Regulatory Updates"
          ],
          price: "Compliance Service"
        },
        {
          icon: Award,
          title: "Post-IPO Support",
          description: "Pendampingan berkelanjutan pasca IPO untuk memenuhi kewajiban perusahaan terbuka.",
          features: [
            "Quarterly Reporting",
            "Corporate Actions Support",
            "Investor Relations",
            "Annual Report Preparation"
          ],
          price: "Annual Retainer"
        }
      ]
    }
  };

  const stats = [
    { icon: TrendingUp, value: "127+", label: "IPO Sukses" },
    { icon: Clock, value: "6-12", label: "Bulan Proses" },
    { icon: Award, value: "98.7%", label: "Success Rate" },
    { icon: Users, value: "50+", label: "Tim Profesional" }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/20">
            <Lightbulb className="w-4 h-4 mr-2" />
            Layanan Profesional
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-display mb-6 leading-tight">
            Solusi Terintegrasi untuk
            <span className="text-gradient block">Kesuksesan IPO Anda</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dari persiapan awal hingga pencatatan di bursa, kami menyediakan layanan end-to-end dengan tim ahli berpengalaman dan metodologi teruji.
          </p>
        </div>

        {/* Service Categories Tabs */}
        <Tabs defaultValue="advisory" className="w-full mb-16">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12">
            {Object.entries(serviceCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="flex items-center space-x-2 data-[state=active]:bg-gradient-brand data-[state=active]:text-white"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(serviceCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-primary font-display mb-3">{category.title}</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {category.services.map((service, index) => {
                  const ServiceIcon = service.icon;
                  return (
                    <Card key={index} className="group p-8 bg-background/80 blur-backdrop border-2 border-border/60 hover:border-primary/20 hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
                      <div className="space-y-6">
                        <div className="flex items-start justify-between">
                          <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ServiceIcon className="w-7 h-7 text-white" />
                          </div>
                          <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                            {service.price}
                          </span>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-primary font-display mb-3">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {service.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Button variant="outline" className="w-full group/btn">
                          Pelajari Lebih Lanjut
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-background/60 rounded-2xl border border-border/40">
                <StatIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary font-mono">{stat.value}</div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div id="process" className="bg-gradient-brand text-white rounded-3xl p-8 lg:p-12 shadow-brand">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold font-display mb-4">
              Proses IPO yang Terstruktur
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Metodologi 4 tahap yang telah terbukti membawa 127+ perusahaan menuju kesuksesan IPO
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Feasibility Study", 
                desc: "Analisis kelayakan dan kesiapan perusahaan untuk go public",
                duration: "1-2 bulan"
              },
              { 
                step: "02", 
                title: "Preparation", 
                desc: "Restrukturisasi, audit, dan persiapan dokumen IPO",
                duration: "3-6 bulan"
              },
              { 
                step: "03", 
                title: "Filing & Approval", 
                desc: "Pengajuan ke OJK dan proses persetujuan regulasi",
                duration: "2-3 bulan"
              },
              { 
                step: "04", 
                title: "Public Offering", 
                desc: "Bookbuilding, pricing, dan pencatatan di BEI",
                duration: "1-2 bulan"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold">{phase.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-white/30">
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-lg mb-2">{phase.title}</h4>
                <p className="text-sm text-white/80 mb-2">{phase.desc}</p>
                <p className="text-xs text-white/60">Durasi: {phase.duration}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Download className="mr-2 h-5 w-5" />
              Download IPO Guidebook
            </Button>
            <p className="text-sm text-white/80">
              Panduan lengkap 50+ halaman tentang proses IPO di Indonesia
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 lg:p-12 bg-background/80 border-2 border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary font-display mb-4">
              Siap Memulai Perjalanan IPO Anda?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Konsultasi gratis dengan tim ahli kami untuk mengetahui kesiapan perusahaan Anda dan langkah selanjutnya menuju go public.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gradient-brand shadow-brand">
                Jadwalkan Konsultasi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-5 w-5" />
                Hubungi: (021) 1234-5678
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;