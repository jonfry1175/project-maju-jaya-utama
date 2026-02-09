import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

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
        src: "/assets/images/hero-manufacturing.jpg",
        objectPosition: "center 45%",
      },
      {
        src: "/assets/images/hero-manufacturing-v2.png",
        objectPosition: "center 50%",
      },
      {
        src: "/assets/images/factory-interior.jpg",
        objectPosition: "center 35%",
      },
    ],
    [],
  );

  useEffect(() => {
    if (prefersReducedMotion || isPointerHolding) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

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
      {/* Keep an H1 for SEO/a11y, but visually the hero is image-only (Mayora-style). */}
      <h1 className="sr-only">
        {t("title")} {t("titleHighlight")}
      </h1>

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
          exit={prefersReducedMotion ? undefined : { opacity: 0.78, scale: 1.03 }}
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

      {/* Texture layers, kept subtle so the image reads cleanly. */}
      <div className="absolute inset-0 bg-noise opacity-[0.022] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.16] pointer-events-none" />

      {/* Header readability + smooth transition into the next section. */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/65 via-background/18 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />

      <button
        type="button"
        onClick={() => goToSlide(activeSlide - 1)}
        className="absolute bottom-8 left-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/45 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:left-10 md:bottom-10"
        aria-label="Previous hero slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={() => goToSlide(activeSlide + 1)}
        className="absolute bottom-8 right-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/45 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:right-10 md:bottom-10"
        aria-label="Next hero slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-12">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to hero slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              index === activeSlide
                ? "w-9 bg-white shadow-[0_0_20px_rgba(255,255,255,0.45)]"
                : "w-2.5 bg-white/55 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <motion.button
        type="button"
        onClick={scrollToNextSection}
        className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 rounded-full bg-black/25 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm transition hover:bg-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:bottom-28"
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
