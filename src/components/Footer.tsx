
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">G</span>
              </div>
              <h3 className="text-xl font-bold font-poppins">Global Sinergi Kapital</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Mitra strategis terpercaya untuk perjalanan IPO perusahaan Anda. 
              Berpengalaman lebih dari 15 tahun dalam industri pasar modal Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["Tentang Kami", "Layanan IPO", "Proses Kerja", "Studi Kasus", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontak</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Jl. Sudirman Kav. 25</p>
              <p>Jakarta Pusat 10210</p>
              <p>+62 21 5150 3000</p>
              <p>info@globalsinergikapital.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Global Sinergi Kapital. All rights reserved. | 
            <span className="ml-2">Terdaftar dan diawasi oleh OJK</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
