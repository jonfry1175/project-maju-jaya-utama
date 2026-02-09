import MotionSection from "@/components/MotionSection";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck, Gauge, Handshake, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";

const CompanyStrategySection = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";

  const pillars = [
    {
      icon: CircleCheck,
      title: isId ? "Kualitas Konsisten" : "Consistent Quality",
      description: isId
        ? "Kontrol proses dan quality check berlapis untuk menjaga standar produk."
        : "Layered process control and quality checks to maintain product standards.",
    },
    {
      icon: Gauge,
      title: isId ? "Efisiensi Produksi" : "Production Efficiency",
      description: isId
        ? "Optimasi kapasitas mesin dan alur kerja agar pengiriman tetap tepat waktu."
        : "Machine capacity and workflow optimization to keep deliveries on schedule.",
    },
    {
      icon: Lightbulb,
      title: isId ? "Inovasi Produk" : "Product Innovation",
      description: isId
        ? "Pengembangan kemasan plastik, produk go green, dan biodegradable berdasarkan kebutuhan pasar."
        : "Development of plastic packaging, go-green, and biodegradable products based on market needs.",
    },
    {
      icon: Handshake,
      title: isId ? "Kemitraan Jangka Panjang" : "Long-Term Partnership",
      description: isId
        ? "Layanan terintegrasi, komunikasi cepat, dan dukungan teknis untuk klien."
        : "Integrated service, fast communication, and technical support for clients.",
    },
  ];

  return (
    <MotionSection className="section-padding bg-background" id="company-strategy">
      <div className="container mx-auto container-padding max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            {isId ? "Strategi Perusahaan" : "Company Strategy"}
          </p>
          <h2 className="heading-md mt-3">
            {isId
              ? "Kerangka Kerja untuk Pertumbuhan Berkelanjutan"
              : "Execution Framework for Sustainable Growth"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="border-card-border h-full card-hover">
              <CardContent className="p-6 lg:p-7">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <pillar.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="heading-sm">{pillar.title}</h3>
                <p className="text-body text-muted-foreground mt-3">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default CompanyStrategySection;
