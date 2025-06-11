
import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Users, Award } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Integritas",
      description: "Komitmen pada transparansi dan etika bisnis tertinggi dalam setiap proses IPO."
    },
    {
      icon: Target,
      title: "Profesionalisme",
      description: "Tim ahli berpengalaman dengan track record sukses di industri pasar modal."
    },
    {
      icon: Users,
      title: "Kolaborasi",
      description: "Bekerja sama erat dengan klien sebagai mitra strategis jangka panjang."
    },
    {
      icon: Award,
      title: "Keunggulan",
      description: "Layanan berkualitas tinggi dengan standar internasional dan inovasi terdepan."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header - More Compact */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            Tentang Global Sinergi Kapital
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-poppins mb-6 leading-tight">
            Transformasi Menuju
            <span className="text-gradient block">Perusahaan Publik</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Konsultan bisnis berfokus transformasi perusahaan menjadi entitas publik yang siap berkompetisi di pasar modal. Dengan pengalaman 15+ tahun, kami telah membantu 50+ perusahaan mencapai impian go public.
          </p>
        </div>

        {/* Values Grid - More Compact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="group p-6 bg-background border-2 border-border/60 hover:border-primary/20 hover:shadow-brand transition-all duration-300">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary font-poppins mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quote Section - Redesigned */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 bg-gradient-subtle border-2 border-border/60 shadow-soft">
            <div className="text-center">
              <blockquote className="text-lg lg:text-xl italic text-foreground leading-relaxed mb-6">
                "Kepercayaan lebih dari 50 perusahaan Indonesia adalah bukti nyata dedikasi kami dalam menghadirkan solusi IPO yang komprehensif, inovatif, dan hasil-oriented."
              </blockquote>
              <div className="text-primary font-semibold">
                — Tim Global Sinergi Kapital
              </div>
            </div>
          </Card>
        </div>

        {/* Stats Section - More Professional */}
        <div className="mt-16 bg-gradient-brand rounded-3xl p-8 lg:p-12 text-white shadow-brand">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold font-poppins">15+</div>
              <p className="text-white/90 font-medium">Tahun Pengalaman</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold font-poppins">50+</div>
              <p className="text-white/90 font-medium">Perusahaan Sukses IPO</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold font-poppins">Rp 25T+</div>
              <p className="text-white/90 font-medium">Total Kapitalisasi Pasar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
