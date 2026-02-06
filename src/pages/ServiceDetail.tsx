import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services, getServiceBySlug } from "@/lib/services";
import { createBreadcrumbJsonLd, createServiceJsonLd, createWebPageJsonLd, siteMetadata } from "@/lib/seo";
import { getServiceDetailMeta } from "@/lib/seo-pages";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation(["services", "common"]);
  const isId = i18n.language === "id";

  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const serviceIndex = services.findIndex((item) => item.slug === service.slug);
  const localizedItems = t("services:items", {
    returnObjects: true,
  }) as Array<{
    title?: string;
    description?: string;
    detailDescription?: string;
    features?: string[];
  }>;
  const localizedItem = serviceIndex >= 0 ? localizedItems[serviceIndex] : undefined;
  const localizedTitle = localizedItem?.title || service.title;
  const localizedDescription =
    localizedItem?.detailDescription ||
    localizedItem?.description ||
    service.description ||
    service.shortDescription;
  const localizedFeatures = localizedItem?.features || service.features;
  const localizedService = {
    ...service,
    title: localizedTitle,
    description: localizedDescription,
    shortDescription: localizedItem?.description || service.shortDescription,
    features: localizedFeatures,
  };

  const meta = getServiceDetailMeta({
    slug: service.slug,
    title: localizedTitle,
    description: localizedDescription,
  });

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  const breadcrumbs = createBreadcrumbJsonLd([
    { name: isId ? "Beranda" : "Home", url: "/" },
    { name: isId ? "Layanan" : "Services", url: "/services" },
    { name: localizedTitle, url: `/services/${service.slug}` },
  ]);

  return (
    <>
      <SEO
        title={localizedTitle}
        description={localizedDescription}
        canonical={meta.canonical}
        keywords={localizedFeatures.join(", ")}
        openGraph={{
          title: localizedTitle,
          description: localizedDescription,
          url: meta.canonical,
          image: service.image,
          type: "article",
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: localizedTitle,
            description: localizedDescription,
            url: meta.canonical,
            image: service.image,
          }),
          createServiceJsonLd(localizedService),
          breadcrumbs,
        ]}
      />

      <MotionSection className="pt-28 pb-14 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">{isId ? "Beranda" : "Home"}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/services">{isId ? "Layanan" : "Services"}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{localizedTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </MotionSection>

      <MotionSection className="pb-16 bg-background">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10">
            <Card className="overflow-hidden border-card-border">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={localizedTitle}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-7 lg:p-8">
                <Badge variant="secondary">
                  {isId ? "Layanan Utama PT Maju Jaya Utama Lestari" : "PT Maju Jaya Utama Lestari Core Service"}
                </Badge>
                <h1 className="heading-md mt-4">{localizedTitle}</h1>
                <p className="text-body text-muted-foreground mt-4">
                  {localizedDescription}
                </p>

                <div className="mt-6">
                  <h2 className="heading-sm">
                    {isId ? "Fitur Layanan" : "Service Features"}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {localizedFeatures.map((feature, index) => (
                      <li
                        key={`${service.slug}-feature-${index}`}
                        className="flex items-start gap-3 text-body text-muted-foreground"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-card-border">
                <CardContent className="p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    {isId ? "Butuh Konsultasi?" : "Need Consultation?"}
                  </p>
                  <h2 className="heading-sm mt-3">
                    {isId
                      ? "Diskusikan spesifikasi layanan Anda dengan tim PT Maju Jaya Utama Lestari"
                      : "Discuss your service specifications with PT Maju Jaya Utama Lestari team"}
                  </h2>
                  <p className="text-body text-muted-foreground mt-4">
                    {isId
                      ? "Hubungi kami untuk pembahasan teknis, volume kebutuhan, dan skema pengiriman."
                      : "Contact us for technical discussion, required volume, and delivery scheme."}
                  </p>
                  <div className="mt-5 space-y-3">
                    <a
                      href={`tel:${siteMetadata.contactPhone.replace(/[^+\d]/g, "")}`}
                      className="inline-flex items-center gap-2 text-primary font-medium"
                    >
                      <Phone className="h-4 w-4" />
                      {siteMetadata.contactPhone}
                    </a>
                    <a
                      href={`mailto:${siteMetadata.contactEmail}`}
                      className="inline-flex items-center gap-2 text-primary font-medium"
                    >
                      <Mail className="h-4 w-4" />
                      {siteMetadata.contactEmail}
                    </a>
                  </div>
                  <Button asChild className="mt-6 bg-primary hover:bg-primary/90">
                    <Link to="/contact">
                      {isId ? "Kirim Permintaan" : "Send Inquiry"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-card-border bg-card/70">
                <CardContent className="p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    {isId ? "Info Halaman" : "Page Information"}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    {isId
                      ? "Halaman layanan ini disusun dari data MJU saat ini."
                      : "This service page is generated from current MJU data."}
                  </p>
                  <p className="text-xs text-muted-foreground/80 mt-4 break-all">
                    {meta.canonical}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="heading-sm">
              {isId ? "Layanan Terkait" : "Related Services"}
            </h2>
            <Button asChild variant="outline">
              <Link to="/services">
                {t("common:viewAll")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((item) => {
              const itemIndex = services.findIndex((entry) => entry.slug === item.slug);
              const itemLabel = localizedItems[itemIndex]?.title || item.title;
              const itemDesc =
                localizedItems[itemIndex]?.description || item.shortDescription;
              return (
                <Card key={item.slug} className="h-full card-hover border-card-border">
                  <CardContent className="p-6">
                    <h3 className="heading-sm text-foreground">{itemLabel}</h3>
                    <p className="text-body text-muted-foreground mt-3">{itemDesc}</p>
                    <Button asChild variant="ghost" className="mt-4 h-auto p-0 text-primary">
                      <Link to={`/services/${item.slug}`}>
                        {t("common:learnMore")}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </MotionSection>
    </>
  );
};

export default ServiceDetail;
