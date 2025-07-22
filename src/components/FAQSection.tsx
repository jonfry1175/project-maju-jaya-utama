import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HelpCircle,
  MessageCircle,
  ArrowRight,
  Shield,
  FileText,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const FAQSection = () => {
  const { t, i18n } = useTranslation("faq");
  const faqCategories = [
    {
      category: t("categories.requirements.title"),
      questions: [
        {
          q: t("categories.requirements.questions.0.question"),
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                {t("categories.requirements.questions.0.answer.intro")}
              </p>
              <ul className="space-y-2">
                {t("categories.requirements.questions.0.answer.requirements", { returnObjects: true }).map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-semibold text-primary mr-2">{index + 1}.</span>
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
        {
          q: t("categories.requirements.questions.1.question"),
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                {t("categories.requirements.questions.1.answer")}
              </p>
            </div>
          ),
        },
        {
          q: t("categories.requirements.questions.2.question"),
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                {t("categories.requirements.questions.2.answer")}
              </p>
            </div>
          ),
        },
      ],
    },
    {
      category: t("categories.process.title"),
      questions: [
        {
          q: t("categories.process.questions.0.question"),
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">{t("categories.process.questions.0.answer.intro")}</p>
              <ul className="space-y-2">
                {t("categories.process.questions.0.answer.timeline", { returnObjects: true }).map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-semibold text-primary mr-2">{index + 1}.</span>
                    <span>
                      <strong>{step.phase}:</strong> {step.duration} - {step.activities}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
        {
          q: t("categories.process.questions.1.question"),
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                {t("categories.process.questions.1.answer")}
              </p>
            </div>
          ),
        },
      ],
    },
    {
      category: t("categories.services.title"),
      questions: [
        {
          q: t("categories.services.questions.0.question"),
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                {t("categories.services.questions.0.answer.intro")}
              </p>
              <ul className="space-y-2">
                {t("categories.services.questions.0.answer.services", { returnObjects: true }).map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-semibold text-primary mr-2">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
        {
          q: t("categories.services.questions.1.question"),
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                {t("categories.services.questions.1.answer")}
              </p>
            </div>
          ),
        },
      ],
    },
    {
      category: t("categories.postIPO.title"),
      questions: [
        {
          q: t("categories.postIPO.questions.0.question"),
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                {t("categories.postIPO.questions.0.answer.intro")}
              </p>
              <ul className="space-y-2">
                {t("categories.postIPO.questions.0.answer.obligations", { returnObjects: true }).map((obligation, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-semibold text-primary mr-2">•</span>
                    <span>{obligation}</span>
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
        {
          q: t("categories.postIPO.questions.1.question"),
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                {t("categories.postIPO.questions.1.answer")}
              </p>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <section id="faq" className="section-padding bg-background animate-section">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
            <HelpCircle className="icon-small mr-2" />
            {t("section.badge")}
          </div>

          <h2 className="heading-2 text-primary mb-4 sm:mb-6">
            {t("section.title")}
            <span className="text-gradient block mt-1 sm:mt-2 leading-normal pb-1 sm:pb-2">
              {t("section.titleHighlight")}
            </span>
          </h2>

          <p className="text-body-large text-muted-foreground">
            {t("section.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Categories */}
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8 sm:mb-10 lg:mb-12">
              <h3 className="heading-4 lg:heading-3 text-primary text-center mb-6 sm:mb-8 flex items-center justify-center">
                <FileText className="icon-medium mr-2 sm:mr-3" />
                {category.category}
              </h3>

              <Accordion
                type="single"
                collapsible
                className="space-y-3 sm:space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${categoryIndex}-${index}`}
                    className="border border-subtle rounded-xl bg-white hover:shadow-md transition-all duration-200 animate-card">
                    <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-5 text-left hover:no-underline hover:bg-muted/30 rounded-t-xl data-[state=open]:rounded-b-none transition-colors">
                      <span className="text-body lg:text-body-large font-semibold text-foreground pr-4">
                        {faq.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                      <div className="text-body-small lg:text-body text-muted-foreground">
                        {faq.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
                          <Card className="card-padding lg:card-padding-large bg-gradient-to-br from-card to-white/80 border border-primary-subtle animate-card">
              <h3 className="heading-4 lg:heading-3 text-primary mb-3 sm:mb-4">
                {t("stillHaveQuestions.title")}
              </h3>
              <p className="text-body text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                {t("stillHaveQuestions.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="btn-gradient-brand shadow-brand text-body font-semibold px-6 sm:px-8 group w-full sm:w-auto">
                  <MessageCircle className="mr-2 icon-small" />
                  {t("stillHaveQuestions.cta")}
                  <ArrowRight className="ml-2 icon-small group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-body font-semibold px-6 sm:px-8 border-2 w-full sm:w-auto">
                  <Shield className="mr-2 icon-small" />
                  {i18n.language === "id" ? "Hubungi Kami" : "Contact Us"}
                </Button>
              </div>

              {/* Quick Contact Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
                <div className="text-center card-padding-small bg-white/50 rounded-lg border border-medium">
                  <div className="icon-large sm:icon-large bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <MessageCircle className="icon-small text-primary" />
                  </div>
                  <p className="text-body-small font-semibold text-foreground mb-1">
                    WhatsApp
                  </p>
                  <p className="text-body-small text-muted-foreground">
                    {i18n.language === "id" ? "Respon Cepat" : "Quick Response"}
                  </p>
                </div>

                <div className="text-center card-padding-small bg-white/50 rounded-lg border border-medium">
                  <div className="icon-large sm:icon-large bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <HelpCircle className="icon-small text-primary" />
                  </div>
                  <p className="text-body-small font-semibold text-foreground mb-1">
                    {i18n.language === "id" ? "Email" : "Email"}
                  </p>
                  <p className="text-body-small text-muted-foreground">
                    {i18n.language === "id" ? "Detail Lengkap" : "Full Details"}
                  </p>
                </div>

                <div className="text-center card-padding-small bg-white/50 rounded-lg border border-medium">
                  <div className="icon-large sm:icon-large bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Shield className="icon-small text-primary" />
                  </div>
                  <p className="text-body-small font-semibold text-foreground mb-1">
                    {i18n.language === "id" ? "Telepon" : "Phone"}
                  </p>
                  <p className="text-body-small text-muted-foreground">
                    {i18n.language === "id" ? "Langsung Bicara" : "Direct Talk"}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
