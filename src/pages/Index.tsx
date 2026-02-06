import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";
import { Suspense, lazy } from "react";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ClientsSection = lazy(() => import("@/components/ClientsSection"));
const NewsSection = lazy(() => import("@/components/NewsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));

const Index = () => (
  <>
    <SEO />
    <HeroSection />
    <Suspense fallback={null}>
      <AboutSection />
      <ServicesSection limit={3} />
      <ProjectsSection />
      <ClientsSection />
      <NewsSection />
      <CTASection />
    </Suspense>
  </>
);

export default Index;
