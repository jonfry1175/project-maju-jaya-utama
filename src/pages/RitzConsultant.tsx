import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Target, Shield, TrendingUp, Award, ExternalLink, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const RitzConsultant = () => {
  const { t } = useTranslation();

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
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
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
                Integrated Financial & Business Consulting Solutions
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-up" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
          <button
            onClick={handleScrollToAbout}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-all duration-300 group"
          >
            <span className="text-sm font-medium mb-2 opacity-75 group-hover:opacity-100">Learn More</span>
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
                About RITZ Corp
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                  RITZ Corp is an integrated business with two main business lines: <strong>Financial and Business Consulting</strong> through PT RITZ Konsultan Indonesia (RKI) and <strong>PT RITZ Investment Indonesia</strong> (RII).
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                  We offer comprehensive Corporate Law Services through RITZ & Partners Law Firm and Commercial Litigation Services through Rivai & Co. Law Firm, with extensive experience in banking, commercial investment banking, private equity, and capital markets.
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
                        <h3 className="font-semibold text-foreground mb-2">RKI - Financial Consulting</h3>
                        <p className="text-sm text-muted-foreground">Corporate Law Services & Commercial Litigation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-xl">
                        <TrendingUp className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">RII - Investment Services</h3>
                        <p className="text-sm text-muted-foreground">Private Equity & Capital Market Solutions</p>
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
                Advantages of RITZ Corp
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Four key advantages that set us apart in financial and business consulting
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle text-center hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Advisory Process Excellence</h3>
                <p className="text-muted-foreground">
                  Supporting planning, management, and execution of assessment needs, business transactions, and corporate financing
                </p>
              </div>
              
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle text-center hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Team Assembly Capability</h3>
                <p className="text-muted-foreground">
                  Assembling the right teams with appropriate experiences and expertise for each client
                </p>
              </div>
              
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle text-center hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Client Collaboration</h3>
                <p className="text-muted-foreground">
                  Close collaboration offering tailored solutions addressing debt covenants, cashflow issues, and tax impact
                </p>
              </div>
              
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle text-center hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Professional Expertise</h3>
                <p className="text-muted-foreground">
                  Expertise in assessing risks and identifying opportunities, ensuring successful transaction completion
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
                Our Approach
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic 4-step process to ensure successful project outcomes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative h-full">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/20 h-full flex flex-col">
                  <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                    01
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Client Assessment</h3>
                  <p className="text-muted-foreground flex-grow">
                    Addressing client needs by assembling specialized teams tailored to meet specific requirements
                  </p>
                </div>
              </div>
              
              <div className="relative h-full">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-2xl border border-secondary/20 h-full flex flex-col">
                  <div className="bg-secondary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                    02
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Strategic Advisory</h3>
                  <p className="text-muted-foreground flex-grow">
                    Developing customized solutions that align with unique requirements and objectives
                  </p>
                </div>
              </div>
              
              <div className="relative h-full">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/20 h-full flex flex-col">
                  <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                    03
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Implementation Guidance</h3>
                  <p className="text-muted-foreground flex-grow">
                    Guiding through various scenarios, recommending measures to ensure solvency and future positioning
                  </p>
                </div>
              </div>
              
              <div className="relative h-full">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-2xl border border-secondary/20 h-full flex flex-col">
                  <div className="bg-secondary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                    04
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Long-term Support</h3>
                  <p className="text-muted-foreground flex-grow">
                    Dedicated professionals who genuinely care about business and long-term success
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
                Our Services
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive financial and legal services across multiple business sectors
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Business Advisory & Investment Services */}
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Business Advisory & Investment</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" />Assessment & Due Diligence</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" />Debt Restructuring</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" />Management Turnaround</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" />Corporate Financing</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" />M&A Services</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" />Asset Management</li>
                </ul>
              </div>
              
              {/* Investment Group Services */}
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Building2 className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Investment Group</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-secondary" />Energy Solutions</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-secondary" />Infrastructure Development</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-secondary" />Property & Development</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-secondary" />Japan Desk Advisory</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-secondary" />Employment Services</li>
                  <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-secondary" />Digital Platform Business</li>
                </ul>
              </div>
              
              {/* Legal Services */}
              <div className="group bg-white p-8 rounded-2xl shadow-soft border border-subtle hover:shadow-xl hover:border-primary-medium transition-all duration-300 transform hover:scale-105">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Legal Services</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Corporate Law</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-primary" />Banking & Finance</li>
                      <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-primary" />M&A Transactions</li>
                      <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-primary" />Capital Market & Securities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Commercial Litigation</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-primary" />PKPU & Bankruptcy</li>
                      <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-primary" />Alternative Dispute Resolution</li>
                      <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-primary" />BANI Arbitration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/50 border-t border-subtle">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-foreground mb-4">RITZ Corpora Indonesia</h3>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Integrated Financial & Business Consulting Solutions with comprehensive legal services and investment advisory.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Head Office:</p>
                  <p>The East Tower 36th Floor</p>
                  <p>Central Business District Mega Kuningan</p>
                  <p>Jakarta Selatan, DKI Jakarta, 12950</p>
                  <p className="mt-2">Phone: (+62) 21-5152 423</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Business Advisory</li>
                  <li>Investment Services</li>
                  <li>Legal Services</li>
                  <li>M&A Advisory</li>
                  <li>Debt Restructuring</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Sectors</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Banking & Finance</li>
                  <li>Energy & Infrastructure</li>
                  <li>Property Development</li>
                  <li>Technology</li>
                  <li>Government Relations</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-subtle mt-8 pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 RITZ Corpora Indonesia. All rights reserved.
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