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

const Index = () => (
  <>
    <SEO />
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PartnerLogosSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
