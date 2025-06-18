import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Users, Award, Calendar, CheckCircle, ArrowRight, Building, Briefcase, Trophy, Rocket, Brain, Heart } from "lucide-react";
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
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header - Enhanced */}
        <div className="max-w-4xl mx-auto text-center mb-16">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Roadmap Section - Enhanced with Images */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary font-display text-center mb-12">{t('roadmap.title')}</h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmap.map((item, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                  {/* Image Section */}
                  <div className="relative h-40 overflow-hidden">
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
                  <div className="p-6 space-y-3">
                    <h4 className="text-lg font-bold text-foreground">{t(`roadmap.items.${item.titleKey}.title`)}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(`roadmap.items.${item.titleKey}.description`)}</p>
                    
                    {/* Progress Indicator */}
                    <div className="pt-3">
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
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary font-display text-center mb-12">{t('team.title')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((memberKey, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 group border border-border/50 hover:border-primary/30">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary font-display mb-1">{t(`team.members.${memberKey}.name`)}</h4>
                <p className="text-primary/70 font-semibold mb-2">{t(`team.members.${memberKey}.position`)}</p>
                <p className="text-sm text-muted-foreground mb-4">{t(`team.members.${memberKey}.experience`)}</p>
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
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-primary/5 border border-primary/20">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary font-display mb-4">{t('vision.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('vision.description')}
            </p>
          </Card>
          <Card className="p-8 bg-primary/5 border border-primary/20">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary font-display mb-4">{t('mission.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('mission.description')}
            </p>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 lg:p-12 text-white shadow-xl">
          <h3 className="text-2xl font-bold font-display text-center mb-8">{t('whyChooseUs.title')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <item.icon className="w-12 h-12 mx-auto mb-2" />
                <div className="font-bold">{t(`whyChooseUs.reasons.${item.key}.title`)}</div>
                <p className="text-sm text-white/80">{t(`whyChooseUs.reasons.${item.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;