import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { useTranslation } from "react-i18next";

const CompanyAwards = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("companyAwards"));

  const milestones = [
    {
      year: "1993",
      title: isId ? "Perusahaan Berdiri" : "Company Established",
      description: isId
        ? "PT Maju Jaya Utama Lestari mulai beroperasi untuk memenuhi kebutuhan kemasan industri."
        : "PT Maju Jaya Utama Lestari began operations to serve industrial packaging needs.",
    },
    {
      year: isId ? "2010+" : "2010+",
      title: isId ? "Ekspansi Lini Produk" : "Product Line Expansion",
      description: isId
        ? "Pengembangan produk go green, biodegradable, paper bag, dan non-woven."
        : "Expansion into go-green, biodegradable, paper bag, and non-woven product lines.",
    },
    {
      year: isId ? "Saat Ini" : "Today",
      title: isId ? "Kemitraan Jangka Panjang" : "Long-Term Partnership Focus",
      description: isId
        ? "Dipercaya berbagai brand nasional dengan fokus kualitas konsisten dan layanan terintegrasi."
        : "Trusted by multiple national brands with focus on consistent quality and integrated services.",
    },
  ];

  return (
    <>
      <SEO title={isId ? "Penghargaan & Pencapaian" : "Awards & Milestones"} description={meta.description} />

      <MotionSection className="pt-32 pb-12 bg-background">
        <div className="container mx-auto container-padding max-w-6xl">
          <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            {isId ? "Pencapaian" : "Achievements"}
          </p>
          <h1 className="heading-lg mt-3">
            {isId
              ? "Perjalanan dan Rekam Jejak PT Maju Jaya Utama Lestari"
              : "Journey and Track Record of PT Maju Jaya Utama Lestari"}
          </h1>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((milestone) => (
              <Card key={milestone.year} className="h-full border-card-border card-hover">
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">{milestone.year}</p>
                  <h3 className="heading-sm mt-2">{milestone.title}</h3>
                  <p className="text-body text-muted-foreground mt-3">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
};

export default CompanyAwards;
