import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getLocalizedNews } from "@/lib/news";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const News = () => {
  const { i18n, t } = useTranslation("common");
  const isId = i18n.language === "id";
  const articles = getLocalizedNews(i18n.language);
  const meta = resolveMeta(getStaticPageMeta("news"));
  const title = isId
    ? "Update Terbaru PT Maju Jaya Utama Lestari"
    : "Latest Updates from PT Maju Jaya Utama Lestari";
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: isId ? "Beranda" : "Home", url: "/" },
    { name: isId ? "Berita" : "News", url: "/news" },
  ]);

  return (
    <>
      <SEO
        title={isId ? "Berita" : "News"}
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

      <MotionSection className="pt-32 pb-12 bg-background">
        <div className="container mx-auto container-padding max-w-6xl">
          <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            {isId ? "Berita Perusahaan" : "Company News"}
          </p>
          <h1 className="heading-lg mt-3">
            {isId
              ? "Update Terbaru PT Maju Jaya Utama Lestari"
              : "Latest Updates from PT Maju Jaya Utama Lestari"}
          </h1>
        </div>
      </MotionSection>

      <MotionSection className="pb-20 bg-background-secondary">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.slug} className="h-full border-card-border card-hover">
                <CardContent className="p-0 flex flex-col h-full pb-6">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="px-6 pt-4 flex flex-col gap-3 flex-1">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="heading-sm">{article.title}</h3>
                    <p className="text-body text-muted-foreground line-clamp-4">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/60">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {new Date(article.date).toLocaleDateString(isId ? "id-ID" : "en-US")}
                      </span>
                      <Button asChild variant="ghost" className="h-auto p-0 text-primary">
                        <Link to={`/news/${article.slug}`}>
                          {t("readMore")}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
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

export default News;
