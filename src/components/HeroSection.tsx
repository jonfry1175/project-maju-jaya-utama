import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation("hero");
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-label={t("badge")}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-background"
    >
      {/* Keep an H1 for SEO/a11y, but visually the hero is image-only (Mayora-style). */}
      <h1 className="sr-only">
        {t("title")} {t("titleHighlight")}
      </h1>

      <motion.img
        src="/assets/images/hero-manufacturing.jpg"
        alt=""
        aria-hidden
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 45%" }}
        initial={
          prefersReducedMotion
            ? false
            : { scale: 1.06, filter: "saturate(0.95)" }
        }
        animate={
          prefersReducedMotion ? undefined : { scale: 1, filter: "saturate(1)" }
        }
        transition={{ duration: 1.35, ease: [0.21, 0.47, 0.32, 0.98] }}
      />

      {/* Texture layers, kept subtle so the image reads cleanly. */}
      <div className="absolute inset-0 bg-noise opacity-[0.022] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.16] pointer-events-none" />

      {/* Header readability + smooth transition into the next section. */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/65 via-background/18 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

