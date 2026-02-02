import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
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
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent blur-[120px]" />
      </div>

      <div className="container mx-auto container-padding relative z-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Maju Jaya Utama Lestari"
                  className="h-16 w-auto brightness-0 invert opacity-90"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-display font-semibold tracking-tight text-white">
                  Maju Jaya Utama Lestari
                </h3>
                <p className="text-sm uppercase tracking-widest text-primary font-medium">
                  {i18n.language === "id" ? "Produsen Kertas Konversi" : "Converted Paper Manufacturer"}
                </p>
              </div>
              <p className="text-secondary-foreground/70 leading-relaxed max-w-sm">
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
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group"
                  title={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 lg:col-start-5 space-y-6">
            <h4 className="text-lg font-semibold text-white">{t("sections.links")}</h4>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors hover:translate-x-1 duration-300 inline-flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-semibold text-white">{t("contact.title")}</h4>
            <div className="space-y-5">
               <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-white/50 block">Address</span>
                  <a 
                    href="https://maps.google.com/?q=Jl.+Raya+Legok+No.88,+Tangerang,+Banten"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground/80 hover:text-white transition-colors leading-relaxed block"
                  >
                    {t("contact.address")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-white/50 block">Phone</span>
                  <a href="tel:+622159493388" className="text-secondary-foreground/80 hover:text-white transition-colors block font-mono">
                    +62 21 5949 3388
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                 <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-white/50 block">Email</span>
                  <a href="mailto:info@majujayautama.co.id" className="text-secondary-foreground/80 hover:text-white transition-colors block">
                    info@majujayautama.co.id
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-semibold text-white">Location</h4>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-video md:aspect-square lg:aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.068137330752!2d106.606774!3d-6.2614533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc0f17105555%3A0x7e7c81d3f23d0c2a!2sJl.+Raya+Legok+No.88%2C+Klp.+Dua%2C+Kec.+Klp.+Dua%2C+Kabupaten+Tangerang%2C+Banten+15810!5e0!3m2!1sen!2sid!4v1629858586326!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                title="Location Map"
              />
              <a
                href="https://maps.google.com/?q=Jl.+Raya+Legok+No.88,+Tangerang,+Banten"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none"
              />
              <div className="absolute bottom-4 left-4">
                 <Button size="sm" variant="secondary" className="backdrop-blur-md bg-white/90 hover:bg-white text-black shadow-lg">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Open Maps
                 </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary-foreground/40">
            <p>
              © {currentYear} PT Maju Jaya Utama Lestari. {i18n.language === "id" ? "Hak cipta dilindungi." : "All rights reserved."}
            </p>
            <div className="flex items-center gap-6">
              <span className="hidden md:inline-block w-1 h-1 rounded-full bg-white/20" />
               <p>
              {i18n.language === "id"
                ? "Produsen Produk Kertas Konversi Berkualitas"
                : "Quality Converted Paper Products Manufacturer"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
