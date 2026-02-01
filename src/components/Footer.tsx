import { Mail, Phone, MapPin } from "lucide-react";
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

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70">
                PT
              </div>
              <h3 className="heading-4">Maju Jaya Utama Lestari</h3>
            </div>
            <p className="text-primary-foreground/80 text-body">
              {t("description")}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="heading-5">{t("sections.links")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-white transition-colors text-body-small"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="heading-5">{t("contact.title")}</h4>
            <div className="space-y-3 text-primary-foreground/80 text-body-small">
              <div className="flex items-start gap-2">
                <MapPin className="icon-small mt-0.5" />
                <span>{t("contact.address")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="icon-small" />
                <span>{t("contact.phone")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="icon-small" />
                <span>{t("contact.email")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-body-small text-primary-foreground/60">
          <p>
            © {currentYear} PT Maju Jaya Utama Lestari. {i18n.language === "id" ? "Hak cipta dilindungi." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
