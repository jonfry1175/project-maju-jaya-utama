import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Users, Award, Calendar, CheckCircle, ArrowRight, Building, Briefcase, Trophy, Rocket, Brain, Heart, FileText, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t, i18n } = useTranslation('about');
  const [activeTab, setActiveTab] = useState(0);
  
  const roadmap = [
    { 
      year: "2025", 
      titleKey: "2025",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    },
    { 
      year: "2026", 
      titleKey: "2026",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    { 
      year: "2027", 
      titleKey: "2027",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
    },
    { 
      year: "2028", 
      titleKey: "2028",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
    },
    { 
      year: "2029", 
      titleKey: "2029",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
    },
    { 
      year: "2030", 
      titleKey: "2030",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    }
  ];
  
  const team = ["ceo", "coo", "cfo"];

  const values = [
    {
      key: "innovation",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      key: "integrity",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
    },
    {
      key: "collaboration",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
    },
    {
      key: "excellence",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      key: "professional"
    },
    {
      icon: Target,
      key: "innovative"
    },
    {
      icon: Building,
      key: "network"
    },
    {
      icon: Trophy,
      key: "commitment"
    }
  ];

  return (
    <section id="about" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        {/* Header - Enhanced */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            <Building className="w-4 h-4 mr-2" />
            {t('section.badge')}
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-display mb-6 leading-tight">
            {t('section.title')}
            <span className="text-gradient block">{t('section.titleHighlight')}</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t('section.description')}
          </p>
        </div>

        {/* Values Grid - Clean Image Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {values.map((value, index) => (
            <Card key={index} className="group overflow-hidden bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={value.image} 
                  alt={t(`values.${value.key}.title`)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-foreground">
                  {t(`values.${value.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`values.${value.key}.description`)}
                </p>
              </div>
            </Card>
          ))}
        </div>
  {/* Company Profile Section - RITZ Corp */}
  <div className="mb-8">
          <div className="max-w-7xl mx-auto">
            <Card className="overflow-hidden bg-gradient-to-br from-background to-background/50 border border-border/50 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-full min-h-[400px] overflow-hidden">
                  <img 
                    src="/public/Section/tinywow_tinywow_RITZ Corpora Indonesia Company Profile - 2024_compressed_81741712_81741767_1.jpg" 
                    alt="RITZ Corp Team"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/20 lg:to-background/50"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
                      <Building className="w-4 h-4 mr-2" />
                      {t('ritzProfile.badge')}
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-primary font-display leading-tight">
                      {t('ritzProfile.title')}
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-base leading-relaxed">
                      {t('ritzProfile.description.main')}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">{t('ritzProfile.businessLines.financial.title')}</p>
                          <p className="text-sm">{t('ritzProfile.businessLines.financial.description')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">{t('ritzProfile.businessLines.consulting.title')}</p>
                          <p className="text-sm">{t('ritzProfile.businessLines.consulting.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <div className="text-2xl font-bold text-primary">{t('ritzProfile.stats.partners')}</div>
                        <div className="text-sm text-muted-foreground">{t('ritzProfile.stats.partnersLabel')}</div>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <div className="text-2xl font-bold text-primary">{t('ritzProfile.stats.experience')}</div>
                        <div className="text-sm text-muted-foreground">{t('ritzProfile.stats.experienceLabel')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
                        {/* Our Approach Section */}
        <div className="mb-8">
          <div className="max-w-7xl mx-auto">
            <Card className="overflow-hidden bg-gradient-to-br from-background to-background/50 border border-border/50 shadow-xl">
              <div className="relative">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <div className="w-full h-full bg-gradient-to-r from-background via-background/95 to-background/80"></div>
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop')] bg-cover bg-center opacity-10"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8 lg:p-12">
                  {/* Header */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
                      <Target className="w-4 h-4 mr-2" />
                      {t('approach.badge')}
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-primary font-display leading-tight">
                      {t('approach.title')}
                    </h3>
                  </div>
                  
                  {/* Steps Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((step, index) => (
                      <div key={step} className="relative group">
                        <Card className="h-full p-6 bg-background/95 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                          {/* Step Number */}
                          <div className="mb-4">
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl font-bold text-xl ${
                              step === 1 ? 'bg-green-500/10 text-green-600 border border-green-500/20' :
                              step === 2 ? 'bg-slate-500/10 text-slate-600 border border-slate-500/20' :
                              step === 3 ? 'bg-yellow-500/10 text-yellow-600 border border-yellow-500/20' :
                              'bg-orange-500/10 text-orange-600 border border-orange-500/20'
                            }`}>
                              0{step}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-3">
                            <h4 className="text-lg font-bold text-foreground leading-tight">
                              {t(`approach.steps.step${step}.title`)}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {t(`approach.steps.step${step}.description`)}
                            </p>
                          </div>
                          
                          {/* Connector Line (except for last item) */}
                          {index < 3 && (
                            <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2 z-10">
                              <ArrowRight className="absolute -right-1 -top-2 w-4 h-4 text-primary/50" />
                            </div>
                          )}
                        </Card>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom CTA */}
                  <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">
                      {t('approach.cta.description')}
                    </p>
                    <div className="inline-flex items-center text-primary font-semibold">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {t('approach.cta.text')}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
                {/* Our Main Client Section */}
                <div className="mb-20">
          <div className="max-w-7xl mx-auto">
            <Card className="overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 border border-border/50 shadow-xl">
              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
                    <Users className="w-4 h-4 mr-2" />
                    {t('mainClients.badge')}
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-primary font-display leading-tight mb-4">
                    {t('mainClients.title')}
                  </h3>
                  
                  <p className="text-lg text-primary/80 font-semibold mb-6">
                    {t('mainClients.subtitle')}
                  </p>
                  
                  <div className="max-w-4xl mx-auto space-y-4">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {t('mainClients.description.main')}
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {t('mainClients.description.secondary')}
                    </p>
                  </div>
                </div>
                
                {/* Client Logos Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center justify-items-center">
                  {/* Row 1 */}
                  <div className="flex items-center justify-center h-20 w-full">
                    <img 
                      src="/public/Sponsor/logo-sponsor-gsk-mandiri.jpg" 
                      alt="Mandiri"
                      className="h-18 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  
                  <div className="flex items-center justify-center h-20 w-full">
                    <img 
                      src="/public/Sponsor/logo-sponsor-gsk-bni.jpg" 
                      alt="BNI"
                      className="h-18 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  
                  <div className="flex items-center justify-center h-20 w-full">
                    <img 
                      src="/public/Sponsor/logo-sponsor-gsk-maybank.jpg" 
                      alt="Maybank"
                      className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  
                  <div className="flex items-center justify-center h-20 w-full">
                    <img 
                      src="/public/Sponsor/logo-sponsor-gsk-angkasa.jpg" 
                      alt="Angkasa Pura II"
                      className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  
                  <div className="flex items-center justify-center h-20 w-full">
                    <img 
                      src="/public/Sponsor/logo-sponsor-gsk-bri.png" 
                      alt="BRI Agro"
                      className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  
                  {/* Row 2 */}
                  <div className="flex items-center justify-center h-20 w-full">
                    <img 
                      src="/public/Sponsor/logo-sponsor-gsk-telkom.jpg" 
                      alt="Telkomsel"
                      className="h-18 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  
                  <div className="flex items-center justify-center h-20 w-full">
                    <img 
                      src="/public/Sponsor/logo-ski-sponsor-pelindo.png" 
                      alt="Pelindo"
                      className="h-18 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  
                  <div className="flex items-center justify-center h-20 w-full">
                    <img 
                      src="/public/Sponsor/logo-sponsor-gsk-tempo.png" 
                      alt="Tempo Media Group"
                      className="h-18 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  
                  <div className="flex items-center justify-center h-20 w-full">
                    <img 
                      src="/public/Sponsor/logo-sponsor-gsk-alif.png" 
                      alt="Alif"
                      className="h-18 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  
                  {/* Logo Pertamina in the last row */}
                  <div className="flex items-center justify-center h-20 w-full">
                    <img 
                      src="/public/Sponsor/logo-sponsor-gsk-pertamina.jpg" 
                      alt="Pertamina"
                      className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                </div>
                
                {/* Bottom Stats */}
                <div className="mt-12 pt-8 border-t border-border/30">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">10+</div>
                      <div className="text-sm text-muted-foreground">Major Clients</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Industries Served</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
                    </div>
        </div>

        {/* Business Advisory & Investment Services Section */}
        <div className="mb-8">
          <div className="max-w-7xl mx-auto">
            <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 shadow-xl">
              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">
                    <FileText className="w-4 h-4 mr-2" />
                    {t('businessServices.badge')}
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-primary font-display leading-tight mb-3">
                    {t('businessServices.title')}
                  </h3>
                  
                  <p className="text-lg text-primary/80 font-semibold mb-4">
                    {t('businessServices.subtitle')}
                  </p>
                  
                  <div className="max-w-4xl mx-auto">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {t('businessServices.description')}
                    </p>
                  </div>
                </div>
                
                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                  {/* Pelindo 1 */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.projects.pelindo1.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-ski-sponsor-pelindo.png" 
                          alt="Pelindo"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.projects.pelindo1.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.projects.pelindo1.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Pelindo 2 */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.projects.pelindo2.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-ski-sponsor-pelindo.png" 
                          alt="Pelindo"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.projects.pelindo2.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.projects.pelindo2.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Pelindo 3 */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.projects.pelindo3.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-ski-sponsor-pelindo.png" 
                          alt="Pelindo"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.projects.pelindo3.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.projects.pelindo3.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Pelindo 4 */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.projects.pelindo4.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-ski-sponsor-pelindo.png" 
                          alt="Pelindo"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.projects.pelindo4.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.projects.pelindo4.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* WSKT */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.projects.wskt.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-sgk-wskt.jpg" 
                          alt="WSKT"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.projects.wskt.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.projects.wskt.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* WR Realty */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.projects.wrRealty.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-sgk-wrealty.jpg" 
                          alt="Wrealty"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.projects.wrRealty.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.projects.wrRealty.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Angkasa Pura II 1 */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.projects.angkasa1.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-sponsor-gsk-angkasa.jpg" 
                          alt="Angkasa Pura II"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.projects.angkasa1.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.projects.angkasa1.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Angkasa Pura II 2 */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.projects.angkasa2.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-sponsor-gsk-angkasa.jpg" 
                          alt="Angkasa Pura II"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.projects.angkasa2.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.projects.angkasa2.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                                    {/* Finance - SBI & Bajaj Finserv */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase">
                        {t('businessServices.projects.finance.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <div className="flex items-center justify-center space-x-3">
                          <img 
                            src="/public/Sponsor/logo-sponsor-sgk-sbi.jpg" 
                            alt="SBI"
                            className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                          />
                          <img 
                            src="/public/Sponsor/logo-sgk-bajaj2.png" 
                            alt="Bajaj Finserv"
                            className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground">
                          {t('businessServices.projects.finance.service')}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {t('businessServices.projects.finance.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Twenty One Development */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.projects.twentyOne.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <div className="text-center">
                          <div className="text-red-600 font-bold text-lg">PT Twenty One Development</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.projects.twentyOne.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.projects.twentyOne.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Falakwati Group */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.projects.falakwati.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <div className="text-center">
                          <div className="text-orange-600 font-bold text-lg">Falakwati Group</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.projects.falakwati.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.projects.falakwati.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Hotel Panghegar */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.projects.hotel.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <div className="text-center">
                          <div className="text-orange-600 font-bold text-sm">Hotel Panghegar (Pt. Royale)</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.projects.hotel.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.projects.hotel.year')}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-8 pt-6 border-t border-border/30">
                  <p className="text-muted-foreground mb-4 text-center">
                    Strictly Confidential
                  </p>
                </div>
                
                {/* Additional Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-8">
                  {/* PT Citra Mustika Besten */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.citraMustika.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <div className="text-center flex items-center justify-center">
                          <div className="text-orange-600 font-bold text-base text-center">PT Citra Mustika Besten</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.citraMustika.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.citraMustika.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* LSW */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.lsw.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-gsk-sponsor-jjsw.jpg" 
                          alt="JJSW"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.lsw.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.lsw.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* JJSM */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.jjsm.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-gsk-sponsor-jjsm.png" 
                          alt="JJSM"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.jjsm.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.jjsm.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* BEMAESTEX */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.bemaestex.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-gsk-sponsor-bemaestex.jpg" 
                          alt="Bemaestex"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.bemaestex.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.bemaestex.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* MEGACORP altobank */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.megacorp.sector')}
                      </div>
                      
                                            <div className="flex items-center justify-center h-20 w-full">
                        <div className="flex items-center justify-center space-x-2">
                          <img 
                            src="/public/Sponsor/logo-gsk-sponsor-megacorp.png" 
                            alt="Mega CORP"
                            className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                          />
                          <img 
                            src="/public/Sponsor/logo-gsk-sponsor-alllobank.png" 
                            alt="Allo Bank"
                            className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                          />
                        </div>
                      </div>
                      
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.megacorp.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.megacorp.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* BRAVA */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.brava.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-gsk-sponsor-brava.png" 
                          alt="Brava"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.brava.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.brava.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* WIMCYCLE */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.wimcycle.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-gsk-sponsor-wimcycle.webp" 
                          alt="Wimcycle"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.wimcycle.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.wimcycle.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Maybank */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.maybank.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-sponsor-gsk-maybank.jpg" 
                          alt="Maybank"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.maybank.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.maybank.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Aset&u */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.asetku.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-gsk-sponsor-asetkuu.png" 
                          alt="Asetku"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.asetku.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.asetku.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* TRANS */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.trans.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-gsk-sponsor-trans.png" 
                          alt="Trans"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.trans.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.trans.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Toyota Automotive */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.automotive.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-gsk-sponsor-bank-resona.png" 
                          alt="Bank Resona"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.automotive.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.automotive.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* SIP */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.sip.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-gsk-sponsor-sip.png" 
                          alt="SIP"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.sip.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.sip.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* DCP */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.dcp.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-gsk-sponsor-dcp.png" 
                          alt="DCP"
                          className="h-18 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.dcp.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.dcp.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Select Hotels Group */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.selectHotels.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-gsk-sponsor-select-hotels.png" 
                          alt="Select Hotels"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.selectHotels.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.selectHotels.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Real Estate Developer */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        {t('businessServices.additionalProjects.realEstate.sector')}
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <div className="text-center flex items-center justify-center">
                          <div className="text-orange-600 font-bold text-sm text-center">PT Regency Utama Indonesia dan PT Putriko Nusantara Indonesia</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          {t('businessServices.additionalProjects.realEstate.service')}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {t('businessServices.additionalProjects.realEstate.year')}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Mega Corp Bank Sumsel */}
                   <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        Financial Services
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <div className="flex items-center justify-center space-x-2">
                          <img 
                            src="/public/Sponsor/logo-gsk-sponsor-megacorp.png" 
                            alt="Mega Corp"
                            className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                          />
                          <img 
                            src="/public/Sponsor/logo-gsk-sponsor-bank-sumsel.jpg" 
                            alt="Bank Sumsel"
                            className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          Business Advisory & IPO Consulting
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          2024
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Bank BSG */}
                  <Card className="p-6 bg-white dark:bg-slate-800 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4 text-center">
                      <div className="text-xs text-primary/60 font-medium uppercase text-center">
                        Financial Services
                      </div>
                      
                      <div className="flex items-center justify-center h-20 w-full">
                        <img 
                          src="/public/Sponsor/logo-gsk-sponsor-bank-bsg.jpg" 
                          alt="Bank BSG"
                          className="h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground text-center">
                          Business Advisory & IPO Consulting
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          2024
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-8 pt-6 border-t border-border/30">
                  <p className="text-muted-foreground mb-4 text-center">
                    Strictly Confidential
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        
        {/* Roadmap Section - Enhanced with Images */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-primary font-display text-center mb-6">{t('roadmap.title')}</h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmap.map((item, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                  {/* Image Section */}
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={t(`roadmap.items.${item.titleKey}.title`)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
                      <span className="text-white font-bold text-lg">{item.year}</span>
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 space-y-2">
                    <h4 className="text-base font-bold text-foreground">{t(`roadmap.items.${item.titleKey}.title`)}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{t(`roadmap.items.${item.titleKey}.description`)}</p>
                    
                    {/* Progress Indicator */}
                    <div className="pt-2">
                      <div className="h-2 bg-border/30 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${((index + 1) / roadmap.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-primary font-display text-center mb-6">{t('team.title')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
                          {team.map((memberKey, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 group border border-border/50 hover:border-primary/30">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                                  <h4 className="text-lg font-bold text-primary font-display mb-1">{t(`team.members.${memberKey}.name`)}</h4>
                  <p className="text-primary/70 font-semibold mb-2 text-sm">{t(`team.members.${memberKey}.position`)}</p>
                  <p className="text-xs text-muted-foreground mb-3">{t(`team.members.${memberKey}.experience`)}</p>
                <div className="space-y-1">
                  {(t(`team.members.${memberKey}.credentials`, { returnObjects: true }) as string[]).map((cred, i) => (
                    <div key={i} className="flex items-center justify-center text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 mr-1 text-primary" />
                      {cred}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
                     <Card className="p-4 bg-primary/5 border border-primary/20">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary font-display mb-3">{t('vision.title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('vision.description')}
              </p>
            </Card>
                        <Card className="p-4 bg-primary/5 border border-primary/20">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary font-display mb-3">{t('mission.title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('mission.description')}
              </p>
            </Card>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-6 lg:p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold font-display text-center mb-4">{t('whyChooseUs.title')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center space-y-2">
                <item.icon className="w-10 h-10 mx-auto mb-2" />
                <div className="font-bold text-sm">{t(`whyChooseUs.reasons.${item.key}.title`)}</div>
                <p className="text-xs text-white/80">{t(`whyChooseUs.reasons.${item.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;