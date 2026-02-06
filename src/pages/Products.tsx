import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/services";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("products"));
  const title = isId
    ? "Portofolio Produk Kemasan Industri MJUL"
    : "MJUL Industrial Packaging Product Portfolio";
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: isId ? "Beranda" : "Home", url: "/" },
    { name: isId ? "Produk" : "Products", url: "/products" },
  ]);

  return (
    <>
      <SEO
        title={isId ? "Produk" : "Products"}
        description={meta.description}
        canonical={meta.canonical}
        keywords={meta.keywords}
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
            {isId ? "Produk Kami" : "Our Products"}
          </p>
          <h1 className="heading-lg mt-3">
            {isId
              ? "Portofolio Produk Kemasan Industri MJUL"
              : "MJUL Industrial Packaging Product Portfolio"}
          </h1>
          <p className="text-body text-muted-foreground mt-4 max-w-3xl">
            {isId
              ? "Lini produk kami mencakup solusi plastik, biodegradable, paper bag, dan non-woven untuk kebutuhan retail, F&B, dan industri skala besar."
              : "Our portfolio includes plastic, biodegradable, paper bag, and non-woven solutions for retail, F&B, and large-scale industrial operations."}
          </p>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.slug} className="h-full border-card-border card-hover">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-muted">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="heading-sm">{service.title}</h3>
                  <p className="text-body text-muted-foreground mt-3">{service.shortDescription}</p>
                  <Button asChild variant="ghost" className="mt-4 h-auto p-0 text-primary">
                    <Link to={`/services/${service.slug}`}>
                      {isId ? "Lihat Detail" : "View Details"}
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

export default Products;
