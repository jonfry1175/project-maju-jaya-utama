import { 
  Linkedin, Mail, Phone, MapPin, Clock, ArrowRight, 
  FileText, Shield, Award, ExternalLink, Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan IPO Advisory", href: "#services" },
    { name: "Proses IPO", href: "#process" },
    { name: "Testimoni Klien", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Hubungi Kami", href: "#contact" }
  ];

  const services = [
    { name: "IPO Advisory", href: "#" },
    { name: "Corporate Restructuring", href: "#" },
    { name: "Legal & Compliance", href: "#" },
    { name: "Valuasi Perusahaan", href: "#" },
    { name: "Post-IPO Support", href: "#" },
    { name: "Investor Relations", href: "#" }
  ];

  const resources = [
    { name: "IPO Guidebook 2024", icon: FileText, badge: "PDF" },
    { name: "Regulasi OJK Terbaru", icon: Shield, badge: "Update" },
    { name: "Market Report Q4 2024", icon: Award, badge: "New" },
    { name: "IPO Readiness Checklist", icon: FileText, badge: "Free" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold font-display mb-3">
              Dapatkan Insight Pasar Modal Terkini
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe newsletter kami untuk mendapatkan update regulasi, analisis pasar, dan tips IPO langsung dari para ahli.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="email@perusahaan.com" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
              />
              <Button 
                type="submit" 
                className="bg-white text-primary hover:bg-white/90 h-12 px-6 font-semibold"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/60 mt-3">
              Dengan subscribe, Anda menyetujui Privacy Policy kami. Unsubscribe kapan saja.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-soft p-2">
                  <img 
                    src="/logo.png" 
                    alt="Global Sinergi Kapital Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">Global Sinergi Kapital</h3>
                  <p className="text-primary-foreground/80 text-sm">Konsultan IPO Terpercaya</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Mitra strategis perusahaan Indonesia dalam mengakses pasar modal. 
                Dengan pengalaman 15+ tahun dan 127+ klien sukses IPO, kami berkomitmen 
                menghadirkan solusi IPO yang komprehensif dan inovatif.
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-4 h-4" />
                <span>Terdaftar OJK</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Award className="w-4 h-4" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <FileText className="w-4 h-4" />
                <span>Member BEI</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-200 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:info@globalsinergikapital.com"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-200 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-display">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-display">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-primary-foreground/70 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resources */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold font-display mb-4">Kontak</h4>
              <div className="space-y-3 text-primary-foreground/80 text-sm">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-2 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Menara Sudirman Lt. 25<br/>Jl. Jend. Sudirman Kav. 25<br/>Jakarta Pusat 10210</span>
                </a>
                <a href="tel:+622112345678" className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(021) 1234-5678</span>
                </a>
                <a href="mailto:info@globalsinergikapital.com" className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@globalsinergikapital.com</span>
                </a>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Senin - Jumat: 09:00 - 18:00</span>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold font-display mb-4">Resources</h4>
              <div className="space-y-2">
                {resources.map((resource) => (
                  <a 
                    key={resource.name}
                    href="#" 
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-center space-x-2">
                      <resource.icon className="w-4 h-4 text-primary-foreground/60" />
                      <span className="text-sm">{resource.name}</span>
                    </div>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {resource.badge}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-primary-foreground/60">
              <p>© {currentYear} PT Global Sinergi Kapital. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-primary-foreground/60">
                <Shield className="w-4 h-4" />
                <span>Terdaftar & Diawasi OJK</span>
              </div>
              <a 
                href="#" 
                className="flex items-center space-x-1 text-primary-foreground/60 hover:text-white transition-colors"
              >
                <span>Legal Disclaimer</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;