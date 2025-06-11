
import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Users, Award, Calendar, CheckCircle, ArrowRight, Building, Briefcase, Trophy } from "lucide-react";
import { useState } from "react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const timeline = [
    { year: "2010", title: "Pendirian Perusahaan", description: "Global Sinergi Kapital didirikan dengan visi menjadi konsultan IPO terkemuka di Indonesia" },
    { year: "2013", title: "Klien IPO Pertama", description: "Sukses mendampingi PT XYZ Tbk melakukan IPO dengan nilai Rp 500 miliar" },
    { year: "2015", title: "Ekspansi Layanan", description: "Menambah layanan restrukturisasi keuangan dan manajemen risiko" },
    { year: "2018", title: "Sertifikasi ISO", description: "Meraih sertifikasi ISO 9001:2015 untuk sistem manajemen mutu" },
    { year: "2020", title: "100+ Klien IPO", description: "Mencapai milestone 100 perusahaan klien sukses melakukan IPO" },
    { year: "2024", title: "Era Digital", description: "Meluncurkan platform digital untuk mempercepat proses IPO" }
  ];
  
  const team = [
    {
      name: "Dr. Budi Santoso, CFA",
      position: "Chief Executive Officer",
      experience: "25+ tahun di industri pasar modal",
      credentials: ["PhD Finance - UI", "CFA Charterholder", "Ex-Direktur BEI"]
    },
    {
      name: "Siti Rahayu, MBA",
      position: "Chief Operating Officer",
      experience: "20+ tahun konsultan manajemen",
      credentials: ["MBA - INSEAD", "Certified IPO Specialist", "Ex-Partner Big 4"]
    },
    {
      name: "Agus Wijaya, CA",
      position: "Chief Financial Officer",
      experience: "18+ tahun audit & advisory",
      credentials: ["Chartered Accountant", "Ex-Senior Manager PwC", "IPO Expert"]
    }
  ];

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
        {/* Header - Enhanced */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            <Building className="w-4 h-4 mr-2" />
            Tentang Global Sinergi Kapital
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-display mb-6 leading-tight">
            Pionir Konsultan IPO dengan
            <span className="text-gradient block">Keahlian Mendalam</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Sejak 2010, Global Sinergi Kapital telah menjadi mitra strategis perusahaan-perusahaan Indonesia dalam mengakses pasar modal. Dengan tim profesional berpengalaman dan metodologi teruji, kami memastikan setiap klien mencapai kesuksesan IPO yang berkelanjutan.
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

        {/* Timeline Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary font-display text-center mb-12">Perjalanan Kami</h3>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
                      <Card className="p-6 hover:shadow-brand transition-all duration-300 animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                        <div className="text-accent font-bold text-lg mb-2">{item.year}</div>
                        <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-soft"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary font-display text-center mb-12">Tim Kepemimpinan</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-brand transition-all duration-300 group">
                <div className="w-24 h-24 bg-gradient-brand rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary font-display mb-1">{member.name}</h4>
                <p className="text-secondary font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                <div className="space-y-1">
                  {member.credentials.map((cred, i) => (
                    <div key={i} className="flex items-center justify-center text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 mr-1 text-success" />
                      {cred}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-subtle border-2 border-primary/10">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary font-display mb-4">Visi Kami</h3>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi konsultan IPO terkemuka di Asia Tenggara yang membantu perusahaan mengakses pasar modal dengan integritas, inovasi, dan keunggulan layanan.
            </p>
          </Card>
          <Card className="p-8 bg-gradient-subtle border-2 border-secondary/10">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary font-display mb-4">Misi Kami</h3>
            <p className="text-muted-foreground leading-relaxed">
              Memberikan solusi konsultasi IPO yang komprehensif dan inovatif, membangun kepercayaan melalui transparansi, dan menciptakan nilai berkelanjutan bagi klien.
            </p>
          </Card>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-gradient-brand rounded-3xl p-8 lg:p-12 text-white shadow-brand">
          <h3 className="text-2xl font-bold font-display text-center mb-8">Penghargaan & Pengakuan</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-3">
              <Trophy className="w-12 h-12 mx-auto mb-2" />
              <div className="font-bold">Best IPO Consultant</div>
              <p className="text-sm text-white/80">Indonesia Capital Market Awards 2023</p>
            </div>
            <div className="space-y-3">
              <Award className="w-12 h-12 mx-auto mb-2" />
              <div className="font-bold">Excellence in Advisory</div>
              <p className="text-sm text-white/80">Asia Pacific Finance Awards 2022</p>
            </div>
            <div className="space-y-3">
              <CheckCircle className="w-12 h-12 mx-auto mb-2" />
              <div className="font-bold">ISO 9001:2015</div>
              <p className="text-sm text-white/80">Quality Management System</p>
            </div>
            <div className="space-y-3">
              <Building className="w-12 h-12 mx-auto mb-2" />
              <div className="font-bold">Top 10 Consultant</div>
              <p className="text-sm text-white/80">BEI Partner Recognition 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
