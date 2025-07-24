import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  MessageSquare,
  CalendarIcon,
  Building2,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  Briefcase,
  Shield,
} from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { id, enUS } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t, i18n } = useTranslation("contact");
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");

  // Get the appropriate date-fns locale based on current language
  const dateLocale = i18n.language === "id" ? id : enUS;

  const contactInfo = [
    {
      icon: Building2,
      title: t("info.office.title"),
      details: t("info.office.address", { returnObjects: true }) as string[],
      action: {
        label: t("info.office.action"),
        link: "https://maps.google.com",
      },
    },
    {
      icon: Phone,
      title: t("info.phone.title"),
      details: t("info.phone.numbers", { returnObjects: true }) as string[],
      action: { label: t("info.phone.action"), link: "tel:+622112345678" },
    },
    {
      icon: MessageSquare,
      title: t("info.whatsapp.title"),
      details: [t("info.whatsapp.number")],
      action: {
        label: t("info.whatsapp.action"),
        link: "https://wa.me/6281290001234",
      },
    },
    {
      icon: Clock,
      title: t("info.hours.title"),
      details: t("info.hours.schedule", { returnObjects: true }) as string[],
      action: { label: t("info.hours.action"), link: "#booking" },
    },
  ];

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  const industries =
    i18n.language === "id"
      ? [
          "Teknologi & Digital",
          "Manufaktur & Industri",
          "Perdagangan & Retail",
          "Properti & Real Estate",
          "Perbankan & Keuangan",
          "Energi & Pertambangan",
          "Kesehatan & Farmasi",
          "Logistik & Transportasi",
          "Agribisnis & Perkebunan",
          "Lainnya",
        ]
      : [
          "Technology & Digital",
          "Manufacturing & Industry",
          "Trade & Retail",
          "Property & Real Estate",
          "Banking & Finance",
          "Energy & Mining",
          "Healthcare & Pharmaceutical",
          "Logistics & Transportation",
          "Agribusiness & Plantation",
          "Others",
        ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-subtle animate-section">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
            <Users className="icon-small mr-2" />
            {t("section.badge")}
          </div>

          <h2 className="heading-2 text-primary mb-4 sm:mb-6">
            {t("section.title")}
          </h2>

          <p className="text-body-large text-muted-foreground">
            {t("section.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">

            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="card-padding bg-white border border-subtle hover:border-primary-medium hover:shadow-xl transition-all duration-300 group animate-card">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="icon-large sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <info.icon className="icon-medium text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-1 sm:mb-2 text-body">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-muted-foreground text-body-small">
                        {detail}
                      </p>
                    ))}
                    {info.action && (
                      <a
                        href={info.action.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-body-small text-primary hover:text-primary/80 mt-2 sm:mt-3 font-semibold">
                        {info.action.label}
                        <ArrowRight className="ml-1 icon-small" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            {/* Office Location */}
            <Card className="overflow-hidden bg-white border border-subtle hover:border-primary-medium hover:shadow-xl transition-all duration-300 animate-card">
              <div className="relative h-32 sm:h-40 lg:h-48">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                  alt="Jakarta Business District"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 card-padding">
                  <h4 className="font-semibold mb-1 sm:mb-2 text-foreground flex items-center text-body">
                    <Globe className="icon-small mr-2" />
                    {i18n.language === "id"
                      ? "Lokasi Strategis"
                      : "Strategic Location"}
                  </h4>
                  <p className="text-body-small text-muted-foreground">
                    {i18n.language === "id"
                      ? "Jantung bisnis Jakarta dengan akses mudah ke institusi keuangan."
                      : "Heart of Jakarta business district with easy access to financial institutions."}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Middle & Right Column - Enhanced Contact Form */}
          <Card className="lg:col-span-2 card-padding lg:card-padding-large bg-white border border-subtle shadow-xl order-1 lg:order-2 animate-card">
            <div className="mb-6 sm:mb-8">
              <h3 className="heading-3 text-primary mb-2 sm:mb-3">
                {t("form.title")}
              </h3>
              <p className="text-muted-foreground text-body">
                {t("form.description")}
              </p>
            </div>

            <form className="space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-body-small font-semibold text-foreground mb-2">
                    {t("form.fields.name.label")} *
                  </label>
                  <Input
                    placeholder={t("form.fields.name.placeholder")}
                    className="h-10 sm:h-12 text-body bg-white"
                  />
                </div>
                <div>
                  <label className="block text-body-small font-semibold text-foreground mb-2">
                    {i18n.language === "id" ? "Jabatan" : "Position"} *
                  </label>
                  <Input
                    placeholder={
                      i18n.language === "id"
                        ? "CEO / CFO / Direktur"
                        : "CEO / CFO / Director"
                    }
                    className="h-10 sm:h-12 text-body bg-white"
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-body-small font-semibold text-foreground mb-2">
                    {t("form.fields.company.label")} *
                  </label>
                  <Input
                    placeholder={t("form.fields.company.placeholder")}
                    className="h-10 sm:h-12 text-body bg-white"
                  />
                </div>
                <div>
                  <label className="block text-body-small font-semibold text-foreground mb-2">
                    {i18n.language === "id"
                      ? "Industri/Sektor"
                      : "Industry/Sector"}{" "}
                    *
                  </label>
                  <Select>
                    <SelectTrigger className="h-10 sm:h-12 text-body bg-white">
                      <SelectValue
                        placeholder={
                          i18n.language === "id"
                            ? "Pilih industri"
                            : "Select industry"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem
                          key={industry}
                          value={industry.toLowerCase()}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-body-small font-semibold text-foreground mb-2">
                    {t("form.fields.email.label")} *
                  </label>
                  <Input
                    type="email"
                    placeholder={t("form.fields.email.placeholder")}
                    className="h-10 sm:h-12 text-body bg-white"
                  />
                </div>
                <div>
                  <label className="block text-body-small font-semibold text-foreground mb-2">
                    {t("form.fields.phone.label")} *
                  </label>
                  <Input
                    type="tel"
                    placeholder={t("form.fields.phone.placeholder")}
                    className="h-10 sm:h-12 text-body bg-white"
                  />
                </div>
              </div>

              {/* Company Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-body-small font-semibold text-foreground mb-2">
                    {i18n.language === "id"
                      ? "Tahun Pendirian"
                      : "Founded Year"}
                  </label>
                  <Input
                    type="number"
                    placeholder={
                      i18n.language === "id" ? "Contoh: 2020" : "e.g.: 2020"
                    }
                    className="h-10 sm:h-12 text-body bg-white"
                  />
                </div>
                <div>
                  <label className="block text-body-small font-semibold text-foreground mb-2">
                    {i18n.language === "id"
                      ? "Jumlah Karyawan"
                      : "Number of Employees"}
                  </label>
                  <Select>
                    <SelectTrigger className="h-10 sm:h-12 text-body bg-white">
                      <SelectValue
                        placeholder={
                          i18n.language === "id"
                            ? "Pilih range"
                            : "Select range"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10</SelectItem>
                      <SelectItem value="11-50">11-50</SelectItem>
                      <SelectItem value="51-100">51-100</SelectItem>
                      <SelectItem value="101-500">101-500</SelectItem>
                      <SelectItem value="500+">500+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Consultation Details */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {i18n.language === "id"
                    ? "Ceritakan tentang perusahaan dan kebutuhan IPO Anda"
                    : "Tell us about your company and IPO needs"}{" "}
                  *
                </label>
                <Textarea
                  placeholder={
                    i18n.language === "id"
                      ? "Jelaskan secara singkat tentang bisnis, visi, dan mengapa ingin go public..."
                      : "Briefly describe your business, vision, and why you want to go public..."
                  }
                  className="min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] text-body bg-white"
                />
              </div>

              {/* Preferred Meeting */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-body-small font-semibold text-foreground mb-2">
                    {i18n.language === "id"
                      ? "Tanggal Konsultasi"
                      : "Consultation Date"}
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-10 sm:h-12 text-body justify-start text-left font-normal bg-white",
                          !date && "text-muted-foreground"
                        )}>
                        <CalendarIcon className="mr-2 icon-small" />
                        {date ? (
                          format(date, "PPP", { locale: dateLocale })
                        ) : (
                          <span>
                            {i18n.language === "id"
                              ? "Pilih tanggal"
                              : "Pick a date"}
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        locale={dateLocale}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="block text-body-small font-semibold text-foreground mb-2">
                    {i18n.language === "id"
                      ? "Waktu Konsultasi"
                      : "Consultation Time"}
                  </label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="h-10 sm:h-12 text-body bg-white">
                      <SelectValue
                        placeholder={
                          i18n.language === "id" ? "Pilih waktu" : "Select time"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time} WIB
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 sm:pt-6">
                <Button
                  type="submit"
                  className="w-full btn-gradient-brand shadow-brand text-body font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto group">
                  <CheckCircle className="mr-2 icon-small" />
                  {i18n.language === "id"
                    ? "Jadwalkan Konsultasi Gratis"
                    : "Schedule Free Consultation"}
                  <ArrowRight className="ml-2 icon-small group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Additional Info */}
              <div className="bg-primary/5 rounded-xl card-padding-small border border-primary/10">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Shield className="icon-small text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-body-small text-primary font-semibold mb-1">
                      {i18n.language === "id"
                        ? "Informasi Anda Aman"
                        : "Your Information is Safe"}
                    </p>
                    <p className="text-body-small text-muted-foreground">
                      {i18n.language === "id"
                        ? "Semua data yang Anda berikan akan dijaga kerahasiaannya sesuai kebijakan privasi kami."
                        : "All data you provide will be kept confidential according to our privacy policy."}
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
