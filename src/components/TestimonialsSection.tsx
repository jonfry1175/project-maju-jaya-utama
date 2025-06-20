import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Star,
  Target,
  Users,
  Brain,
  Award,
  ArrowRight,
  Rocket,
  Heart,
  Building,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t, i18n } = useTranslation("testimonials");
  const whyChooseUs = [
    {
      icon: Brain,
      title:
        i18n.language === "id" ? "Pendekatan Inovatif" : "Innovative Approach",
      description:
        i18n.language === "id"
          ? "Metodologi modern dan teknologi terkini untuk proses IPO yang lebih efisien"
          : "Modern methodology and latest technology for more efficient IPO process",
      highlight:
        i18n.language === "id" ? "Teknologi Terkini" : "Latest Technology",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    },
    {
      icon: Users,
      title: i18n.language === "id" ? "Tim Profesional" : "Professional Team",
      description:
        i18n.language === "id"
          ? "Para ahli dengan pengalaman ekstensif di pasar modal Indonesia dan internasional"
          : "Experts with extensive experience in Indonesian and international capital markets",
      highlight:
        i18n.language === "id" ? "30+ Profesional" : "30+ Professionals",
      image:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=400&fit=crop",
    },
    {
      icon: Shield,
      title: i18n.language === "id" ? "Integritas Tinggi" : "High Integrity",
      description:
        i18n.language === "id"
          ? "Komitmen pada transparansi dan etika bisnis tertinggi dalam setiap proses"
          : "Commitment to transparency and highest business ethics in every process",
      highlight:
        i18n.language === "id" ? "100% Transparan" : "100% Transparent",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    },
    {
      icon: Target,
      title: i18n.language === "id" ? "Fokus Hasil" : "Result Focused",
      description:
        i18n.language === "id"
          ? "Dedikasi penuh untuk memastikan kesuksesan IPO setiap klien"
          : "Full dedication to ensure every client's IPO success",
      highlight:
        i18n.language === "id" ? "Berorientasi Hasil" : "Result Oriented",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    },
  ];

  const uniqueValues = [
    {
      icon: Rocket,
      title:
        i18n.language === "id"
          ? "Proses Cepat & Efisien"
          : "Fast & Efficient Process",
      description:
        i18n.language === "id"
          ? "Dengan sistem digital terintegrasi, kami mempercepat proses IPO tanpa mengurangi kualitas"
          : "With integrated digital system, we accelerate IPO process without compromising quality",
      metrics:
        i18n.language === "id"
          ? "6-12 bulan proses IPO"
          : "6-12 months IPO process",
    },
    {
      icon: Heart,
      title:
        i18n.language === "id"
          ? "Pendampingan Personal"
          : "Personal Assistance",
      description:
        i18n.language === "id"
          ? "Setiap klien mendapat tim khusus yang memahami kebutuhan unik perusahaan Anda"
          : "Each client gets a dedicated team that understands your company's unique needs",
      metrics:
        i18n.language === "id"
          ? "Tim dedicated untuk setiap klien"
          : "Dedicated team for each client",
    },
    {
      icon: Building,
      title: i18n.language === "id" ? "Jaringan Luas" : "Extensive Network",
      description:
        i18n.language === "id"
          ? "Koneksi kuat dengan regulator, underwriter, dan investor institusi terkemuka"
          : "Strong connections with regulators, underwriters, and leading institutional investors",
      metrics:
        i18n.language === "id"
          ? "Akses ke ekosistem pasar modal"
          : "Access to capital market ecosystem",
    },
    {
      icon: Award,
      title:
        i18n.language === "id" ? "Harga Kompetitif" : "Competitive Pricing",
      description:
        i18n.language === "id"
          ? "Struktur biaya transparan dan kompetitif dengan value for money terbaik"
          : "Transparent and competitive fee structure with best value for money",
      metrics:
        i18n.language === "id"
          ? "Biaya efisien & transparan"
          : "Efficient & transparent costs",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
            <Star className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
            {i18n.language === "id" ? "Mengapa Memilih Kami" : "Why Choose Us"}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary font-display mb-4 sm:mb-6 leading-tight">
            {i18n.language === "id"
              ? "Partner Terpercaya untuk"
              : "Trusted Partner for"}
            <span className="text-gradient block mt-1 sm:mt-2 leading-normal pb-1 sm:pb-2">
              {i18n.language === "id"
                ? "Kesuksesan IPO Anda"
                : "Your IPO Success"}
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            {i18n.language === "id"
              ? "Global Sinergi Kapital hadir dengan pendekatan fresh dan inovatif untuk membantu perusahaan Indonesia go public dengan lebih efisien dan efektif."
              : "Global Sinergi Kapital brings fresh and innovative approaches to help Indonesian companies go public more efficiently and effectively."}
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {whyChooseUs.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              {/* Image Section */}
              <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-5 lg:p-6 space-y-2 sm:space-y-3">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="inline-flex items-center text-xs font-semibold text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full">
                  {item.highlight}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Unique Value Propositions */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary font-display text-center mb-8 sm:mb-10 lg:mb-12">
            {i18n.language === "id"
              ? "Nilai Unik yang Kami Tawarkan"
              : "Our Unique Value Propositions"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
            {uniqueValues.map((value, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <value.icon
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-foreground font-display leading-tight">
                      {value.title}
                    </h4>
                    <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                    <div className="inline-flex items-center bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                      {value.metrics}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary font-display mb-2 sm:mb-3">
                {i18n.language === "id"
                  ? "Mulai Perjalanan IPO Anda Hari Ini"
                  : "Start Your IPO Journey Today"}
              </h4>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-4 sm:mb-6">
                {i18n.language === "id"
                  ? "Dapatkan konsultasi gratis dan pelajari bagaimana kami dapat membantu perusahaan Anda go public dengan sukses."
                  : "Get a free consultation and learn how we can help your company go public successfully."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="btn-gradient-brand shadow-brand text-xs sm:text-sm lg:text-base font-semibold px-4 sm:px-6 lg:px-8 group w-full sm:w-auto">
                  {i18n.language === "id"
                    ? "Konsultasi Gratis"
                    : "Free Consultation"}
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-xs sm:text-sm lg:text-base font-semibold px-4 sm:px-6 lg:px-8 border-2 w-full sm:w-auto">
                  <Building className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                  {i18n.language === "id"
                    ? "Pelajari Lebih Lanjut"
                    : "Learn More"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
