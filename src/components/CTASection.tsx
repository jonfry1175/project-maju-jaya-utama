import MotionSection from "@/components/MotionSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteMetadata } from "@/lib/seo";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CTASection = () => {
  const { i18n } = useTranslation();
  const isId = i18n.language === "id";

  return (
    <MotionSection className="section-padding bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-6 lg:p-8 space-y-4">
              <p className="text-accent uppercase tracking-wide text-sm font-semibold">
                {isId ? "Konsultasi" : "Consultation"}
              </p>
              <h2 className="heading-md text-white">
                {isId
                  ? "Diskusikan Kebutuhan Kemasan Anda"
                  : "Discuss Your Packaging Requirements"}
              </h2>
              <p className="text-body text-white/85">
                {isId
                  ? "Tim PT Maju Jaya Utama Lestari siap membantu pemilihan produk, spesifikasi, dan skema pasokan yang sesuai kebutuhan bisnis Anda."
                  : "PT Maju Jaya Utama Lestari team is ready to help you choose the right products, specifications, and supply scheme for your business needs."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild className="bg-accent hover:bg-accent-light text-accent-foreground">
                  <Link to="/contact">
                    {isId ? "Hubungi Kami" : "Contact Us"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:text-white hover:bg-white/15"
                >
                  <a href={`mailto:${siteMetadata.contactEmail}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {siteMetadata.contactEmail}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-6 lg:p-8 space-y-5">
              <p className="text-accent uppercase tracking-wide text-sm font-semibold">
                {isId ? "Kontak Langsung" : "Direct Contact"}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/60">
                      {isId ? "Telepon" : "Phone"}
                    </p>
                    <a
                      href={`tel:${siteMetadata.contactPhone.replace(/[^+\d]/g, "")}`}
                      className="text-white font-semibold hover:text-accent-light transition-colors"
                    >
                      {siteMetadata.contactPhone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/60">
                      {isId ? "Email" : "Email"}
                    </p>
                    <a
                      href={`mailto:${siteMetadata.secondaryContactEmail}`}
                      className="text-white font-semibold hover:text-accent-light transition-colors"
                    >
                      {siteMetadata.secondaryContactEmail}
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/70">
                {isId
                  ? "Factory: Jl. Manis II No. 9A, Kawasan Industri Manis, Tangerang"
                  : "Factory: Jl. Manis II No. 9A, Manis Industrial Area, Tangerang"}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MotionSection>
  );
};

export default CTASection;
