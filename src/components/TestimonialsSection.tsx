import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Star, Target, Users, Brain, Award, ArrowRight, Rocket, Heart, Building } from "lucide-react";

const TestimonialsSection = () => {
  const whyChooseUs = [
    {
      icon: Brain,
      title: "Pendekatan Inovatif",
      description: "Metodologi modern dan teknologi terkini untuk proses IPO yang lebih efisien",
      highlight: "Teknologi Terkini"
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Para ahli dengan pengalaman ekstensif di pasar modal Indonesia dan internasional",
      highlight: "30+ Profesional"
    },
    {
      icon: Shield,
      title: "Integritas Tinggi",
      description: "Komitmen pada transparansi dan etika bisnis tertinggi dalam setiap proses",
      highlight: "100% Transparan"
    },
    {
      icon: Target,
      title: "Fokus Hasil",
      description: "Dedikasi penuh untuk memastikan kesuksesan IPO setiap klien",
      highlight: "Berorientasi Hasil"
    }
  ];

  const uniqueValues = [
    {
      icon: Rocket,
      title: "Proses Cepat & Efisien",
      description: "Dengan sistem digital terintegrasi, kami mempercepat proses IPO tanpa mengurangi kualitas",
      metrics: "6-12 bulan proses IPO"
    },
    {
      icon: Heart,
      title: "Pendampingan Personal",
      description: "Setiap klien mendapat tim khusus yang memahami kebutuhan unik perusahaan Anda",
      metrics: "Tim dedicated untuk setiap klien"
    },
    {
      icon: Building,
      title: "Jaringan Luas",
      description: "Koneksi kuat dengan regulator, underwriter, dan investor institusi terkemuka",
      metrics: "Akses ke ekosistem pasar modal"
    },
    {
      icon: Award,
      title: "Harga Kompetitif",
      description: "Struktur biaya transparan dan kompetitif dengan value for money terbaik",
      metrics: "Biaya efisien & transparan"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-success/20">
            <Star className="w-4 h-4 mr-2" />
            Mengapa Memilih Kami
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-display mb-6 leading-tight">
            Partner Terpercaya untuk
            <span className="text-gradient block">Kesuksesan IPO Anda</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Global Sinergi Kapital hadir dengan pendekatan fresh dan inovatif untuk membantu perusahaan Indonesia go public dengan lebih efisien dan efektif.
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="p-6 bg-gradient-subtle border-2 border-border/60 hover:border-primary/20 hover:shadow-brand transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary font-display mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {item.highlight}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Unique Value Propositions */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-primary font-display text-center mb-12">
            Nilai Unik yang Kami Tawarkan
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {uniqueValues.map((value, index) => (
              <Card key={index} className="p-8 bg-background/80 border-2 border-border/60 hover:border-primary/20 hover:shadow-brand transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary font-display mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {value.description}
                    </p>
                    <div className="text-sm font-semibold text-success">
                      ✓ {value.metrics}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-brand rounded-3xl p-8 lg:p-12 text-white shadow-brand max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold font-display text-center mb-8">
            Komitmen Kami untuk Kesuksesan Anda
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold font-mono mb-2">100%</div>
              <p className="text-sm text-white/80">Komitmen Penuh</p>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono mb-2">24/7</div>
              <p className="text-sm text-white/80">Dukungan Konsultasi</p>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono mb-2">30+</div>
              <p className="text-sm text-white/80">Tim Profesional</p>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono mb-2">1</div>
              <p className="text-sm text-white/80">Solusi Terintegrasi</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg mb-6 text-white/90">
              Siap memulai perjalanan IPO Anda dengan partner yang tepat?
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Konsultasi Gratis Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-subtle border-2 border-primary/20 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-primary font-display mb-4">
              Bergabunglah dengan Kami
            </h4>
            <p className="text-muted-foreground mb-6">
              Jadilah bagian dari perusahaan-perusahaan yang akan kami bantu mencapai kesuksesan IPO
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient-brand shadow-brand">
                Mulai Perjalanan IPO
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Unduh Company Profile
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;