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

export const teamMembers: TeamMember[] = [
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

export const getTeamMemberBySlug = (slug: string) =>
  teamMembers.find((member) => member.slug === slug);
