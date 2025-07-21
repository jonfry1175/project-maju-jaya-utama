import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const OurLeadership = () => {
  const { t } = useTranslation("about");
  const navigate = useNavigate();

  const team = [
    {
      key: "ceo",
      roleKey: "presidentCommissioner",
      image: "/zulfikar-lukman.jpg",
      roleColor: "bg-orange-400"
    },
    {
      key: "coo", 
      roleKey: "commissioner",
      image: "/indra-yurana-sugiarto.jpg",
      roleColor: "bg-orange-400"
    },
    {
      key: "director1",
      roleKey: "presidentDirector", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      roleColor: "bg-orange-400"
    },
    {
      key: "director2",
      roleKey: "director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face", 
      roleColor: "bg-orange-400"
    }
  ];

  const handleCardClick = (memberKey: string) => {
    // Navigate to detailed profile page
    navigate(`/our-leadership/${memberKey}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle max-w-7xl mx-auto animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
              <Users className="icon-small mr-2" />
              {t("team.title")}
            </div>
            
            <h1 className="heading-1 text-primary mb-4 sm:mb-6">
              {t("team.pageTitle")}
            </h1>
            
            <p className="text-body-large text-muted-foreground">
              {t("team.pageDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section-padding animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            {/* Leadership Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  onClick={() => handleCardClick(member.key)}
                  className="group overflow-hidden bg-gray-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 rounded-2xl animate-card">
                  
                  {/* Role Badge */}
                  <div className="relative">
                    <div className={`absolute top-4 left-4 z-10 ${member.roleColor} text-white px-3 py-1 rounded-full text-body-small font-semibold`}>
                      {t(`team.roles.${member.roleKey}`)}
                    </div>
                    
                    {/* Photo Section */}
                    <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-2xl">
                      <img
                        src={member.image}
                        alt={t(`team.members.${member.key}.name`)}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                          index === 0 || index === 1 ? 'object-[50%_20%]' : 'object-center'
                        }`}
                      />
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 bg-white">
                    <div className="text-left">
                      <h4 className="heading-5 text-foreground mb-1">
                        {t(`team.members.${member.key}.name`)}
                      </h4>
                      <p className="text-body-small text-muted-foreground font-medium mb-3">
                        {t(`team.members.${member.key}.position`)}
                      </p>
                      
                      {/* Click to view text */}
                      <p className="text-primary text-body-small hover:text-primary/80 transition-colors duration-200">
                        {t("team.clickToView")}
                      </p>
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