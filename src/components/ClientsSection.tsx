import MotionSection from "@/components/MotionSection";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const clients = [
  {
    name: "Family Mart",
    logo: "/images/clients/FAMILYMART.png",
  },
  {
    name: "PT Indorama Synthetics Tbk",
    logo: "/images/clients/INDORAMA.png",
  },
  {
    name: "PT Lotte Mart Indonesia",
    logo: "/images/clients/LOTTE.png",
  },
  {
    name: "PT Matahari Department Store Tbk",
    logo: "/images/clients/MATAHARI.png",
  },
  {
    name: "PT Ramayana Lestari Sentosa Tbk",
    logo: "/images/clients/RAMAYANA.png",
  },
  {
    name: "PT Kawan Lama Sejahtera",
    logo: "/images/clients/KAWAN-LAMA.png",
  },
  {
    name: "Miniso",
    logo: "/images/clients/MINISO.png",
  },
  {
    name: "Yoshinoya Indonesia",
    logo: "/images/clients/YOSHINOYA.png",
  },
  {
    name: "Holland Bakery",
    logo: "/images/clients/HOLAND-BAKERY.png",
  },
  {
    name: "Indomaret",
    logo: "/images/clients/INDOMART.png",
  },
  {
    name: "Wings Group Indonesia",
    logo: "/images/clients/WINGS.png",
  },
  {
    name: "Lion Superindo",
    logo: "/images/clients/SUPERINDO.png",
  },
  {
    name: "Sriwijaya Air",
    logo: "/images/clients/SRIWIJAYA.png",
  },
  {
    name: "Depo Bangunan",
    logo: "/images/clients/DEPO.png",
  },
  {
    name: "Alfamart",
    logo: "/images/clients/ALFA.png",
  },
  {
    name: "Hypermart",
    logo: "/images/clients/HYPERMART.png",
  },
  {
    name: "Belfoods",
    logo: "/images/clients/BELFOODS.png",
  },
  {
    name: "Forisa Nusapersada",
    logo: "/images/clients/FORISA.png",
  },
  {
    name: "Grand Lucky",
    logo: "/images/clients/GRAND-LUCKY.png",
  },
];

const ClientsSection = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";

  return (
    <MotionSection className="section-padding bg-background-secondary" id="clients-section">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-accent font-medium uppercase tracking-wide">
            {isId ? "Pelanggan Kami" : "Our Customers"}
          </span>
          <h2 className="heading-md mt-2">
            {isId
              ? "Dipercaya oleh Mitra dari Berbagai Industri"
              : "Trusted by Partners Across Industries"}
          </h2>
          <p className="text-body text-muted-foreground mt-3">
            {isId
              ? "Sebagian pelanggan PT Maju Jaya Utama Lestari berdasarkan company profile resmi."
              : "Selected PT Maju Jaya Utama Lestari customers based on the official company profile."}
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-left py-4">
            {[...clients, ...clients].map((client, index) => (
              <Card
                key={`${client.name}-${index}`}
                className="shrink-0 min-w-[200px] h-24 flex items-center justify-center px-6 py-4 border-card-border bg-white/50 backdrop-blur-sm transition-all hover:bg-white hover:shadow-soft group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const next = target.nextElementSibling;
                    if (next) next.classList.remove("hidden");
                  }}
                />
                <p className="hidden text-xs font-semibold text-foreground text-center line-clamp-2">
                  {client.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default ClientsSection;
