import MotionSection from "@/components/MotionSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const { i18n, t } = useTranslation("services");
  const isId = i18n.language === "id";
  const localizedItems = t("items", { returnObjects: true }) as Array<{
    title?: string;
    description?: string;
    features?: string[];
  }>;

  const highlights = services.slice(0, 3).map((service, index) => {
    const localizedItem = localizedItems[index];
    return {
      ...service,
      localizedTitle: localizedItem?.title ?? service.title,
      localizedDescription:
        localizedItem?.description ?? service.shortDescription,
      localizedFeatures: localizedItem?.features ?? service.features,
    };
  });

  return (
    <MotionSection className="section-padding bg-background" id="projects-section">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium uppercase tracking-wide">
            {isId ? "Sorotan Layanan" : "Service Highlights"}
          </span>
          <h2 className="heading-md mt-2">
            {isId
              ? "Kapabilitas Utama untuk Kemasan Plastik & Rotogravure"
              : "Core Capabilities for Plastic Packaging & Rotogravure"}
          </h2>
          <p className="text-body text-muted-foreground mt-3">
            {isId
              ? "Sorotan layanan utama kami untuk mendukung kebutuhan kemasan plastik dan supply chain Anda."
              : "A curated view of our core services designed to support your plastic packaging and supply chain needs."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <Card key={item.id} className="h-full card-hover bg-card border-card-border">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <Badge variant="secondary">{isId ? "Layanan" : "Service"}</Badge>
                </div>
                <h3 className="heading-sm text-foreground">{item.localizedTitle}</h3>
                <p className="text-body text-muted-foreground mt-3">
                  {item.localizedDescription}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.localizedFeatures.slice(0, 3).map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <Button asChild variant="ghost" className="h-auto p-0 text-primary">
                    <Link to={`/services/${item.slug}`}>
                      {isId ? "Lihat Detail" : "View Details"}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/services">
              {isId ? "Lihat Semua Layanan" : "Explore All Services"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </MotionSection>
  );
};

export default ProjectsSection;
