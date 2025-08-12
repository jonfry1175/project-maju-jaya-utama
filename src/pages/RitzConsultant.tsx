import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Target, Shield, TrendingUp, Award, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import RitzHeader from "@/components/RitzHeader";

const RitzConsultant = () => {
  const { t } = useTranslation();

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
      
      <RitzHeader />
      
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="/logo-ritz.png" 
                alt="RITZ Corp Logo" 
                className="h-20 mx-auto mb-6"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                RITZ <span className="text-primary">Corpora Indonesia</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                Integrated Financial & Business Consulting Solutions with Over 40 Experienced Partners
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Visit RITZ Website
                </Button>
              </div>
            </div>
          </div>
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
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  RITZ Corp is an integrated business with two main business lines: <strong>Financial and Business Consulting</strong> through PT RITZ Konsultan Indonesia (RKI) and <strong>PT RITZ Investment Indonesia</strong> (RII).
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We offer comprehensive Corporate Law Services through RITZ & Partners Law Firm and Commercial Litigation Services through Rivai & Co. Law Firm, with extensive experience in banking, commercial investment banking, private equity, and capital markets.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">40+</div>
                    <div className="text-sm text-muted-foreground">Expert Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2</div>
                    <div className="text-sm text-muted-foreground">Main Business Lines</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-card p-8 rounded-2xl shadow-soft border border-subtle">
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

      {/* Why Choose RITZ Corp Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose RITZ Corp
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Four key advantages that set us apart in financial and business consulting
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-subtle text-center hover:shadow-medium transition-all duration-300">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Advisory Process Excellence</h3>
                <p className="text-muted-foreground">
                  Supporting planning, management, and execution of assessment needs, business transactions, and corporate financing
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-subtle text-center hover:shadow-medium transition-all duration-300">
                <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Team Assembly Capability</h3>
                <p className="text-muted-foreground">
                  Assembling the right teams with appropriate experiences and expertise for each client
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-subtle text-center hover:shadow-medium transition-all duration-300">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Client Collaboration</h3>
                <p className="text-muted-foreground">
                  Close collaboration offering tailored solutions addressing debt covenants, cashflow issues, and tax impact
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-subtle text-center hover:shadow-medium transition-all duration-300">
                <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/20">
                  <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                    01
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Client Assessment</h3>
                  <p className="text-muted-foreground">
                    Addressing client needs by assembling specialized teams tailored to meet specific requirements
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-2xl border border-secondary/20">
                  <div className="bg-secondary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                    02
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Strategic Advisory</h3>
                  <p className="text-muted-foreground">
                    Developing customized solutions that align with unique requirements and objectives
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/20">
                  <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                    03
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Implementation Guidance</h3>
                  <p className="text-muted-foreground">
                    Guiding through various scenarios, recommending measures to ensure solvency and future positioning
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-2xl border border-secondary/20">
                  <div className="bg-secondary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                    04
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Long-term Support</h3>
                  <p className="text-muted-foreground">
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
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-subtle">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
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
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-subtle">
                <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
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
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-subtle">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
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

      {/* Our Main Clients Section */}
      <section id="clients" className="py-20 bg-background">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Our Main Clients
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We serve a diverse array of sectors, cultivating enduring relationships with leading Indonesian corporations
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {[
                { name: 'Pertamina', logo: '/logologo/pertamina.png', alt: 'Pertamina Logo' },
                { name: 'BNI', logo: '/logologo/bni.png', alt: 'BNI Logo' },
                { name: 'Maybank', logo: '/Sponsor/logo-sponsor-gsk-maybank.jpg', alt: 'Maybank Logo' },
                { name: 'Angkasa Pura II', logo: '/logologo/angkasa.png', alt: 'Angkasa Pura II Logo' },
                { name: 'Bank Mandiri', logo: '/logologo/mandiri.png', alt: 'Bank Mandiri Logo' },
                { name: 'BRI Agro', logo: '/logologo/bri.png', alt: 'BRI Agro Logo' },
                { name: 'Telkomsel', logo: '/logologo/telkomsel.png', alt: 'Telkomsel Logo' },
                { name: 'Pelindo', logo: '/Sponsor/logo-ski-sponsor-pelindo.png', alt: 'Pelindo Logo' },
                { name: 'Tempo Media Group', logo: '/Sponsor/logo-sponsor-gsk-tempo.png', alt: 'Tempo Media Group Logo' },
                { name: 'Alif', logo: '/Sponsor/logo-sponsor-gsk-alif.png', alt: 'Alif Logo' }
              ].map((client, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft border border-subtle text-center hover:shadow-medium transition-all duration-300 group">
                  <div className="flex flex-col items-center justify-center h-20 mb-3">
                    <img 
                      src={client.logo} 
                      alt={client.alt}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="text-sm font-semibold text-foreground">${client.name}</div>`;
                        }
                      }}
                    />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{client.name}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Each day, we dedicate our hearts and minds to serving our clients, striving not only for individual success but also to cultivate enduring relationships across diverse sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Work with RITZ Corp?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experienced team of over 40 partners help you navigate complex financial and business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Contact RITZ Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <ExternalLink className="mr-2 w-5 h-5" />
                Visit Official Website
              </Button>
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