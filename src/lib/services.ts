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
    id: "paper-converting",
    slug: "paper-converting-slitting",
    title: "Paper Converting & Slitting",
    shortDescription:
      "Precision resizing of parent rolls into custom widths and diameters for your specific applications.",
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
    id: "industrial-paper",
    slug: "industrial-packaging-paper",
    title: "Industrial Packaging Paper",
    shortDescription:
      "High-durability grades designed to protect your goods during storage and transit.",
    description:
      "Our industrial packaging papers are engineered for strength and protection. Ideal for wrapping, interleaving, and void filling, ensuring your products arrive safely.",
    features: [
      "High tensile and tear strength",
      "Various basis weights (GSM) available",
      "Consistent quality and finish",
    ],
    image: "/assets/images/services/industrial-packaging.png",
  },
  {
    id: "custom-formats",
    slug: "custom-formats",
    title: "Custom Formats",
    shortDescription:
      "Flexible roll and sheet options to minimize waste and maximize efficiency in your facility.",
    description:
      "We understand that standard sizes don't fit every application. Our custom sheeting and formatting services provide you with the exact paper dimensions you need, reducing waste and optimizing your production process.",
    features: [
      "Precise sheeting to custom lengths",
      "Optimized yield to reduce scrap",
      "Flexible minimum order quantities",
    ],
    image: "/assets/images/services/paper-slitting.png",
  },
  {
    id: "contract-manufacturing",
    slug: "contract-manufacturing",
    title: "Contract Manufacturing",
    shortDescription:
      "Reliable toll manufacturing services to expand your production capacity without capital investment.",
    description:
      "Leverage our manufacturing expertise and facilities to produce your paper products. We act as your production partner, ensuring high quality and timely delivery under your brand.",
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
