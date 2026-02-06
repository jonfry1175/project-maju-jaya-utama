import MotionSection from "@/components/MotionSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getLocalizedNews } from "@/lib/news";
import { ArrowRight, CalendarDays } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NewsSection = () => {
  const { i18n, t } = useTranslation("common");
  const isId = i18n.language === "id";
  const localizedNews = getLocalizedNews(i18n.language);

  const featured = [...localizedNews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <MotionSection className="section-padding bg-background-secondary" id="news-section">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium uppercase tracking-wide">
            {isId ? "Berita Perusahaan" : "Company News"}
          </span>
          <h2 className="heading-md mt-2">
            {isId
              ? "Update Terbaru PT Maju Jaya Utama Lestari"
              : "Latest Updates from PT Maju Jaya Utama Lestari"}
          </h2>
          <p className="text-body text-muted-foreground mt-3">
            {isId
              ? "Ringkasan informasi perusahaan yang disusun dari profil resmi MJUL dan pembaruan internal."
              : "Company highlights compiled from official MJUL profile materials and internal updates."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((article) => (
            <Card key={article.id} className="h-full card-hover bg-card border-card-border">
              <CardContent className="p-0 flex flex-col gap-4 h-full pb-6">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="px-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>

                <h3 className="heading-sm text-foreground">{article.title}</h3>
                <p className="text-body text-muted-foreground line-clamp-4">{article.excerpt}</p>

                <div className="mt-auto flex items-center justify-between pt-2 border-t border-border/50">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {new Date(article.date).toLocaleDateString(
                      isId ? "id-ID" : "en-US",
                    )}
                  </span>
                  <Button asChild variant="ghost" className="h-auto p-0 text-primary hover:text-primary">
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

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/news">
              {t("viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </MotionSection>
  );
};

export default NewsSection;
