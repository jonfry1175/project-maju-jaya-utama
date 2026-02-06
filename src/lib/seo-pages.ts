import { buildCanonicalUrl, siteMetadata, toAbsoluteUrl } from "@/lib/seo";

type StaticPageKey =
  | "home"
  | "services"
  | "products"
  | "news"
  | "career"
  | "contact"
  | "gallery"
  | "location"
  | "aboutCompany"
  | "aboutTeam"
  | "certifications"
  | "companyAwards";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

export type ResolvedPageMeta = PageMeta & {
  canonical: string;
  image: string;
};

const defaultImage = toAbsoluteUrl("/logo.png") || siteMetadata.defaultImage;

export const staticPageMeta: Record<StaticPageKey, PageMeta> = {
  home: {
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
    path: "/",
    image: defaultImage,
    keywords: siteMetadata.defaultKeywords,
  },
  services: {
    title: "Products and Service Portfolio",
    description:
      "Explore MJUL product and service portfolio including plastic packaging, biodegradable options, paper bags, and non-woven solutions.",
    path: "/services",
    image: defaultImage,
  },
  products: {
    title: "Product Catalog",
    description:
      "Review available MJUL packaging products for industrial, retail, and commercial applications.",
    path: "/products",
    image: defaultImage,
  },
  news: {
    title: "Company News and Insights",
    description:
      "Latest company updates and operational insights from PT Maju Jaya Utama Lestari.",
    path: "/news",
    image: defaultImage,
  },
  career: {
    title: "Career Opportunities",
    description:
      "Join PT Maju Jaya Utama Lestari and grow with a team focused on quality, innovation, and customer satisfaction.",
    path: "/career",
    image: defaultImage,
  },
  contact: {
    title: "Contact PT Maju Jaya Utama Lestari",
    description:
      "Get in touch with MJUL for product inquiries, pricing, and long-term partnership discussions.",
    path: "/contact",
    image: defaultImage,
  },
  gallery: {
    title: "Gallery",
    description:
      "Visual documentation of MJUL operations, facilities, and product outputs.",
    path: "/gallery",
    image: defaultImage,
  },
  location: {
    title: "Factory Location",
    description:
      "Find MJUL factory location and contact details in Tangerang, Banten, Indonesia.",
    path: "/location",
    image: defaultImage,
  },
  aboutCompany: {
    title: "Our Company",
    description:
      "Company profile of PT Maju Jaya Utama Lestari, established in 1993 and focused on packaging manufacturing excellence.",
    path: "/about-us/our-company",
    image: defaultImage,
  },
  aboutTeam: {
    title: "Our Team",
    description:
      "Meet the people behind PT Maju Jaya Utama Lestari and our quality-driven service culture.",
    path: "/about-us/our-team",
    image: defaultImage,
  },
  certifications: {
    title: "Certifications",
    description:
      "Learn about certifications supporting MJUL quality and sustainability commitments.",
    path: "/about-us/certifications",
    image: defaultImage,
  },
  companyAwards: {
    title: "Company Awards",
    description:
      "Highlights of recognition and achievements earned by PT Maju Jaya Utama Lestari.",
    path: "/about-us/company-awards",
    image: defaultImage,
  },
};

export const getStaticPageMeta = (key: StaticPageKey) => staticPageMeta[key];

export const resolveMeta = (meta: PageMeta): ResolvedPageMeta => ({
  ...meta,
  canonical: buildCanonicalUrl(meta.path),
  image: meta.image ?? defaultImage,
});
