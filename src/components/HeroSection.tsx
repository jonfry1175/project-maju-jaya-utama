
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Award, Users } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: TrendingUp, value: "50+", label: "Perusahaan Berhasil IPO" },
    { icon: Users, value: "15+", label: "Tahun Pengalaman" },
    { icon: Award, value: "98%", label: "Tingkat Keberhasilan" },
    { icon: Shield, value: "100%", label: "Kepatuhan Regulasi" }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                ✨ Solusi IPO Terintegrasi
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-primary font-poppins leading-tight">
                Bersama Menuju
                <span className="bg-gradient-brand bg-clip-text text-transparent"> Bursa</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Global Sinergi Kapital mendampingi Anda dari persiapan hingga sukses melantai di Bursa Efek Indonesia dengan layanan konsultasi yang komprehensif dan terpercaya.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-brand hover:opacity-90 text-lg px-8 py-6">
                Konsultasi Sekarang
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Terdaftar OJK</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary font-poppins">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
