import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";
import { Suspense, lazy } from "react";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const HomeCapabilitiesSection = lazy(
  () => import("@/components/HomeCapabilitiesSection"),
);
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ClientsSection = lazy(() => import("@/components/ClientsSection"));
const NewsSection = lazy(() => import("@/components/NewsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));

const Index = () => (
  <>
    <SEO />
    <HeroSection />
    <Suspense fallback={null}>
      <AboutSection />
      <HomeCapabilitiesSection />
      <ServicesSection limit={3} />
      <ClientsSection />
      <NewsSection />
      <CTASection />
    </Suspense>
  </>
);

export default Index;
