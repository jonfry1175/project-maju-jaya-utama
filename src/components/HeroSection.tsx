import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const statsVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.9,
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const reducedMotionVariants = {
  hidden: {},
  visible: {},
};

const HeroSection = () => {
  const { t } = useTranslation("hero");
  const prefersReducedMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPointerHolding, setIsPointerHolding] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const [dragOffset, setDragOffset] = useState(0);

  const slides = useMemo(
    () => [
      {
        src: "/assets/images/hero/beranda-1.jpg",
        objectPosition: "center 45%",
      },
      {
        src: "/assets/images/hero/beranda-2.jpg",
        objectPosition: "center 50%",
      },
      {
        src: "/assets/images/hero/beranda-3.jpg",
        objectPosition: "center 35%",
      },
    ],
    [],
  );

  const chips = t("chips", { returnObjects: true }) as string[];

  useEffect(() => {
    if (prefersReducedMotion || isPointerHolding) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, isPointerHolding, slides.length]);

  const goToSlide = (nextIndex: number) => {
    const normalized = (nextIndex + slides.length) % slides.length;
    setActiveSlide(normalized);
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight * 0.92,
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    if ((event.target as HTMLElement).closest("a")) return;
    setIsPointerHolding(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStartX.current = event.clientX;
    isDragging.current = true;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const deltaX = event.clientX - dragStartX.current;
    setDragOffset(deltaX);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (isDragging.current && dragStartX.current !== null) {
      const deltaX = event.clientX - dragStartX.current;
      const swipeThreshold = 70;

      if (deltaX > swipeThreshold) {
        goToSlide(activeSlide - 1);
      } else if (deltaX < -swipeThreshold) {
        goToSlide(activeSlide + 1);
      }
    }

    dragStartX.current = null;
    isDragging.current = false;
    setDragOffset(0);
    setIsPointerHolding(false);
  };

  const motionContainer = prefersReducedMotion
    ? reducedMotionVariants
    : containerVariants;
  const motionItem = prefersReducedMotion ? reducedMotionVariants : itemVariants;
  const motionStats = prefersReducedMotion
    ? reducedMotionVariants
    : statsVariants;

  return (
    <section
      id="hero"
      aria-label={t("badge")}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-background cursor-pointer"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onDragStart={(event) => {
        event.preventDefault();
      }}
      onPointerCancel={() => {
        dragStartX.current = null;
        isDragging.current = false;
        setDragOffset(0);
        setIsPointerHolding(false);
      }}
      onPointerLeave={() => {
        if (!isDragging.current) {
          setIsPointerHolding(false);
        }
      }}
      style={{ touchAction: "pan-y", userSelect: "none" }}
    >
      {/* SEO/a11y heading */}
      <h1 className="sr-only">
        {t("title")} {t("titleHighlight")}
      </h1>

      {/* Carousel images */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={slides[activeSlide].src}
          className={`absolute inset-0 ${isDragging.current ? "" : "transition-transform duration-300 ease-out"}`}
          style={{ transform: `translate3d(${dragOffset}px, 0, 0)` }}
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0.85, scale: 1.08, filter: "saturate(0.92)" }
          }
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: 1, scale: 1, filter: "saturate(1)" }
          }
          exit={
            prefersReducedMotion
              ? undefined
              : { opacity: 0.78, scale: 1.03 }
          }
          transition={{ duration: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <img
            src={slides[activeSlide].src}
            alt=""
            aria-hidden
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover"
            style={{ objectPosition: slides[activeSlide].objectPosition }}
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Texture layers */}
      <div className="absolute inset-0 bg-noise opacity-[0.022] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.16] pointer-events-none" />

      {/* Gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/65 via-background/18 to-transparent pointer-events-none z-10" />

      {/* Mobile: uniform dark overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none lg:hidden z-10" />

      {/* Desktop: asymmetric left-biased gradient */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block z-10"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.15) 70%, transparent 100%)",
        }}
      />

      {/* Bottom gradient (reduced — stats bar covers bottom) */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />

      {/* ─── Text content overlay ─── */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 pb-48 sm:pb-52 lg:pb-40">
          <motion.div
            className="pointer-events-auto max-w-lg sm:max-w-xl lg:max-w-2xl"
            variants={motionContainer}
            initial="hidden"
            animate="visible"
            key={activeSlide}
          >
            {/* Badge */}
            <motion.div
              variants={motionItem}
              className="flex items-center gap-3 mb-5"
            >
              <span className="block w-8 h-[2px] bg-primary" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
                {t("badge")}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={motionItem}
              className="font-display font-semibold text-white leading-[1.08] mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              {t("title")}{" "}
              <span className="italic font-light text-primary">
                {t("titleHighlight")}
              </span>
            </motion.h2>

            {/* Decorative rule */}
            <motion.div variants={motionItem} className="mb-5">
              <div
                className="h-[1.5px] w-16"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={motionItem}
              className="font-sans text-sm sm:text-base text-white/75 leading-relaxed max-w-lg mb-6"
            >
              {t("description")}
            </motion.p>

            {/* Chips */}
            <motion.div
              variants={motionItem}
              className="flex flex-wrap gap-2 mb-8"
            >
              {Array.isArray(chips) &&
                chips.map((chip, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3.5 py-1 text-xs font-medium text-white/90 tracking-wide"
                  >
                    {chip}
                  </span>
                ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={motionItem}
              className="flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
                onClick={scrollToNextSection}
              >
                {t("cta.primary")}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white backdrop-blur-sm font-medium"
                onClick={scrollToNextSection}
              >
                {t("cta.secondary")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ─── Stats bar ─── */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-20 bg-black/40 backdrop-blur-md border-t border-white/10"
        variants={motionStats}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-3 divide-x divide-white/10 px-6 sm:px-10 lg:px-16 xl:px-24">
          {(["employees", "industry", "location"] as const).map((key) => (
            <div key={key} className="py-4 sm:py-5 px-3 sm:px-5 first:pl-0 last:pr-0">
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/50 mb-1">
                {t(`stats.${key}.label`)}
              </p>
              <p className="font-sans text-xs sm:text-sm font-semibold text-white/90 truncate">
                {t(`stats.${key}.value`)}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ─── Navigation controls ─── */}

      {/* Prev/Next — mobile: above stats bar at bottom corners; desktop: right side vertically centered */}
      <button
        type="button"
        onClick={() => goToSlide(activeSlide - 1)}
        className="absolute z-30 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80
          bottom-[100px] left-6 sm:bottom-[110px] sm:left-8
          lg:bottom-auto lg:left-auto lg:right-10 lg:top-[calc(50%-52px)]"
        aria-label="Previous hero slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        type="button"
        onClick={() => goToSlide(activeSlide + 1)}
        className="absolute z-30 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80
          bottom-[100px] right-6 sm:bottom-[110px] sm:right-8
          lg:bottom-auto lg:right-10 lg:top-[calc(50%+12px)]"
        aria-label="Next hero slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Pagination dots — mobile: centered above stats bar; desktop: vertical column on right */}
      <div className="absolute z-30
        bottom-[105px] left-1/2 -translate-x-1/2 flex items-center gap-2
        lg:bottom-auto lg:left-auto lg:translate-x-0 lg:right-10 lg:top-1/2 lg:-translate-y-1/2 lg:flex-col lg:gap-2.5"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to hero slide ${index + 1}`}
            className={`rounded-full transition-all ${
              index === activeSlide
                ? "bg-white shadow-[0_0_20px_rgba(255,255,255,0.45)] w-9 h-2.5 lg:w-2.5 lg:h-9"
                : "bg-white/45 hover:bg-white/70 w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>

      {/* Scroll button — above stats bar */}
      <motion.button
        type="button"
        onClick={scrollToNextSection}
        className="absolute z-30 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 rounded-full bg-black/25 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm transition hover:bg-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80
          bottom-[140px] sm:bottom-[150px] lg:bottom-[100px]
          lg:left-1/2"
        aria-label="Scroll ke bawah"
        animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        Scroll
        <ChevronDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
