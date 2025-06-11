
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Award, Users, ArrowRight, Play, Building2 } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  
  const stats = [
    { icon: Building2, value: 100, suffix: "%", label: "Komitmen Penuh", color: "primary" },
    { icon: TrendingUp, value: 24, suffix: "/7", label: "Dukungan Konsultasi", color: "success" },
    { icon: Award, value: 1, suffix: "", label: "Solusi Terintegrasi", color: "accent" },
    { icon: Users, value: 30, suffix: "+", label: "Tim Profesional", color: "secondary" }
  ];

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const stepValue = stat.value / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.min(stepValue * currentStep, stat.value);
            return newCounters;
          });

          if (currentStep >= steps) {
            clearInterval(interval);
          }
        }, duration / steps);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('hero-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(0,0,0,0.02)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Enhanced Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold border border-accent/20 animate-pulse">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                Mitra Resmi BEI & OJK
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-primary font-display leading-[1.1]">
                  Wujudkan Ambisi IPO
                  <span className="text-gradient block mt-2">Dengan Kepastian</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Sebagai konsultan IPO inovatif yang baru berdiri, kami menghadirkan perspektif segar dan pendekatan modern untuk memandu transformasi perusahaan Anda menuju pasar modal Indonesia.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-gradient-brand shadow-brand text-base font-semibold px-8 py-6 h-auto group">
                Mulai Perjalanan IPO
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-base font-semibold px-8 py-6 h-auto border-2 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Tonton Video Pengantar
              </Button>
            </div>

            {/* Partner Logos */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/logo.png" 
                  alt="Global Sinergi Kapital" 
                  className="w-8 h-8 object-contain"
                />
                <p className="text-sm text-muted-foreground font-medium">Mitra terpercaya:</p>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-primary/80 font-bold text-lg">BEI</div>
                <div className="text-primary/80 font-bold text-lg">OJK</div>
                <div className="text-primary/80 font-bold text-lg">KSEI</div>
                <div className="text-primary/80 font-bold text-lg">KPEI</div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Stats Grid */}
          <div id="hero-stats" className="grid grid-cols-2 gap-5 animate-fade-up">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const displayValue = stat.value % 1 !== 0 ? counters[index].toFixed(1) : Math.floor(counters[index]);
              
              return (
                <Card 
                  key={index} 
                  className="group p-6 lg:p-8 bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Icon with better styling */}
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 ${
                      stat.color === 'primary' ? 'bg-primary/10' : 
                      stat.color === 'success' ? 'bg-green-500/10' :
                      stat.color === 'accent' ? 'bg-accent/10' :
                      'bg-secondary/10'
                    } rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 lg:w-7 lg:h-7 ${
                        stat.color === 'primary' ? 'text-primary' : 
                        stat.color === 'success' ? 'text-green-500' :
                        stat.color === 'accent' ? 'text-accent' :
                        'text-secondary'
                      }`} strokeWidth={2} />
                    </div>
                    
                    {/* Improved Typography */}
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-3xl lg:text-4xl font-bold text-foreground font-display tracking-tight">
                          {displayValue}
                        </span>
                        <span className="text-xl lg:text-2xl font-medium text-foreground/70">
                          {stat.suffix}
                        </span>
                      </div>
                      <p className="text-sm lg:text-base text-muted-foreground font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
