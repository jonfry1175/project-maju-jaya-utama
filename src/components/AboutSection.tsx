import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Users, Award, Calendar, CheckCircle, ArrowRight, Building, Briefcase, Trophy, Rocket, Brain, Heart } from "lucide-react";
import { useState } from "react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const roadmap = [
    { 
      year: "2025", 
      title: "Fondasi Kuat", 
      description: "Membangun tim profesional dan infrastruktur teknologi modern untuk layanan konsultasi IPO",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" // Modern office building
    },
    { 
      year: "2026", 
      title: "Ekspansi Layanan", 
      description: "Meluncurkan platform digital dan memperluas jangkauan ke seluruh Indonesia",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" // Digital dashboard
    },
    { 
      year: "2027", 
      title: "Mitra Regional", 
      description: "Menjalin kemitraan strategis dengan bursa efek dan regulator di Asia Tenggara",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop" // Business handshake
    },
    { 
      year: "2028", 
      title: "Pusat Edukasi", 
      description: "Mendirikan akademi IPO untuk meningkatkan literasi pasar modal Indonesia",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop" // Education/training
    },
    { 
      year: "2029", 
      title: "Inovasi Digital", 
      description: "Mengintegrasikan AI dan blockchain untuk mempercepat proses IPO",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop" // AI/Technology
    },
    { 
      year: "2030", 
      title: "Pemimpin Pasar", 
      description: "Menjadi konsultan IPO terkemuka dengan 100+ klien sukses go public",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" // Success/skyline
    }
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
    <section id="about" className="py-32 bg-background">
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

        {/* Roadmap Section - Enhanced with Images */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary font-display text-center mb-12">Roadmap Kami</h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmap.map((item, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                  {/* Image Section */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
                      <span className="text-white font-bold text-lg">{item.year}</span>
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 space-y-3">
                    <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    
                    {/* Progress Indicator */}
                    <div className="pt-3">
                      <div className="h-2 bg-border/30 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${((index + 1) / roadmap.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary font-display text-center mb-12">Tim Kepemimpinan</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 group border border-border/50 hover:border-primary/30">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary font-display mb-1">{member.name}</h4>
                <p className="text-primary/70 font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                <div className="space-y-1">
                  {member.credentials.map((cred, i) => (
                    <div key={i} className="flex items-center justify-center text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 mr-1 text-primary" />
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
          <Card className="p-8 bg-primary/5 border border-primary/20">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary font-display mb-4">Visi Kami</h3>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi konsultan IPO terkemuka di Asia Tenggara yang membantu perusahaan mengakses pasar modal dengan integritas, inovasi, dan keunggulan layanan.
            </p>
          </Card>
          <Card className="p-8 bg-primary/5 border border-primary/20">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary font-display mb-4">Misi Kami</h3>
            <p className="text-muted-foreground leading-relaxed">
              Memberikan solusi konsultasi IPO yang komprehensif dan inovatif, membangun kepercayaan melalui transparansi, dan menciptakan nilai berkelanjutan bagi klien.
            </p>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 lg:p-12 text-white shadow-xl">
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