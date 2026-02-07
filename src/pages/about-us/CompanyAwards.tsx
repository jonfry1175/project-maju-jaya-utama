import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import AboutPageHero from "@/components/about/AboutPageHero";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { Award, Landmark, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type AwardItem = {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
};

const CompanyAwards = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("companyAwards"));
  const [selected, setSelected] = useState<AwardItem | null>(null);

  const awards = useMemo<AwardItem[]>(
    () => [
      {
        id: "foundation",
        year: "1993",
        title: isId ? "Pendirian Perusahaan" : "Company Foundation",
        description: isId
          ? "Perusahaan mulai beroperasi untuk melayani kebutuhan kemasan industri di wilayah Tangerang."
          : "The company began operations to serve industrial packaging demand in Tangerang.",
        image: "/assets/images/industrial-bg.jpg",
      },
      {
        id: "expansion",
        year: "2010+",
        title: isId ? "Ekspansi Lini Produk" : "Product Line Expansion",
        description: isId
          ? "Perluasan portofolio ke produk go green, biodegradable, paper bag, dan non-woven."
          : "Portfolio expansion into go-green, biodegradable, paper bag, and non-woven products.",
        image: "/assets/images/hero-manufacturing-v2.png",
      },
      {
        id: "quality-program",
        year: isId ? "2016" : "2016",
        title: isId ? "Program Kualitas Terintegrasi" : "Integrated Quality Program",
        description: isId
          ? "Implementasi alur quality control berlapis untuk meningkatkan keandalan spesifikasi produk."
          : "Implemented layered quality control workflows to improve specification reliability.",
        image: "/assets/images/quality-control.jpg",
      },
      {
        id: "partnership",
        year: isId ? "2020" : "2020",
        title: isId ? "Kemitraan Strategis" : "Strategic Partnerships",
        description: isId
          ? "Menjalin kolaborasi jangka panjang dengan berbagai brand nasional di retail dan distribusi."
          : "Established long-term collaboration with national brands across retail and distribution.",
        image: "/assets/images/factory-interior.jpg",
      },
      {
        id: "process-upgrade",
        year: isId ? "2023" : "2023",
        title: isId ? "Peningkatan Kapabilitas Proses" : "Process Capability Upgrade",
        description: isId
          ? "Pembaruan proses produksi untuk menjaga efisiensi, presisi, dan ketepatan pengiriman."
          : "Upgraded production processes to maintain efficiency, precision, and delivery punctuality.",
        image: "/assets/images/team-workers.jpg",
      },
      {
        id: "today",
        year: isId ? "Hari Ini" : "Today",
        title: isId ? "Fokus Kemitraan Berkelanjutan" : "Sustainable Partnership Focus",
        description: isId
          ? "Terus memperkuat hubungan pelanggan melalui kualitas konsisten dan layanan terintegrasi."
          : "Continuing to strengthen customer relationships through consistent quality and integrated service.",
        image: "/assets/images/sustainability.jpg",
      },
    ],
    [isId]
  );

  return (
    <>
      <SEO title={isId ? "Penghargaan & Pencapaian" : "Awards & Milestones"} description={meta.description} />

      <main>
        <AboutPageHero
          eyebrow={isId ? "Pencapaian" : "Achievements"}
          title={
            isId
              ? "Rekam Jejak Pertumbuhan PT Maju Jaya Utama Lestari"
              : "PT Maju Jaya Utama Lestari Growth Milestones"
          }
          description={
            isId
              ? "Perjalanan kami dibangun melalui konsistensi kualitas, penguatan proses operasional, dan kemitraan jangka panjang dengan pelanggan nasional."
              : "Our journey is built through quality consistency, operational process strengthening, and long-term partnerships with national customers."
          }
          backgroundImage="/assets/images/factory-interior.jpg"
          watermark={isId ? "Milestone Story" : "Milestone Story"}
          stats={[
            {
              label: isId ? "Tonggak Utama" : "Milestones",
              value: `${awards.length}`,
              icon: Landmark,
            },
            {
              label: isId ? "Arah" : "Direction",
              value: isId ? "Pertumbuhan Berkelanjutan" : "Sustainable Growth",
              icon: TrendingUp,
            },
            {
              label: isId ? "Nilai" : "Value",
              value: isId ? "Kepercayaan Mitra" : "Partner Trust",
              icon: Award,
            },
          ]}
        />

        <MotionSection className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl container-padding">
            <div className="mb-8 max-w-3xl">
              <Badge variant="secondary" className="border-primary/20 bg-primary/10 text-primary">
                {isId ? "Galeri Tonggak" : "Milestone Gallery"}
              </Badge>
              <h2 className="heading-md mt-4">
                {isId
                  ? "Momen Penting dalam Perjalanan Perusahaan"
                  : "Key Moments in the Company's Journey"}
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {awards.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className="group rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <article className="h-full overflow-hidden rounded-2xl border border-card-border bg-card shadow-soft transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <p className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
                        {item.year}
                      </p>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </article>
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
                  alt={selected.title}
                  className="max-h-[86vh] w-full object-contain"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/80">{selected.year}</p>
                  <h4 className="mt-2 text-xl font-semibold text-white">{selected.title}</h4>
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

export default CompanyAwards;
