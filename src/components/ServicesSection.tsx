
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Building, Calculator, Scale, ChartLine, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "IPO Advisory",
      description: "Persiapan dokumen lengkap, valuasi perusahaan, dan kepatuhan regulasi OJK & BEI.",
      features: ["Prospektus Preparation", "Due Diligence", "Regulatory Compliance", "Timeline Management"]
    },
    {
      icon: Building,
      title: "Corporate Structuring",
      description: "Restrukturisasi perusahaan untuk memenuhi persyaratan sebagai perusahaan publik.",
      features: ["Legal Entity Setup", "Governance Framework", "Board Composition", "Shareholder Structure"]
    },
    {
      icon: Calculator,
      title: "Keuangan & Akuntansi",
      description: "Audit finansial, penyusunan laporan keuangan, dan sistem akuntansi yang robust.",
      features: ["Financial Audit", "IFRS Compliance", "Management Reporting", "Internal Controls"]
    },
    {
      icon: Scale,
      title: "Legal & Compliance",
      description: "Pendampingan aspek hukum dan kepatuhan regulasi sepanjang proses IPO.",
      features: ["Legal Documentation", "Regulatory Filing", "Compliance Framework", "Risk Management"]
    },
    {
      icon: ChartLine,
      title: "Valuasi & Pricing",
      description: "Analisis valuasi komprehensif dan strategi pricing untuk maksimalkan nilai IPO.",
      features: ["Company Valuation", "Market Analysis", "Pricing Strategy", "Investor Relations"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            Layanan Kami
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-poppins mb-6">
            Solusi Lengkap untuk IPO Anda
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Layanan menyeluruh untuk menjamin proses IPO Anda berjalan lancar, tepat waktu, dan sesuai regulasi. Dari persiapan hingga pelantaian di bursa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-white border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-primary font-poppins mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary font-poppins mb-4">
              Metodologi Teruji
            </h3>
            <p className="text-xl text-muted-foreground">
              Pendekatan kami sistematis, adaptif, dan berbasis hasil untuk memastikan kesuksesan IPO Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {["Konsultasi & Assessment", "Audit & Preparation", "Strategi & Documentation", "Eksekusi & Launch"].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">{step}</h4>
                <div className="w-full h-1 bg-gradient-brand rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-brand hover:opacity-90 text-lg px-8 py-6">
              Mulai Konsultasi Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
