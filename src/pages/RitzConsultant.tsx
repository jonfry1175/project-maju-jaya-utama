import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Target, Shield, TrendingUp, Award, ExternalLink, ChevronDown, ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const RitzConsultant = () => {
  const { t } = useTranslation('ritz-consultant');

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const targetPosition = aboutSection.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 second
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <>
      <Helmet>
        <title>RITZ Corpora Indonesia - Integrated Financial & Business Consulting | Global Sinergi Kapital</title>
        <meta name="description" content="RITZ Corp is an integrated business offering Financial & Business Consulting solutions through 40+ experienced partners. Specializing in corporate law, M&A, debt restructuring, and investment advisory services." />
        <meta name="keywords" content="RITZ Corpora Indonesia, financial consulting, business advisory, corporate law, M&A, debt restructuring, investment services, Jakarta" />
        <meta property="og:title" content="RITZ Corpora Indonesia - Integrated Financial & Business Consulting" />
        <meta property="og:description" content="Professional financial and business consulting services with comprehensive legal advisory and investment solutions across diverse sectors in Indonesia." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/ritz-consultant" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Back to Home Link */}
        <div className="absolute top-8 left-8 z-10">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 group"
          >
            <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">{t('hero.backToHome')}</span>
          </Link>
        </div>
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="/logo-ritz.png" 
                alt="RITZ Corp Logo" 
                className="h-32 lg:h-40 xl:h-48 mx-auto mb-6 animate-fade-up"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-up-delay">
                RITZ <span className="text-primary">Corpora Indonesia</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-up" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Button */}
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center opacity-0 animate-fade-up" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
          <button
            onClick={handleScrollToAbout}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-all duration-300 group"
          >
            <span className="text-sm font-medium mb-2 opacity-75 group-hover:opacity-100">{t('hero.learnMore')}</span>
            <div className="w-8 h-8 rounded-full border-2 border-muted-foreground group-hover:border-primary transition-all duration-300 flex items-center justify-center group-hover:bg-primary/10">
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
          </button>
        </div>
      </section>

      {/* About RITZ Corp Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                {t('about.title')}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                  {t('about.description1')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                  {t('about.description2')}
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-soft border border-subtle">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{t('about.rki.title')}</h3>
                        <p className="text-sm text-muted-foreground">{t('about.rki.description')}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-xl">
                        <TrendingUp className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{t('about.rii.title')}</h3>
                        <p className="text-sm text-muted-foreground">{t('about.rii.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages of RITZ Corp Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                {t('advantages.title')}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('advantages.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle text-center hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{t('advantages.advisory.title')}</h3>
                <p className="text-muted-foreground">
                  {t('advantages.advisory.description')}
                </p>
              </div>
              
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle text-center hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{t('advantages.team.title')}</h3>
                <p className="text-muted-foreground">
                  {t('advantages.team.description')}
                </p>
              </div>
              
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle text-center hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{t('advantages.collaboration.title')}</h3>
                <p className="text-muted-foreground">
                  {t('advantages.collaboration.description')}
                </p>
              </div>
              
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle text-center hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{t('advantages.expertise.title')}</h3>
                <p className="text-muted-foreground">
                  {t('advantages.expertise.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                {t('approach.title')}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('approach.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative h-full">
                <div className="group bg-white p-8 rounded-2xl border border-primary/20 h-full flex flex-col hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:scale-105">
                  <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold group-hover:scale-105 transition-transform">
                    01
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{t('approach.step1.title')}</h3>
                  <p className="text-muted-foreground flex-grow">
                    {t('approach.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="relative h-full">
                <div className="group bg-white p-8 rounded-2xl border border-secondary/20 h-full flex flex-col hover:shadow-xl hover:border-secondary transition-all duration-300 transform hover:scale-105">
                  <div className="bg-secondary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold group-hover:scale-105 transition-transform">
                    02
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{t('approach.step2.title')}</h3>
                  <p className="text-muted-foreground flex-grow">
                    {t('approach.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="relative h-full">
                <div className="group bg-white p-8 rounded-2xl border border-primary/20 h-full flex flex-col hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:scale-105">
                  <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold group-hover:scale-105 transition-transform">
                    03
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{t('approach.step3.title')}</h3>
                  <p className="text-muted-foreground flex-grow">
                    {t('approach.step3.description')}
                  </p>
                </div>
              </div>
              
              <div className="relative h-full">
                <div className="group bg-white p-8 rounded-2xl border border-secondary/20 h-full flex flex-col hover:shadow-xl hover:border-secondary transition-all duration-300 transform hover:scale-105">
                  <div className="bg-secondary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold group-hover:scale-105 transition-transform">
                    04
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{t('approach.step4.title')}</h3>
                  <p className="text-muted-foreground flex-grow">
                    {t('approach.step4.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                {t('services.title')}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Business Advisory & Investment Services */}
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">{t('services.businessAdvisory.title')}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" />{t('services.businessAdvisory.items.assessment')}</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" />{t('services.businessAdvisory.items.debtRestructuring')}</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" />{t('services.businessAdvisory.items.turnaround')}</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" />{t('services.businessAdvisory.items.financing')}</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" />{t('services.businessAdvisory.items.ma')}</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" />{t('services.businessAdvisory.items.assetManagement')}</li>
                </ul>
              </div>
              
              {/* Investment Group Services */}
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Building2 className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">{t('services.investmentGroup.title')}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-secondary" />{t('services.investmentGroup.items.energy')}</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-secondary" />{t('services.investmentGroup.items.infrastructure')}</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-secondary" />{t('services.investmentGroup.items.property')}</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-secondary" />{t('services.investmentGroup.items.japanDesk')}</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-secondary" />{t('services.investmentGroup.items.employment')}</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-secondary" />{t('services.investmentGroup.items.digital')}</li>
                </ul>
              </div>
              
              {/* Legal Services */}
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">{t('services.legal.title')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('services.legal.corporateLaw.title')}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-primary" />{t('services.legal.corporateLaw.items.banking')}</li>
                      <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-primary" />{t('services.legal.corporateLaw.items.ma')}</li>
                      <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-primary" />{t('services.legal.corporateLaw.items.capitalMarket')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('services.legal.litigation.title')}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-primary" />{t('services.legal.litigation.items.pkpu')}</li>
                      <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-primary" />{t('services.legal.litigation.items.adr')}</li>
                      <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-primary" />{t('services.legal.litigation.items.arbitration')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto container-padding py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-primary-foreground mb-4">{t('footer.title')}</h3>
                <p className="text-primary-foreground/80 mb-4 max-w-md">
                  {t('footer.description')}
                </p>
                <div className="text-sm text-primary-foreground/70">
                  <p>{t('footer.address.title')}</p>
                  <p>{t('footer.address.line1')}</p>
                  <p>{t('footer.address.line2')}</p>
                  <p>{t('footer.address.line3')}</p>
                  <p className="mt-2">{t('footer.address.phone')}</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-primary-foreground mb-4">{t('footer.services.title')}</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/70">
                  <li className="hover:text-white transition-colors cursor-pointer">{t('footer.services.items.advisory')}</li>
                  <li className="hover:text-white transition-colors cursor-pointer">{t('footer.services.items.investment')}</li>
                  <li className="hover:text-white transition-colors cursor-pointer">{t('footer.services.items.legal')}</li>
                  <li className="hover:text-white transition-colors cursor-pointer">{t('footer.services.items.ma')}</li>
                  <li className="hover:text-white transition-colors cursor-pointer">{t('footer.services.items.restructuring')}</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-primary-foreground mb-4">{t('footer.sectors.title')}</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/70">
                  <li className="hover:text-white transition-colors cursor-pointer">{t('footer.sectors.items.banking')}</li>
                  <li className="hover:text-white transition-colors cursor-pointer">{t('footer.sectors.items.energy')}</li>
                  <li className="hover:text-white transition-colors cursor-pointer">{t('footer.sectors.items.property')}</li>
                  <li className="hover:text-white transition-colors cursor-pointer">{t('footer.sectors.items.technology')}</li>
                  <li className="hover:text-white transition-colors cursor-pointer">{t('footer.sectors.items.government')}</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-sm text-primary-foreground/60">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default RitzConsultant;