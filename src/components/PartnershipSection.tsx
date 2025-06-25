import { useTranslation } from "react-i18next";
import { Building } from "lucide-react";

const PartnershipSection = () => {
  const { t } = useTranslation("partnership");
  return (
    <section id="partnership" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg p-6 sm:p-8 lg:p-12">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src="/logo-ritz.png"
                alt="RITZ Corp"
                className="h-24 sm:h-32 lg:h-40 w-auto object-contain"
              />
            </div>

            {/* Header */}
            <div className="mb-6 sm:mb-8 text-center">
              <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
                <Building className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                {t("section.badge")}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 sm:mb-6 lg:mb-8 leading-tight">
                About
                <br />
                <span className="text-gradient">{t("section.title")}</span>
              </h2>
            </div>

            {/* Description - Using translations */}
            <div className="space-y-3 sm:space-y-4 text-gray-800 leading-relaxed text-justify max-w-3xl mx-auto">
              <p className="text-xs sm:text-sm lg:text-base">
                {t("description.paragraph1")}
              </p>

              <p className="text-xs sm:text-sm lg:text-base">
                {t("description.paragraph2")}
              </p>

              <p className="text-xs sm:text-sm lg:text-base">
                {t("description.paragraph3")}
              </p>

              <p className="text-xs sm:text-sm lg:text-base">
                {t("description.paragraph4")}
              </p>

              <p className="text-xs sm:text-sm lg:text-base">
                {t("description.paragraph5")}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-xs text-gray-500">{t("footer.confidential")}</p>
              <p className="text-xs text-gray-500">{t("footer.pageNumber")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
