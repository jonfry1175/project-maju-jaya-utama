import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HomeCapabilitiesSection = () => {
  const { t, i18n } = useTranslation("capabilities");
  const itemsRaw = t("items", { returnObjects: true });
  const items = (Array.isArray(itemsRaw) ? itemsRaw : []) as Array<{
    title: string;
    description: string;
  }>;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section
      id="capabilities"
      className="section-padding bg-background relative overflow-hidden"
      aria-label={t("section.title")}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.6]" />
        <div className="absolute inset-0 bg-noise opacity-[0.025]" />
        <div className="absolute -top-36 -right-24 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
      </div>

      <div className="container mx-auto container-padding max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-14 items-start">
          <AnimatedSection className="text-left m-0">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/15 bg-primary/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_hsl(var(--primary)_/_0.10)]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-primary/80 font-semibold">
                {t("section.badge")}
              </span>
            </div>

            <h2 className="heading-lg mt-6 text-foreground">
              {t("section.title")}
            </h2>
            <p className="text-body-large text-muted-foreground mt-5 max-w-xl">
              {t("section.description")}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-xl">
              {[
                {
                  k: i18n.language === "id" ? "Output" : "Output",
                  v: i18n.language === "id" ? "Volume tinggi" : "High-volume",
                },
                {
                  k: i18n.language === "id" ? "Spesifikasi" : "Specs",
                  v: i18n.language === "id" ? "Kustom presisi" : "Precision custom",
                },
                {
                  k: i18n.language === "id" ? "QC" : "QC",
                  v: i18n.language === "id" ? "Tahap demi tahap" : "Stage-gated",
                },
                {
                  k: i18n.language === "id" ? "Logistik" : "Logistics",
                  v: i18n.language === "id" ? "Terjadwal" : "Scheduled",
                },
              ].map((spec) => (
                <div
                  key={spec.k}
                  className="relative rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm p-4 overflow-hidden"
                >
                  <div className="card-noise" />
                  <div className="relative">
                    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                      {spec.k}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-foreground">
                      {spec.v}
                    </div>
                  </div>
                  <div className="absolute -right-10 -top-10 h-20 w-20 rotate-45 bg-primary/10" />
                </div>
              ))}
            </div>
          </AnimatedSection>

          <motion.div
            key={i18n.language}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {items.map((it, idx) => (
              <motion.div
                key={`${i18n.language}-${it.title}`}
                variants={item}
                className="group relative rounded-[1.75rem] border border-border/70 bg-card/55 backdrop-blur-md p-7 overflow-hidden shadow-soft"
              >
                <div className="card-noise" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/60 via-accent/30 to-transparent" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="font-mono text-sm font-semibold text-primary">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground pt-1">
                      {i18n.language === "id" ? "Kapabilitas" : "Capability"}
                    </div>
                  </div>

                  <h3 className="heading-4 mt-5 text-foreground group-hover:text-primary transition-colors">
                    {it.title}
                  </h3>
                  <p className="text-body text-muted-foreground mt-3">
                    {it.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-border/80 to-transparent" />
                    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                      {i18n.language === "id" ? "Spesifikasi" : "Spec"}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/15 transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeCapabilitiesSection;
