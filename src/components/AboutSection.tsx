
import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Users, Award } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Integritas",
      description: "Berkomitmen pada transparansi dan etika bisnis tertinggi dalam setiap langkah proses IPO."
    },
    {
      icon: Target,
      title: "Profesionalisme",
      description: "Tim ahli berpengalaman dengan track record sukses dalam industri pasar modal Indonesia."
    },
    {
      icon: Users,
      title: "Kolaborasi",
      description: "Bekerja sama erat dengan klien sebagai mitra strategis untuk mencapai tujuan bersama."
    },
    {
      icon: Award,
      title: "Keunggulan",
      description: "Memberikan layanan berkualitas tinggi dengan standar internasional dan inovasi terdepan."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Tentang Global Sinergi Kapital
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-poppins mb-6">
            Transformasi Menuju Perusahaan Publik
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Kami adalah konsultan bisnis yang berfokus pada transformasi perusahaan menjadi entitas publik yang siap berkompetisi di pasar modal. Dengan pengalaman lebih dari 15 tahun, kami telah membantu puluhan perusahaan mencapai impian mereka untuk go public.
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/10">
            <blockquote className="text-lg italic text-foreground">
              "Kepercayaan lebih dari 50 perusahaan Indonesia adalah bukti nyata dedikasi kami dalam menghadirkan solusi IPO yang komprehensif, inovatif, dan hasil-oriented."
            </blockquote>
            <div className="mt-4 text-primary font-semibold">
              — Tim Global Sinergi Kapital
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary font-poppins">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-brand rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-poppins mb-2">15+</div>
              <p className="text-white/90">Tahun Pengalaman</p>
            </div>
            <div>
              <div className="text-4xl font-bold font-poppins mb-2">50+</div>
              <p className="text-white/90">Perusahaan Sukses IPO</p>
            </div>
            <div>
              <div className="text-4xl font-bold font-poppins mb-2">Rp 25T+</div>
              <p className="text-white/90">Total Kapitalisasi Pasar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
