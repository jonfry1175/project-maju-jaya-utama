import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const PartnerLogosSection = () => {
  const { t } = useTranslation("capabilities");
  const items = t("items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="capabilities" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 border border-primary-subtle">
            {t("section.badge")}
          </div>
          <h2 className="heading-2 text-primary mb-4">{t("section.title")}</h2>
          <p className="text-body-large text-muted-foreground">
            {t("section.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <Card
              key={item.title}
              className="card-padding bg-gradient-to-br from-card to-white/80 border border-primary-subtle shadow-soft"
            >
              <h3 className="heading-5 text-foreground mb-2">{item.title}</h3>
              <p className="text-body-small text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;
