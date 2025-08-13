import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import PartnershipSection from "@/components/PartnershipSection";
// import OurExpertiseSection from "@/components/OurExpertiseSection";
import PartnershipBenefitsSection from "@/components/PartnershipBenefitsSection";
import OurClientsSection from "@/components/OurClientsSection";
import PartnershipProcessSection from "@/components/PartnershipProcessSection";
import PartnershipFAQSection from "@/components/PartnershipFAQSection";
import { Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import SEO from "@/components/SEO";

const OurPartnership = () => {
  const { t } = useTranslation(['our-partnership', 'about']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const clientsData = [
    { 
      name: 'Pertamina', 
      logo: '/logologo/pertamina.png', 
      title: 'Pertamina - Platform Energy Solutions',
      description: 'Project Pemerintah',
      category: 'Pemerintah',
    },
    { 
      name: 'BNI', 
      logo: '/logologo/bni.png', 
      title: 'BNI - Transformasi Digital Banking',
      description: 'Pengembangan Sistem',
      category: 'Perbankan',
    },
    { 
      name: 'Maybank', 
      logo: '/Sponsor/logo-sponsor-gsk-maybank.jpg', 
      title: 'Maybank - Integrasi Data Nasional',
      description: 'Project Pemerintah',
      category: 'Perbankan',
    },
    { 
      name: 'Angkasa Pura II', 
      logo: '/logologo/angkasa.png', 
      title: 'Angkasa Pura II - Sistem Billing',
      description: 'Sistem Billing',
      category: 'Transportasi',
    },
    { 
      name: 'Bank Mandiri', 
      logo: '/logologo/mandiri.png', 
      title: 'Bank Mandiri - Digital Transformation',
      description: 'Project Pemerintah',
      category: 'Perbankan',
    },
    { 
      name: 'BRI Agro', 
      logo: '/logologo/bri.png', 
      title: 'BRI Agro - Agricultural Platform',
      description: 'Pengembangan Web',
      category: 'Perbankan',
    },
    { 
      name: 'Telkomsel', 
      logo: '/logologo/telkomsel.png', 
      title: 'Telkomsel - Network Solutions',
      description: 'Project Pemerintah',
      category: 'Telekomunikasi',
    },
    { 
      name: 'Pelindo', 
      logo: '/Sponsor/logo-ski-sponsor-pelindo.png', 
      title: 'Pelindo - Port Management System',
      description: 'Sistem Billing',
      category: 'Pelabuhan',
    },
    { 
      name: 'Tempo Media Group', 
      logo: '/Sponsor/logo-sponsor-gsk-tempo.png', 
      title: 'Tempo - Media Digital Platform',
      description: 'Pengembangan Web',
      category: 'Media',
    },
    { 
      name: 'Alif', 
      logo: '/Sponsor/logo-sponsor-gsk-alif.png', 
      title: 'Alif - Financial Technology',
      description: 'Project Pemerintah',
      category: 'Fintech',
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, clientsData.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragOffset(0);
    setTimeout(() => setIsPaused(false), 1000); // Resume auto-scroll after 1 second
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.clientX;
    const diff = currentX - startX;
    setDragOffset(diff);

    // Auto-advance/retreat based on drag distance
    const threshold = 100;
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setIsDragging(false);
        setDragOffset(0);
      } else if (diff < 0 && currentIndex < clientsData.length - 3) { // Show 3 cards at once
        setCurrentIndex(currentIndex + 1);
        setIsDragging(false);
        setDragOffset(0);
      }
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);

    // Auto-advance/retreat based on drag distance
    const threshold = 100;
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setIsDragging(false);
        setDragOffset(0);
      } else if (diff < 0 && currentIndex < clientsData.length - 3) { // Show 3 cards at once
        setCurrentIndex(currentIndex + 1);
        setIsDragging(false);
        setDragOffset(0);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setDragOffset(0);
    setTimeout(() => setIsPaused(false), 1000);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= clientsData.length - 3) {
          return 0; // Reset to beginning
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, clientsData.length]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Our Clients - Partner Perusahaan IPO"
        description="Lihat daftar klien dan mitra strategis Global Sinergi Kapital. Kami telah membantu berbagai perusahaan dari berbagai sektor untuk sukses go public di Bursa Efek Indonesia."
        keywords="klien IPO, partner IPO, perusahaan go public, success story IPO, portofolio klien, mitra strategis"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-[url('/handshake.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
              <Building2 className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              {t('our-partnership:hero.badge')}
            </div> */}
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-4 sm:mb-6 leading-tight">
              {t('our-partnership:hero.title')}
              <span className="text-accent">
                {t('our-partnership:hero.titleHighlight')}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t('our-partnership:hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* RITZ Partnership Section - Removed */}
      {/* <PartnershipSection /> */}

      {/* Our Clients Section */}
      <OurClientsSection />

      {/* Affiliate by RITZ Consultant Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-2 font-bold text-primary font-display mb-4 leading-tight">
                {t('our-partnership:portfolio.title')}
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('our-partnership:portfolio.description')}
              </p>
            </div>
            
            {/* Interactive Carousel with Navigation */}
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              {/* Carousel Container */}
              <div 
                className="overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div 
                  ref={carouselRef}
                  className="flex space-x-6"
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  style={{
                    width: `${clientsData.length * 320 + (clientsData.length - 1) * 24}px`,
                    userSelect: 'none',
                    transform: `translateX(${-currentIndex * 344 + dragOffset}px)`,
                    transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
                  }}
                >
                  {clientsData.map((client, index) => (
                  <div key={index} className="flex-none w-80 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
                      <img 
                        src={client.logo} 
                        alt={client.title}
                        className="max-w-[80%] max-h-[80%] object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="text-lg font-bold text-gray-600">${client.name}</div>`;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          {client.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                        {client.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {client.description}
                      </p>
                    </div>
                  </div>
                ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: clientsData.length - 2 }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-primary scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                {t('our-partnership:portfolio.footer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <PartnershipBenefitsSection />

      {/* Our Expertise Section */}
      {/* <OurExpertiseSection /> */}

      {/* Partnership Process Section */}
      <PartnershipProcessSection />

      {/* Partnership FAQ Section */}
      <PartnershipFAQSection />

      <Footer />
    </div>
  );
};

export default OurPartnership; 