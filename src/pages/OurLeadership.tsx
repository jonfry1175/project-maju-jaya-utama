import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Check, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const OurLeadership = () => {
  const { t } = useTranslation("about");

  const team = ["ceo", "coo", "cfo"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
              <Users className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              {t("team.title")}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display mb-4 sm:mb-6 leading-tight">
              Our Leadership
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Meet our experienced leadership team committed to driving innovation and excellence in IPO consulting services.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Leadership Grid */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {team.map((memberKey, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden bg-background border border-subtle animate-card hover:shadow-xl transition-all duration-300">
                  {/* Photo Section */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0 
                          ? '1560250097-0b93528c311a' // Professional businessman
                          : index === 1 
                          ? '1573496359142-b8d87734a5a2' // Professional businesswoman
                          : '1472099645785-5658abf4ff4e' // Professional businessman 2
                      }?w=400&h=500&fit=crop&crop=face`}
                      alt={t(`team.members.${memberKey}.name`)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="card-padding space-y-3 sm:space-y-4">
                    <div className="text-center">
                      <h4 className="heading-5 text-foreground mb-1">
                        {t(`team.members.${memberKey}.name`)}
                      </h4>
                      <p className="text-primary font-semibold text-body-small mb-2">
                        {t(`team.members.${memberKey}.position`)}
                      </p>
                      <p className="text-body-small text-muted-foreground mb-3">
                        {t(`team.members.${memberKey}.experience`)}
                      </p>
                    </div>

                    {/* Credentials */}
                    <div className="space-y-2">
                      {(
                        t(`team.members.${memberKey}.credentials`, {
                          returnObjects: true,
                        }) as string[]
                      ).map((cred, i) => (
                        <div
                          key={i}
                          className="flex items-center text-body-small text-muted-foreground">
                          <Check className="icon-small mr-2 text-primary flex-shrink-0" />
                          <span>{cred}</span>
                        </div>
                      ))}
                    </div>

                    {/* Professional Badge */}
                    <div className="pt-3 border-t border-border/30">
                      <div className="inline-flex items-center bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        <Award className="icon-small mr-1" />
                        Professional Leader
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurLeadership; 