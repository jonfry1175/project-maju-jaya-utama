import MotionSection from "@/components/MotionSection";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const clients = [
  {
    name: "Family Mart",
    logo: "https://placehold.co/200x80/white/475569?text=Family+Mart",
  },
  {
    name: "PT Indorama Synthetics Tbk",
    logo: "https://placehold.co/200x80/white/475569?text=Indorama",
  },
  {
    name: "PT Lotte Mart Indonesia",
    logo: "https://placehold.co/200x80/white/475569?text=Lotte+Mart",
  },
  {
    name: "PT Matahari Department Store Tbk",
    logo: "https://placehold.co/200x80/white/475569?text=Matahari",
  },
  {
    name: "PT Ramayana Lestari Sentosa Tbk",
    logo: "https://placehold.co/200x80/white/475569?text=Ramayana",
  },
  {
    name: "PT Kawan Lama Sejahtera",
    logo: "https://placehold.co/200x80/white/475569?text=Kawan+Lama",
  },
  {
    name: "Miniso",
    logo: "https://placehold.co/200x80/white/475569?text=Miniso",
  },
  {
    name: "Yoshinoya Indonesia",
    logo: "https://placehold.co/200x80/white/475569?text=Yoshinoya",
  },
  {
    name: "Holland Bakery",
    logo: "https://placehold.co/200x80/white/475569?text=Holland+Bakery",
  },
  {
    name: "Indomaret",
    logo: "https://placehold.co/200x80/white/475569?text=Indomaret",
  },
  {
    name: "Wings Group Indonesia",
    logo: "https://placehold.co/200x80/white/475569?text=Wings+Group",
  },
  {
    name: "Lion Superindo",
    logo: "https://placehold.co/200x80/white/475569?text=Superindo",
  },
  {
    name: "Sriwijaya Air",
    logo: "https://placehold.co/200x80/white/475569?text=Sriwijaya+Air",
  },
  {
    name: "Depo Bangunan",
    logo: "https://placehold.co/200x80/white/475569?text=Depo+Bangunan",
  },
  {
    name: "Alfamart",
    logo: "https://placehold.co/200x80/white/475569?text=Alfamart",
  },
  {
    name: "Hypermart",
    logo: "https://placehold.co/200x80/white/475569?text=Hypermart",
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
              ? "Sebagian pelanggan MJUL berdasarkan company profile resmi."
              : "Selected MJUL customers based on the official company profile."}
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
                  className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
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
