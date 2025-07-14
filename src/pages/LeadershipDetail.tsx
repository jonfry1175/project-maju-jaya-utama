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
    const teamMapping: Record<string, { role: string; image: string; roleColor: string }> = {
      ceo: {
        role: "President Director",
        image: "/zulfikar-lukman.jpg",
        roleColor: "bg-orange-400"
      },
      coo: {
        role: "Commissioner", 
        image: "/indra-yurana-sugiarto.jpg",
        roleColor: "bg-orange-400"
      },
      cfo: {
        role: "Chief Financial Officer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
        roleColor: "bg-orange-400"
      },
      cfo2: {
        role: "Chief Operating Officer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
        roleColor: "bg-orange-400"
      }
    };
    
    return teamMapping[key] || null;
  };

  // Get detailed professional summary for each member
  const getProfessionalSummary = (key: string): string => {
    const summaries: Record<string, string> = {
      ceo: "Zulfikar Lukman is a highly accomplished finance professional with a Bachelor's Degree in Economics from Universitas Trisakti and an MBA from Monash University's Mt. Eliza Business School. Former corporate executive in Banking, Private Companies, Listed Companies and Foreign Companies in several industrial sectors, such as Banking, Manufacturing, Property, Hospitality, FMCG, Oil and Gas and Tobacco. He currently holds pivotal roles in various companies within the RITZ Corp, including Founder & Managing Partner at PT RITZ Corpora Indonesia and President Director at PT RITZ Konsultan Indonesia, PT RITZ Investmen Indonesia. Additionally, he serves as the President Commissioner at PT RITZ Manatha Kapital. With over 32 years of experience in both banking and non-banking sectors, Zulfikar excels in corporate banking, asset management, restructuring, project financing, M&A, and more. He is renowned for an unwavering dedication to financial excellence and strategic leadership.",
      coo: "Indra possesses a wealth of experience spanning 33 years in both banking and non-banking sectors. He holds a Master of Science in Computer Information System (1995) and a Master of Business Administration (1995) from Southern New Hampshire University, along with a Bachelor's degree in Economics from Universitas Trisakti (1990). Having served as the Corporate Banking Director at Bank Muamalat Indonesia, and executive at Bank CIMB Niaga, Indra's professional background encompasses 25 years in the banking sector and an additional 8 years in the non-banking sector. Proficient in Corporate Banking, Relationship Management, Financial Services, Risk Management, Islamic Banking, Compliance, Business Development, and Trade Finance and Structured Finance, Indra brings a diverse skill set to the table. Throughout his career, Indra has showcased a consistent ability to navigate intricate financial landscapes, cultivate robust client relationships, ensure regulatory compliance, and spearhead business development initiatives.",
      cfo: "Experienced audit and advisory professional with extensive expertise in financial services and IPO preparation. Brings deep understanding of regulatory compliance and capital market requirements.",
      cfo2: "Seasoned operations executive with comprehensive experience in strategic planning and business transformation initiatives across multiple industry sectors."
    };
    
    return summaries[key] || t(`team.members.${key}.experience`);
  };

  const memberData = memberKey ? getTeamMemberData(memberKey) : null;

  if (!memberData || !memberKey) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Profile not found</h1>
          <Button onClick={() => navigate('/our-leadership')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Leadership
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
              Back to Leadership
            </Button>

            <div className="text-center">
              <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
                <User className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                Leadership Profile
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display mb-4 sm:mb-6 leading-tight">
                {t(`team.members.${memberKey}.name`)}
              </h1>
              
              <div className={`inline-block ${memberData.roleColor} text-white px-4 py-2 rounded-full text-sm sm:text-base font-semibold mb-4`}>
                {memberData.role}
              </div>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {t(`team.members.${memberKey}.position`)}
              </p>
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
                        {memberData.role}
                      </Badge>
                      <Badge variant="secondary" className="bg-orange-50 text-orange-600 hover:bg-orange-100">
                        <Calendar className="w-3 h-3 mr-1" />
                        {memberKey === 'ceo' ? '32+ Years Experience' : memberKey === 'coo' ? '33+ Years Experience' : '15+ Years Experience'}
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
                        <MapPin className="w-3 h-3 mr-1" />
                        Jakarta, Indonesia
                      </Badge>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-primary mb-3">Professional Summary</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {getProfessionalSummary(memberKey || '')}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-sm">Contact available through company channels</span>
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
                    Key Credentials & Experience
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
                    Areas of Expertise
                  </h3>
                  
                  <div className="space-y-3">
                    {memberKey === 'ceo' && (
                      <>
                        <Badge variant="outline" className="mr-2 mb-2">IPO Consulting</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Corporate Strategy</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Capital Markets</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Business Transformation</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Financial Advisory</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Risk Management</Badge>
                      </>
                    )}
                    {memberKey === 'coo' && (
                      <>
                        <Badge variant="outline" className="mr-2 mb-2">Corporate Banking</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Risk Management</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Islamic Banking</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Business Development</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Compliance</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Strategic Planning</Badge>
                      </>
                    )}
                    {(memberKey === 'cfo' || memberKey === 'cfo2') && (
                      <>
                        <Badge variant="outline" className="mr-2 mb-2">Financial Auditing</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">IPO Preparation</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Advisory Services</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Corporate Finance</Badge>
                        <Badge variant="outline" className="mr-2 mb-2">Risk Assessment</Badge>
                      </>
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-orange-500/5 rounded-lg">
                    <p className="text-sm text-muted-foreground italic">
                      "Committed to delivering excellence in IPO consulting and building sustainable value for our clients."
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Call to Action */}
            <Card className="mt-8 lg:mt-12 bg-gradient-to-r from-primary/5 to-orange-500/5 border-0">
              <div className="p-8 lg:p-12 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready to Work with Our Leadership Team?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Connect with our experienced leadership team to discuss your IPO journey and business transformation needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary hover:bg-primary/90">
                    Schedule a Consultation
                  </Button>
                  <Button variant="outline" onClick={handleBackClick}>
                    View All Leadership
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