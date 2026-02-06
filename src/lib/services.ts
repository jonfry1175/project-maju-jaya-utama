export type Service = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: "plastic-packaging",
    slug: "plastic-packaging-manufacturing",
    title: "Plastic Packaging Manufacturing",
    shortDescription:
      "Production of PP, HDPE, and LDPE packaging products for industrial and retail use.",
    description:
      "Since 1993, PT Maju Jaya Utama Lestari has produced packaging materials based on PP, HDPE, and LDPE for clients that require consistent quality and reliable supply.",
    features: [
      "PP, HDPE, and LDPE material options",
      "Custom dimensions and specifications",
      "Quality-focused production process",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "go-green-plastic",
    slug: "go-green-plastic",
    title: "Go Green Plastic",
    shortDescription:
      "Environment-conscious plastic solutions designed to degrade within approximately two years.",
    description:
      "MJUL provides Go Green plastic products as part of its environmental commitment. The material is designed to degrade in around two years under suitable conditions.",
    features: [
      "Eco-label certified",
      "Designed to degrade in around 2 years",
      "Suitable for responsible packaging programs",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "biodegradable-plastic",
    slug: "biodegradable-plastic-tapioca",
    title: "Biodegradable Plastic (Tapioca-Based)",
    shortDescription:
      "Biodegradable plastic made with tapioca/cassava material and designed to break down in about six months.",
    description:
      "This product line uses tapioca/cassava as a primary biodegradable component and is intended to break down faster than conventional plastic alternatives.",
    features: [
      "Tapioca/cassava based material",
      "Designed to degrade in around 6 months",
      "Eco-label and SNI certified",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "paper-bag",
    slug: "paper-bag-production",
    title: "Paper Bag Production",
    shortDescription:
      "Paper bag production for retail, food service, and general commercial packaging needs.",
    description:
      "In addition to plastic products, MJUL manufactures paper bags to support clients that need practical and sustainable packaging formats.",
    features: [
      "Retail and F&B suitable formats",
      "Custom print and size support",
      "Batch production for recurring needs",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "spunbond",
    slug: "spunbond-non-woven-bag",
    title: "Spunbond / Non-Woven Bag",
    shortDescription:
      "Reusable spunbond and non-woven bag products for brand and operational use.",
    description:
      "MJUL offers spunbond/non-woven bags as reusable alternatives for customer programs, merchandising, and distribution operations.",
    features: [
      "Reusable non-woven materials",
      "Custom logo and design options",
      "Durable for repeated use",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "integrated-packaging",
    slug: "integrated-packaging-solutions",
    title: "Integrated Packaging Solutions",
    shortDescription:
      "Consultative packaging support based on product needs, sustainability targets, and budget.",
    description:
      "MJUL combines product knowledge, production capability, and service responsiveness to deliver packaging solutions aligned to each client workflow.",
    features: [
      "Packaging consultation and recommendations",
      "Competitive pricing and quality focus",
      "Service model oriented to long-term partnership",
    ],
    image: "/placeholder.svg",
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
