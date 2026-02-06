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
export type LocaleCode = "en" | "id";

const enNewsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "mjul-company-profile-established-1993",
    title: "PT Maju Jaya Utama Lestari Company Profile and Production Foundations",
    excerpt:
      "PT Maju Jaya Utama Lestari has operated since 1993 and focuses on packaging production with PP, HDPE, and LDPE materials.",
    category: "Company Update",
    author: "PT Maju Jaya Utama Lestari Editorial",
    date: "2026-02-06",
    readTime: "3 min read",
    image: "/assets/images/news/factory-production.jpg",
    content: [
      "PT Maju Jaya Utama Lestari was established in 1993 and continues to serve industrial packaging needs with a quality-first operating model.",
      "The company provides products built on Poly Propylene (PP), High Density Poly Ethylene (HDPE), and Low Density Poly Ethylene (LDPE) materials.",
      "PT Maju Jaya Utama Lestari positions experience, process knowledge, and practical customer support as the core of long-term business partnerships.",
    ],
    source: "Company Profile PDF 2026",
  },
  {
    id: 2,
    slug: "mjul-sustainable-packaging-initiatives",
    title: "Sustainable Packaging Initiatives: Go Green and Biodegradable",
    excerpt:
      "PT Maju Jaya Utama Lestari introduces product lines that support environmental priorities through degradable and biodegradable packaging technology.",
    category: "Sustainability",
    author: "PT Maju Jaya Utama Lestari Editorial",
    date: "2026-02-06",
    readTime: "3 min read",
    image: "/assets/images/news/eco-packaging.jpg",
    content: [
      "PT Maju Jaya Utama Lestari manufactures Go Green plastic products that are designed to degrade within approximately two years.",
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
      "PT Maju Jaya Utama Lestari highlights integrated service, product consistency, and responsive collaboration as the basis for customer trust.",
    category: "Company Update",
    author: "PT Maju Jaya Utama Lestari Editorial",
    date: "2026-02-06",
    readTime: "2 min read",
    image: "/assets/images/news/customer-trust.jpg",
    content: [
      "PT Maju Jaya Utama Lestari states that customer trust is built through consistent product quality and competitive pricing.",
      "The company operates with an integrated service approach and emphasizes innovation, solution quality, and team execution.",
      "PT Maju Jaya Utama Lestari remains open to customer feedback to improve service quality and maintain long-term partnerships.",
    ],
    source: "Company Profile PDF 2026",
  },
];

const idNewsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "mjul-company-profile-established-1993",
    title: "Profil Perusahaan PT Maju Jaya Utama Lestari dan Fondasi Produksi",
    excerpt:
      "PT Maju Jaya Utama Lestari beroperasi sejak 1993 dan berfokus pada produksi kemasan berbahan PP, HDPE, dan LDPE.",
    category: "Pembaruan Perusahaan",
    author: "Redaksi PT Maju Jaya Utama Lestari",
    date: "2026-02-06",
    readTime: "3 menit baca",
    image: "/assets/images/news/factory-production.jpg",
    content: [
      "PT Maju Jaya Utama Lestari didirikan pada tahun 1993 dan terus melayani kebutuhan kemasan industri dengan model operasional yang berfokus pada kualitas.",
      "Perusahaan menyediakan produk berbasis Poly Propylene (PP), High Density Poly Ethylene (HDPE), dan Low Density Poly Ethylene (LDPE).",
      "PT Maju Jaya Utama Lestari menempatkan pengalaman, pemahaman proses, dan dukungan pelanggan yang praktis sebagai inti dari kemitraan bisnis jangka panjang.",
    ],
    source: "Company Profile PDF 2026",
  },
  {
    id: 2,
    slug: "mjul-sustainable-packaging-initiatives",
    title: "Inisiatif Kemasan Berkelanjutan: Go Green dan Biodegradable",
    excerpt:
      "PT Maju Jaya Utama Lestari menghadirkan lini produk yang mendukung prioritas lingkungan melalui teknologi kemasan degradable dan biodegradable.",
    category: "Keberlanjutan",
    author: "Redaksi PT Maju Jaya Utama Lestari",
    date: "2026-02-06",
    readTime: "3 menit baca",
    image: "/assets/images/news/eco-packaging.jpg",
    content: [
      "PT Maju Jaya Utama Lestari memproduksi produk plastik Go Green yang dirancang dapat terurai dalam waktu sekitar dua tahun.",
      "Perusahaan juga menyediakan produk biodegradable berbahan tapioka/singkong yang dirancang terurai dalam sekitar enam bulan.",
      "Inisiatif ini didukung oleh sertifikasi eco-label, dan lini produk biodegradable juga telah tersertifikasi SNI.",
    ],
    source: "Company Profile PDF 2026",
  },
  {
    id: 3,
    slug: "mjul-customer-trust-and-integrated-service",
    title: "Kepercayaan Pelanggan melalui Layanan Terintegrasi dan Kualitas Produk",
    excerpt:
      "PT Maju Jaya Utama Lestari menekankan layanan terintegrasi, konsistensi produk, dan kolaborasi responsif sebagai dasar kepercayaan pelanggan.",
    category: "Pembaruan Perusahaan",
    author: "Redaksi PT Maju Jaya Utama Lestari",
    date: "2026-02-06",
    readTime: "2 menit baca",
    image: "/assets/images/news/customer-trust.jpg",
    content: [
      "PT Maju Jaya Utama Lestari menyatakan bahwa kepercayaan pelanggan dibangun melalui kualitas produk yang konsisten dan harga yang kompetitif.",
      "Perusahaan beroperasi dengan pendekatan layanan terintegrasi serta menekankan inovasi, kualitas solusi, dan eksekusi tim.",
      "PT Maju Jaya Utama Lestari tetap terbuka terhadap masukan pelanggan untuk meningkatkan kualitas layanan dan menjaga kemitraan jangka panjang.",
    ],
    source: "Company Profile PDF 2026",
  },
];

const newsByLocale: Record<LocaleCode, NewsArticle[]> = {
  en: enNewsArticles,
  id: idNewsArticles,
};

const resolveLocale = (language: string): LocaleCode =>
  language.startsWith("id") ? "id" : "en";

export const getLocalizedNews = (language: string = "id"): NewsArticle[] =>
  newsByLocale[resolveLocale(language)];

export const getArticleBySlug = (slug: string, language: string = "id") =>
  getLocalizedNews(language).find((article) => article.slug === slug);

export const newsArticles: NewsArticle[] = idNewsArticles;
