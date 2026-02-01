import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  image,
  type = "website",
  noindex = false,
}: SEOProps) => {
  const { i18n } = useTranslation();
  const location = useLocation();

  const baseUrl = "https://majujaya-utama-lestari.com";
  const defaultTitle =
    "PT Maju Jaya Utama Lestari | Converted Paper Products Manufacturer";
  const defaultDescription =
    "PT Maju Jaya Utama Lestari is a converted paper products manufacturer in Tangerang, Indonesia, delivering reliable quality and custom sizing for industrial clients.";
  const defaultKeywords =
    "converted paper products, paper manufacturing, industrial paper, packaging paper, custom sizing, Tangerang, Indonesia";
  const defaultImage = `${baseUrl}/logo.png`;

  const finalTitle = title ? `${title} | PT Maju Jaya Utama Lestari` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image || defaultImage;
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Maju Jaya Utama Lestari",
    alternateName: "Maju Jaya Utama Lestari",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: defaultDescription,
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Tangerang",
      addressRegion: "Banten",
      streetAddress: "9 Jl. Manis II Manis Industrial Estate",
      postalCode: "15136",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-215918872",
      contactType: "sales",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PT Maju Jaya Utama Lestari",
    image: `${baseUrl}/logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Tangerang",
      addressRegion: "Banten",
      streetAddress: "9 Jl. Manis II Manis Industrial Estate",
      postalCode: "15136",
    },
    telephone: "+62-215918872",
    url: baseUrl,
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    industry: "Converted Paper Products Manufacturing",
  };

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <link rel="canonical" href={canonicalUrl} />

      <link
        rel="alternate"
        hreflang="id"
        href={`${baseUrl}/id${location.pathname}`}
      />
      <link
        rel="alternate"
        hreflang="en"
        href={`${baseUrl}/en${location.pathname}`}
      />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="PT Maju Jaya Utama Lestari" />
      <meta
        property="og:locale"
        content={i18n.language === "id" ? "id_ID" : "en_US"}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@majujayautama" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      <meta name="author" content="PT Maju Jaya Utama Lestari" />
      <meta name="generator" content="React + Vite" />

      <link rel="icon" type="image/png" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />
    </Helmet>
  );
};

export default SEO;
