import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

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
          width="16"
          height="16"
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
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand - Takes more space */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <img
                src="/logo.png"
                alt="Maju Jaya Utama Lestari"
                className="h-14 w-auto mb-4"
              />
              <div className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70">
                PT
              </div>
              <h3 className="heading-4">Maju Jaya Utama Lestari</h3>
            </div>
            <p className="text-primary-foreground/80 text-body leading-relaxed">
              {t("description")}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="heading-5">{t("sections.links")}</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1 text-primary-foreground/70 hover:text-white transition-colors text-body-small group"
                >
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="heading-5">{t("contact.title")}</h4>
            <div className="space-y-4 text-primary-foreground/80 text-body-small">
              <a
                href="https://maps.google.com/?q=Jl.+Raya+Legok+No.88,+Tangerang,+Banten"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <MapPin className="icon-small mt-0.5 flex-shrink-0" />
                <span>{t("contact.address")}</span>
              </a>
              <a
                href="tel:+622159493388"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="icon-small flex-shrink-0" />
                <span>{t("contact.phone")}</span>
              </a>
              <a
                href="mailto:info@majujayautama.co.id"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="icon-small flex-shrink-0" />
                <span>{t("contact.email")}</span>
              </a>
            </div>
          </div>

          {/* Location Map */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="heading-5">{t("sections.location", "Our Location")}</h4>
            <div className="rounded-xl overflow-hidden h-40 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5!2d106.6!3d-6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMDAuMCJTIDEwNsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Jl.+Raya+Legok+No.88,+Tangerang,+Banten"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-colors text-body-small"
            >
              <ExternalLink className="w-4 h-4" />
              {i18n.language === "id" ? "Lihat di Google Maps" : "View on Google Maps"}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-body-small text-primary-foreground/60">
            <p>
              © {currentYear} PT Maju Jaya Utama Lestari.{" "}
              {i18n.language === "id" ? "Hak cipta dilindungi." : "All rights reserved."}
            </p>
            <p className="text-center md:text-right">
              {i18n.language === "id"
                ? "Produsen Produk Kertas Konversi Berkualitas"
                : "Quality Converted Paper Products Manufacturer"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
