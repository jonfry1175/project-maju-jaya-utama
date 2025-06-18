import { 
  Linkedin, Mail, Phone, MapPin, Clock, ArrowRight, 
  FileText, Shield, Award, ExternalLink, Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation('footer');
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: i18n.language === 'id' ? "Tentang Kami" : "About Us", href: "#about" },
    { name: i18n.language === 'id' ? "Layanan Konsultasi IPO" : "IPO Consulting Services", href: "#services" },
    { name: i18n.language === 'id' ? "Proses IPO" : "IPO Process", href: "#process" },
    { name: i18n.language === 'id' ? "Mengapa Memilih Kami" : "Why Choose Us", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: i18n.language === 'id' ? "Hubungi Kami" : "Contact Us", href: "#contact" }
  ];

  const services = [
    { name: i18n.language === 'id' ? "Konsultasi IPO" : "IPO Consulting", href: "#" },
    { name: i18n.language === 'id' ? "Restrukturisasi Perusahaan" : "Corporate Restructuring", href: "#" },
    { name: i18n.language === 'id' ? "Hukum & Kepatuhan" : "Legal & Compliance", href: "#" },
    { name: i18n.language === 'id' ? "Valuasi Perusahaan" : "Company Valuation", href: "#" },
    { name: i18n.language === 'id' ? "Dukungan Pasca IPO" : "Post-IPO Support", href: "#" },
    { name: i18n.language === 'id' ? "Hubungan Investor" : "Investor Relations", href: "#" }
  ];

  const resources = [
    { name: "IPO Guidebook 2024", icon: FileText, badge: "PDF" },
    { name: i18n.language === 'id' ? "Regulasi OJK Terbaru" : "Latest OJK Regulations", icon: Shield, badge: i18n.language === 'id' ? "Update" : "Update" },
    { name: "Market Report Q4 2024", icon: Award, badge: i18n.language === 'id' ? "New" : "New" },
    { name: "IPO Readiness Checklist", icon: FileText, badge: i18n.language === 'id' ? "Free" : "Free" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
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
                  <p className="text-primary-foreground/80 text-sm">{t('company.tagline')}</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                {i18n.language === 'id' ? 
                  'Mitra strategis perusahaan Indonesia dalam mengakses pasar modal. Sebagai konsultan IPO yang baru berdiri, kami berkomitmen menghadirkan solusi IPO yang komprehensif dan inovatif dengan pendekatan modern.' :
                  'Strategic partner for Indonesian companies in accessing capital markets. As a newly established IPO consultant, we are committed to providing comprehensive and innovative IPO solutions with modern approach.'
                }
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-4 h-4" />
                <span>{i18n.language === 'id' ? 'Terdaftar OJK' : 'OJK Registered'}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Award className="w-4 h-4" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <FileText className="w-4 h-4" />
                <span>{i18n.language === 'id' ? 'Member BEI' : 'IDX Member'}</span>
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
            <h4 className="text-lg font-semibold font-display">{i18n.language === 'id' ? 'Tautan Cepat' : 'Quick Links'}</h4>
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
            <h4 className="text-lg font-semibold font-display">{t('sections.services.title')}</h4>
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
              <h4 className="text-lg font-semibold font-display mb-4">{t('contact.title')}</h4>
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
                  <span>{i18n.language === 'id' ? 'Senin - Jumat: 09:00 - 18:00' : 'Monday - Friday: 09:00 - 18:00'}</span>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold font-display mb-4">{t('sections.resources.title')}</h4>
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
              <p>© {currentYear} PT Global Sinergi Kapital. {i18n.language === 'id' ? 'Hak cipta dilindungi.' : 'All rights reserved.'}</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">{i18n.language === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}</a>
                <a href="#" className="hover:text-white transition-colors">{i18n.language === 'id' ? 'Syarat & Ketentuan' : 'Terms & Conditions'}</a>
                <a href="#" className="hover:text-white transition-colors">{i18n.language === 'id' ? 'Peta Situs' : 'Sitemap'}</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-primary-foreground/60">
                <Shield className="w-4 h-4" />
                <span>{i18n.language === 'id' ? 'Terdaftar & Diawasi OJK' : 'Registered & Supervised by OJK'}</span>
              </div>
              <a 
                href="#" 
                className="flex items-center space-x-1 text-primary-foreground/60 hover:text-white transition-colors"
              >
                <span>{i18n.language === 'id' ? 'Penyangkalan Hukum' : 'Legal Disclaimer'}</span>
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