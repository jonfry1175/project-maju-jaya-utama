import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getArticleBySlug, getLocalizedNews } from "@/lib/news";
import { createBreadcrumbJsonLd, createNewsArticleJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getNewsDetailMeta } from "@/lib/seo-pages";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const articles = getLocalizedNews(i18n.language);

  const article = slug ? getArticleBySlug(slug, i18n.language) : undefined;
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

      <MotionSection className="pt-28 pb-12 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-5xl">
          <Button asChild variant="ghost" className="mb-5 h-auto p-0 text-primary">
            <Link to="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {isId ? "Kembali ke Berita" : "Back to News"}
            </Link>
          </Button>

          <Card className="border-card-border overflow-hidden">
            <div className="aspect-[16/8] w-full overflow-hidden bg-muted">
              <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
            </div>
            <CardContent className="p-6 lg:p-8">
              <Badge variant="secondary">{article.category}</Badge>
              <h1 className="heading-md mt-4">{article.title}</h1>

              <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(article.date).toLocaleDateString(isId ? "id-ID" : "en-US")}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </span>
              </div>

              <p className="text-body text-muted-foreground mt-6">{article.excerpt}</p>

              <div className="mt-6 space-y-4">
                {article.content.map((paragraph, index) => (
                  <p key={`${article.slug}-${index}`} className="text-body leading-relaxed text-foreground/90">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 bg-background">
        <div className="container mx-auto container-padding max-w-5xl">
          <h2 className="heading-sm mb-5">{isId ? "Berita Terkait" : "Related News"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {related.map((item) => (
              <Card key={item.slug} className="border-card-border card-hover">
                <CardContent className="p-0 pb-5">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-muted mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="px-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-accent">{item.category}</p>
                    <h3 className="heading-sm mt-2">{item.title}</h3>
                    <p className="text-body text-muted-foreground mt-2">{item.excerpt}</p>
                    <Button asChild variant="ghost" className="mt-3 h-auto p-0 text-primary">
                      <Link to={`/news/${item.slug}`}>{isId ? "Baca Detail" : "Read Detail"}</Link>
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
