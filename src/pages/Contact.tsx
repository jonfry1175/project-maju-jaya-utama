import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteMetadata } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { Mail, MapPin, Phone } from "lucide-react";
import { FormEvent } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation("contact");
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("contact"));

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${siteMetadata.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <SEO title={isId ? "Kontak" : "Contact"} description={meta.description} />

      <MotionSection className="pt-32 pb-10 bg-background">
        <div className="container mx-auto container-padding max-w-6xl">
          <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            {t("section.badge")}
          </p>
          <h1 className="heading-lg mt-3">{t("section.title")}</h1>
          <p className="text-body text-muted-foreground mt-3 max-w-3xl">{t("section.description")}</p>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-card-border">
              <CardContent className="p-6 lg:p-8">
                <h2 className="heading-sm">{t("form.heading")}</h2>
                <p className="text-body text-muted-foreground mt-2 mb-6">{t("form.subheading")}</p>

                <form className="space-y-4" onSubmit={onSubmit}>
                  <Input name="name" placeholder={t("form.fields.name.placeholder")} required />
                  <Input name="email" type="email" placeholder={t("form.fields.email.placeholder")} required />
                  <Input name="company" placeholder={t("form.fields.company.placeholder")} />
                  <Input name="phone" placeholder={t("form.fields.phone.placeholder")} />
                  <Textarea name="message" placeholder={t("form.fields.message.placeholder")} rows={5} required />
                  <Button type="submit" className="bg-primary hover:bg-primary/90 w-full">
                    {t("form.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardContent className="p-6 lg:p-8 space-y-6">
                <h2 className="heading-sm">{isId ? "Informasi Kontak" : "Contact Information"}</h2>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{t("info.office.title")}</p>
                    <p className="text-sm mt-1 text-foreground">{t("info.office.address")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{t("info.phone.title")}</p>
                    <a className="text-sm mt-1 text-primary inline-block" href={`tel:${siteMetadata.contactPhone.replace(/[^+\d]/g, "")}`}>
                      {siteMetadata.contactPhone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{t("info.email.title")}</p>
                    <a className="text-sm mt-1 text-primary inline-block" href={`mailto:${siteMetadata.contactEmail}`}>
                      {siteMetadata.contactEmail}
                    </a>
                    <a className="text-sm mt-1 text-primary inline-block" href={`mailto:${siteMetadata.secondaryContactEmail}`}>
                      {siteMetadata.secondaryContactEmail}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </MotionSection>
    </>
  );
};

export default Contact;
