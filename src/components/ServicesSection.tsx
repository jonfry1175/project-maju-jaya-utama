
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Building, Calculator, Scale, ChartLine, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "IPO Advisory",
      description: "Persiapan dokumen lengkap, valuasi perusahaan, dan kepatuhan regulasi OJK & BEI.",
      features: ["Prospektus Preparation", "Due Diligence", "Regulatory Compliance"]
    },
    {
      icon: Building,
      title: "Corporate Structuring",
      description: "Restrukturisasi perusahaan untuk memenuhi persyaratan sebagai perusahaan publik.",
      features: ["Legal Entity Setup", "Governance Framework", "Board Composition"]
    },
    {
      icon: Calculator,
      title: "Keuangan & Akuntansi",
      description: "Audit finansial, penyusunan laporan keuangan, dan sistem akuntansi yang robust.",
      features: ["Financial Audit", "IFRS Compliance", "Management Reporting"]
    },
    {
      icon: Scale,
      title: "Legal & Compliance",
      description: "Pendampingan aspek hukum dan kepatuhan regulasi sepanjang proses IPO.",
      features: ["Legal Documentation", "Regulatory Filing", "Risk Management"]
    },
    {
      icon: ChartLine,
      title: "Valuasi & Pricing",
      description: "Analisis valuasi komprehensif dan strategi pricing untuk maksimalkan nilai IPO.",
      features: ["Company Valuation", "Market Analysis", "Pricing Strategy"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/20">
            Layanan Kami
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-poppins mb-6 leading-tight">
            Solusi Lengkap untuk
            <span className="text-gradient block">IPO Anda</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Layanan menyeluruh untuk menjamin proses IPO Anda berjalan lancar, tepat waktu, dan sesuai regulasi. Dari persiapan hingga pelantaian di bursa.
          </p>
        </div>

        {/* Services Grid - More Compact & Professional */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {services.slice(0, 3).map((service, index) => (
            <Card key={index} className="group p-6 bg-background/80 blur-backdrop border-2 border-border/60 hover:border-primary/20 hover:shadow-brand transition-all duration-300">
              <div className="space-y-5">
                <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-primary font-poppins mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-xs text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => (
            <Card key={index + 3} className="group p-6 bg-background/80 blur-backdrop border-2 border-border/60 hover:border-primary/20 hover:shadow-brand transition-all duration-300">
              <div className="space-y-5">
                <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-primary font-poppins mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-xs text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Overview - Refined */}
        <div id="process" className="bg-background/60 blur-backdrop rounded-3xl p-8 lg:p-12 border-2 border-border/60 shadow-soft">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary font-poppins mb-4">
              Metodologi Teruji
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pendekatan sistematis, adaptif, dan berbasis hasil untuk memastikan kesuksesan IPO Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {["Konsultasi & Assessment", "Audit & Preparation", "Strategi & Documentation", "Eksekusi & Launch"].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-brand">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-primary mb-3 text-sm leading-tight">{step}</h4>
                <div className="w-full h-1 bg-gradient-brand rounded-full opacity-60"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-brand hover:opacity-90 shadow-brand text-base font-semibold px-8 py-6 h-auto">
              Mulai Konsultasi Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
