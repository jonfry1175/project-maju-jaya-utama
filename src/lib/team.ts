export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  email: string;
  location: string;
  photo: string;
};

type LocaleCode = "en" | "id";

const enTeamMembers: TeamMember[] = [
  {
    slug: "lilis-simardjo",
    name: "Lilis Simardjo",
    role: "Commercial Director",
    focus: "Customer partnership and strategic growth",
    bio: "Leads account strategy and long-term partnership programs to ensure every MJUL client receives reliable supply, responsive communication, and practical product recommendations.",
    email: "sales@majujayautama.co.id",
    location: "Tangerang, Banten",
    photo: "/paulus.JPG",
  },
  {
    slug: "lucky-sumantri",
    name: "Lucky Sumantri",
    role: "Operations Director",
    focus: "Factory operations and production quality",
    bio: "Oversees daily production planning, machine utilization, and quality assurance workflow for PP, HDPE, LDPE, paper bag, and non-woven product lines.",
    email: "mjul168@yahoo.com",
    location: "Tangerang, Banten",
    photo: "/zulfikar-lukman.jpg",
  },
  {
    slug: "manufacturing-team",
    name: "Manufacturing Team MJUL",
    role: "Production & Quality Team",
    focus: "Execution excellence on every production batch",
    bio: "Cross-functional operators and QC personnel supporting continuous production consistency, custom specs execution, and on-time delivery commitments.",
    email: "sales@majujayautama.co.id",
    location: "Manis Industrial Area",
    photo: "/orangorang.png",
  },
];

const idTeamMembers: TeamMember[] = [
  {
    slug: "lilis-simardjo",
    name: "Lilis Simardjo",
    role: "Direktur Komersial",
    focus: "Kemitraan pelanggan dan pertumbuhan strategis",
    bio: "Memimpin strategi akun dan program kemitraan jangka panjang untuk memastikan setiap klien MJUL memperoleh pasokan yang andal, komunikasi responsif, dan rekomendasi produk yang tepat guna.",
    email: "sales@majujayautama.co.id",
    location: "Tangerang, Banten",
    photo: "/paulus.JPG",
  },
  {
    slug: "lucky-sumantri",
    name: "Lucky Sumantri",
    role: "Direktur Operasional",
    focus: "Operasional pabrik dan kualitas produksi",
    bio: "Mengawasi perencanaan produksi harian, utilisasi mesin, dan alur quality assurance untuk lini produk PP, HDPE, LDPE, paper bag, dan non-woven.",
    email: "mjul168@yahoo.com",
    location: "Tangerang, Banten",
    photo: "/zulfikar-lukman.jpg",
  },
  {
    slug: "manufacturing-team",
    name: "Tim Manufaktur MJUL",
    role: "Tim Produksi & Kualitas",
    focus: "Keunggulan eksekusi pada setiap batch produksi",
    bio: "Tim lintas fungsi yang terdiri dari operator dan personel QC untuk menjaga konsistensi produksi, pelaksanaan spesifikasi kustom, dan komitmen pengiriman tepat waktu.",
    email: "sales@majujayautama.co.id",
    location: "Kawasan Industri Manis",
    photo: "/orangorang.png",
  },
];

const teamByLocale: Record<LocaleCode, TeamMember[]> = {
  en: enTeamMembers,
  id: idTeamMembers,
};

const resolveLocale = (language: string): LocaleCode =>
  language.startsWith("id") ? "id" : "en";

export const getLocalizedTeamMembers = (language: string = "id"): TeamMember[] =>
  teamByLocale[resolveLocale(language)];

export const getTeamMemberBySlug = (slug: string, language: string = "id") =>
  getLocalizedTeamMembers(language).find((member) => member.slug === slug);

export const teamMembers: TeamMember[] = idTeamMembers;
