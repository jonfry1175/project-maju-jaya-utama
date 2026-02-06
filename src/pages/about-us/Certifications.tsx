import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { CircleCheckBig } from "lucide-react";
import { useTranslation } from "react-i18next";

const Certifications = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("certifications"));

  const certifications = [
    {
      name: "Eco Label Product",
      description: isId
        ? "Sertifikasi untuk lini produk ramah lingkungan pada kategori plastik go green."
        : "Certification for eco-friendly product line in go-green plastic category.",
    },
    {
      name: "SNI Certified",
      description: isId
        ? "Sertifikasi SNI untuk produk biodegradable berbasis tapioka/cassava."
        : "SNI certification for tapioca/cassava-based biodegradable products.",
    },
    {
      name: isId ? "Standar Internal QC" : "Internal QC Standards",
      description: isId
        ? "Pengujian bahan baku dan produk jadi secara berkala untuk konsistensi kualitas."
        : "Regular raw material and finished goods testing for quality consistency.",
    },
  ];

  return (
    <>
      <SEO title={isId ? "Sertifikasi" : "Certifications"} description={meta.description} />

      <MotionSection className="pt-32 pb-12 bg-background">
        <div className="container mx-auto container-padding max-w-6xl">
          <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            {isId ? "Sertifikasi" : "Certifications"}
          </p>
          <h1 className="heading-lg mt-3">
            {isId ? "Komitmen Kualitas dan Kepatuhan" : "Commitment to Quality and Compliance"}
          </h1>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((item) => (
              <Card key={item.name} className="border-card-border card-hover h-full">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="w-fit inline-flex items-center gap-1">
                    <CircleCheckBig className="h-3.5 w-3.5" />
                    {isId ? "Terverifikasi" : "Verified"}
                  </Badge>
                  <h3 className="heading-sm mt-3">{item.name}</h3>
                  <p className="text-body text-muted-foreground mt-3">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
};

export default Certifications;
