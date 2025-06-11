
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Award, Users } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: TrendingUp, value: "50+", label: "Perusahaan Sukses IPO" },
    { icon: Users, value: "15+", label: "Tahun Pengalaman" },
    { icon: Award, value: "98%", label: "Tingkat Keberhasilan" },
    { icon: Shield, value: "100%", label: "Kepatuhan Regulasi" }
  ];

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center bg-gradient-subtle overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Enhanced Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold border border-accent/20">
                ✨ Solusi IPO Terintegrasi
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-primary font-poppins leading-[1.1]">
                  Bersama Menuju
                  <span className="text-gradient block mt-2">Bursa Efek</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Global Sinergi Kapital mendampingi transformasi perusahaan Anda menjadi entitas publik dengan layanan konsultasi yang komprehensif dan terpercaya.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-brand hover:opacity-90 shadow-brand text-base font-semibold px-8 py-6 h-auto">
                Konsultasi Sekarang
              </Button>
              <Button variant="outline" size="lg" className="text-base font-semibold px-8 py-6 h-auto border-2">
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Trust Indicators - Refined */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="font-medium">Terdaftar OJK</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Refined Stats Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-up">
            {stats.map((stat, index) => (
              <Card key={index} className="group p-6 bg-background/60 blur-backdrop border-2 border-border/60 hover:border-primary/20 hover:shadow-brand transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-primary font-poppins">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
