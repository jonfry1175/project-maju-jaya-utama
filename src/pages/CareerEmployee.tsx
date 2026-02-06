import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { ArrowRight, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const CareerEmployee = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("careerEmployee"));
  const title = isId
    ? "Posisi Karyawan PT Maju Jaya Utama Lestari"
    : "Employee Positions at PT Maju Jaya Utama Lestari";
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: isId ? "Beranda" : "Home", url: "/" },
    { name: isId ? "Karir" : "Career", url: "/career/employee" },
  ]);

  const jobs = [
    {
      title: isId ? "Supervisor Produksi" : "Production Supervisor",
      dept: isId ? "Operasional" : "Operations",
      location: "Tangerang",
      desc: isId
        ? "Memimpin tim produksi harian, monitoring output, dan koordinasi quality control."
        : "Lead daily production team, monitor output, and coordinate quality control.",
    },
    {
      title: isId ? "Staf Quality Control" : "Quality Control Staff",
      dept: isId ? "Quality Assurance" : "Quality Assurance",
      location: "Tangerang",
      desc: isId
        ? "Menjalankan inspeksi produk dan pelaporan kualitas sesuai SOP."
        : "Run product inspections and quality reporting based on SOP.",
    },
    {
      title: isId ? "Sales Executive B2B" : "B2B Sales Executive",
      dept: isId ? "Sales" : "Sales",
      location: "Jabodetabek",
      desc: isId
        ? "Mengelola relasi klien industri dan pengembangan account baru."
        : "Manage industrial client relationships and develop new accounts.",
    },
  ];

  return (
    <>
      <SEO
        title={isId ? "Karir Karyawan" : "Employee Careers"}
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
            {isId ? "Karir" : "Career"}
          </p>
          <h1 className="heading-lg mt-3">
            {isId ? "Posisi Karyawan PT Maju Jaya Utama Lestari" : "Employee Positions at PT Maju Jaya Utama Lestari"}
          </h1>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Card key={job.title} className="h-full border-card-border card-hover">
                <CardContent className="p-6 flex flex-col h-full">
                  <Badge variant="secondary" className="w-fit">{job.dept}</Badge>
                  <h3 className="heading-sm mt-3">{job.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </p>
                  <p className="text-body text-muted-foreground mt-3">{job.desc}</p>
                  <Button asChild className="mt-5 bg-primary hover:bg-primary/90">
                    <a href={`mailto:${siteMetadata.contactEmail}?subject=${encodeURIComponent(`${isId ? "Lamaran" : "Application"} - ${job.title}`)}`}>
                      {isId ? "Lamar" : "Apply"}
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

export default CareerEmployee;
