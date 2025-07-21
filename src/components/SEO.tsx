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
  
  const defaultTitle = "Global Sinergi Kapital - Konsultan IPO Inovatif Indonesia";
  const defaultDescription = "Konsultan IPO inovatif yang baru berdiri di Indonesia. Kami menghadirkan perspektif segar dan pendekatan modern untuk membantu perusahaan go public di Bursa Efek Indonesia.";
  const defaultKeywords = "IPO, konsultan IPO, go public, bursa efek indonesia, pasar modal, konsultan bisnis, initial public offering, underwriter, fund raising, pendanaan perusahaan";
  const defaultImage = "https://globalsinergikapital.com/logo-wording.png";
  
  const finalTitle = title ? `${title} | Global Sinergi Kapital` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image || defaultImage;
  const canonicalUrl = `https://globalsinergikapital.com${location.pathname}`;
  
  // Structured data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Global Sinergi Kapital",
    alternateName: "GSK",
    url: "https://globalsinergikapital.com",
    logo: "https://globalsinergikapital.com/logo.png",
    description: "Konsultan IPO inovatif yang menghadirkan pendekatan modern untuk membantu perusahaan go public di Indonesia",
    foundingDate: "2023",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-21-12345678",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"]
    },
    sameAs: [
      "https://www.linkedin.com/company/global-sinergi-kapital",
      "https://twitter.com/globalsinergikapital"
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta"
    }
  };
  
  // Structured data for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Global Sinergi Kapital",
    image: "https://globalsinergikapital.com/logo.png",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta"
    },
    telephone: "+62-21-12345678",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2088,
      longitude: 106.8456
    },
    url: "https://globalsinergikapital.com",
    areaServed: {
      "@type": "Country",
      name: "Indonesia"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IPO Consulting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IPO Process Mapping",
            description: "Comprehensive IPO readiness assessment and roadmap planning"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Financial Advisory",
            description: "Professional financial consulting for going public"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fund Raising",
            description: "Strategic fund raising and investor relations services"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={i18n.language} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang Tags */}
      <link rel="alternate" hreflang="id" href={`https://globalsinergikapital.com/id${location.pathname}`} />
      <link rel="alternate" hreflang="en" href={`https://globalsinergikapital.com/en${location.pathname}`} />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="Global Sinergi Kapital" />
      <meta property="og:locale" content={i18n.language === "id" ? "id_ID" : "en_US"} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@globalsinergikapital" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Global Sinergi Kapital" />
      <meta name="generator" content="React + Vite" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />
    </Helmet>
  );
};

export default SEO;