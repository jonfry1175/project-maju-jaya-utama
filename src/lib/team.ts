export type TeamMemberStat = {
  label: string;
  value: string;
};

export type TeamMemberTimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  email: string;
  location: string;
  photo: string;
  quote?: string;
  background?: string;
  tenure?: string;
  strengths?: string[];
  achievements?: string[];
  stats?: TeamMemberStat[];
  timeline?: TeamMemberTimelineItem[];
};

type LocaleCode = "en" | "id";

const enTeamMembers: TeamMember[] = [
  {
    slug: "lilis-simardjo",
    name: "Lilis Simardjo",
    role: "Commercial Director",
    focus: "Customer partnership and strategic growth",
    bio: "Leads account strategy and long-term partnership programs to ensure every PT Maju Jaya Utama Lestari client receives reliable supply, responsive communication, and practical product recommendations.",
    email: "sales@majujayautama.co.id",
    location: "Tangerang, Banten",
    photo: "/paulus.JPG",
    quote:
      "Long-term trust is built when quality, communication, and execution remain consistent in every shipment.",
    background:
      "Lilis oversees commercial planning, customer relationship development, and strategic account growth. She ensures every client collaboration remains practical, scalable, and aligned with operational capacity.",
    tenure: "10+ years of commercial leadership",
    strengths: [
      "Strategic account planning",
      "Partnership development",
      "Commercial negotiation",
    ],
    achievements: [
      "Expanded long-term partnerships with national retail and distribution clients.",
      "Improved communication framework between commercial and operations teams.",
      "Strengthened demand planning to support stable production scheduling.",
    ],
    stats: [
      { label: "Core Scope", value: "Commercial Strategy" },
      { label: "Engagement Model", value: "B2B Partnership" },
      { label: "Region", value: "Greater Jakarta" },
    ],
    timeline: [
      {
        year: "2013",
        title: "Joined Commercial Division",
        description:
          "Started leading business account relationships and customer requirement mapping.",
      },
      {
        year: "2018",
        title: "Commercial Strategy Expansion",
        description:
          "Built stronger collaboration between sales planning and production allocation.",
      },
      {
        year: "2024",
        title: "Long-Term Partnership Acceleration",
        description:
          "Focused on sustainable growth programs with high-retention national clients.",
      },
    ],
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
    quote:
      "A reliable process is the foundation of on-time delivery and product consistency.",
    background:
      "Lucky leads operational execution across production scheduling, machine readiness, and quality controls. His role focuses on maintaining steady throughput while keeping specification precision across product lines.",
    tenure: "12+ years in plant operations",
    strengths: [
      "Production workflow optimization",
      "Quality discipline",
      "Cross-functional execution",
    ],
    achievements: [
      "Implemented stronger shift-level production monitoring to reduce process deviations.",
      "Improved machine utilization balance across multiple product categories.",
      "Developed recurring QC reviews to maintain consistency in finished goods.",
    ],
    stats: [
      { label: "Core Scope", value: "Operations & QA" },
      { label: "Primary Focus", value: "Process Stability" },
      { label: "Factory Base", value: "Manis Industrial Area" },
    ],
    timeline: [
      {
        year: "2011",
        title: "Joined Operations Team",
        description:
          "Started coordinating production planning and execution for key customer orders.",
      },
      {
        year: "2017",
        title: "Operational Standardization",
        description:
          "Established tighter production workflows with measurable quality checkpoints.",
      },
      {
        year: "2023",
        title: "Capacity & Reliability Program",
        description:
          "Led initiatives to improve production responsiveness and delivery reliability.",
      },
    ],
  },
  {
    slug: "manufacturing-team",
    name: "Manufacturing Team PT Maju Jaya Utama Lestari",
    role: "Production & Quality Team",
    focus: "Execution excellence on every production batch",
    bio: "Cross-functional operators and QC personnel supporting continuous production consistency, custom specs execution, and on-time delivery commitments.",
    email: "sales@majujayautama.co.id",
    location: "Manis Industrial Area",
    photo: "/orangorang.png",
    quote:
      "The strength of production quality comes from discipline, coordination, and shared accountability.",
    background:
      "The manufacturing team includes operators, quality-control personnel, and support functions working in a synchronized workflow. Their combined execution keeps quality standards stable across recurring and custom orders.",
    tenure: "Cross-functional team",
    strengths: [
      "Batch consistency",
      "Specification compliance",
      "Coordinated execution",
    ],
    achievements: [
      "Maintained quality consistency across high-volume recurring orders.",
      "Supported custom requirement execution with coordinated production adjustments.",
      "Sustained on-time delivery commitments through strong shift collaboration.",
    ],
    stats: [
      { label: "Core Scope", value: "Production & QC" },
      { label: "Working Model", value: "Shift Collaboration" },
      { label: "Priority", value: "Batch Reliability" },
    ],
    timeline: [
      {
        year: "2015",
        title: "Production Team Strengthening",
        description:
          "Expanded core operational team structure to support increasing order volume.",
      },
      {
        year: "2020",
        title: "Quality Control Integration",
        description:
          "Enhanced coordination between operators and QC checkpoints across shifts.",
      },
      {
        year: "2024",
        title: "Operational Readiness Program",
        description:
          "Improved process discipline for consistent fulfillment and scalable output.",
      },
    ],
  },
];

const idTeamMembers: TeamMember[] = [
  {
    slug: "lilis-simardjo",
    name: "Lilis Simardjo",
    role: "Direktur Komersial",
    focus: "Kemitraan pelanggan dan pertumbuhan strategis",
    bio: "Memimpin strategi akun dan program kemitraan jangka panjang untuk memastikan setiap klien PT Maju Jaya Utama Lestari memperoleh pasokan yang andal, komunikasi responsif, dan rekomendasi produk yang tepat guna.",
    email: "sales@majujayautama.co.id",
    location: "Tangerang, Banten",
    photo: "/paulus.JPG",
    quote:
      "Kepercayaan jangka panjang dibangun lewat kualitas yang konsisten, komunikasi jelas, dan eksekusi yang disiplin.",
    background:
      "Lilis memimpin perencanaan komersial, pengembangan relasi pelanggan, dan strategi pertumbuhan akun. Ia memastikan setiap kolaborasi klien tetap praktis, skalabel, dan selaras dengan kapasitas operasional.",
    tenure: "10+ tahun kepemimpinan komersial",
    strengths: [
      "Perencanaan akun strategis",
      "Pengembangan kemitraan",
      "Negosiasi komersial",
    ],
    achievements: [
      "Memperluas kemitraan jangka panjang dengan klien retail dan distribusi nasional.",
      "Meningkatkan kerangka komunikasi antara tim komersial dan operasional.",
      "Memperkuat perencanaan permintaan untuk menjaga stabilitas jadwal produksi.",
    ],
    stats: [
      { label: "Ruang Lingkup", value: "Strategi Komersial" },
      { label: "Model Kerja", value: "Kemitraan B2B" },
      { label: "Wilayah", value: "Jabodetabek" },
    ],
    timeline: [
      {
        year: "2013",
        title: "Bergabung di Divisi Komersial",
        description:
          "Mulai memimpin relasi akun bisnis dan pemetaan kebutuhan pelanggan.",
      },
      {
        year: "2018",
        title: "Ekspansi Strategi Komersial",
        description:
          "Membangun kolaborasi yang lebih kuat antara perencanaan penjualan dan alokasi produksi.",
      },
      {
        year: "2024",
        title: "Akselerasi Kemitraan Jangka Panjang",
        description:
          "Fokus pada program pertumbuhan berkelanjutan bersama klien nasional dengan retensi tinggi.",
      },
    ],
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
    quote:
      "Proses yang andal adalah fondasi utama untuk ketepatan pengiriman dan konsistensi kualitas.",
    background:
      "Lucky memimpin eksekusi operasional pada perencanaan produksi, kesiapan mesin, dan kontrol kualitas. Fokus utamanya adalah menjaga stabilitas output sambil mempertahankan presisi spesifikasi lintas lini produk.",
    tenure: "12+ tahun di operasional pabrik",
    strengths: [
      "Optimasi alur produksi",
      "Disiplin kualitas",
      "Eksekusi lintas fungsi",
    ],
    achievements: [
      "Menerapkan monitoring produksi per-shift untuk mengurangi deviasi proses.",
      "Meningkatkan keseimbangan utilisasi mesin di berbagai kategori produk.",
      "Mengembangkan review QC berkala untuk menjaga konsistensi barang jadi.",
    ],
    stats: [
      { label: "Ruang Lingkup", value: "Operasional & QA" },
      { label: "Fokus Utama", value: "Stabilitas Proses" },
      { label: "Basis Pabrik", value: "Kawasan Industri Manis" },
    ],
    timeline: [
      {
        year: "2011",
        title: "Bergabung di Tim Operasional",
        description:
          "Mulai mengoordinasikan perencanaan produksi dan eksekusi pesanan klien utama.",
      },
      {
        year: "2017",
        title: "Standardisasi Operasional",
        description:
          "Membangun alur produksi yang lebih ketat dengan checkpoint kualitas terukur.",
      },
      {
        year: "2023",
        title: "Program Kapasitas & Keandalan",
        description:
          "Memimpin inisiatif peningkatan respons produksi dan reliabilitas pengiriman.",
      },
    ],
  },
  {
    slug: "manufacturing-team",
    name: "Tim Manufaktur PT Maju Jaya Utama Lestari",
    role: "Tim Produksi & Kualitas",
    focus: "Keunggulan eksekusi pada setiap batch produksi",
    bio: "Tim lintas fungsi yang terdiri dari operator dan personel QC untuk menjaga konsistensi produksi, pelaksanaan spesifikasi kustom, dan komitmen pengiriman tepat waktu.",
    email: "sales@majujayautama.co.id",
    location: "Kawasan Industri Manis",
    photo: "/orangorang.png",
    quote:
      "Kekuatan kualitas produksi lahir dari disiplin, koordinasi, dan tanggung jawab bersama.",
    background:
      "Tim manufaktur terdiri dari operator, personel quality control, dan fungsi pendukung yang bekerja dalam alur sinkron. Eksekusi bersama ini menjaga standar kualitas tetap stabil pada pesanan rutin maupun kebutuhan khusus.",
    tenure: "Tim lintas fungsi",
    strengths: [
      "Konsistensi batch",
      "Kepatuhan spesifikasi",
      "Eksekusi terkoordinasi",
    ],
    achievements: [
      "Menjaga konsistensi kualitas untuk pesanan berulang dengan volume tinggi.",
      "Mendukung eksekusi kebutuhan kustom melalui penyesuaian produksi terkoordinasi.",
      "Mempertahankan komitmen pengiriman tepat waktu lewat kolaborasi shift yang kuat.",
    ],
    stats: [
      { label: "Ruang Lingkup", value: "Produksi & QC" },
      { label: "Model Kerja", value: "Kolaborasi Shift" },
      { label: "Prioritas", value: "Keandalan Batch" },
    ],
    timeline: [
      {
        year: "2015",
        title: "Penguatan Tim Produksi",
        description:
          "Memperluas struktur tim operasional inti untuk mendukung peningkatan volume pesanan.",
      },
      {
        year: "2020",
        title: "Integrasi Quality Control",
        description:
          "Meningkatkan koordinasi antara operator dan checkpoint QC lintas shift.",
      },
      {
        year: "2024",
        title: "Program Kesiapan Operasional",
        description:
          "Memperkuat disiplin proses untuk pemenuhan yang konsisten dan output yang skalabel.",
      },
    ],
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
