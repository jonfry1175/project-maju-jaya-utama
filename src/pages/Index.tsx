import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PartnerLogosSection from "@/components/PartnerLogosSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageBackground from "@/components/PageBackground";

const Index = () => (
  <div className="min-h-screen bg-background relative isolate overflow-hidden">
    <SEO />
    <PageBackground />
    <div className="relative z-10">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PartnerLogosSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  </div>
);

export default Index;
