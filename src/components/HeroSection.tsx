import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Building2,
  Phone,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const { t } = useTranslation("hero");
  const navigate = useNavigate();

  // WhatsApp integration
  const whatsappNumber = "6281290001234";
  const whatsappMessage = encodeURIComponent(t("cta.whatsappMessage"));
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const stats = [
    {
      icon: Building2,
      value: 100,
      suffix: "%",
      label: t("stats.commitment.label"),
      color: "primary",
    },
    {
      icon: TrendingUp,
      value: 24,
      suffix: "/7",
      label: t("stats.support.label"),
      color: "accent",
    },
    {
      icon: Award,
      value: 1,
      suffix: "",
      label: t("stats.solution.label"),
      color: "primary",
    },
    {
      icon: null,
      value: null,
      suffix: "",
      label: "partnership",
      color: "accent",
      isPartnership: true,
    },
  ];

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const stepValue = stat.value / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.min(stepValue * currentStep, stat.value);
            return newCounters;
          });

          if (currentStep >= steps) {
            clearInterval(interval);
          }
        }, duration / steps);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("hero-stats");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          className="w-full h-full object-cover transform scale-x-[-1]">
          <source src="/background-video.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Jakarta Skyline"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/85 lg:from-background/80 lg:via-background/60 lg:to-background/80"></div>
        {/* Dark overlay for text areas - responsive */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/70 lg:bg-gradient-to-r lg:from-background/90 lg:via-background/50 lg:to-transparent"></div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(0,0,0,0.02)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        }}></div>

      {/* Subtle gradient accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-accent/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent"></div>

      <div className="container mx-auto container-padding section-padding">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column - Enhanced Content */}
          <div className="space-y-6 sm:space-y-8 animate-hero-content order-1 lg:order-1">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-body-small font-semibold border border-primary-subtle shadow-lg">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                {t("badge")}
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h1
                  className="heading-1 text-primary"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                  {t("title")}
                  <span className="text-gradient block mt-2 sm:mt-3 lg:mt-4 leading-normal pb-1 sm:pb-2">
                    {t("titleHighlight")}
                  </span>
                </h1>

                <p className="text-body-large text-muted-foreground max-w-xl pt-1 sm:pt-2">
                  {t("description")}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="btn-gradient-brand shadow-brand text-body font-semibold px-6 sm:px-8 py-4 sm:py-6 h-auto group w-full sm:w-auto"
                onClick={() => navigate('/ipo-process/mapping')}>
                {t("cta.startJourney")}
                <ArrowRight className="ml-2 icon-small group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                size="lg"
                className="text-body font-semibold px-6 sm:px-8 py-4 sm:py-6 h-auto border-2 group w-full sm:w-auto bg-white/90 hover:bg-green-500 hover:text-white hover:border-green-500">
                <Phone className="mr-2 icon-small group-hover:scale-110 transition-transform" />
                {t("cta.watchVideo")}
              </Button>
            </div>

            {/* Partner Logos */}
            <div className="space-y-3 sm:space-y-4 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg inline-block border border-border w-full sm:w-auto">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <img
                  src="/logo.png"
                  alt="Global Sinergi Kapital"
                  className="icon-medium lg:icon-large object-contain"
                />
                <p className="text-body-small text-gray-600 font-medium">
                  {t("partners.label")}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8 px-1 sm:px-2 lg:px-4">
                <div className="flex items-center justify-center h-10 sm:h-12 lg:h-14 xl:h-16">
                  <img
                    src="/logo/logo-bei.webp"
                    alt="BEI - Indonesia Stock Exchange"
                    className="h-8 sm:h-10 lg:h-12 xl:h-full w-auto object-contain max-w-full"
                  />
                </div>
                <div className="flex items-center justify-center h-10 sm:h-12 lg:h-14 xl:h-16">
                  <img
                    src="/logo/logo-ojk.png"
                    alt="OJK - Indonesia Financial Services Authority"
                    className="h-8 sm:h-10 lg:h-12 xl:h-full w-auto object-contain max-w-full"
                  />
                </div>
                <div className="flex items-center justify-center h-10 sm:h-12 lg:h-14 xl:h-16">
                  <img
                    src="/logo/logo-ksei.png"
                    alt="KSEI - Indonesia Central Securities Depository"
                    className="h-8 sm:h-10 lg:h-12 xl:h-full w-auto object-contain max-w-full"
                  />
                </div>
                                  <div className="flex items-center justify-center h-10 sm:h-12 lg:h-14 xl:h-16 col-span-2 sm:col-span-1">
                  <img
                    src="/logo/logo-kpei.png"
                    alt="KPEI - Indonesia Clearing Guarantee Corporation"
                    className="h-8 sm:h-10 lg:h-12 xl:h-full w-auto object-contain max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Stats Grid */}
          <div
            id="hero-stats"
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 animate-hero-stats order-2 lg:order-2 mt-8 lg:mt-0">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const displayValue =
                stat.value && stat.value % 1 !== 0
                  ? counters[index].toFixed(1)
                  : stat.value ? Math.floor(counters[index]) : null;

              // Special card for partnership
              if (stat.isPartnership) {
                return (
                  <Card
                    key={index}
                    className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border border-subtle hover:border-primary-medium hover:shadow-lg transition-all duration-200 animate-card">
                    <div className="card-padding space-y-2 sm:space-y-3 lg:space-y-4 text-center">
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground font-medium leading-tight">
                          Global Sinergi Kapital part of
                        </p>
                        <div className="flex items-center justify-center">
                          <img
                            src="/logo-ritz-1.png"
                            alt="RITZ Corp"
                            className="h-20 sm:h-24 lg:h-28 xl:h-32 w-auto object-contain max-w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              }

              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border border-subtle hover:border-primary-medium hover:shadow-lg transition-all duration-200 animate-card">
                  <div className="card-padding space-y-2 sm:space-y-3 lg:space-y-4">
                    {/* Icon with subtle styling */}
                    <div
                      className={`icon-large sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 ${
                        stat.color === "primary"
                          ? "bg-primary/10"
                          : stat.color === "success"
                          ? "bg-success/10"
                          : stat.color === "accent"
                          ? "bg-accent/10"
                          : "bg-secondary/10"
                      } rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                      <Icon
                        className={`icon-medium lg:icon-large ${
                          stat.color === "primary"
                            ? "text-primary"
                            : stat.color === "success"
                            ? "text-success"
                            : stat.color === "accent"
                            ? "text-accent"
                            : "text-secondary"
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Clean Typography */}
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex items-baseline gap-1">
                        <span className="heading-3 xl:heading-2 text-foreground">
                          {displayValue}
                        </span>
                        <span className="text-body lg:heading-5 xl:heading-4 font-medium text-foreground/70">
                          {stat.suffix}
                        </span>
                      </div>
                      <p className="text-body-small text-muted-foreground font-medium leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
