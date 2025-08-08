import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Building2, Award, Mail, ArrowLeft, Calendar, MapPin } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

/**
 * Leadership detail page component
 * Displays detailed information about individual leadership members
 */
const LeadershipDetail = () => {
  const { memberKey } = useParams<{ memberKey: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation("about");

  // Get team member data
  const getTeamMemberData = (key: string) => {
    const teamMapping: Record<string, { roleKey: string; image: string; roleColor: string }> = {
      ceo: {
        roleKey: "presidentCommissioner",
        image: "/zulfikar-lukman.jpg",
        roleColor: "bg-orange-400"
      },
      coo: {
        roleKey: "commissioner", 
        image: "/indra-yurana-sugiarto.jpg",
        roleColor: "bg-orange-400"
      },
      director1: {
        roleKey: "presidentDirector",
        image: "/boyke.jpg",
        roleColor: "bg-orange-400"
      },
      director2: {
        roleKey: "director",
        image: "/paulus.JPG",
        roleColor: "bg-orange-400"
      }
    };
    
    return teamMapping[key] || null;
  };

  // Get detailed professional summary for each member
  const getProfessionalSummary = (key: string): string => {
    return t(`team.members.${key}.professionalSummary`);
  };

  const memberData = memberKey ? getTeamMemberData(memberKey) : null;

  if (!memberData || !memberKey) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">{t("team.profileNotFound")}</h1>
          <Button onClick={() => navigate('/our-leadership')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("team.backToLeadership")}
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBackClick = () => {
    navigate('/our-leadership');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button 
              onClick={handleBackClick}
              variant="outline" 
              className="mb-6 bg-white/80 hover:bg-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("team.backToLeadership")}
            </Button>

            <div className="text-center">
              <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
                <User className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                {t("team.detail.badge")}
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display mb-4 sm:mb-6 leading-tight">
                {t(`team.members.${memberKey}.name`)}
              </h1>
              
              <div className={`inline-block ${memberData.roleColor} text-white px-4 py-2 rounded-full text-sm sm:text-base font-semibold mb-4`}>
                {t(`team.roles.${memberData.roleKey}`)}
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Profile Header Card */}
            <Card className="overflow-hidden bg-white border border-subtle shadow-xl mb-8 lg:mb-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                {/* Photo Section */}
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={memberData.image}
                        alt={t(`team.members.${memberKey}.name`)}
                        className={`w-full h-full object-cover ${
                          memberKey === 'ceo' || memberKey === 'coo' ? 'object-[50%_20%]' : 'object-center'
                        }`}
                      />
                    </div>
                    
                    {/* Decorative Badge */}
                    <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-3">
                      {t(`team.members.${memberKey}.name`)}
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium mb-4">
                      {t(`team.members.${memberKey}.position`)}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        <Building2 className="w-3 h-3 mr-1" />
                        {t(`team.roles.${memberData.roleKey}`)}
                      </Badge>
                      <Badge variant="secondary" className="bg-orange-50 text-orange-600 hover:bg-orange-100">
                        <Calendar className="w-3 h-3 mr-1" />
                        {t(`team.detail.experience.${memberKey}`)}
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
                        <MapPin className="w-3 h-3 mr-1" />
                        {t("team.detail.location")}
                      </Badge>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-primary mb-3">{t("team.detail.professionalSummary")}</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {getProfessionalSummary(memberKey || '')}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-sm">{t("team.detail.contactInfo")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Experience & Credentials */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Key Credentials */}
              <Card className="bg-white border border-subtle shadow-lg">
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-orange-500" />
                    {t("team.detail.keyCredentials")}
                  </h3>
                  
                  <div className="space-y-4">
                    {(t(`team.members.${memberKey}.credentials`, { returnObjects: true }) as string[]).map((credential, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{credential}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Education & Expertise */}
              <Card className="bg-white border border-subtle shadow-lg">
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-blue-500" />
                    {t("team.detail.areasOfExpertise")}
                  </h3>
                  
                  <div className="space-y-3">
                    {memberKey === 'ceo' && (
                      <>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.ipoConsulting")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.corporateStrategy")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.capitalMarkets")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.businessTransformation")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.financialAdvisory")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.riskManagement")}</Badge>
                      </>
                    )}
                    {memberKey === 'coo' && (
                      <>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.corporateBanking")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.riskManagement")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.islamicBanking")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.businessDevelopment")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.compliance")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.strategicPlanning")}</Badge>
                      </>
                    )}
                    {(memberKey === 'director1' || memberKey === 'director2') && (
                      <>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.financialAuditing")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.ipoPreparation")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.advisoryServices")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.corporateFinance")}</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">{t("team.detail.expertise.riskAssessment")}</Badge>
                      </>
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-orange-500/5 rounded-lg">
                    <p className="text-sm text-muted-foreground italic">
                      {t("team.detail.quote")}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Call to Action */}
            <Card className="mt-8 lg:mt-12 bg-gradient-to-r from-primary/5 to-orange-500/5 border-0">
              <div className="p-8 lg:p-12 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {t("team.detail.cta.title")}
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {t("team.detail.cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary hover:bg-primary/90">
                    {t("team.detail.cta.schedule")}
                  </Button>
                  <Button variant="outline" onClick={handleBackClick}>
                    {t("team.detail.cta.viewAll")}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadershipDetail; 