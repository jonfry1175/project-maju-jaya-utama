import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, Building2, ChevronLeft, ChevronRight, TrendingUp, Award, ArrowRight } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      company: "PT Teknologi Nusantara Tbk",
      person: "Budi Hartono",
      position: "Chief Executive Officer",
      sector: "Teknologi",
      ipo_year: "2023",
      ipo_value: "Rp 850 Miliar",
      content: "Global Sinergi Kapital tidak hanya membantu kami dalam proses IPO, tetapi juga menjadi mitra strategis dalam transformasi perusahaan. Pendekatan mereka yang komprehensif dan pemahaman mendalam tentang pasar modal Indonesia sangat membantu kesuksesan IPO kami.",
      rating: 5,
      highlight: "Oversubscribed 3.2x"
    },
    {
      company: "PT Ritel Indonesia Sejahtera Tbk",
      person: "Sarah Wijaya",
      position: "Chief Financial Officer",
      sector: "Perdagangan & Retail",
      ipo_year: "2023",
      ipo_value: "Rp 1.2 Triliun",
      content: "Tim GSK sangat profesional dan responsif. Mereka memandu kami melalui setiap tahap IPO dengan detail dan memastikan kami siap menghadapi semua tantangan. Hasil IPO melebihi ekspektasi kami berkat strategi yang mereka susun.",
      rating: 5,
      highlight: "Harga saham naik 35% di hari pertama"
    },
    {
      company: "PT Energi Hijau Mandiri Tbk",
      person: "Ahmad Fauzi",
      position: "Direktur Utama",
      sector: "Energi Terbarukan",
      ipo_year: "2022",
      ipo_value: "Rp 2.5 Triliun",
      content: "Keahlian GSK dalam menstruktur perusahaan dan menyiapkan dokumentasi IPO sangat luar biasa. Mereka memahami kompleksitas industri kami dan memberikan solusi yang tepat. IPO kami menjadi salah satu yang tersukses di sektor energi.",
      rating: 5,
      highlight: "IPO terbesar di sektor energi 2022"
    },
    {
      company: "PT Logistik Digital Indonesia Tbk",
      person: "Maya Kusuma",
      position: "President Director",
      sector: "Logistik & Transportasi",
      ipo_year: "2024",
      ipo_value: "Rp 650 Miliar",
      content: "Dari awal hingga pencatatan di BEI, GSK selalu ada untuk kami. Mereka tidak hanya konsultan, tetapi partner yang benar-benar peduli dengan kesuksesan klien. Proses IPO yang kompleks menjadi lebih mudah dengan bimbingan mereka.",
      rating: 5,
      highlight: "Selesai 2 bulan lebih cepat"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-success/20">
            <Star className="w-4 h-4 mr-2" />
            Testimoni Klien
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-display mb-6 leading-tight">
            Cerita Sukses dari
            <span className="text-gradient block">127+ Perusahaan IPO</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dengar langsung dari para pemimpin perusahaan yang telah berhasil melakukan IPO bersama Global Sinergi Kapital.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-8 lg:p-12 bg-gradient-subtle border-2 border-border/60 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/10" />
            
            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary font-display">
                        {testimonials[currentIndex].company}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].sector} • IPO {testimonials[currentIndex].ipo_year}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author & Stats */}
              <div className="flex items-end justify-between">
                <div>
                  <div className="font-semibold text-primary">
                    {testimonials[currentIndex].person}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].position}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary font-mono">
                    {testimonials[currentIndex].ipo_value}
                  </div>
                  <div className="text-sm text-success font-semibold">
                    {testimonials[currentIndex].highlight}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevTestimonial}
                className="pointer-events-auto bg-background/80 backdrop-blur-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextTestimonial}
                className="pointer-events-auto bg-background/80 backdrop-blur-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { value: "127+", label: "Perusahaan IPO", icon: Building2 },
            { value: "4.9/5", label: "Rating Kepuasan", icon: Star },
            { value: "Rp 2.4T", label: "Total Dana Terhimpun", icon: TrendingUp },
            { value: "98.7%", label: "Tingkat Keberhasilan", icon: Award }
          ].map((metric, index) => (
            <Card key={index} className="p-6 text-center bg-background/60 border-2 border-border/60 hover:border-primary/20 transition-all group">
              <metric.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-primary font-mono">{metric.value}</div>
              <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Bergabunglah dengan perusahaan-perusahaan sukses yang telah mempercayai kami
          </p>
          <Button size="lg" className="btn-gradient-brand shadow-brand">
            Mulai Perjalanan IPO Anda
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;