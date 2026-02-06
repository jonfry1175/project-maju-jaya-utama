import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { ArrowRight, Clock3, GraduationCap, MapPin, Sparkles, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

type InternshipProgram = {
  title: string;
  stream: string;
  location: string;
  duration: string;
  desc: string;
  learn: string[];
};

const CareerIntern = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const prefersReducedMotion = useReducedMotion();
  const meta = resolveMeta(getStaticPageMeta("careerIntern"));
  const title = isId
    ? "Program Magang di PT Maju Jaya Utama Lestari"
    : "Internship Program at PT Maju Jaya Utama Lestari";
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: isId ? "Beranda" : "Home", url: "/" },
    { name: isId ? "Magang" : "Internship", url: "/career/intern" },
  ]);

  const programs: InternshipProgram[] = [
    {
      title: isId ? "Internship Produksi" : "Production Internship",
      stream: isId ? "Operasional Pabrik" : "Plant Operations",
      location: "Tangerang",
      duration: isId ? "3 - 6 Bulan" : "3 - 6 Months",
      desc: isId
        ? "Program praktik langsung di lini produksi untuk memahami alur manufaktur, efisiensi proses, dan standar keselamatan kerja."
        : "Hands-on placement in production lines to learn manufacturing flow, process efficiency, and workplace safety standards.",
      learn: isId
        ? ["Dasar perencanaan produksi", "Monitoring output harian", "Koordinasi tim lintas shift"]
        : ["Production planning fundamentals", "Daily output monitoring", "Cross-shift team coordination"],
    },
    {
      title: isId ? "Internship Quality Assurance" : "Quality Assurance Internship",
      stream: "Quality Assurance",
      location: "Tangerang",
      duration: isId ? "3 - 6 Bulan" : "3 - 6 Months",
      desc: isId
        ? "Mendalami proses inspeksi dari bahan baku hingga produk akhir dan memahami bagaimana menjaga konsistensi standar mutu."
        : "Explore inspection workflow from raw material to final product and learn how quality consistency is maintained.",
      learn: isId
        ? ["Metode sampling dasar", "Pembuatan laporan inspeksi", "Analisis temuan kualitas"]
        : ["Basic sampling methods", "Inspection report preparation", "Quality finding analysis"],
    },
    {
      title: isId ? "Internship Sales Support" : "Sales Support Internship",
      stream: "Commercial",
      location: "Jabodetabek",
      duration: isId ? "3 Bulan" : "3 Months",
      desc: isId
        ? "Terlibat dalam dukungan administrasi sales B2B: penawaran, database klien, dan koordinasi follow-up account."
        : "Support B2B sales administration: quotations, client databases, and account follow-up coordination.",
      learn: isId
        ? ["Alur administrasi penjualan", "Komunikasi klien profesional", "Pengelolaan dokumen penawaran"]
        : ["Sales administration workflows", "Professional client communication", "Quotation document management"],
    },
  ];

  const processSteps = isId
    ? [
        "Kirim CV dan transkrip terbaru",
        "Sesi seleksi singkat dengan tim HR",
        "Onboarding dan penempatan program",
      ]
    : [
        "Submit your CV and latest transcript",
        "Short screening session with HR team",
        "Onboarding and program placement",
      ];

  return (
    <>
      <SEO
        title={isId ? "Program Magang" : "Internship Program"}
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
          className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary-light/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative container mx-auto container-padding max-w-6xl">
          <Badge className="mb-5 bg-white/15 text-primary-foreground border-white/25 hover:bg-white/15">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            {isId ? "Program Magang" : "Internship Program"}
          </Badge>
          <h1 className="heading-lg max-w-4xl">
            {isId ? "Belajar Langsung dari Dunia Industri Nyata" : "Learn Directly from Real Industrial Operations"}
          </h1>
          <p className="mt-4 text-body text-primary-foreground/85 max-w-3xl">
            {isId
              ? "Program magang kami dirancang untuk mahasiswa dan fresh graduate yang ingin membangun fondasi profesional dengan pengalaman praktik yang relevan."
              : "Our internship program is designed for students and fresh graduates who want to build a professional foundation with relevant practical exposure."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">
              {isId ? "Mentoring Tim Ahli" : "Expert Team Mentoring"}
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">
              {isId ? "Proyek Nyata" : "Real Project Exposure"}
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">
              {isId ? "Pengembangan Skill" : "Skill Development"}
            </span>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 pt-10 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="mb-8">
            <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
              {isId ? "Pilihan Program" : "Program Tracks"}
            </p>
            <h2 className="heading-md mt-2">
              {isId ? "Pilih fokus magang sesuai minat Anda" : "Choose an internship focus that matches your interest"}
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
          >
            {programs.map((program) => (
              <motion.div
                key={program.title}
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
                        {program.stream}
                      </Badge>
                      <Badge variant="outline" className="border-border/70 text-muted-foreground">
                        {program.duration}
                      </Badge>
                    </div>

                    <h3 className="heading-sm mt-4">{program.title}</h3>

                    <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <p className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        {program.location}
                      </p>
                      <p className="inline-flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-accent" />
                        {program.duration}
                      </p>
                      <p className="inline-flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-accent" />
                        {isId ? "Untuk Mahasiswa/Fresh Graduate" : "For Students/Fresh Graduates"}
                      </p>
                    </div>

                    <p className="text-body text-muted-foreground mt-4">{program.desc}</p>

                    <div className="mt-4 flex-grow">
                      <p className="text-sm font-semibold text-foreground">
                        {isId ? "Yang Akan Dipelajari" : "What You&apos;ll Learn"}
                      </p>
                      <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                        {program.learn.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-5 mt-6 border-t border-card-border">
                      <Button asChild className="w-full bg-gradient-accent button-glow">
                        <a
                          href={`mailto:${siteMetadata.contactEmail}?subject=${encodeURIComponent(`${isId ? "Pendaftaran Magang" : "Internship Application"} - ${program.title}`)}`}
                        >
                          {isId ? "Daftar Sekarang" : "Apply Now"}
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
                  {isId ? "Alur Pendaftaran" : "Application Flow"}
                </p>
                <h3 className="heading-md mt-2">
                  {isId ? "Proses cepat dan transparan" : "A clear and fast process"}
                </h3>
                <ul className="mt-4 space-y-3">
                  {processSteps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-body text-muted-foreground">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full rounded-2xl border border-border/70 bg-background p-5">
                <p className="text-sm font-semibold inline-flex items-center gap-2 text-foreground">
                  <Users className="h-4 w-4 text-accent" />
                  {isId ? "Butuh Bantuan?" : "Need Help?"}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {isId
                    ? "Kirim pertanyaan atau CV Anda ke tim rekrutmen."
                    : "Send your questions or CV to our recruitment team."}
                </p>
                <Button asChild size="lg" className="mt-4 w-full bg-primary hover:bg-primary/90">
                  <a
                    href={`mailto:${siteMetadata.contactEmail}?subject=${encodeURIComponent(isId ? "Pertanyaan Program Magang" : "Internship Inquiry")}`}
                  >
                    {isId ? "Hubungi Tim" : "Contact Team"}
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

export default CareerIntern;
