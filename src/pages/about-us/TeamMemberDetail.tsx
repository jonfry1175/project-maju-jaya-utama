import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getTeamMemberBySlug } from "@/lib/team";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TeamMemberDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";

  const member = slug ? getTeamMemberBySlug(slug, i18n.language) : undefined;
  if (!member) return <Navigate to="/about-us/our-team" replace />;

  const strengths =
    member.strengths ??
    (isId
      ? ["Kepemimpinan lintas fungsi", "Fokus kualitas", "Koordinasi pelanggan"]
      : ["Cross-functional leadership", "Quality-focused execution", "Customer coordination"]);

  const achievements =
    member.achievements ??
    (isId
      ? [
          "Mendorong standardisasi proses operasional pada lini produksi utama.",
          "Meningkatkan konsistensi kualitas produk melalui koordinasi QC harian.",
          "Memperkuat komunikasi kebutuhan teknis antara tim pabrik dan klien.",
        ]
      : [
          "Drove operational process standardization across core production lines.",
          "Improved product consistency through daily QC coordination.",
          "Strengthened technical requirement communication between plant teams and clients.",
        ]);

  const timeline =
    member.timeline ??
    (isId
      ? [
          {
            year: "2014",
            title: "Memimpin Tim Operasional",
            description: "Mulai memimpin koordinasi lintas divisi untuk alur produksi utama.",
          },
          {
            year: "2019",
            title: "Inisiatif Efisiensi Proses",
            description: "Mendorong penyempurnaan alur kerja untuk meningkatkan stabilitas output.",
          },
          {
            year: "2023",
            title: "Fokus Pertumbuhan Berkelanjutan",
            description: "Memperkuat kolaborasi tim dan kesiapan layanan untuk kebutuhan klien jangka panjang.",
          },
        ]
      : [
          {
            year: "2014",
            title: "Led Core Operations Team",
            description: "Started leading cross-division coordination for core production workflows.",
          },
          {
            year: "2019",
            title: "Process Efficiency Initiative",
            description: "Pushed workflow refinement to improve output stability.",
          },
          {
            year: "2023",
            title: "Sustainable Growth Focus",
            description: "Strengthened team collaboration and service readiness for long-term client needs.",
          },
        ]);

  const stats =
    member.stats ??
    (isId
      ? [
          { label: "Fokus Kinerja", value: "Kualitas Produksi" },
          { label: "Wilayah Kerja", value: member.location },
          { label: "Model Kolaborasi", value: "Lintas Divisi" },
        ]
      : [
          { label: "Performance Focus", value: "Production Quality" },
          { label: "Primary Location", value: member.location },
          { label: "Collaboration Model", value: "Cross-Division" },
        ]);

  const leadershipQuote =
    member.quote ??
    (isId
      ? "Kualitas terbaik lahir dari tim yang disiplin, responsif, dan saling mendukung."
      : "Strong quality outcomes come from a disciplined, responsive, and collaborative team.");

  const background = member.background ?? member.bio;

  return (
    <>
      <SEO title={`${member.name} - ${member.role}`} description={member.bio} />

      <main className="relative overflow-hidden bg-background-secondary">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <MotionSection className="pt-28 pb-20">
          <div className="container relative z-10 mx-auto max-w-6xl container-padding">
            <Button asChild variant="ghost" className="mb-6 h-auto p-0 text-primary hover:text-primary/80">
              <Link to="/about-us/our-team">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {isId ? "Kembali ke Tim" : "Back to Team"}
              </Link>
            </Button>

            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <Card className="border-card-border bg-secondary text-secondary-foreground shadow-strong">
                <CardContent className="p-0">
                  <div className="relative h-72 overflow-hidden rounded-t-xl bg-black/40">
                    <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                    <Badge className="absolute left-4 bottom-4 border-white/20 bg-white/10 text-white">
                      {member.role}
                    </Badge>
                  </div>

                  <div className="space-y-5 p-6">
                    <div>
                      <h1 className="heading-md text-white">{member.name}</h1>
                      {member.tenure ? (
                        <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-accent/90">{member.tenure}</p>
                      ) : null}
                      <p className="mt-3 text-sm text-white/80">{member.focus}</p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <p className="inline-flex items-center gap-2 text-white/85">
                        <MapPin className="h-4 w-4 text-accent" />
                        {member.location}
                      </p>
                      <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-accent hover:text-accent/80">
                        <Mail className="h-4 w-4" />
                        {member.email}
                      </a>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">
                        {isId ? "Catatan Kepemimpinan" : "Leadership Note"}
                      </p>
                      <p className="mt-3 text-sm text-white/85">{leadershipQuote}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-card-border bg-card/80 shadow-soft">
                  <CardContent className="p-7">
                    <h2 className="heading-sm">{isId ? "Profil Profesional" : "Professional Profile"}</h2>
                    <p className="mt-4 text-body text-muted-foreground">{background}</p>

                    <div className="mt-6">
                      <p className="text-xs uppercase tracking-[0.22em] text-primary/80">
                        {isId ? "Kekuatan Utama" : "Key Strengths"}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {strengths.map((strength) => (
                          <Badge key={strength} className="rounded-full border border-primary/30 bg-primary/10 text-primary">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-card-border bg-card/80 shadow-soft">
                  <CardContent className="p-7">
                    <p className="text-xs uppercase tracking-[0.22em] text-primary/80">
                      {isId ? "Pencapaian" : "Achievements"}
                    </p>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {achievements.map((achievement) => (
                        <div key={achievement} className="rounded-2xl border border-border/70 bg-background p-4">
                          <p className="text-sm text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-card-border bg-card/80 shadow-soft">
                  <CardContent className="p-7">
                    <p className="text-xs uppercase tracking-[0.22em] text-primary/80">
                      {isId ? "Metrik Kepemimpinan" : "Leadership Metrics"}
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {stats.map((stat) => (
                        <div key={`${stat.label}-${stat.value}`} className="rounded-2xl border border-border/70 bg-background p-4">
                          <p className="text-lg font-semibold font-display text-foreground">{stat.value}</p>
                          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="section-padding-small border-t border-border/50 bg-background">
          <div className="container mx-auto max-w-5xl container-padding">
            <h2 className="heading-md">{isId ? "Timeline Peran" : "Role Timeline"}</h2>
            <div className="relative mt-8 space-y-6 before:absolute before:left-[10px] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-primary/80 before:via-primary/20 before:to-transparent">
              {timeline.map((item) => (
                <div key={`${item.year}-${item.title}`} className="relative pl-10">
                  <span className="absolute left-[10px] top-[9px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(255,88,56,0.18)]" />
                  <p className="text-[11px] uppercase tracking-[0.2em] text-primary/80">{item.year}</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>
      </main>
    </>
  );
};

export default TeamMemberDetail;
