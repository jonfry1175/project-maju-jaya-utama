import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import AboutPageHero from "@/components/about/AboutPageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { getLocalizedTeamMembers } from "@/lib/team";
import { ArrowRight, Award, BookOpenCheck, Mail, MapPin, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OurTeam = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const members = getLocalizedTeamMembers(i18n.language);
  const meta = resolveMeta(getStaticPageMeta("aboutTeam"));

  const principles = [
    {
      title: isId ? "Respons Cepat" : "Fast Response",
      description: isId
        ? "Koordinasi lintas tim produksi, komersial, dan QC dilakukan dalam siklus harian yang singkat."
        : "Daily coordination between production, commercial, and QC teams keeps communication cycles short.",
    },
    {
      title: isId ? "Keputusan Berbasis Data" : "Data-Informed Decisions",
      description: isId
        ? "Setiap keputusan operasional didukung data kapasitas mesin, histori kualitas, dan kebutuhan pelanggan."
        : "Operational decisions are supported by machine capacity, quality history, and customer requirements.",
    },
    {
      title: isId ? "Budaya Kolaborasi" : "Collaborative Culture",
      description: isId
        ? "Kami membangun tim yang saling mendukung untuk menjaga performa pabrik dan pelayanan tetap stabil."
        : "We build a mutually supportive team culture to keep factory performance and service delivery stable.",
    },
  ];

  return (
    <>
      <SEO title={isId ? "Tim Kami" : "Our Team"} description={meta.description} />

      <main>
        <AboutPageHero
          eyebrow={isId ? "Tim Kami" : "Our Team"}
          title={
            isId
              ? "Orang-Orang di Balik Konsistensi Operasional"
              : "People Behind Consistent Operational Execution"
          }
          description={
            isId
              ? "Tim PT Maju Jaya Utama Lestari menggabungkan kepemimpinan lapangan, disiplin produksi, dan komunikasi pelanggan untuk menjaga kualitas di setiap pengiriman."
              : "The PT Maju Jaya Utama Lestari team combines field leadership, production discipline, and customer communication to protect quality in every delivery."
          }
          backgroundImage="/assets/images/team-workers.jpg"
          watermark={isId ? "Tim & Budaya Kerja" : "Team & Work Culture"}
          stats={[
            {
              label: isId ? "Anggota Tim" : "Team Members",
              value: `${members.length}`,
              icon: UsersRound,
            },
            {
              label: isId ? "Fokus" : "Focus",
              value: isId ? "Produksi & Kualitas" : "Production & Quality",
              icon: Award,
            },
            {
              label: isId ? "Pengembangan" : "Development",
              value: isId ? "Pembelajaran Berkelanjutan" : "Continuous Learning",
              icon: BookOpenCheck,
            },
          ]}
        />

        <MotionSection className="section-padding-small bg-background">
          <div className="container mx-auto max-w-6xl container-padding">
            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <Card className="border-card-border bg-card/70 shadow-soft">
                <CardContent className="p-7 lg:p-9">
                  <Badge variant="secondary" className="border-primary/20 bg-primary/10 text-primary">
                    {isId ? "Budaya Kerja" : "How We Work"}
                  </Badge>
                  <h2 className="heading-md mt-4">
                    {isId
                      ? "Kepemimpinan Operasional Dengan Standar yang Konsisten"
                      : "Operational Leadership With Reliable Standards"}
                  </h2>
                  <p className="mt-4 text-body text-muted-foreground">
                    {isId
                      ? "Setiap fungsi dalam organisasi memiliki peran yang jelas, dari perencanaan produksi hingga quality assurance. Struktur ini memungkinkan kami menjaga ketepatan spesifikasi, kecepatan respons, dan stabilitas pasokan untuk klien."
                      : "Each function in the organization has clear ownership, from production planning to quality assurance. This structure helps us maintain specification accuracy, response speed, and supply stability for clients."}
                  </p>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {principles.map((principle) => (
                      <div
                        key={principle.title}
                        className="rounded-2xl border border-border/70 bg-background px-4 py-4"
                      >
                        <p className="text-sm font-semibold text-foreground">{principle.title}</p>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{principle.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-card-border bg-gradient-to-br from-primary/10 via-card to-card shadow-soft">
                <CardContent className="p-7 lg:p-8">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                    {isId ? "Sertifikasi Tim" : "Team Credentials"}
                  </p>
                  <h3 className="heading-sm mt-3">
                    {isId ? "Profesional yang Siap Eksekusi" : "Execution-Ready Professionals"}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {isId
                      ? "Pelatihan internal berkelanjutan memastikan tim tetap adaptif terhadap standar material, mesin, dan permintaan pelanggan."
                      : "Continuous internal training keeps our teams adaptive to material standards, machinery changes, and customer requirements."}
                  </p>

                  <Button asChild className="mt-6 w-full btn-gradient-brand font-semibold">
                    <Link to="/about-us/certifications">
                      {isId ? "Lihat Sertifikasi" : "View Certifications"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="section-padding bg-background-secondary">
          <div className="container mx-auto max-w-6xl container-padding">
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                {isId ? "Profil Tim" : "Team Profiles"}
              </p>
              <h2 className="heading-md mt-3">
                {isId ? "Leadership & Functional Team" : "Leadership & Functional Team"}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {members.map((member) => (
                <Card
                  key={member.slug}
                  className="group h-full overflow-hidden border-card-border bg-card/80 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"
                >
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    <Badge className="absolute bottom-3 left-3 border-white/20 bg-black/45 text-white backdrop-blur-sm">
                      {member.role}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="heading-sm text-xl leading-tight">{member.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{member.focus}</p>

                    <div className="mt-4 space-y-2 text-sm">
                      <p className="inline-flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        {member.location}
                      </p>
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                      >
                        <Mail className="h-4 w-4" />
                        {member.email}
                      </a>
                    </div>

                    <Button asChild variant="outline" className="mt-5 w-full border-primary/30 text-primary hover:bg-primary/10">
                      <Link to={`/about-us/our-team/${member.slug}`}>
                        {isId ? "Lihat Profil Lengkap" : "View Full Profile"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </MotionSection>
      </main>
    </>
  );
};

export default OurTeam;
