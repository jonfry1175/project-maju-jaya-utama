import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const PartnershipFAQSection = () => {
  const { t } = useTranslation("partners-page");

  const faqs = [
    {
      question: t("faq.items.item1.question"),
      answer: t("faq.items.item1.answer"),
    },
    {
      question: t("faq.items.item2.question"),
      answer: t("faq.items.item2.answer"),
    },
    {
      question: t("faq.items.item3.question"),
      answer: t("faq.items.item3.answer"),
    },
    {
      question: t("faq.items.item4.question"),
      answer: t("faq.items.item4.answer"),
    },
    {
      question: t("faq.items.item5.question"),
      answer: t("faq.items.item5.answer"),
    },
    {
      question: t("faq.items.item6.question"),
      answer: t("faq.items.item6.answer"),
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary/20">
              <HelpCircle className="icon-small mr-2" />
              {t("faq.badge")}
            </div>
            
            <h2 className="heading-2 font-bold text-primary font-display mb-4 leading-tight">
              {t("faq.title")}
            </h2>
            
            <p className="text-body-large text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("faq.description")}
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-sm border-medium hover:border-primary/20 transition-colors overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-semibold text-foreground text-body">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional Help */}
          <div className="mt-12 text-center card-padding bg-white rounded-2xl">
            <h3 className="heading-6 font-bold text-foreground mb-2">
              {t("faq.stillHaveQuestions.title")}
            </h3>
            <p className="text-body text-muted-foreground mb-4">
              {t("faq.stillHaveQuestions.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:partnership@globalsinergikapital.com" 
                className="text-primary font-semibold hover:underline"
              >
                {t("faq.stillHaveQuestions.email")}
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a 
                href="tel:+622112345678" 
                className="text-primary font-semibold hover:underline"
              >
                {t("faq.stillHaveQuestions.phone")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipFAQSection;