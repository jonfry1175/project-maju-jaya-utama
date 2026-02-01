import { Card } from "@/components/ui/card";
import { Building2, MapPin, Phone, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionArt from "@/components/SectionArt";

const AboutSection = () => {
  const { t } = useTranslation("about");

  const stats = [
    {
      icon: Users,
      label: t("stats.employees.label"),
      value: t("stats.employees.value"),
    },
    {
      icon: Building2,
      label: t("stats.sales.label"),
      value: t("stats.sales.value"),
    },
    {
      icon: MapPin,
      label: t("stats.location.label"),
      value: t("stats.location.value"),
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-background animate-section relative overflow-hidden"
    >
      <SectionArt />
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 border border-primary-subtle">
            {t("section.badge")}
          </div>
          <h2 className="heading-2 text-primary mb-4">
            {t("section.title")}
          </h2>
          <p className="text-body-large text-muted-foreground">
            {t("section.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 max-w-6xl mx-auto">
          <Card className="card-padding-large card-surface card-inset">
            <div className="card-accent-line" />
            <div className="card-corner-cut" />
            <h3 className="heading-4 text-primary mb-4">{t("profile.title")}</h3>
            <p className="text-body text-muted-foreground mb-6">
              {t("profile.description")}
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="text-base font-semibold text-foreground">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-4">
            <Card className="card-padding card-surface card-inset card-hover-premium group">
              <div className="card-accent-line" />
              <div className="card-corner-cut" />
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t("address.title")}
                  </div>
                  <p className="text-body-small text-muted-foreground">
                    {t("address.value")}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="card-padding card-surface card-inset card-hover-premium group">
              <div className="card-accent-line" />
              <div className="card-corner-cut" />
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-1">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t("contact.title")}
                  </div>
                  <p className="text-body-small text-muted-foreground">
                    {t("contact.value")}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="card-padding card-surface card-inset card-hover-premium group">
              <div className="card-accent-line" />
              <div className="card-corner-cut" />
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-1">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t("industry.title")}
                  </div>
                  <p className="text-body-small text-muted-foreground">
                    {t("industry.value")}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
