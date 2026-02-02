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
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionArt from "@/components/SectionArt";

const ContactSection = () => {
  const { t } = useTranslation("contact");

  const contactInfo = [
    {
      icon: MapPin,
      title: t("info.office.title"),
      content: t("info.office.address"),
      link: "https://maps.google.com/?q=Jl.+Raya+Legok+No.88,+Tangerang,+Banten",
    },
    {
      icon: Phone,
      title: t("info.phone.title"),
      content: t("info.phone.number"),
      link: "tel:+622159493388",
    },
    {
      icon: Mail,
      title: t("info.email.title"),
      content: t("info.email.value"),
      link: "mailto:info@majujayautama.co.id",
    },
    {
      icon: Clock,
      title: t("info.hours.title", "Business Hours"),
      content: t("info.hours.value", "Monday - Saturday: 08:00 - 17:00"),
      link: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const phone = formData.get("phone") as string;
    const product = formData.get("product") as string;
    const message = formData.get("message") as string;

    // Construct WhatsApp message
    const whatsappMessage = `Halo, saya ${name} dari ${company}.\n\nEmail: ${email}\nTelepon: ${phone}\nProduk: ${product}\n\nPesan:\n${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=622159493388&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-subtle animate-section relative overflow-hidden"
    >
      <SectionArt />
      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 border border-primary-subtle">
            {t("section.badge")}
          </div>
          <h2 className="heading-2 text-primary mb-4">{t("section.title")}</h2>
          <p className="text-body-large text-muted-foreground">
            {t("section.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <div>
              <span className="text-primary font-semibold tracking-widest uppercase text-xs">
                {t("section.badge")}
              </span>
              <h3 className="heading-3 text-foreground mt-2">
                {t("form.title")}
              </h3>
              <p className="text-body text-muted-foreground mt-3 leading-relaxed">
                {t("form.description")}
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="card-padding card-surface card-inset card-hover-premium group"
                >
                  <div className="card-accent-line" />
                  <div className="card-corner-cut" />
                  <info.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-semibold text-foreground mb-1">
                    {info.title}
                  </h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-body-small"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-body-small">
                      {info.content}
                    </p>
                  )}
                </Card>
              ))}
            </div>

            {/* Embedded Map */}
            <Card className="overflow-hidden rounded-2xl card-surface h-64">
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
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="card-padding lg:card-padding-large card-surface card-inset">
            <div className="card-accent-line" />
            <div className="card-corner-cut" />
            <h3 className="heading-3 text-primary mb-2">
              {t("form.title")}
            </h3>
            <p className="text-body text-muted-foreground mb-8">
              {t("form.description")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("form.fields.name.label", "Full Name")}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={t("form.fields.name.placeholder")}
                  className="bg-background border-border"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("form.fields.email.label", "Email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("form.fields.email.placeholder")}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("form.fields.phone.label", "Phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder={t("form.fields.phone.placeholder")}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("form.fields.company.label", "Company")}
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder={t("form.fields.company.placeholder")}
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label
                  htmlFor="product"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("form.fields.product.label", "Product Interest")}
                </label>
                <Select name="product">
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder={t("form.fields.product.placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    {(t("form.fields.product.options", { returnObjects: true }) as string[]).map(
                      (option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("form.fields.message.label", "Message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder={t("form.fields.message.placeholder")}
                  className="bg-background border-border min-h-[120px]"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  type="submit"
                  className="btn-gradient-brand shadow-brand text-body font-semibold px-8 py-5 h-auto flex-1 rounded-full"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t("form.submit")}
                </Button>
              </div>
            </form>

            {/* Direct WhatsApp */}
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground text-body-small mb-4">
                {t("form.whatsapp.text", "Prefer to chat directly?")}
              </p>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a
                  href="https://api.whatsapp.com/send?phone=622159493388"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                  </svg>
                  Chat WhatsApp
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
