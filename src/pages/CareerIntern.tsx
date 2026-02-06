import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const CareerIntern = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("careerIntern"));
  const title = isId
    ? "Program Magang di PT Maju Jaya Utama Lestari"
    : "Internship Program at PT Maju Jaya Utama Lestari";
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: isId ? "Beranda" : "Home", url: "/" },
    { name: isId ? "Magang" : "Internship", url: "/career/intern" },
  ]);

  const programs = [
    {
      title: isId ? "Internship Produksi" : "Production Internship",
      desc: isId
        ? "Program praktik lapangan untuk mahasiswa teknik industri/manufaktur."
        : "Field practice program for industrial/manufacturing engineering students.",
    },
    {
      title: isId ? "Internship Quality Assurance" : "Quality Assurance Internship",
      desc: isId
        ? "Belajar proses inspeksi kualitas dari raw material hingga final product."
        : "Learn quality inspection process from raw material to final product.",
    },
    {
      title: isId ? "Internship Sales Support" : "Sales Support Internship",
      desc: isId
        ? "Mendukung administrasi penawaran, dokumentasi klien, dan koordinasi internal."
        : "Support quotation administration, client documentation, and internal coordination.",
    },
  ];

  return (
    <>
      <SEO
        title={isId ? "Program Magang" : "Internship Program"}
        description={meta.description}
        canonical={meta.canonical}
        openGraph={{
          title,
          description: meta.description,
          url: meta.canonical,
          image: meta.image,
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: title,
            description: meta.description,
            url: meta.canonical,
            image: meta.image,
          }),
          breadcrumbs,
        ]}
      />

      <MotionSection className="pt-32 pb-12 bg-background">
        <div className="container mx-auto container-padding max-w-6xl">
          <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            {isId ? "Magang" : "Internship"}
          </p>
          <h1 className="heading-lg mt-3">
            {isId ? "Program Magang di PT Maju Jaya Utama Lestari" : "Internship Program at PT Maju Jaya Utama Lestari"}
          </h1>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Card key={program.title} className="h-full border-card-border card-hover">
                <CardContent className="p-6 h-full flex flex-col">
                  <Badge variant="secondary" className="w-fit">{isId ? "Program" : "Program"}</Badge>
                  <h3 className="heading-sm mt-3">{program.title}</h3>
                  <p className="text-body text-muted-foreground mt-3">{program.desc}</p>
                  <Button asChild className="mt-5 bg-primary hover:bg-primary/90">
                    <a href={`mailto:${siteMetadata.contactEmail}?subject=${encodeURIComponent(`${isId ? "Magang" : "Internship"} - ${program.title}`)}`}>
                      {isId ? "Daftar" : "Apply"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
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

export default CareerIntern;
