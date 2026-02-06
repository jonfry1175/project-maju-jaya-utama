import LocationMap from "@/components/LocationMap";
import SEO from "@/components/SEO";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { useTranslation } from "react-i18next";

const Location = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";
  const meta = resolveMeta(getStaticPageMeta("location"));

  return (
    <>
      <SEO title={isId ? "Lokasi" : "Location"} description={meta.description} />
      <LocationMap />
    </>
  );
};

export default Location;
