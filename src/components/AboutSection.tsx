import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Users, Award, Calendar, CheckCircle, ArrowRight, Building, Briefcase, Trophy, Rocket, Brain, Heart } from "lucide-react";
import { useState } from "react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const roadmap = [
    { year: "2025", title: "Fondasi Kuat", description: "Membangun tim profesional dan infrastruktur teknologi modern untuk layanan konsultasi IPO" },
    { year: "2026", title: "Ekspansi Layanan", description: "Meluncurkan platform digital dan memperluas jangkauan ke seluruh Indonesia" },
    { year: "2027", title: "Mitra Regional", description: "Menjalin kemitraan strategis dengan bursa efek dan regulator di Asia Tenggara" },
    { year: "2028", title: "Pusat Edukasi", description: "Mendirikan akademi IPO untuk meningkatkan literasi pasar modal Indonesia" },
    { year: "2029", title: "Inovasi Digital", description: "Mengintegrasikan AI dan blockchain untuk mempercepat proses IPO" },
    { year: "2030", title: "Pemimpin Pasar", description: "Menjadi konsultan IPO terkemuka dengan 100+ klien sukses go public" }
  ];
  
  const team = [
    {
      name: "Dr. Budi Santoso, CFA",
      position: "Direktur Utama",
      experience: "Praktisi pasar modal berpengalaman",
      credentials: ["Doktor Keuangan - UI", "CFA Charterholder", "Mantan Direktur BEI"]
    },
    {
      name: "Siti Rahayu, MBA",
      position: "Direktur Operasional",
      experience: "Ahli strategi bisnis dan manajemen",
      credentials: ["MBA - INSEAD", "Spesialis IPO Tersertifikasi", "Mantan Mitra Big 4"]
    },
    {
      name: "Agus Wijaya, CA",
      position: "Direktur Keuangan",
      experience: "Profesional audit dan advisory",
      credentials: ["Chartered Accountant", "Mantan Senior Manager PwC", "Ahli IPO"]
    }
  ];

  const values = [
    {
      title: "Inovasi",
      description: "Pendekatan segar dan solusi kreatif untuk setiap tantangan IPO yang unik.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" // Creative team brainstorming
    },
    {
      title: "Integritas",
      description: "Komitmen pada transparansi dan etika bisnis tertinggi dalam setiap proses.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" // Professional handshake
    },
    {
      title: "Kolaborasi",
      description: "Bekerja sama erat dengan klien sebagai mitra strategis jangka panjang.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" // Team collaboration
    },
    {
      title: "Keunggulan",
      description: "Layanan berkualitas tinggi dengan standar internasional terkini.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" // Business analytics
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Tim Profesional Berpengalaman",
      description: "Didukung oleh para ahli dengan pengalaman ekstensif di pasar modal Indonesia dan internasional."
    },
    {
      icon: Target,
      title: "Pendekatan Inovatif",
      description: "Menggunakan metodologi modern dan teknologi terkini untuk proses IPO yang lebih efisien."
    },
    {
      icon: Building,
      title: "Jaringan Luas",
      description: "Koneksi kuat dengan regulator, underwriter, dan pelaku pasar modal untuk kelancaran proses."
    },
    {
      icon: Trophy,
      title: "Komitmen Kesuksesan",
      description: "Dedikasi penuh untuk memastikan setiap klien mencapai tujuan go public dengan optimal."
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
            Konsultan IPO Baru dengan
            <span className="text-gradient block">Perspektif Segar</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Global Sinergi Kapital hadir sebagai konsultan IPO yang baru berdiri dengan tim profesional berpengalaman. Kami menghadirkan pendekatan inovatif dan solusi modern untuk membantu perusahaan Indonesia mengakses pasar modal dengan lebih efisien dan efektif.
          </p>
        </div>

        {/* Values Grid - Clean Image Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="group overflow-hidden bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={value.image} 
                  alt={value.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Roadmap Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary font-display text-center mb-12">Roadmap Kami</h3>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {roadmap.map((item, index) => (
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

        {/* Why Choose Us */}
        <div className="bg-gradient-brand rounded-3xl p-8 lg:p-12 text-white shadow-brand">
          <h3 className="text-2xl font-bold font-display text-center mb-8">Mengapa Memilih Kami</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <item.icon className="w-12 h-12 mx-auto mb-2" />
                <div className="font-bold">{item.title}</div>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;