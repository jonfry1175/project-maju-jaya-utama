import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Star, Target, Users, Brain, Award, ArrowRight, Rocket, Heart, Building } from "lucide-react";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t, i18n } = useTranslation('testimonials');
  const whyChooseUs = [
    {
      icon: Brain,
      title: i18n.language === 'id' ? "Pendekatan Inovatif" : "Innovative Approach",
      description: i18n.language === 'id' ? "Metodologi modern dan teknologi terkini untuk proses IPO yang lebih efisien" : "Modern methodology and latest technology for more efficient IPO process",
      highlight: i18n.language === 'id' ? "Teknologi Terkini" : "Latest Technology",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
    },
    {
      icon: Users,
      title: i18n.language === 'id' ? "Tim Profesional" : "Professional Team",
      description: i18n.language === 'id' ? "Para ahli dengan pengalaman ekstensif di pasar modal Indonesia dan internasional" : "Experts with extensive experience in Indonesian and international capital markets",
      highlight: i18n.language === 'id' ? "30+ Profesional" : "30+ Professionals",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=400&fit=crop"
    },
    {
      icon: Shield,
      title: i18n.language === 'id' ? "Integritas Tinggi" : "High Integrity",
      description: i18n.language === 'id' ? "Komitmen pada transparansi dan etika bisnis tertinggi dalam setiap proses" : "Commitment to transparency and highest business ethics in every process",
      highlight: i18n.language === 'id' ? "100% Transparan" : "100% Transparent",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
    },
    {
      icon: Target,
      title: i18n.language === 'id' ? "Fokus Hasil" : "Result Focused",
      description: i18n.language === 'id' ? "Dedikasi penuh untuk memastikan kesuksesan IPO setiap klien" : "Full dedication to ensure every client's IPO success",
      highlight: i18n.language === 'id' ? "Berorientasi Hasil" : "Result Oriented",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop"
    }
  ];

  const uniqueValues = [
    {
      icon: Rocket,
      title: i18n.language === 'id' ? "Proses Cepat & Efisien" : "Fast & Efficient Process",
      description: i18n.language === 'id' ? "Dengan sistem digital terintegrasi, kami mempercepat proses IPO tanpa mengurangi kualitas" : "With integrated digital system, we accelerate IPO process without compromising quality",
      metrics: i18n.language === 'id' ? "6-12 bulan proses IPO" : "6-12 months IPO process"
    },
    {
      icon: Heart,
      title: i18n.language === 'id' ? "Pendampingan Personal" : "Personal Assistance",
      description: i18n.language === 'id' ? "Setiap klien mendapat tim khusus yang memahami kebutuhan unik perusahaan Anda" : "Each client gets a dedicated team that understands your company's unique needs",
      metrics: i18n.language === 'id' ? "Tim dedicated untuk setiap klien" : "Dedicated team for each client"
    },
    {
      icon: Building,
      title: i18n.language === 'id' ? "Jaringan Luas" : "Extensive Network",
      description: i18n.language === 'id' ? "Koneksi kuat dengan regulator, underwriter, dan investor institusi terkemuka" : "Strong connections with regulators, underwriters, and leading institutional investors",
      metrics: i18n.language === 'id' ? "Akses ke ekosistem pasar modal" : "Access to capital market ecosystem"
    },
    {
      icon: Award,
      title: i18n.language === 'id' ? "Harga Kompetitif" : "Competitive Pricing",
      description: i18n.language === 'id' ? "Struktur biaya transparan dan kompetitif dengan value for money terbaik" : "Transparent and competitive fee structure with best value for money",
      metrics: i18n.language === 'id' ? "Biaya efisien & transparan" : "Efficient & transparent costs"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            <Star className="w-4 h-4 mr-2" />
            {i18n.language === 'id' ? 'Mengapa Memilih Kami' : 'Why Choose Us'}
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-display mb-6 leading-tight">
            {i18n.language === 'id' ? 'Partner Terpercaya untuk' : 'Trusted Partner for'}
            <span className="text-gradient block">{i18n.language === 'id' ? 'Kesuksesan IPO Anda' : 'Your IPO Success'}</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {i18n.language === 'id' ? 'Global Sinergi Kapital hadir dengan pendekatan fresh dan inovatif untuk membantu perusahaan Indonesia go public dengan lebih efisien dan efektif.' : 'Global Sinergi Kapital brings fresh and innovative approaches to help Indonesian companies go public more efficiently and effectively.'}
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="group overflow-hidden bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="inline-flex items-center text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {item.highlight}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Unique Value Propositions */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-primary font-display text-center mb-12">
            {i18n.language === 'id' ? 'Nilai Unik yang Kami Tawarkan' : 'Our Unique Value Propositions'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {uniqueValues.map((value, index) => (
              <Card key={index} className="p-8 bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary font-display mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {value.description}
                    </p>
                    <div className="text-sm font-semibold text-primary">
                      ✓ {value.metrics}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 lg:p-12 text-white shadow-xl max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold font-display text-center mb-8">
            {i18n.language === 'id' ? 'Komitmen Kami untuk Kesuksesan Anda' : 'Our Commitment to Your Success'}
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold font-mono mb-2">100%</div>
              <p className="text-sm text-white/80">{i18n.language === 'id' ? 'Komitmen Penuh' : 'Full Commitment'}</p>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono mb-2">24/7</div>
              <p className="text-sm text-white/80">{i18n.language === 'id' ? 'Dukungan Konsultasi' : 'Consultation Support'}</p>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono mb-2">30+</div>
              <p className="text-sm text-white/80">{i18n.language === 'id' ? 'Tim Profesional' : 'Professional Team'}</p>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono mb-2">1</div>
              <p className="text-sm text-white/80">{i18n.language === 'id' ? 'Solusi Terintegrasi' : 'Integrated Solution'}</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg mb-6 text-white/90">
              {i18n.language === 'id' ? 'Siap memulai perjalanan IPO Anda dengan partner yang tepat?' : 'Ready to start your IPO journey with the right partner?'}
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              {i18n.language === 'id' ? 'Konsultasi Gratis Sekarang' : 'Free Consultation Now'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-primary/5 border border-primary/20 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-primary font-display mb-4">
              {i18n.language === 'id' ? 'Bergabunglah dengan Kami' : 'Join Us'}
            </h4>
            <p className="text-muted-foreground mb-6">
              {i18n.language === 'id' ? 'Jadilah bagian dari perusahaan-perusahaan yang akan kami bantu mencapai kesuksesan IPO' : 'Be part of the companies we will help achieve IPO success'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-xl">
                {i18n.language === 'id' ? 'Mulai Perjalanan IPO' : 'Start IPO Journey'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                {i18n.language === 'id' ? 'Unduh Company Profile' : 'Download Company Profile'}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;