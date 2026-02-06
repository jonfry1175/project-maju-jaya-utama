import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getTeamMemberBySlug } from "@/lib/team";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TeamMemberDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";

  const member = slug ? getTeamMemberBySlug(slug) : undefined;
  if (!member) return <Navigate to="/about-us/our-team" replace />;

  return (
    <>
      <SEO title={`${member.name} - ${member.role}`} description={member.bio} />

      <MotionSection className="pt-28 pb-20 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-4xl">
          <Button asChild variant="ghost" className="mb-5 h-auto p-0 text-primary">
            <Link to="/about-us/our-team">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {isId ? "Kembali ke Tim" : "Back to Team"}
            </Link>
          </Button>

          <Card className="border-card-border overflow-hidden">
            <div className="aspect-[16/8] w-full overflow-hidden bg-muted">
              <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
            </div>
            <CardContent className="p-6 lg:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">{member.role}</p>
              <h1 className="heading-md mt-3">{member.name}</h1>
              <p className="text-body text-muted-foreground mt-4">{member.bio}</p>
              <div className="mt-5 space-y-2">
                <p className="text-sm text-muted-foreground inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {member.location}
                </p>
                <a href={`mailto:${member.email}`} className="text-sm text-primary inline-flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {member.email}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </MotionSection>
    </>
  );
};

export default TeamMemberDetail;
