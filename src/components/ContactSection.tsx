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
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation("contact");

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-subtle animate-section"
    >
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 border border-primary-subtle">
            {t("section.badge")}
          </div>
          <h2 className="heading-2 text-primary mb-4">{t("section.title")}</h2>
          <p className="text-body-large text-muted-foreground">
            {t("section.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="space-y-4">
            <Card className="card-padding bg-white border border-primary-subtle">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t("info.office.title")}
                  </div>
                  <p className="text-body-small text-muted-foreground">
                    {t("info.office.address")}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="card-padding bg-white border border-primary-subtle">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t("info.phone.title")}
                  </div>
                  <p className="text-body-small text-muted-foreground">
                    {t("info.phone.number")}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="card-padding bg-white border border-primary-subtle">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t("info.email.title")}
                  </div>
                  <p className="text-body-small text-muted-foreground">
                    {t("info.email.value")}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="lg:col-span-2 card-padding lg:card-padding-large bg-white border border-primary-subtle shadow-soft">
            <h3 className="heading-3 text-primary mb-2">
              {t("form.title")}
            </h3>
            <p className="text-body text-muted-foreground mb-6">
              {t("form.description")}
            </p>
            <form className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder={t("form.fields.name.placeholder")} />
                <Input placeholder={t("form.fields.email.placeholder")} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder={t("form.fields.company.placeholder")} />
                <Input placeholder={t("form.fields.phone.placeholder")} />
              </div>
              <Select>
                <SelectTrigger>
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
              <Textarea
                rows={4}
                placeholder={t("form.fields.message.placeholder")}
              />
              <Button className="btn-gradient-brand shadow-brand text-body font-semibold px-6 py-4 h-auto">
                {t("form.submit")}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
