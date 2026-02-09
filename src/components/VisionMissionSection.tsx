import MotionSection from "@/components/MotionSection";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

const VisionMissionSection = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";

  return (
    <MotionSection className="section-padding bg-background-secondary" id="vision-mission">
      <div className="container mx-auto container-padding max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            {isId ? "Visi & Misi" : "Vision & Mission"}
          </p>
          <h2 className="heading-md mt-3">
            {isId
              ? "Arah Strategis PT Maju Jaya Utama Lestari"
              : "Strategic Direction of PT Maju Jaya Utama Lestari"}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-card-border h-full">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h3 className="heading-sm">{isId ? "Visi" : "Vision"}</h3>
              </div>
              <p className="text-body text-muted-foreground">
                {isId
                  ? "Menjadi mitra manufaktur kemasan yang andal dan berkelanjutan melalui kualitas produk yang konsisten, proses yang efisien, dan pelayanan yang responsif."
                  : "To become a reliable and sustainable packaging manufacturing partner through consistent product quality, efficient process, and responsive service."}
              </p>
            </CardContent>
          </Card>

          <Card className="border-card-border h-full bg-card/80">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <h3 className="heading-sm">{isId ? "Misi" : "Mission"}</h3>
              </div>
              <ul className="space-y-2 text-body text-muted-foreground list-disc pl-5">
                <li>
                  {isId
                    ? "Menyediakan solusi kemasan plastik berbasis kebutuhan pelanggan dengan spesifikasi yang tepat."
                    : "Deliver customer-needs-based plastic packaging solutions with accurate specifications."}
                </li>
                <li>
                  {isId
                    ? "Menjaga standar kualitas produksi secara konsisten pada setiap batch."
                    : "Maintain consistent production quality standards across every batch."}
                </li>
                <li>
                  {isId
                    ? "Membangun kemitraan jangka panjang melalui layanan terintegrasi dan harga kompetitif."
                    : "Build long-term partnerships through integrated services and competitive pricing."}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MotionSection>
  );
};

export default VisionMissionSection;
