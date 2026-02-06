import MotionSection from "@/components/MotionSection";
import { Card, CardContent } from "@/components/ui/card";
import { siteMetadata } from "@/lib/seo";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const LocationMap = () => {
  const { i18n, t } = useTranslation("contact");
  const isId = i18n.language === "id";
  const fullAddress = `${siteMetadata.address.streetAddress}, ${siteMetadata.address.addressLocality}, ${siteMetadata.address.addressRegion}, ${siteMetadata.address.postalCode}, ${siteMetadata.address.addressCountry}`;

  return (
    <MotionSection className="section-padding bg-background-secondary">
      <div className="container mx-auto container-padding max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            {isId ? "Lokasi Pabrik" : "Factory Location"}
          </p>
          <h2 className="heading-md mt-3">
            {isId
              ? "Kunjungi Fasilitas Produksi PT Maju Jaya Utama Lestari"
              : "Visit PT Maju Jaya Utama Lestari Production Facility"}
          </h2>
          <p className="text-body text-muted-foreground mt-3">{fullAddress}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6">
          <div className="overflow-hidden rounded-2xl border border-card-border shadow-soft bg-card">
            <iframe
              title={t("info.mapTitle")}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <Card className="border-card-border">
            <CardContent className="p-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {isId ? "Alamat" : "Address"}
                  </p>
                  <p className="text-sm text-foreground mt-1">{fullAddress}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t("info.phone.title")}
                  </p>
                  <a
                    href={`tel:${siteMetadata.contactPhone.replace(/[^+\d]/g, "")}`}
                    className="text-sm text-primary mt-1 inline-block"
                  >
                    {siteMetadata.contactPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t("info.email.title")}
                  </p>
                  <a
                    href={`mailto:${siteMetadata.contactEmail}`}
                    className="text-sm text-primary mt-1 inline-block"
                  >
                    {siteMetadata.contactEmail}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MotionSection>
  );
};

export default LocationMap;
