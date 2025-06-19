
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Award, Building2, Play, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation('hero');
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  
  const stats = [
    { icon: Building2, value: 100, suffix: "%", label: t('stats.commitment.label'), color: "primary" },
    { icon: TrendingUp, value: 24, suffix: "/7", label: t('stats.support.label'), color: "accent" },
    { icon: Award, value: 1, suffix: "", label: t('stats.solution.label'), color: "primary" },
    { icon: Users, value: 30, suffix: "+", label: t('stats.team.label'), color: "accent" }
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
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          alt="Jakarta Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
        {/* Dark overlay for text areas */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
      </div>
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(0,0,0,0.02)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
      }}></div>
      
      {/* Subtle gradient accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-accent/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Enhanced Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-background/90 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 shadow-lg">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                {t('badge')}
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-primary font-display leading-tight lg:leading-[1.2]" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  {t('title')}
                  <span className="text-gradient block mt-3 lg:mt-4">{t('titleHighlight')}</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed lg:leading-relaxed max-w-xl pt-2">
                  {t('description')}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-gradient-brand shadow-brand text-base font-semibold px-8 py-6 h-auto group">
                {t('cta.startJourney')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-base font-semibold px-8 py-6 h-auto border-2 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t('cta.watchVideo')}
              </Button>
            </div>

            {/* Partner Logos */}
            <div className="space-y-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg inline-block border border-gray-100">
              <div className="flex items-center gap-2">
                <img 
                  src="/logo.png" 
                  alt="Global Sinergi Kapital" 
                  className="w-8 h-8 object-contain"
                />
                <p className="text-sm text-gray-600 font-medium">{t('partners.label')}</p>
              </div>
              <div className="flex items-center justify-center gap-8 px-4">
                <div className="flex items-center h-12">
                  <img 
                    src="/logo/logo-bei.webp" 
                    alt="BEI - Indonesia Stock Exchange" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="flex items-center h-12">
                  <img 
                    src="/logo/logo-ojk.png" 
                    alt="OJK - Indonesia Financial Services Authority" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="flex items-center h-12">
                  <img 
                    src="/logo/logo-ksei.png" 
                    alt="KSEI - Indonesia Central Securities Depository" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="flex items-center h-12 bg-gray-100 rounded px-3">
                  <img 
                    src="/logo/logo-kpei.png" 
                    alt="KPEI - Indonesia Clearing Guarantee Corporation" 
                    className="h-10 w-auto object-contain"
                  />
                </div>
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
                  className="group relative overflow-hidden bg-background/90 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                >
                  <div className="p-6 lg:p-8 space-y-4">
                    {/* Icon with subtle styling */}
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 ${
                      stat.color === 'primary' ? 'bg-primary/10' : 
                      stat.color === 'success' ? 'bg-success/10' :
                      stat.color === 'accent' ? 'bg-accent/10' :
                      'bg-secondary/10'
                    } rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                      <Icon className={`w-7 h-7 lg:w-8 lg:h-8 ${
                        stat.color === 'primary' ? 'text-primary' : 
                        stat.color === 'success' ? 'text-success' :
                        stat.color === 'accent' ? 'text-accent' :
                        'text-secondary'
                      }`} strokeWidth={1.5} />
                    </div>
                    
                    {/* Clean Typography */}
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl lg:text-4xl font-bold text-foreground font-display">
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
