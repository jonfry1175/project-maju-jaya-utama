import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getArticleBySlug, getLocalizedNews } from "@/lib/news";
import { createBreadcrumbJsonLd, createNewsArticleJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getNewsDetailMeta } from "@/lib/seo-pages";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Clock, User } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsDetail = () => {
  const { prefix } = useParams<{ prefix: string }>();
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const articles = getLocalizedNews(i18n.language);

  const article = prefix ? getArticleBySlug(prefix, i18n.language) : undefined;
  if (!article) return <Navigate to="/news" replace />;
  const meta = getNewsDetailMeta({
    slug: article.slug,
    title: article.title,
    description: article.excerpt,
    image: article.image,
  });
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: isId ? "Beranda" : "Home", url: "/" },
    { name: isId ? "Berita" : "News", url: "/news" },
    { name: article.title, url: `/news/${article.slug}` },
  ]);

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);
  const publicationDate = new Intl.DateTimeFormat(isId ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(article.date));

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={meta.canonical}
        keywords={[article.category, article.author]}
        type="article"
        openGraph={{
          title: article.title,
          description: article.excerpt,
          url: meta.canonical,
          image: article.image,
          type: "article",
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: article.title,
            description: article.excerpt,
            url: meta.canonical,
            image: article.image,
          }),
          createNewsArticleJsonLd(article),
          breadcrumbs,
        ]}
      />

      <MotionSection className="relative overflow-hidden pt-28 pb-14 bg-background-secondary">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,hsl(var(--accent)/0.2),transparent_42%),radial-gradient(circle_at_88%_16%,hsl(var(--primary)/0.22),transparent_44%),radial-gradient(circle_at_52%_84%,hsl(var(--secondary)/0.18),transparent_50%)]" />
          <div className="absolute inset-0 bg-grid-industrial opacity-35" />
          <div className="absolute -top-24 right-[10%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[6%] h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="container mx-auto container-padding relative max-w-6xl">
          <Button asChild variant="ghost" className="mb-5 h-auto p-0 text-primary">
            <Link to="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {isId ? "Kembali ke Berita" : "Back to News"}
            </Link>
          </Button>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">{isId ? "Beranda" : "Home"}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/news">{isId ? "Berita" : "News"}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="max-w-[220px] truncate sm:max-w-[420px]">
                  {article.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
            <div>
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.24em] text-accent/85">
                {isId ? "Wawasan PT Maju Jaya Utama Lestari" : "PT Maju Jaya Utama Lestari Insights"}
              </p>
              <h1 className="heading-lg mt-4">{article.title}</h1>
              <p className="text-body-large mt-4 text-muted-foreground max-w-3xl">{article.excerpt}</p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-foreground/85">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5">
                  <User className="h-4 w-4 text-primary" />
                  {article.author}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  {publicationDate}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5">
                  <Clock className="h-4 w-4 text-primary" />
                  {article.readTime}
                </span>
              </div>
            </div>

            <Card className="border-card-border/80 bg-card/90 shadow-medium backdrop-blur-sm">
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">
                  {article.category}
                </Badge>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {isId
                    ? "Laporan ini disusun dari referensi resmi profil perusahaan dan ringkasan editorial tim PT Maju Jaya Utama Lestari."
                    : "This report is based on official company profile references and PT Maju Jaya Utama Lestari editorial summaries."}
                </p>
                <div className="mt-4 rounded-lg border border-border/70 bg-background/70 px-3 py-2">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {isId ? "Sumber" : "Source"}
                  </p>
                  <p className="mt-2 text-sm text-foreground/85">{article.source}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 overflow-hidden border-card-border shadow-strong">
            <div className="relative aspect-[16/8] w-full overflow-hidden bg-muted">
              <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/85">
                  {isId ? "Dokumentasi Produksi PT Maju Jaya Utama Lestari" : "PT Maju Jaya Utama Lestari Production Documentation"}
                </p>
                <p className="mt-2 text-sm text-white/80">{article.category}</p>
              </div>
            </div>
          </Card>
        </div>
      </MotionSection>

      <MotionSection className="pb-14 bg-background">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <Card className="border-card-border/80 bg-card/95 shadow-soft">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  {isId ? "Isi Artikel" : "Article Content"}
                </p>
                <p className="mt-4 text-body text-muted-foreground">{article.excerpt}</p>

                <div className="mt-7 space-y-6">
                  {article.content.map((paragraph, index) => (
                    <p
                      key={`${article.slug}-${index}`}
                      className={`text-body leading-relaxed text-foreground/90 ${
                        index === 0
                          ? "first-letter:float-left first-letter:mr-2 first-letter:text-4xl first-letter:font-semibold first-letter:font-display first-letter:text-primary"
                          : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-5 lg:sticky lg:top-28">
              <Card className="border-card-border/80">
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    {isId ? "Detail Cepat" : "Quick Facts"}
                  </p>
                  <div className="mt-5 space-y-4 text-sm">
                    <div className="rounded-lg border border-border/60 bg-background/75 px-3 py-2.5">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {isId ? "Penulis" : "Author"}
                      </p>
                      <p className="mt-1 font-medium text-foreground">{article.author}</p>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-background/75 px-3 py-2.5">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {isId ? "Diterbitkan" : "Published"}
                      </p>
                      <p className="mt-1 font-medium text-foreground">{publicationDate}</p>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-background/75 px-3 py-2.5">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {isId ? "Durasi Baca" : "Read Time"}
                      </p>
                      <p className="mt-1 font-medium text-foreground">{article.readTime}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-card-border/80 bg-secondary text-secondary-foreground">
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent/80">
                    {isId ? "Butuh Informasi Lanjut?" : "Need More Information?"}
                  </p>
                  <h2 className="heading-sm mt-3 text-secondary-foreground">
                    {isId
                      ? "Diskusikan kebutuhan kemasan Anda dengan tim PT Maju Jaya Utama Lestari"
                      : "Discuss your packaging requirements with the PT Maju Jaya Utama Lestari team"}
                  </h2>
                  <p className="mt-3 text-sm text-secondary-foreground/80">
                    {isId
                      ? "Kami siap membantu spesifikasi material, volume, dan jadwal distribusi."
                      : "We can help with material specification, volume planning, and distribution schedules."}
                  </p>
                  <Button asChild variant="secondary" className="mt-5 w-full">
                    <Link to="/contact">
                      {isId ? "Hubungi Tim PT Maju Jaya Utama Lestari" : "Contact PT Maju Jaya Utama Lestari Team"}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                {isId ? "Lanjutan Bacaan" : "Continue Reading"}
              </p>
              <h2 className="heading-sm mt-2">{isId ? "Berita Terkait" : "Related News"}</h2>
            </div>
            <Button asChild variant="outline" className="border-primary/25 bg-background/70 hover:bg-background">
              <Link to="/news">
                {isId ? "Lihat Semua Berita" : "View All News"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {related.map((item) => (
              <Card key={item.slug} className="group overflow-hidden border-card-border card-hover">
                <CardContent className="flex h-full flex-col p-0">
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <p className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-foreground">
                      {item.category}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                    <p className="text-xs text-muted-foreground">{new Intl.DateTimeFormat(isId ? "id-ID" : "en-US").format(new Date(item.date))}</p>
                    <h3 className="heading-sm mt-2">{item.title}</h3>
                    <p className="text-body mt-2 text-muted-foreground line-clamp-3">{item.excerpt}</p>
                    <Button asChild variant="ghost" className="mt-4 h-auto justify-start p-0 text-primary">
                      <Link to={`/news/${item.slug}`}>
                        {isId ? "Baca Detail" : "Read Detail"}
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
};

export default NewsDetail;
