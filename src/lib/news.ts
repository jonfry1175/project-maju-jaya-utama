export type NewsArticle = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
  source: string;
};

export type LocalizedNewsArticle = NewsArticle;

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "mjul-company-profile-established-1993",
    title: "MJUL Company Profile and Production Foundations",
    excerpt:
      "PT Maju Jaya Utama Lestari has operated since 1993 and focuses on packaging production with PP, HDPE, and LDPE materials.",
    category: "Company Update",
    author: "MJUL Editorial",
    date: "2026-02-06",
    readTime: "3 min read",
    image: "/logo.png",
    content: [
      "PT Maju Jaya Utama Lestari (MJUL) was established in 1993 and continues to serve industrial packaging needs with a quality-first operating model.",
      "The company provides products built on Poly Propylene (PP), High Density Poly Ethylene (HDPE), and Low Density Poly Ethylene (LDPE) materials.",
      "MJUL positions experience, process knowledge, and practical customer support as the core of long-term business partnerships.",
    ],
    source: "Company Profile PDF 2026",
  },
  {
    id: 2,
    slug: "mjul-sustainable-packaging-initiatives",
    title: "Sustainable Packaging Initiatives: Go Green and Biodegradable",
    excerpt:
      "MJUL introduces product lines that support environmental priorities through degradable and biodegradable packaging technology.",
    category: "Sustainability",
    author: "MJUL Editorial",
    date: "2026-02-06",
    readTime: "3 min read",
    image: "/placeholder.svg",
    content: [
      "MJUL manufactures Go Green plastic products that are designed to degrade within approximately two years.",
      "The company also provides biodegradable products made from tapioca/cassava materials, designed to break down within around six months.",
      "These initiatives are supported by eco-label certification, and the biodegradable product line is also SNI certified.",
    ],
    source: "Company Profile PDF 2026",
  },
  {
    id: 3,
    slug: "mjul-customer-trust-and-integrated-service",
    title: "Customer Trust Through Integrated Service and Product Quality",
    excerpt:
      "MJUL highlights integrated service, product consistency, and responsive collaboration as the basis for customer trust.",
    category: "Company Update",
    author: "MJUL Editorial",
    date: "2026-02-06",
    readTime: "2 min read",
    image: "/placeholder.svg",
    content: [
      "MJUL states that customer trust is built through consistent product quality and competitive pricing.",
      "The company operates with an integrated service approach and emphasizes innovation, solution quality, and team execution.",
      "MJUL remains open to customer feedback to improve service quality and maintain long-term partnerships.",
    ],
    source: "Company Profile PDF 2026",
  },
];

export const getArticleBySlug = (slug: string) =>
  newsArticles.find((article) => article.slug === slug);

export const getLocalizedNews = (_language: "en" | "id" = "id") =>
  newsArticles;
