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
    id: "film-packaging-slitting",
    slug: "paper-converting-slitting",
    title: "Film Packaging & Slitting",
    shortDescription:
      "Precision resizing of film material into custom widths and diameters for your specific applications.",
    description:
      "We offer high-precision slitting and rewinding services to convert master rolls into smaller sizes that fit your exact machinery requirements. Our advanced equipment ensures clean cuts and perfectly wound rolls.",
    features: [
      "Custom width and diameter capabilities",
      "Clean-cut edges for smooth runnability",
      "Wide range of core sizes available",
    ],
    image: "/assets/images/services/paper-converting.png",
  },
  {
    id: "industrial-plastic-packaging",
    slug: "industrial-packaging-paper",
    title: "Industrial Plastic Packaging",
    shortDescription:
      "High-durability plastic packaging materials designed to protect your goods during storage and distribution.",
    description:
      "Our industrial plastic packaging solutions are engineered for strength, stability, and consistent quality. Suitable for retail, distribution, and high-volume manufacturing operations.",
    features: [
      "High tensile and tear strength",
      "Material options based on application",
      "Consistent quality and finish",
    ],
    image: "/assets/images/services/industrial-packaging.png",
  },
  {
    id: "custom-rotogravure-printing",
    slug: "custom-formats",
    title: "Custom Rotogravure Printing",
    shortDescription:
      "High-precision rotogravure printing for consistent branding and product information on packaging.",
    description:
      "Our rotogravure printing service delivers sharp print detail, stable batch output, and alignment with your packaging design specifications.",
    features: [
      "Sharp and consistent print quality",
      "Color consistency across batches",
      "Support for custom design specifications",
    ],
    image: "/assets/images/services/paper-slitting.png",
  },
  {
    id: "contract-manufacturing",
    slug: "contract-manufacturing",
    title: "Contract Manufacturing",
    shortDescription:
      "Reliable toll manufacturing services to expand your production capacity without major capital investment.",
    description:
      "Leverage our manufacturing expertise and facilities to produce your packaging products. We act as your production partner, ensuring high quality and timely delivery under your brand.",
    features: [
      "Scalable production capacity",
      "Strict quality control standards",
      "Confidential partnership model",
    ],
    image: "/assets/images/services/quality-assurance.png",
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
