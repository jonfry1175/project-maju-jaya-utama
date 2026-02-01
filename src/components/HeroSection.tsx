import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Factory, MapPin, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation("hero");
  const scrollToContact = () => {
    const section = document.querySelector("#contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    {
      icon: Users,
      label: t("stats.employees.label"),
      value: t("stats.employees.value"),
    },
    {
      icon: Factory,
      label: t("stats.industry.label"),
      value: t("stats.industry.value"),
    },
    {
      icon: MapPin,
      label: t("stats.location.label"),
      value: t("stats.location.value"),
    },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-subtle min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/0.15),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,hsl(var(--primary)/0.12),transparent_40%)]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grain' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M40 0H0V40' fill='none' stroke='rgba(0,0,0,0.04)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grain)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto container-padding section-padding relative">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div className="space-y-6 animate-hero-content">
            <div className="inline-flex items-center bg-white/80 text-primary px-4 py-2 rounded-full text-body-small font-semibold border border-primary-subtle">
              {t("badge")}
            </div>

            <div className="space-y-4">
              <h1 className="heading-1 text-primary">
                {t("title")}
                <span className="text-gradient block mt-3">
                  {t("titleHighlight")}
                </span>
              </h1>
              <p className="text-body-large text-muted-foreground max-w-2xl">
                {t("description")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="btn-gradient-brand shadow-brand text-body font-semibold px-6 sm:px-8 py-4 h-auto group"
                onClick={scrollToContact}
              >
                {t("cta.primary")}
                <ArrowRight className="ml-2 icon-small group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-body font-semibold px-6 sm:px-8 py-4 h-auto border-2 bg-white"
                onClick={scrollToContact}
              >
                {t("cta.secondary")}
              </Button>
            </div>
          </div>

          <div className="grid gap-4 animate-hero-stats">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="card-padding card-surface card-inset card-hover-premium bg-white/90 backdrop-blur-sm group"
              >
                <div className="card-accent-line" />
                <div className="card-corner-cut" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <stat.icon className="icon-medium text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {stat.value}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
