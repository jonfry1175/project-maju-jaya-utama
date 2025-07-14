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
      role: "President Director",
      image: "/zulfikar-lukman.jpg",
      roleColor: "bg-orange-400"
    },
    {
      key: "coo", 
      role: "Commissioner",
      image: "/indra-yurana-sugiarto.jpg",
      roleColor: "bg-orange-400"
    },
    {
      key: "cfo",
      role: "Chief Financial Officer", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      roleColor: "bg-orange-400"
    },
    {
      key: "cfo2",
      role: "Chief Operating Officer",
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
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  onClick={() => handleCardClick(member.key)}
                  className="group overflow-hidden bg-gray-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 rounded-2xl">
                  
                  {/* Role Badge */}
                  <div className="relative">
                    <div className={`absolute top-4 left-4 z-10 ${member.roleColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {member.role}
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
                      <h4 className="text-xl font-bold text-gray-800 mb-1">
                        {t(`team.members.${member.key}.name`)}
                      </h4>
                      <p className="text-gray-600 font-medium text-sm mb-3">
                        {t(`team.members.${member.key}.position`)}
                      </p>
                      
                      {/* Click to view text */}
                      <p className="text-blue-600 text-sm hover:text-blue-800 transition-colors duration-200">
                        Click to view detailed profile and experience
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