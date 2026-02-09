import { buildCanonicalUrl, siteMetadata, toAbsoluteUrl } from "@/lib/seo";

export type StaticPageKey =
  | "home"
  | "services"
  | "products"
  | "news"
  | "gallery"
  | "contact"
  | "location"
  | "careerEmployee"
  | "careerIntern"
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
    title: "Services",
    description:
      "Explore PT Maju Jaya Utama Lestari service portfolio covering plastic packaging, rotogravure printing, biodegradable products, and integrated packaging consultation.",
    path: "/services",
    image: defaultImage,
  },
  products: {
    title: "Products",
    description:
      "Browse PT Maju Jaya Utama Lestari products for industrial, retail, and commercial plastic packaging requirements.",
    path: "/products",
    image: defaultImage,
  },
  news: {
    title: "News",
    description:
      "Latest updates and company insights from PT Maju Jaya Utama Lestari.",
    path: "/news",
    image: defaultImage,
  },
  gallery: {
    title: "Gallery",
    description:
      "Visual documentation of PT Maju Jaya Utama Lestari factory operations, production process, and packaging outputs.",
    path: "/gallery",
    image: defaultImage,
  },
  contact: {
    title: "Contact",
    description:
      "Contact PT Maju Jaya Utama Lestari for quotations, custom specifications, and partnership opportunities.",
    path: "/contact",
    image: defaultImage,
  },
  location: {
    title: "Location",
    description:
      "Factory and office location information of PT Maju Jaya Utama Lestari in Tangerang, Banten, Indonesia.",
    path: "/location",
    image: defaultImage,
  },
  careerEmployee: {
    title: "Career Employee",
    description:
      "Open employee positions at PT Maju Jaya Utama Lestari for operations, QC, and commercial functions.",
    path: "/career/employee",
    image: defaultImage,
  },
  careerIntern: {
    title: "Career Internship",
    description:
      "Internship opportunities at PT Maju Jaya Utama Lestari for students and fresh graduates.",
    path: "/career/intern",
    image: defaultImage,
  },
  aboutCompany: {
    title: "Our Company",
    description:
      "Company profile of PT Maju Jaya Utama Lestari, established in 1993 with focus on quality manufacturing and integrated service.",
    path: "/about-us/our-company",
    image: defaultImage,
  },
  aboutTeam: {
    title: "Our Team",
    description:
      "Meet the key people behind PT Maju Jaya Utama Lestari operations and partnership management.",
    path: "/about-us/our-team",
    image: defaultImage,
  },
  certifications: {
    title: "Certifications",
    description:
      "Certification and compliance overview supporting PT Maju Jaya Utama Lestari quality and sustainability commitments.",
    path: "/about-us/certifications",
    image: defaultImage,
  },
  companyAwards: {
    title: "Company Awards and Milestones",
    description:
      "Milestones and company achievements of PT Maju Jaya Utama Lestari.",
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

export const getServiceDetailMeta = ({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description: string;
}): ResolvedPageMeta =>
  resolveMeta({
    title,
    description,
    path: `/services/${slug}`,
    image: defaultImage,
  });

export const getNewsDetailMeta = ({
  slug,
  title,
  description,
  image,
}: {
  slug: string;
  title: string;
  description: string;
  image?: string;
}): ResolvedPageMeta =>
  resolveMeta({
    title,
    description,
    path: `/news/${slug}`,
    image: image || defaultImage,
  });

export const getTeamMemberMeta = ({
  slug,
  name,
  role,
  description,
  image,
}: {
  slug: string;
  name: string;
  role: string;
  description: string;
  image?: string;
}): ResolvedPageMeta =>
  resolveMeta({
    title: `${name} - ${role}`,
    description,
    path: `/about-us/our-team/${slug}`,
    image: image || defaultImage,
  });
