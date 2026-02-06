import type { NewsArticle } from "@/lib/news";
import type { Service } from "@/lib/services";

export const siteMetadata = {
  name: "PT Maju Jaya Utama Lestari",
  legalName: "PT Maju Jaya Utama Lestari",
  siteUrl: "https://majujaya-utama-lestari.com",
  locale: "id_ID",
  defaultTitle:
    "PT Maju Jaya Utama Lestari | Packaging and Converted Paper Products",
  defaultDescription:
    "PT Maju Jaya Utama Lestari is a packaging manufacturer established in 1993, serving PP, HDPE, LDPE, biodegradable products, paper bags, and non-woven solutions.",
  defaultKeywords: [
    "PT Maju Jaya Utama Lestari",
    "plastic packaging Indonesia",
    "biodegradable plastic",
    "paper bag manufacturer",
    "spunbond bag",
    "Tangerang packaging factory",
  ],
  defaultImage: "https://majujaya-utama-lestari.com/logo.png",
  contactEmail: "sales@majujayautama.co.id",
  secondaryContactEmail: "mjul168@yahoo.com",
  contactPhone: "+62-21-5918872",
  address: {
    streetAddress: "Jl. Manis II No. 9A, Kawasan Industri Manis",
    addressLocality: "Tangerang",
    addressRegion: "Banten",
    postalCode: "15136",
    addressCountry: "ID",
  },
  serviceArea: "Indonesia",
  organizationId: "https://majujaya-utama-lestari.com/#organization",
};

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export const buildCanonicalUrl = (path = "/"): string => {
  if (!path) return siteMetadata.siteUrl;
  try {
    const normalized = path.startsWith("http")
      ? path
      : `${path.startsWith("/") ? "" : "/"}${path}`;
    return new URL(normalized, siteMetadata.siteUrl).toString();
  } catch {
    return siteMetadata.siteUrl;
  }
};

export const toAbsoluteUrl = (value?: string | null): string | undefined => {
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  return `${siteMetadata.siteUrl}${value.startsWith("/") ? "" : "/"}${value}`;
};

export const createBreadcrumbJsonLd = (items: BreadcrumbItem[]) => {
  if (!items.length) return undefined;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildCanonicalUrl(item.url),
    })),
  } as const;
};

export const createOrganizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": siteMetadata.organizationId,
  name: siteMetadata.name,
  legalName: siteMetadata.legalName,
  url: siteMetadata.siteUrl,
  logo: siteMetadata.defaultImage,
  image: siteMetadata.defaultImage,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: siteMetadata.contactPhone,
    email: siteMetadata.contactEmail,
    availableLanguage: ["id", "en"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteMetadata.address.streetAddress,
    addressLocality: siteMetadata.address.addressLocality,
    addressRegion: siteMetadata.address.addressRegion,
    postalCode: siteMetadata.address.postalCode,
    addressCountry: siteMetadata.address.addressCountry,
  },
  areaServed: {
    "@type": "Country",
    name: siteMetadata.serviceArea,
  },
});

export const createWebsiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteMetadata.siteUrl}#website`,
  url: siteMetadata.siteUrl,
  name: siteMetadata.name,
  description: siteMetadata.defaultDescription,
  inLanguage: siteMetadata.locale,
  publisher: {
    "@id": siteMetadata.organizationId,
  },
});

export const createWebPageJsonLd = ({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name,
  description,
  url,
  image: image ? toAbsoluteUrl(image) : undefined,
  inLanguage: siteMetadata.locale,
  isPartOf: {
    "@id": `${siteMetadata.siteUrl}#website`,
  },
});

export const createServiceJsonLd = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  serviceType: service.title,
  provider: {
    "@id": siteMetadata.organizationId,
  },
  areaServed: {
    "@type": "Country",
    name: siteMetadata.serviceArea,
  },
  image: toAbsoluteUrl(service.image),
  url: buildCanonicalUrl(`/services/${service.slug}`),
});

export const createNewsArticleJsonLd = (article: NewsArticle) => ({
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: article.title,
  description: article.excerpt,
  datePublished: article.date,
  dateModified: article.date,
  author: {
    "@type": "Organization",
    name: article.author,
  },
  image: [toAbsoluteUrl(article.image)].filter(Boolean),
  mainEntityOfPage: buildCanonicalUrl(`/news/${article.slug}`),
  publisher: {
    "@type": "Organization",
    name: siteMetadata.name,
    logo: {
      "@type": "ImageObject",
      url: siteMetadata.defaultImage,
    },
  },
});

export const createContactPageJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `${siteMetadata.name} Contact`,
  url: buildCanonicalUrl("/contact"),
  description:
    "Contact PT Maju Jaya Utama Lestari for packaging product inquiries, custom specifications, and partnership opportunities.",
  inLanguage: siteMetadata.locale,
  publisher: {
    "@id": siteMetadata.organizationId,
  },
});

export const createPlaceJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Place",
  name: `${siteMetadata.name} Factory`,
  url: buildCanonicalUrl("/location"),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteMetadata.address.streetAddress,
    addressLocality: siteMetadata.address.addressLocality,
    addressRegion: siteMetadata.address.addressRegion,
    postalCode: siteMetadata.address.postalCode,
    addressCountry: siteMetadata.address.addressCountry,
  },
  telephone: siteMetadata.contactPhone,
});

export const createPersonJsonLd = ({
  name,
  jobTitle,
  url,
  image,
  email,
}: {
  name: string;
  jobTitle: string;
  url: string;
  image?: string;
  email?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle,
  url: buildCanonicalUrl(url),
  image: image ? toAbsoluteUrl(image) : undefined,
  email,
  worksFor: {
    "@id": siteMetadata.organizationId,
  },
});
