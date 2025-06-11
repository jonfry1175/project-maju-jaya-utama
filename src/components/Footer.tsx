
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info - Enhanced */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-soft">
                <span className="text-primary font-bold text-lg">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins">Global Sinergi Kapital</h3>
                <p className="text-primary-foreground/80 text-sm">Mitra Strategis IPO</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed text-sm">
              Mitra strategis terpercaya untuk perjalanan IPO perusahaan Anda. 
              Berpengalaman lebih dari 15 tahun dalam industri pasar modal Indonesia.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/15 hover:bg-white/25 p-3 rounded-xl transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Refined */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins">Quick Links</h4>
            <ul className="space-y-3">
              {["Tentang Kami", "Layanan IPO", "Proses Kerja", "Kontak"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Compact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins">Kontak</h4>
            <div className="space-y-3 text-primary-foreground/90 text-sm">
              <p className="font-medium">Jl. Sudirman Kav. 25<br/>Jakarta Pusat 10210</p>
              <p className="font-medium">+62 21 5150 3000</p>
              <p className="font-medium">info@globalsinergikapital.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 Global Sinergi Kapital. All rights reserved.
          </p>
          <p className="text-primary-foreground/70 text-sm mt-2 md:mt-0">
            Terdaftar dan diawasi oleh OJK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
