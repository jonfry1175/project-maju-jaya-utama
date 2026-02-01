import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageBackground from "@/components/PageBackground";

const NotFound = () => {
  const { t } = useTranslation('common');
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative isolate overflow-hidden">
      <PageBackground />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">{t("404")}</h1>
        <p className="text-xl text-gray-600 mb-4">{t("pageNotFound")}</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          {t("backToHome")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
