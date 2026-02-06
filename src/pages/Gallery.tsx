import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import GalleryImageCard from "@/components/GalleryImageCard";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid,
  List,
  Pause,
  Play,
} from "lucide-react";
import { useTranslation } from "react-i18next";

type GalleryProject = "adaro" | "borneo" | "kalimantan";
type GalleryFilter = "all" | GalleryProject;
type LocaleCode = "en" | "id";

type LocalizedLabel = {
  en: string;
  id: string;
};

type ImgItem = {
  id: string;
  src: string;
  alt: LocalizedLabel;
  project: GalleryProject;
};

type CategoryCopy = {
  title: string;
  badge: string;
  description: string;
};

type GalleryCopy = {
  label: string;
  title: string;
  description: string;
  keyboardHint: string;
  allTitle: string;
  allDescription: string;
  filterBy: string;
  viewLabel: string;
  photosNoun: string;
  showingLabel: string;
  clickToView: string;
  photoPrefix: string;
  projectLabelPrefix: string;
  companyName: string;
  viewByCategoryAria: string;
  viewGridAria: string;
  contactCta: string;
  productsCta: string;
  statsDocs: string;
  statsCategories: string;
  statsQuality: string;
  statsCompleted: string;
  emptyStateTitle: string;
  emptyStateDescription: string;
  autoplayPlay: string;
  autoplayPause: string;
  autoplayPrev: string;
  autoplayNext: string;
  featuredAlts: {
    operations: string;
    productionFloor: string;
    paperConverting: string;
    industrialPackaging: string;
  };
  categories: Record<GalleryProject, CategoryCopy>;
};

const meta = resolveMeta(getStaticPageMeta("gallery"));

const featuredAd = "/assets/images/hero-manufacturing-v2.png";
const featuredBorneo = "/assets/images/factory-interior.jpg";
const featuredKalimantan = "/assets/images/services/paper-converting.png";
const featuredCement = "/assets/images/services/industrial-packaging.png";

const adaro: ImgItem[] = [
  {
    id: "ad-1",
    src: "/assets/images/hero-manufacturing-v2.png",
    alt: {
      en: "Main manufacturing line",
      id: "Lini manufaktur utama",
    },
    project: "adaro",
  },
  {
    id: "ad-2",
    src: "/assets/images/factory-interior.jpg",
    alt: {
      en: "Production floor operations",
      id: "Operasional lantai produksi",
    },
    project: "adaro",
  },
  {
    id: "ad-3",
    src: "/assets/images/team-workers.jpg",
    alt: {
      en: "Operations team in plant",
      id: "Tim operasional di pabrik",
    },
    project: "adaro",
  },
];

const borneo: ImgItem[] = [
  {
    id: "bor-1",
    src: "/assets/images/quality-control.jpg",
    alt: {
      en: "Quality control process",
      id: "Proses quality control",
    },
    project: "borneo",
  },
  {
    id: "bor-2",
    src: "/assets/images/services/quality-assurance.png",
    alt: {
      en: "Quality assurance station",
      id: "Stasiun quality assurance",
    },
    project: "borneo",
  },
  {
    id: "bor-3",
    src: "/assets/images/services/paper-slitting.png",
    alt: {
      en: "Precision paper slitting",
      id: "Slitting kertas presisi",
    },
    project: "borneo",
  },
];

const kalimantan: ImgItem[] = [
  {
    id: "kal-1",
    src: "/assets/images/services/paper-converting.png",
    alt: {
      en: "Paper converting system",
      id: "Sistem konversi kertas",
    },
    project: "kalimantan",
  },
  {
    id: "kal-2",
    src: "/assets/images/services/industrial-packaging.png",
    alt: {
      en: "Industrial packaging process",
      id: "Proses kemasan industri",
    },
    project: "kalimantan",
  },
  {
    id: "kal-3",
    src: "/assets/images/products/cardboard-boxes.jpg",
    alt: {
      en: "Finished packaging output",
      id: "Hasil akhir kemasan",
    },
    project: "kalimantan",
  },
];

const getCopy = (isId: boolean): GalleryCopy => {
  if (isId) {
    return {
      label: "Galeri Perusahaan",
      title: "Dokumentasi Operasional dan Produksi PT Maju Jaya Utama Lestari",
      description:
        "Visual proses produksi, quality control, dan hasil akhir produk PT Maju Jaya Utama Lestari.",
      keyboardHint:
        "Shortcut: Ctrl/Cmd + 1-4 untuk filter, Ctrl/Cmd + G untuk ganti mode tampilan",
      allTitle: "Semua Dokumentasi",
      allDescription: "Gabungan seluruh dokumentasi operasional, QC, dan output produk.",
      filterBy: "Filter kategori",
      viewLabel: "Mode tampilan",
      photosNoun: "foto",
      showingLabel: "Menampilkan",
      clickToView: "Klik untuk melihat detail",
      photoPrefix: "Foto",
      projectLabelPrefix: "Kategori",
      companyName: "PT Maju Jaya Utama Lestari",
      viewByCategoryAria: "Tampilan berdasarkan kategori",
      viewGridAria: "Tampilan grid",
      contactCta: "Hubungi Kami",
      productsCta: "Lihat Produk",
      statsDocs: "Dokumentasi Operasional",
      statsCategories: "Kategori Proses",
      statsQuality: "Standar Kualitas",
      statsCompleted: "Dokumentasi Tersusun",
      emptyStateTitle: "Tidak ada foto pada kategori ini",
      emptyStateDescription: "Pilih kategori lain atau kembali ke semua dokumentasi.",
      autoplayPlay: "Mulai auto-play",
      autoplayPause: "Jeda auto-play",
      autoplayPrev: "Foto sebelumnya",
      autoplayNext: "Foto berikutnya",
      featuredAlts: {
        operations: "Sorotan operasional pabrik",
        productionFloor: "Sorotan area produksi",
        paperConverting: "Sorotan proses konversi kertas",
        industrialPackaging: "Sorotan proses kemasan industri",
      },
      categories: {
        adaro: {
          title: "Operasional Pabrik",
          badge: "Operasional",
          description: "Aktivitas inti proses produksi di area manufaktur.",
        },
        borneo: {
          title: "Quality Control",
          badge: "QC",
          description: "Pemeriksaan mutu dan akurasi standar produksi.",
        },
        kalimantan: {
          title: "Produk dan Packaging",
          badge: "Packaging",
          description: "Hasil akhir konversi dan kemasan produk.",
        },
      },
    };
  }

  return {
    label: "Company Gallery",
    title: "PT Maju Jaya Utama Lestari Operations and Production Documentation",
    description:
      "Visual records of production workflow, quality control, and final output across PT Maju Jaya Utama Lestari.",
    keyboardHint:
      "Shortcuts: Ctrl/Cmd + 1-4 for filters, Ctrl/Cmd + G to switch view mode",
    allTitle: "All Documentation",
    allDescription:
      "Combined documentation across operations, quality control, and product output.",
    filterBy: "Filter by category",
    viewLabel: "View mode",
    photosNoun: "photos",
    showingLabel: "Showing",
    clickToView: "Click to view details",
    photoPrefix: "Photo",
    projectLabelPrefix: "Category",
    companyName: "PT Maju Jaya Utama Lestari",
    viewByCategoryAria: "View by category",
    viewGridAria: "Grid view",
    contactCta: "Contact Us",
    productsCta: "View Products",
    statsDocs: "Operational Records",
    statsCategories: "Process Categories",
    statsQuality: "Quality Standard",
    statsCompleted: "Documented",
    emptyStateTitle: "No photos in this category",
    emptyStateDescription: "Try another category or switch back to all documentation.",
    autoplayPlay: "Play auto slideshow",
    autoplayPause: "Pause auto slideshow",
    autoplayPrev: "Previous photo",
    autoplayNext: "Next photo",
    featuredAlts: {
      operations: "Featured factory operations",
      productionFloor: "Featured production floor",
      paperConverting: "Featured paper converting",
      industrialPackaging: "Featured industrial packaging",
    },
    categories: {
      adaro: {
        title: "Factory Operations",
        badge: "Operations",
        description: "Core manufacturing activities across the production floor.",
      },
      borneo: {
        title: "Quality Control",
        badge: "QC",
        description: "Quality checks and production standard verification.",
      },
      kalimantan: {
        title: "Products and Packaging",
        badge: "Packaging",
        description: "Final converted paper and packaging output.",
      },
    },
  };
};

const getCategoryMeta = (copy: GalleryCopy, filter: GalleryFilter) => {
  if (filter === "all") {
    return {
      title: copy.allTitle,
      description: copy.allDescription,
    };
  }

  return {
    title: copy.categories[filter].title,
    description: copy.categories[filter].description,
  };
};

const GallerySection = React.memo(
  ({
    label,
    title,
    description,
    items,
    language,
    copy,
  }: {
    label: string;
    title: string;
    description: string;
    items: ImgItem[];
    language: LocaleCode;
    copy: GalleryCopy;
  }) => {
    const prefersReduced = useReducedMotion();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const container = useMemo<Variants>(
      () => ({
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
      }),
      [],
    );

    const item = useMemo<Variants>(
      () => ({
        hidden: { y: 24, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 180, damping: 20 },
        },
      }),
      [],
    );

    const cardWidth = 320;
    const maxIndex = Math.max(0, items.length - Math.floor(1200 / cardWidth));

    const scrollToIndex = useCallback((index: number) => {
      if (!scrollContainerRef.current) {
        return;
      }

      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }, []);

    const nextSlide = useCallback(() => {
      const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      scrollToIndex(nextIndex);
    }, [currentIndex, maxIndex, scrollToIndex]);

    const prevSlide = useCallback(() => {
      const prevIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      scrollToIndex(prevIndex);
    }, [currentIndex, maxIndex, scrollToIndex]);

    useEffect(() => {
      if (isAutoPlaying && !prefersReduced && items.length > 3) {
        intervalRef.current = setInterval(nextSlide, 4000);
      } else if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [isAutoPlaying, items.length, nextSlide, prefersReduced]);

    return (
      <section className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-medium text-primary/80 uppercase tracking-wider">
                {label}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
                {title}
              </h3>
            </div>

            {items.length > 3 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label={copy.autoplayPrev}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsAutoPlaying((prev) => !prev)}
                  className={`p-2 rounded-full border border-border transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    isAutoPlaying
                      ? "bg-primary text-primary-foreground"
                      : "bg-card hover:bg-primary hover:text-primary-foreground"
                  }`}
                  aria-label={isAutoPlaying ? copy.autoplayPause : copy.autoplayPlay}
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label={copy.autoplayNext}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          <p className="text-muted-foreground text-sm max-w-2xl">{description}</p>
        </motion.div>

        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 py-6 px-2 scroll-smooth snap-x snap-mandatory"
            tabIndex={0}
            aria-label={`${copy.filterBy}: ${title}`}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                prevSlide();
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                nextSlide();
              }
            }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {items.map((itemData, index) => {
              const localizedAlt = itemData.alt[language];

              return (
                <motion.div
                  key={itemData.id}
                  className="flex-shrink-0 w-80 snap-start group"
                  variants={item}
                  whileHover={prefersReduced ? {} : { y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 280, damping: 25 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-2xl group">
                        <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group-hover:border-primary/30">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <GalleryImageCard src={itemData.src} alt={localizedAlt} />

                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white text-sm font-medium">
                              {copy.photoPrefix} {index + 1} - {title}
                            </p>
                            <p className="text-white/80 text-xs mt-1">{copy.clickToView}</p>
                          </div>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-7xl p-0 overflow-hidden border-0 bg-black/95 backdrop-blur-sm">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative"
                      >
                        <img
                          src={itemData.src}
                          alt={localizedAlt}
                          className="w-full h-auto max-h-[90vh] object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <h4 className="text-white text-lg font-semibold">{localizedAlt}</h4>
                          <p className="text-white/80 text-sm mt-1">{copy.companyName}</p>
                        </div>
                      </motion.div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    );
  },
);

const FilteredGalleryGrid = React.memo(
  ({
    items,
    activeFilter,
    language,
    copy,
  }: {
    items: ImgItem[];
    activeFilter: GalleryFilter;
    language: LocaleCode;
    copy: GalleryCopy;
  }) => {
    const prefersReduced = useReducedMotion();

    const container = useMemo<Variants>(
      () => ({
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
      }),
      [],
    );

    const item = useMemo<Variants>(
      () => ({
        hidden: { y: 24, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 180, damping: 20 },
        },
      }),
      [],
    );

    const categoryMeta = getCategoryMeta(copy, activeFilter);

    return (
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {categoryMeta.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">{categoryMeta.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-sm text-muted-foreground">{copy.showingLabel}</span>
            <Badge variant="secondary">
              {items.length} {copy.photosNoun}
            </Badge>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((itemData, index) => {
            const localizedAlt = itemData.alt[language];

            return (
              <motion.div
                key={itemData.id}
                className="group"
                variants={item}
                whileHover={prefersReduced ? {} : { y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 25 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-2xl group">
                      <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group-hover:border-primary/30">
                        <div className="absolute top-3 left-3 z-10">
                          <Badge
                            variant={itemData.project === "kalimantan" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {copy.categories[itemData.project].badge}
                          </Badge>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <GalleryImageCard src={itemData.src} alt={localizedAlt} />

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white text-sm font-medium">
                            {copy.photoPrefix} {index + 1} - {copy.projectLabelPrefix} {copy.categories[itemData.project].badge}
                          </p>
                          <p className="text-white/80 text-xs mt-1">{copy.clickToView}</p>
                        </div>
                      </div>
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-w-7xl p-0 overflow-hidden border-0 bg-black/95 backdrop-blur-sm">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="relative"
                    >
                      <img
                        src={itemData.src}
                        alt={localizedAlt}
                        className="w-full h-auto max-h-[90vh] object-contain"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge
                            variant={itemData.project === "kalimantan" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {copy.categories[itemData.project].badge}
                          </Badge>
                        </div>
                        <h4 className="text-white text-lg font-semibold">{localizedAlt}</h4>
                        <p className="text-white/80 text-sm mt-1">{copy.companyName}</p>
                      </div>
                    </motion.div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            );
          })}
        </motion.div>

        {items.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-muted-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">{copy.emptyStateTitle}</h4>
            <p className="text-muted-foreground">{copy.emptyStateDescription}</p>
          </motion.div>
        )}
      </section>
    );
  },
);

const Gallery = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language.startsWith("id");
  const language: LocaleCode = isId ? "id" : "en";
  const copy = useMemo(() => getCopy(isId), [isId]);

  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: isId ? "Beranda" : "Home", url: "/" },
        { name: isId ? "Galeri" : "Gallery", url: meta.path },
      ]),
    [isId],
  );

  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");
  const [viewMode, setViewMode] = useState<"sections" | "grid">("sections");

  const allItems = useMemo(() => [...adaro, ...kalimantan, ...borneo], []);
  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return allItems;
    }
    return allItems.filter((item) => item.project === activeFilter);
  }, [activeFilter, allItems]);

  const adaroCount = adaro.length;
  const kalimantanCount = kalimantan.length;
  const borneoCount = borneo.length;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!event.ctrlKey && !event.metaKey) {
        return;
      }

      switch (event.key) {
        case "1":
          event.preventDefault();
          setActiveFilter("all");
          break;
        case "2":
          event.preventDefault();
          setActiveFilter("adaro");
          break;
        case "3":
          event.preventDefault();
          setActiveFilter("kalimantan");
          break;
        case "4":
          event.preventDefault();
          setActiveFilter("borneo");
          break;
        case "g":
        case "G":
          event.preventDefault();
          setViewMode((prev) => (prev === "grid" ? "sections" : "grid"));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const localizedTitle = copy.title;
  const localizedDescription = copy.description;

  const jsonLd = [
    createWebPageJsonLd({
      name: localizedTitle,
      description: localizedDescription,
      url: meta.canonical,
      image: meta.image,
    }),
    breadcrumbs,
  ].filter(Boolean);

  return (
    <>
      <SEO
        title={isId ? "Galeri" : "Gallery"}
        description={localizedDescription}
        canonical={meta.canonical}
        keywords={meta.keywords}
        openGraph={{
          title: localizedTitle,
          description: localizedDescription,
          url: meta.canonical,
          image: meta.image,
        }}
        jsonLd={jsonLd}
      />

      <main className="min-h-screen bg-gradient-to-br from-background via-background-secondary to-background">
        <div className="container mx-auto container-padding pt-32 pb-20">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {copy.label}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {copy.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {copy.description}
            </p>

            <div className="mt-6 text-xs text-muted-foreground bg-muted/30 rounded-lg px-4 py-2 inline-block">
              {copy.keyboardHint}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl font-bold text-primary mb-2">{allItems.length}+</div>
              <div className="text-sm text-muted-foreground">{copy.statsDocs}</div>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">{copy.statsCategories}</div>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">{copy.statsQuality}</div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">{copy.filterBy}</span>
              </div>

              <div className="flex w-full flex-wrap gap-2 sm:w-auto" role="group" aria-label={copy.filterBy}>
                <Badge
                  variant={activeFilter === "all" ? "default" : "outline"}
                  className="cursor-pointer transition-all hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  onClick={() => setActiveFilter("all")}
                  onKeyDown={(event) => event.key === "Enter" && setActiveFilter("all")}
                  tabIndex={0}
                  role="button"
                  aria-pressed={activeFilter === "all"}
                >
                  {copy.allTitle} ({allItems.length})
                </Badge>

                <Badge
                  variant={activeFilter === "adaro" ? "default" : "outline"}
                  className="cursor-pointer transition-all hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  onClick={() => setActiveFilter("adaro")}
                  onKeyDown={(event) => event.key === "Enter" && setActiveFilter("adaro")}
                  tabIndex={0}
                  role="button"
                  aria-pressed={activeFilter === "adaro"}
                >
                  {copy.categories.adaro.badge} ({adaroCount})
                </Badge>

                <Badge
                  variant={activeFilter === "kalimantan" ? "default" : "outline"}
                  className="cursor-pointer transition-all hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  onClick={() => setActiveFilter("kalimantan")}
                  onKeyDown={(event) => event.key === "Enter" && setActiveFilter("kalimantan")}
                  tabIndex={0}
                  role="button"
                  aria-pressed={activeFilter === "kalimantan"}
                >
                  {copy.categories.kalimantan.badge} ({kalimantanCount})
                </Badge>

                <Badge
                  variant={activeFilter === "borneo" ? "default" : "outline"}
                  className="cursor-pointer transition-all hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  onClick={() => setActiveFilter("borneo")}
                  onKeyDown={(event) => event.key === "Enter" && setActiveFilter("borneo")}
                  tabIndex={0}
                  role="button"
                  aria-pressed={activeFilter === "borneo"}
                >
                  {copy.categories.borneo.badge} ({borneoCount})
                </Badge>
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-2">
              <span className="text-sm text-muted-foreground">{copy.viewLabel}</span>
              <div className="flex rounded-lg border border-border bg-background" role="group" aria-label={copy.viewLabel}>
                <button
                  onClick={() => setViewMode("sections")}
                  className={`p-2 rounded-l-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    viewMode === "sections" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                  aria-pressed={viewMode === "sections"}
                  aria-label={copy.viewByCategoryAria}
                >
                  <List className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-r-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                  aria-pressed={viewMode === "grid"}
                  aria-label={copy.viewGridAria}
                >
                  <Grid className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>

          {viewMode === "sections" && activeFilter === "all" ? (
            <div className="space-y-20">
              <GallerySection
                label={copy.companyName}
                title={copy.categories.adaro.title}
                description={copy.categories.adaro.description}
                items={adaro}
                language={language}
                copy={copy}
              />
              <GallerySection
                label={copy.companyName}
                title={copy.categories.borneo.title}
                description={copy.categories.borneo.description}
                items={borneo}
                language={language}
                copy={copy}
              />
              <GallerySection
                label={copy.companyName}
                title={copy.categories.kalimantan.title}
                description={copy.categories.kalimantan.description}
                items={kalimantan}
                language={language}
                copy={copy}
              />
            </div>
          ) : (
            <FilteredGalleryGrid
              items={filteredItems}
              activeFilter={activeFilter}
              language={language}
              copy={copy}
            />
          )}

          <motion.div
            className="mt-24 relative overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl" />
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{copy.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{copy.description}</p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 shadow-lg hover:shadow-xl transition-all"
                    >
                      <a href="/contact">{copy.contactCta}</a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-primary/20 hover:bg-primary/5 px-8"
                    >
                      <a href="/products">{copy.productsCta}</a>
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg group relative">
                        <img
                          src={featuredAd}
                          alt={copy.featuredAlts.operations}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                      <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg group relative">
                        <img
                          src={featuredBorneo}
                          alt={copy.featuredAlts.productionFloor}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="space-y-4 mt-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg group relative">
                        <img
                          src={featuredKalimantan}
                          alt={copy.featuredAlts.paperConverting}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                      <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg group relative">
                        <img
                          src={featuredCement}
                          alt={copy.featuredAlts.industrialPackaging}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{allItems.length}+</div>
                      <div className="text-xs text-muted-foreground">{copy.statsCompleted}</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Gallery;
