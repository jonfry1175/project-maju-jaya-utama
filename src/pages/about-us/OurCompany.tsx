import AboutSection from "@/components/AboutSection";
import CompanyStrategySection from "@/components/CompanyStrategySection";
import SEO from "@/components/SEO";
import VisionMissionSection from "@/components/VisionMissionSection";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { useTranslation } from "react-i18next";

const OurCompany = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("aboutCompany"));

  return (
    <>
      <SEO title={isId ? "Tentang Perusahaan" : "Our Company"} description={meta.description} />
      <main>
        <AboutSection />
        <VisionMissionSection />
        <CompanyStrategySection />
      </main>
    </>
  );
};

export default OurCompany;
