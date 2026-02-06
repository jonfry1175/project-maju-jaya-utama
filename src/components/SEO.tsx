import {
  buildCanonicalUrl,
  createOrganizationJsonLd,
  createWebsiteJsonLd,
  siteMetadata,
  toAbsoluteUrl,
} from "@/lib/seo";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

type OpenGraphInput = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: "website" | "article" | "profile";
};

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string | string[];
  image?: string;
  type?: "website" | "article" | "profile";
  openGraph?: OpenGraphInput;
  jsonLd?: Array<Record<string, unknown> | undefined>;
  noindex?: boolean;
};

const SEO = ({
  title,
  description,
  canonical,
  keywords,
  image,
  type = "website",
  openGraph,
  jsonLd,
  noindex = false,
}: SEOProps) => {
  const { i18n } = useTranslation();
  const location = useLocation();

  const defaultTitle = siteMetadata.defaultTitle;
  const defaultDescription = siteMetadata.defaultDescription;
  const defaultKeywords = siteMetadata.defaultKeywords.join(", ");

  const resolvedTitle = title
    ? title.includes(siteMetadata.name)
      ? title
      : `${title} | ${siteMetadata.name}`
    : defaultTitle;

  const resolvedDescription = description || defaultDescription;
  const resolvedCanonical = canonical || buildCanonicalUrl(location.pathname);

  const keywordValue = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords || defaultKeywords;

  const resolvedImage =
    toAbsoluteUrl(openGraph?.image || image) || siteMetadata.defaultImage;

  const ogTitle = openGraph?.title || resolvedTitle;
  const ogDescription = openGraph?.description || resolvedDescription;
  const ogUrl = openGraph?.url || resolvedCanonical;
  const ogType = openGraph?.type || type;

  const schemas = [
    createOrganizationJsonLd(),
    createWebsiteJsonLd(),
    ...(jsonLd || []),
  ].filter(Boolean);

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="keywords" content={keywordValue} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}

      <link rel="canonical" href={resolvedCanonical} />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:site_name" content={siteMetadata.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={resolvedImage} />

      {schemas.map((item, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}

      <meta name="author" content={siteMetadata.name} />
      <link rel="icon" type="image/png" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />
    </Helmet>
  );
};

export default SEO;
