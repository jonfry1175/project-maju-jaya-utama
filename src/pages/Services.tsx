import CTASection from "@/components/CTASection";
import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import ServicesSection from "@/components/ServicesSection";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("services"));
  const pageTitle = isId
    ? "Layanan dan Solusi Kemasan Industri"
    : "Services and Industrial Packaging Solutions";
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: isId ? "Beranda" : "Home", url: "/" },
    { name: isId ? "Layanan" : "Services", url: "/services" },
  ]);

  return (
    <>
      <SEO
        title={pageTitle}
        description={meta.description}
        canonical={meta.canonical}
        keywords={meta.keywords}
        openGraph={{
          title: pageTitle,
          description: meta.description,
          url: meta.canonical,
          image: meta.image,
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: pageTitle,
            description: meta.description,
            url: meta.canonical,
            image: meta.image,
          }),
          breadcrumbs,
        ]}
      />

      <MotionSection className="pt-32 pb-12 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-industrial opacity-[0.1]" />
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        </div>
        <div className="container mx-auto container-padding max-w-6xl relative z-10">
          <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            {isId ? "Layanan Kami" : "Our Services"}
          </p>
          <h1 className="heading-lg mt-4 text-foreground max-w-4xl">
            {isId
              ? "Portofolio Solusi Kemasan untuk Kebutuhan Operasional Anda"
              : "Packaging Solution Portfolio for Your Operational Needs"}
          </h1>
          <p className="text-body-large text-muted-foreground mt-6 max-w-3xl">
            {isId
              ? "PT Maju Jaya Utama Lestari menyediakan solusi kemasan plastik dan rotogravure printing dengan kualitas konsisten serta dukungan spesifikasi kustom."
              : "PT Maju Jaya Utama Lestari provides plastic packaging and rotogravure printing solutions with consistent quality and support for custom specifications."}
          </p>
        </div>
      </MotionSection>

      <ServicesSection />
      <CTASection />
    </>
  );
};

export default Services;
