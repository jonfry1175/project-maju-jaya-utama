import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import SectionArt from "@/components/SectionArt";

const FAQSection = () => {
  const { t } = useTranslation("faq");
  const items = t("items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section
      id="faq"
      className="section-padding bg-background animate-section relative overflow-hidden"
    >
      <SectionArt />
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 border border-primary-subtle">
            {t("section.badge")}
          </div>
          <h2 className="heading-2 text-primary mb-4">{t("section.title")}</h2>
          <p className="text-body-large text-muted-foreground">
            {t("section.description")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="border border-subtle rounded-xl bg-white"
              >
                <AccordionTrigger className="px-4 sm:px-6 py-4 text-left hover:no-underline">
                  <span className="text-body font-semibold text-foreground">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-4 pt-0">
                  <p className="text-body-small text-muted-foreground">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
