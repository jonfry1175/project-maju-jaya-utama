import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { ArrowRight, BriefcaseBusiness, Clock3, MapPin, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

type EmployeeJob = {
  title: string;
  dept: string;
  location: string;
  type: string;
  desc: string;
  requirements: string[];
};

const CareerEmployee = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const prefersReducedMotion = useReducedMotion();
  const meta = resolveMeta(getStaticPageMeta("careerEmployee"));
  const title = isId
    ? "Posisi Karyawan PT Maju Jaya Utama Lestari"
    : "Employee Positions at PT Maju Jaya Utama Lestari";
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: isId ? "Beranda" : "Home", url: "/" },
    { name: isId ? "Karir" : "Career", url: "/career/employee" },
  ]);

  const jobs: EmployeeJob[] = [
    {
      title: isId ? "Supervisor Produksi" : "Production Supervisor",
      dept: isId ? "Operasional" : "Operations",
      location: "Tangerang",
      type: isId ? "Penuh Waktu" : "Full-time",
      desc: isId
        ? "Memimpin tim produksi harian, menjaga ritme output, dan memastikan kualitas berjalan konsisten di setiap lini."
        : "Lead daily production teams, keep output on target, and ensure consistent quality execution across production lines.",
      requirements: isId
        ? [
            "Pengalaman 2+ tahun di manufaktur",
            "Memahami alur quality control dan KPI produksi",
            "Komunikatif dan mampu memimpin tim shift",
          ]
        : [
            "2+ years in manufacturing operations",
            "Understands production KPIs and quality control flow",
            "Strong communication and shift team leadership",
          ],
    },
    {
      title: isId ? "Staf Quality Control" : "Quality Control Staff",
      dept: isId ? "Jaminan Mutu" : "Quality Assurance",
      location: "Tangerang",
      type: isId ? "Penuh Waktu" : "Full-time",
      desc: isId
        ? "Menjalankan inspeksi bahan baku hingga produk akhir sesuai SOP serta menyusun laporan mutu yang akurat."
        : "Run incoming-to-final inspections based on SOP and produce accurate quality reports.",
      requirements: isId
        ? [
            "Teliti dan disiplin dokumentasi",
            "Terbiasa menggunakan checklist inspeksi",
            "Memahami standar mutu dasar manufaktur",
          ]
        : [
            "Detail-oriented with disciplined documentation",
            "Experienced with inspection checklists",
            "Understands core manufacturing quality standards",
          ],
    },
    {
      title: isId ? "Sales Executive B2B" : "B2B Sales Executive",
      dept: "Sales",
      location: "Jabodetabek",
      type: isId ? "Hibrida" : "Hybrid",
      desc: isId
        ? "Mengembangkan akun industri baru, menjaga relasi client existing, dan mendorong pertumbuhan volume penjualan."
        : "Develop new industrial accounts, maintain existing client relationships, and drive sales volume growth.",
      requirements: isId
        ? [
            "Berpengalaman menangani klien B2B",
            "Mampu presentasi solusi produk dengan baik",
            "Target-oriented dan terbiasa negosiasi",
          ]
        : [
            "Proven track record with B2B clients",
            "Strong product-solution presentation skills",
            "Target-driven with good negotiation skills",
          ],
    },
  ];

  return (
    <>
      <SEO
        title={isId ? "Karir Karyawan" : "Employee Careers"}
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

      <MotionSection className="relative overflow-hidden pt-28 pb-14 bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-overlay" aria-hidden="true" />
        <div
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary-light/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative container mx-auto container-padding max-w-6xl">
          <Badge className="mb-5 bg-white/15 text-primary-foreground border-white/25 hover:bg-white/15">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            {isId ? "Karir Karyawan" : "Employee Career"}
          </Badge>
          <h1 className="heading-lg max-w-4xl">
            {isId ? "Bangun Karier Industri Bersama PT Maju Jaya Utama Lestari" : "Build Your Industrial Career with PT Maju Jaya Utama Lestari"}
          </h1>
          <p className="mt-4 text-body text-primary-foreground/85 max-w-3xl">
            {isId
              ? "Kami membuka posisi untuk talenta yang siap bergerak cepat, menjaga kualitas, dan tumbuh bersama tim manufaktur yang solid."
              : "We are hiring talents who can move fast, uphold quality, and grow with a solid manufacturing team."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">
              {isId ? "Lingkungan Kerja Kolaboratif" : "Collaborative Work Environment"}
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">
              {isId ? "Pertumbuhan Karier Jelas" : "Clear Career Growth"}
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">
              {isId ? "Budaya Kualitas" : "Quality-Driven Culture"}
            </span>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 pt-10 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
                {isId ? "Posisi Tersedia" : "Open Roles"}
              </p>
              <h2 className="heading-md mt-2">
                {isId ? "Temukan peran yang paling sesuai" : "Find the role that fits you best"}
              </h2>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
          >
            {jobs.map((job) => (
              <motion.div
                key={job.title}
                initial={{ y: 14, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={prefersReducedMotion ? undefined : { y: -5 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <Card className="h-full border-card-border card-hover bg-card/95 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {job.dept}
                      </Badge>
                      <Badge variant="outline" className="border-border/70 text-muted-foreground">
                        {job.type}
                      </Badge>
                    </div>

                    <h3 className="heading-sm mt-4">{job.title}</h3>

                    <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <p className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        {job.location}
                      </p>
                      <p className="inline-flex items-center gap-2">
                        <BriefcaseBusiness className="h-4 w-4 text-accent" />
                        {job.dept}
                      </p>
                      <p className="inline-flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-accent" />
                        {job.type}
                      </p>
                    </div>

                    <p className="text-body text-muted-foreground mt-4">{job.desc}</p>

                    <div className="mt-4 flex-grow">
                      <p className="text-sm font-semibold text-foreground">
                        {isId ? "Kualifikasi Utama" : "Key Qualifications"}
                      </p>
                      <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                        {job.requirements.map((req) => (
                          <li key={req} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-5 mt-6 border-t border-card-border">
                      <Button asChild className="w-full bg-gradient-accent button-glow">
                        <a
                          href={`mailto:${siteMetadata.contactEmail}?subject=${encodeURIComponent(`${isId ? "Lamaran" : "Application"} - ${job.title}`)}`}
                        >
                          {isId ? "Lamar Sekarang" : "Apply Now"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      <MotionSection className="pb-24 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="rounded-3xl border border-card-border bg-card p-6 md:p-10 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
                  {isId ? "Tidak menemukan posisi yang cocok?" : "Can&apos;t find a fitting role?"}
                </p>
                <h3 className="heading-md mt-2">
                  {isId ? "Kirim CV Anda untuk peluang berikutnya" : "Send your CV for upcoming opportunities"}
                </h3>
                <p className="text-body text-muted-foreground mt-3">
                  {isId
                    ? "Kami selalu membuka peluang untuk kandidat potensial. Kirim profil terbaik Anda ke tim rekrutmen kami."
                    : "We are always open to strong candidates. Share your profile with our recruitment team."}
                </p>
              </div>
              <div className="md:justify-self-end w-full md:w-auto">
                <Button asChild size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90">
                  <a
                    href={`mailto:${siteMetadata.contactEmail}?subject=${encodeURIComponent(isId ? "Pengiriman CV" : "General Application")}`}
                  >
                    {isId ? "Kirim CV" : "Send Resume"}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>
    </>
  );
};

export default CareerEmployee;
