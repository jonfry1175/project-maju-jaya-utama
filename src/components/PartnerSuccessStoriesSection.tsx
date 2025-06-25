import { Card } from "@/components/ui/card";
import { Quote, Star, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PartnerSuccessStoriesSection = () => {
  const { t } = useTranslation("partners-page");

  const stories = [
    {
      company: t("successStories.items.story1.company"),
      industry: t("successStories.items.story1.industry"),
      quote: t("successStories.items.story1.quote"),
      author: t("successStories.items.story1.author"),
      position: t("successStories.items.story1.position"),
      achievement: t("successStories.items.story1.achievement"),
      rating: 5,
    },
    {
      company: t("successStories.items.story2.company"),
      industry: t("successStories.items.story2.industry"),
      quote: t("successStories.items.story2.quote"),
      author: t("successStories.items.story2.author"),
      position: t("successStories.items.story2.position"),
      achievement: t("successStories.items.story2.achievement"),
      rating: 5,
    },
    {
      company: t("successStories.items.story3.company"),
      industry: t("successStories.items.story3.industry"),
      quote: t("successStories.items.story3.quote"),
      author: t("successStories.items.story3.author"),
      position: t("successStories.items.story3.position"),
      achievement: t("successStories.items.story3.achievement"),
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-success/20 text-success px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-success/30">
              <Star className="icon-small mr-2" />
              {t("successStories.badge")}
            </div>
            
            <h2 className="heading-2 font-bold text-primary font-display mb-4 leading-tight">
              {t("successStories.title")}
            </h2>
            
            <p className="text-body-large text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("successStories.description")}
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-padding h-full hover:shadow-xl transition-all duration-300 group border-medium hover:border-primary/20">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="icon-large text-primary/20" />
                  </div>

                  {/* Company Info */}
                  <div className="mb-4">
                    <h3 className="font-bold heading-6 text-foreground">{story.company}</h3>
                    <p className="text-body-small text-muted-foreground">{story.industry}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="icon-small fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-body-small text-muted-foreground italic mb-4 leading-relaxed">
                    "{story.quote}"
                  </blockquote>

                  {/* Achievement */}
                  <div className="mb-4 p-3 bg-success/10 rounded-lg">
                    <p className="text-body-small font-semibold text-success">
                      {story.achievement}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="text-body-small">
                    <p className="font-semibold text-foreground">{story.author}</p>
                    <p className="text-muted-foreground">{story.position}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button className="btn-gradient-brand shadow-brand">
              {t("successStories.cta")}
              <ArrowRight className="ml-2 icon-small" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSuccessStoriesSection;