import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { teamMembers } from "@/lib/team";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OurTeam = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("aboutTeam"));

  return (
    <>
      <SEO title={isId ? "Tim Kami" : "Our Team"} description={meta.description} />

      <MotionSection className="pt-32 pb-12 bg-background">
        <div className="container mx-auto container-padding max-w-6xl">
          <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            {isId ? "Tim Kami" : "Our Team"}
          </p>
          <h1 className="heading-lg mt-3">
            {isId
              ? "Orang-Orang di Balik Operasi PT Maju Jaya Utama Lestari"
              : "People Behind PT Maju Jaya Utama Lestari Operations"}
          </h1>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.slug} className="h-full border-card-border card-hover">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="h-48 rounded-xl overflow-hidden bg-muted mb-4">
                    <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                  </div>
                  <Badge variant="secondary" className="w-fit">{member.role}</Badge>
                  <h3 className="heading-sm mt-3">{member.name}</h3>
                  <p className="text-body text-muted-foreground mt-2">{member.focus}</p>
                  <p className="text-sm text-muted-foreground mt-3 inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {member.location}
                  </p>
                  <a href={`mailto:${member.email}`} className="text-sm text-primary mt-2 inline-flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                  <Button asChild variant="ghost" className="mt-4 h-auto p-0 text-primary">
                    <Link to={`/about-us/our-team/${member.slug}`}>
                      {isId ? "Lihat Profil" : "View Profile"}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
};

export default OurTeam;
