import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import AboutPageHero from "@/components/about/AboutPageHero";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { CircleCheckBig, ShieldCheck, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type CertificationItem = {
  id: string;
  name: string;
  description: string;
  issuer: string;
  image: string;
};

const Certifications = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("certifications"));
  const [selected, setSelected] = useState<CertificationItem | null>(null);

  const certifications = useMemo<CertificationItem[]>(
    () => [
      {
        id: "eco-label",
        name: "Eco Label Product",
        issuer: isId ? "Audit Internal & Mitra Material" : "Internal Audit & Material Partners",
        description: isId
          ? "Sertifikasi pada lini produk ramah lingkungan untuk memenuhi kebutuhan kemasan dengan dampak lingkungan lebih rendah."
          : "Certification on eco-friendly product lines to support packaging demand with lower environmental impact.",
        image: "/assets/images/sustainability.jpg",
      },
      {
        id: "sni",
        name: "SNI Certified",
        issuer: isId ? "Badan Standardisasi Nasional" : "National Standardization Body",
        description: isId
          ? "Kesesuaian standar nasional pada produk biodegradable berbasis cassava/tapioka."
          : "National standard compliance for cassava/tapioca-based biodegradable products.",
        image: "/assets/images/quality-control.jpg",
      },
      {
        id: "qc-standard",
        name: isId ? "Standar Internal QC" : "Internal QC Standards",
        issuer: isId ? "Divisi Quality Control" : "Quality Control Division",
        description: isId
          ? "Pengujian parameter bahan baku dan produk jadi dilakukan berkala untuk menjaga konsistensi hasil produksi."
          : "Periodic testing of raw material and finished goods parameters to keep production output consistent.",
        image: "/assets/images/factory-interior.jpg",
      },
      {
        id: "traceability",
        name: isId ? "Traceability Batch" : "Batch Traceability",
        issuer: isId ? "Tim Operasional Pabrik" : "Plant Operations Team",
        description: isId
          ? "Setiap batch memiliki catatan proses untuk meningkatkan transparansi dan perbaikan berkelanjutan."
          : "Every batch carries process records to improve transparency and continuous improvement.",
        image: "/assets/images/industrial-bg.jpg",
      },
      {
        id: "supplier-qualification",
        name: isId ? "Kualifikasi Pemasok" : "Supplier Qualification",
        issuer: isId ? "Tim Procurement & QA" : "Procurement & QA Team",
        description: isId
          ? "Proses evaluasi pemasok memastikan kualitas material tetap stabil di sepanjang rantai pasok."
          : "Supplier evaluation process ensures material quality remains stable across the supply chain.",
        image: "/assets/images/hero-manufacturing.jpg",
      },
      {
        id: "hygiene",
        name: isId ? "Kepatuhan Kebersihan Produksi" : "Production Hygiene Compliance",
        issuer: isId ? "Tim Produksi" : "Production Team",
        description: isId
          ? "Penerapan praktik kebersihan area produksi untuk mendukung mutu dan keamanan produk."
          : "Implementation of production-area hygiene practices to support product quality and safety.",
        image: "/assets/images/team-workers.jpg",
      },
    ],
    [isId]
  );

  return (
    <>
      <SEO title={isId ? "Sertifikasi" : "Certifications"} description={meta.description} />

      <main>
        <AboutPageHero
          eyebrow={isId ? "Sertifikasi" : "Certifications"}
          title={
            isId
              ? "Standar Kualitas yang Divalidasi Secara Konsisten"
              : "Quality Standards Validated With Consistency"
          }
          description={
            isId
              ? "Kami menjaga kualitas melalui kombinasi standar formal, audit internal, dan kontrol proses yang terukur pada setiap tahapan produksi."
              : "We protect quality through formal standards, internal audits, and measured process controls at every stage of production."
          }
          backgroundImage="/assets/images/quality-control.jpg"
          watermark={isId ? "Quality Assurance" : "Quality Assurance"}
          stats={[
            {
              label: isId ? "Item Sertifikasi" : "Certification Items",
              value: `${certifications.length}`,
              icon: CircleCheckBig,
            },
            {
              label: isId ? "Pendekatan" : "Approach",
              value: isId ? "Audit + QC Berlapis" : "Audit + Layered QC",
              icon: ShieldCheck,
            },
            {
              label: isId ? "Target" : "Target",
              value: isId ? "Konsistensi Produk" : "Product Consistency",
              icon: Sparkles,
            },
          ]}
        />

        <MotionSection className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl container-padding">
            <div className="mb-8 max-w-3xl">
              <Badge variant="secondary" className="border-primary/20 bg-primary/10 text-primary">
                {isId ? "Galeri Sertifikasi" : "Certification Gallery"}
              </Badge>
              <h2 className="heading-md mt-4">
                {isId
                  ? "Dokumentasi Standar dan Praktik Produksi"
                  : "Documentation of Standards and Production Practices"}
              </h2>
              <p className="mt-3 text-body text-muted-foreground">
                {isId
                  ? "Klik setiap kartu untuk melihat detail visual sertifikasi, praktik audit, dan kontrol mutu yang kami terapkan."
                  : "Click each card to preview visual details of the certification, audit practice, and quality controls we apply."}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className="group rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <figure className="overflow-hidden rounded-2xl border border-card-border bg-card shadow-soft transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                      <p className="absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.22em] text-white/90">
                        {item.issuer}
                      </p>
                    </div>
                    <figcaption className="p-5">
                      <h3 className="font-display text-xl font-semibold text-foreground">{item.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    </figcaption>
                  </figure>
                </button>
              ))}
            </div>
          </div>
        </MotionSection>

        <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
          {selected ? (
            <DialogContent className="max-w-5xl overflow-hidden border-0 bg-black/95 p-0">
              <div className="relative">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="max-h-[86vh] w-full object-contain"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/80">{selected.issuer}</p>
                  <h4 className="mt-2 text-xl font-semibold text-white">{selected.name}</h4>
                  <p className="mt-2 max-w-3xl text-sm text-white/80">{selected.description}</p>
                </div>
              </div>
            </DialogContent>
          ) : null}
        </Dialog>
      </main>
    </>
  );
};

export default Certifications;
