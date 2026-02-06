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
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionArt from "@/components/SectionArt";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

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
      title: t("info.hours.title"),
      content: t("info.hours.value"),
      link: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const phone = formData.get("phone") as string;
    const product = formData.get("product") as string;
    const message = formData.get("message") as string;

    const whatsappMessage = t("form.whatsapp.prefill", {
      name,
      company: company || "-",
      email,
      phone: phone || "-",
      product: product || "-",
      message,
    });
    const whatsappUrl = `https://api.whatsapp.com/send?phone=622159493388&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-industrial opacity-[0.1]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto container-padding max-w-7xl relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-16 underline-glow">
          <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-primary/80">
              {t("section.badge")}
            </span>
          </div>
          <h2 className="heading-1 mb-6">
            {t("section.title")}
          </h2>
          <p className="text-body-large text-muted-foreground">
            {t("section.description")}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <motion.div 
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="heading-2 mb-4 italic">
                {t("form.title")}
              </h3>
              <p className="text-body-large text-muted-foreground">
                {t("form.description")}
              </p>
            </motion.div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card
                    className="group relative h-full bg-card/40 backdrop-blur-md border border-primary/10 p-8 rounded-2xl hover:border-primary/40 transition-all duration-500 shadow-xl overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="heading-5 mb-2">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-body-small text-muted-foreground hover:text-primary transition-colors break-words"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-body-small text-muted-foreground">
                          {info.content}
                        </p>
                      )}
                    </div>
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-2 h-0 bg-primary/20 group-hover:h-full transition-all duration-700" />
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Map Reveal */}
            <motion.div variants={itemVariants} className="relative group">
               <Card className="overflow-hidden rounded-3xl border border-primary/20 bg-card/40 backdrop-blur-md shadow-2xl h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5!2d106.6!3d-6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMDAuMCJTIDEwNsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2)' }}
                    allowFullScreen
                    loading="lazy"
                    title={t("info.mapTitle")}
                  />
                  <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 rounded-3xl" />
               </Card>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <AnimatedSection direction="right" className="m-0">
            <Card className="relative overflow-hidden bg-card/60 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
              <div className="absolute top-0 right-0 w-1 h-full bg-primary" />
              <div className="card-noise opacity-10" />
              
              <h3 className="heading-2 mb-2">
                {t("form.heading")}
              </h3>
              <p className="text-body text-muted-foreground mb-10">
                {t("form.subheading")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground px-2">
                    {t("form.fields.name.label", "Full Name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder={t("form.fields.name.placeholder")}
                    className="h-14 bg-white/5 border-white/10 focus:ring-primary focus:border-primary rounded-xl text-base sm:text-lg transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground px-2">
                      {t("form.fields.email.label", "Email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={t("form.fields.email.placeholder")}
                      className="h-14 bg-white/5 border-white/10 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-mono uppercase tracking-widest text-muted-foreground px-2">
                      {t("form.fields.phone.label", "Phone")}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder={t("form.fields.phone.placeholder")}
                      className="h-14 bg-white/5 border-white/10 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-mono uppercase tracking-widest text-muted-foreground px-2">
                    {t("form.fields.company.label", "Company")}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder={t("form.fields.company.placeholder")}
                    className="h-14 bg-white/5 border-white/10 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="product" className="text-xs font-mono uppercase tracking-widest text-muted-foreground px-2">
                    {t("form.fields.product.label", "Product Interest")}
                  </label>
                  <Select name="product">
                    <SelectTrigger className="h-14 bg-white/5 border-white/10 rounded-xl">
                      <SelectValue placeholder={t("form.fields.product.placeholder")} />
                    </SelectTrigger>
                    <SelectContent className="bg-white/90 backdrop-blur-xl border-white/20">
                      {(t("form.fields.product.options", { returnObjects: true }) as string[]).map(
                        (option) => (
                          <SelectItem key={option} value={option} className="hover:bg-primary/10 transition-colors">
                            {option}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground px-2">
                    {t("form.fields.message.label", "Message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={t("form.fields.message.placeholder")}
                    className="bg-white/5 border-white/10 rounded-xl min-h-[140px] text-base sm:text-lg transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-display font-bold text-base sm:text-lg rounded-2xl shadow-[0_0_30px_rgba(255,65,27,0.2)] hover:shadow-[0_0_40px_rgba(255,65,27,0.4)] transition-all duration-500 group"
                >
                  <Send className="w-6 h-6 mr-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  {t("form.submit")}
                </Button>
                
                {/* Direct WhatsApp CTA */}
                <div className="pt-6 text-center">
                   <a 
                     href="https://api.whatsapp.com/send?phone=622159493388" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center text-body-small font-semibold text-primary/70 hover:text-primary transition-colors space-x-2"
                   >
                     <span>{t("form.whatsapp.cta")}</span>
                     <ArrowRight className="w-4 h-4" />
                   </a>
                </div>
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
