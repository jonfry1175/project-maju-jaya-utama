import MotionSection from "@/components/MotionSection";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const clients = [
  "Family Mart",
  "PT Indorama Synthetics Tbk",
  "PT Lotte Mart Indonesia",
  "PT Matahari Department Store Tbk",
  "PT Ramayana Lestari Sentosa Tbk",
  "PT Diamond Cold Storage",
  "PT Forisa Nusa Persada",
  "PT Kawan Lama Sejahtera",
  "Miniso",
  "Yoshinoya Indonesia",
  "Holland Bakery",
  "Indomaret",
  "PT Belfood",
  "Wings Group Indonesia",
  "Lion Superindo",
  "Grand Lucky Superstore",
  "Sriwijaya Air",
  "Depo Bangunan",
  "Alfamart",
  "Hypermart",
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
          <div className="flex gap-4 animate-scroll-left py-2">
            {[...clients, ...clients].map((client, index) => (
              <Card
                key={`${client}-${index}`}
                className="shrink-0 min-w-[220px] px-5 py-4 border-card-border bg-card/80"
              >
                <p className="text-sm font-semibold text-foreground text-center">{client}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default ClientsSection;
