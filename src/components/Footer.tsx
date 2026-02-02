import { Mail, Phone, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Footer = () => {
  const { t, i18n } = useTranslation("footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t("links.about"), href: "#about" },
    { name: t("links.products"), href: "#products" },
    { name: t("links.capabilities"), href: "#capabilities" },
    { name: t("links.sustainability"), href: "#sustainability" },
    { name: t("links.contact"), href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=622159493388",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:info@majujayautama.co.id",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-[#0f1115] text-secondary-foreground relative overflow-hidden border-t border-primary/10">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-industrial opacity-[0.05]" />
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -mr-96 -mt-96" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -ml-64 -mb-64" />
      </div>

      <div className="container mx-auto container-padding relative z-10 pt-24 pb-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="relative p-2 bg-white/5 rounded-2xl border border-white/10">
                  <img
                    src="/logo.png"
                    alt="Maju Jaya Utama Lestari"
                    className="h-14 w-auto brightness-0 invert"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-display font-bold text-white leading-tight">
                  Maju Jaya <span className="text-primary">Utama Lestari</span>
                </h3>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary/80 font-semibold">
                  {i18n.language === "id" ? "Produsen Kertas Konversi" : "Converted Paper Manufacturer"}
                </p>
              </div>
              <p className="text-secondary-foreground/60 leading-relaxed text-lg font-light">
                {t("description")}
              </p>
            </motion.div>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary text-white transition-all duration-500 group"
                  title={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-8">
            <h4 className="text-sm font-mono uppercase tracking-widest text-white/40 pb-4 border-b border-white/5">{t("sections.links")}</h4>
            <nav className="flex flex-col space-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary-foreground/60 hover:text-primary transition-all duration-300 flex items-center group text-lg"
                >
                  <ArrowRight className="w-4 h-4 mr-2 scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0" />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-8">
            <h4 className="text-sm font-mono uppercase tracking-widest text-white/40 pb-4 border-b border-white/5">{t("contact.title")}</h4>
            <div className="space-y-6">
               <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-500 border border-white/10 group-hover:border-primary">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mb-1">Office & Factory</span>
                  <a 
                    href="https://maps.google.com/?q=Jl.+Raya+Legok+No.88,+Tangerang,+Banten"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground/80 hover:text-white transition-colors leading-relaxed block text-base"
                  >
                    {t("contact.address")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-500 border border-white/10 group-hover:border-primary">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mb-1">Inquiries</span>
                  <a href="tel:+622159493388" className="text-secondary-foreground/80 hover:text-white transition-colors block font-mono text-xl">
                    +62 21 5949 3388
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-500 border border-white/10 group-hover:border-primary">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                 <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mb-1">Email Support</span>
                  <a href="mailto:info@majujayautama.co.id" className="text-secondary-foreground/80 hover:text-white transition-colors block text-base italic underline underline-offset-4 decoration-primary/30 hover:decoration-primary">
                    info@majujayautama.co.id
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left">
              <p className="text-xs font-mono uppercase tracking-widest text-white/40">
                © {currentYear} PT Maju Jaya Utama Lestari
              </p>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                 <p className="text-xs text-secondary-foreground/40 font-medium tracking-tight">
                    {i18n.language === "id"
                      ? "Produsen Produk Kertas Konversi Berkualitas"
                      : "Quality Converted Paper Products Manufacturer"}
                 </p>
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-white/10 hidden sm:block" />
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">
                 Banten, Indonesia
              </p>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
