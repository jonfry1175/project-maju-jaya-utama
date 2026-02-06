import GalleryImageCard from "@/components/GalleryImageCard";
import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { useTranslation } from "react-i18next";

const galleryImages = [
  { src: "/assets/images/hero-manufacturing-v2.png", alt: "Manufacturing floor" },
  { src: "/assets/images/factory-interior.jpg", alt: "Factory interior" },
  { src: "/assets/images/quality-control.jpg", alt: "Quality control" },
  { src: "/assets/images/services/paper-converting.png", alt: "Paper converting line" },
  { src: "/assets/images/services/paper-slitting.png", alt: "Paper slitting process" },
  { src: "/assets/images/services/industrial-packaging.png", alt: "Industrial packaging product" },
  { src: "/assets/images/services/quality-assurance.png", alt: "Quality assurance process" },
  { src: "/assets/images/team-workers.jpg", alt: "Team at production site" },
];

const Gallery = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("gallery"));
  const title = isId
    ? "Dokumentasi Operasional dan Produksi MJUL"
    : "MJUL Operations and Production Documentation";
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: isId ? "Beranda" : "Home", url: "/" },
    { name: isId ? "Galeri" : "Gallery", url: "/gallery" },
  ]);

  return (
    <>
      <SEO
        title={isId ? "Galeri" : "Gallery"}
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
            {isId ? "Galeri" : "Gallery"}
          </p>
          <h1 className="heading-lg mt-3">
            {isId ? "Dokumentasi Operasional dan Produksi MJUL" : "MJUL Operations and Production Documentation"}
          </h1>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <GalleryImageCard key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
};

export default Gallery;
