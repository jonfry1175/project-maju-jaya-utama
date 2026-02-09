import AboutSection from "@/components/AboutSection";
import CompanyStrategySection from "@/components/CompanyStrategySection";
import MotionSection from "@/components/MotionSection";
import SEO from "@/components/SEO";
import VisionMissionSection from "@/components/VisionMissionSection";
import AboutPageHero from "@/components/about/AboutPageHero";
import { Card, CardContent } from "@/components/ui/card";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { Building2, Globe2, ShieldCheck, Users2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const OurCompany = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("aboutCompany"));

  const highlights = [
    {
      icon: Building2,
      title: isId ? "Beroperasi Sejak 1993" : "Operating Since 1993",
      description: isId
        ? "Didirikan di kawasan industri Tangerang dengan fokus utama pada manufaktur kemasan plastik dan rotogravure printing."
        : "Founded in Tangerang's industrial area with a core focus on plastic packaging manufacturing and rotogravure printing.",
    },
    {
      icon: ShieldCheck,
      title: isId ? "Standar Produksi Terukur" : "Measured Production Standards",
      description: isId
        ? "Setiap batch melalui kontrol kualitas berlapis agar spesifikasi pelanggan tetap konsisten."
        : "Every batch goes through layered quality control to keep customer specifications consistent.",
    },
    {
      icon: Globe2,
      title: isId ? "Pertumbuhan Berkelanjutan" : "Sustainable Growth",
      description: isId
        ? "Portofolio produk berkembang dari plastik konvensional menuju solusi go green dan biodegradable."
        : "Our portfolio keeps expanding from conventional plastics to go-green and biodegradable solutions.",
    },
  ];

  return (
    <>
      <SEO title={isId ? "Tentang Perusahaan" : "Our Company"} description={meta.description} />
      <main>
        <AboutPageHero
          eyebrow={isId ? "Profil Perusahaan" : "Company Profile"}
          title={
            isId
              ? "Membangun Kemitraan Industri Melalui Presisi Produksi"
              : "Building Industrial Partnerships Through Manufacturing Precision"
          }
          description={
            isId
              ? "PT Maju Jaya Utama Lestari menghadirkan solusi kemasan industri dengan proses yang terukur, respons yang cepat, dan komitmen jangka panjang untuk tiap pelanggan."
              : "PT Maju Jaya Utama Lestari delivers industrial packaging solutions with measured process execution, fast response, and long-term partnership commitment."
          }
          backgroundImage="/assets/images/hero-manufacturing-v2.png"
          watermark="PT MJUL"
          stats={[
            {
              label: isId ? "Tahun Berdiri" : "Founded",
              value: "1993",
              icon: Building2,
            },
            {
              label: isId ? "Skala Tim" : "Team Scale",
              value: isId ? "100+ Karyawan" : "100+ Employees",
              icon: Users2,
            },
            {
              label: isId ? "Lokasi Utama" : "Primary Site",
              value: isId ? "Tangerang" : "Tangerang",
              icon: Globe2,
            },
          ]}
        />

        <MotionSection className="section-padding-small bg-background">
          <div className="container mx-auto max-w-6xl container-padding">
            <div className="grid gap-5 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="h-full border-card-border bg-card/70 shadow-soft transition-transform duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="heading-sm text-foreground">{item.title}</h2>
                      <p className="mt-3 text-body text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </MotionSection>

        <AboutSection />
        <VisionMissionSection />
        <CompanyStrategySection />
      </main>
    </>
  );
};

export default OurCompany;
