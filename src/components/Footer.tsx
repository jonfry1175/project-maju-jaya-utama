import { siteMetadata } from "@/lib/seo";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation("footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t("links.about"), to: "/about-us/our-company" },
    { name: t("links.products"), to: "/products" },
    { name: t("links.capabilities"), to: "/services" },
    { name: t("links.sustainability"), to: "/news" },
    { name: t("links.contact"), to: "/contact" },
  ];

  const fullAddress = `${siteMetadata.address.streetAddress}, ${siteMetadata.address.addressLocality}, ${siteMetadata.address.addressRegion}, ${siteMetadata.address.addressCountry}`;
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`;

  return (
    <footer className="bg-[#0f1115] text-secondary-foreground relative overflow-hidden border-t border-primary/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-industrial opacity-[0.05]" />
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -mr-96 -mt-96" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -ml-64 -mb-64" />
      </div>

      <div className="container mx-auto container-padding relative z-10 pt-24 pb-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
          <div className="lg:col-span-4 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-5">
                <div className="relative p-2 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                  <img
                    src="/logo.png"
                    alt="Maju Jaya Utama Lestari"
                    className="h-14 w-auto"
                  />
                </div>

              </div>
              <p className="text-secondary-foreground/60 leading-relaxed text-lg font-light">
                {t("description")}
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6 space-y-8">
            <h4 className="text-sm font-mono uppercase tracking-widest text-white/40 pb-4 border-b border-white/5">
              {t("sections.links")}
            </h4>
            <nav className="flex flex-col space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-secondary-foreground/60 hover:text-primary transition-all duration-300 flex items-center group text-lg"
                >
                  <ArrowRight className="w-4 h-4 mr-2 scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 space-y-8">
            <h4 className="text-sm font-mono uppercase tracking-widest text-white/40 pb-4 border-b border-white/5">
              {t("contact.title")}
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-500 border border-white/10 group-hover:border-primary">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mb-1">
                    Office & Factory
                  </span>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground/80 hover:text-white transition-colors leading-relaxed block text-base"
                  >
                    {fullAddress}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-500 border border-white/10 group-hover:border-primary">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mb-1">
                    Inquiries
                  </span>
                  <a
                    href={`tel:${siteMetadata.contactPhone.replace(/[^+\d]/g, "")}`}
                    className="text-secondary-foreground/80 hover:text-white transition-colors block font-mono text-xl"
                  >
                    {siteMetadata.contactPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-500 border border-white/10 group-hover:border-primary">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mb-1">
                    Email Support
                  </span>
                  <a
                    href={`mailto:${siteMetadata.contactEmail}`}
                    className="text-secondary-foreground/80 hover:text-white transition-colors block text-base italic underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
                  >
                    {siteMetadata.contactEmail}
                  </a>
                  <a
                    href={`mailto:${siteMetadata.secondaryContactEmail}`}
                    className="text-secondary-foreground/80 hover:text-white transition-colors block text-base italic underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
                  >
                    {siteMetadata.secondaryContactEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left">
            <p className="text-xs font-mono uppercase tracking-widest text-white/40">
              © {currentYear} PT Maju Jaya Utama Lestari
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-xs text-secondary-foreground/40 font-medium tracking-tight">
                {i18n.language === "id"
                  ? "Kualitas Konsisten untuk Kemitraan Jangka Panjang"
                  : "Consistent Quality for Long-Term Partnerships"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-white/10 hidden sm:block" />
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">
              BANTEN, INDONESIA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
