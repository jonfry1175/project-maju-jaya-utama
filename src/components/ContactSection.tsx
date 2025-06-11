
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      details: ["Jl. Sudirman Kav. 25", "Jakarta Pusat 10210"]
    },
    {
      icon: Phone,
      title: "Telepon",
      details: ["+62 21 5150 3000", "+62 812 3456 7890"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@globalsinergikapital.com"]
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 09:00 - 18:00"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            Hubungi Kami
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-poppins mb-6 leading-tight">
            Jadwalkan Konsultasi
            <span className="text-gradient block">Gratis</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Siap untuk memulai perjalanan IPO Anda? Tim ahli kami siap memberikan konsultasi komprehensif tanpa biaya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form - Enhanced */}
          <Card className="p-8 bg-background/80 blur-backdrop border-2 border-border/60 shadow-brand">
            <h3 className="text-2xl font-bold text-primary font-poppins mb-6">
              Formulir Konsultasi
            </h3>
            
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nama Lengkap *
                  </label>
                  <Input placeholder="Masukkan nama lengkap" className="h-11" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Jabatan
                  </label>
                  <Input placeholder="CEO, CFO, Direktur" className="h-11" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <Input type="email" placeholder="email@perusahaan.com" className="h-11" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nomor Telepon *
                  </label>
                  <Input placeholder="+62 812 3456 7890" className="h-11" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nama Perusahaan *
                </label>
                <Input placeholder="PT. Nama Perusahaan Anda" className="h-11" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Industri/Sektor Bisnis
                </label>
                <Input placeholder="Teknologi, Manufaktur, Retail, dll." className="h-11" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Kebutuhan Khusus
                </label>
                <Textarea 
                  placeholder="Ceritakan tentang rencana IPO Anda dan bagaimana kami dapat membantu..."
                  rows={4}
                  className="resize-none"
                />
              </div>

              <Button size="lg" className="w-full bg-gradient-brand hover:opacity-90 shadow-brand text-base font-semibold py-6 h-auto">
                Kirim Permintaan Konsultasi
              </Button>

              <p className="text-sm text-muted-foreground text-center font-medium">
                * Tim kami akan menghubungi Anda dalam 24 jam
              </p>
            </form>
          </Card>

          {/* Contact Information - Refined */}
          <div className="space-y-6">
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-5 bg-background/60 blur-backdrop border-2 border-border/60 hover:border-primary/20 hover:shadow-soft transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-gradient-brand rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1 text-sm">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="p-6 bg-gradient-brand text-white shadow-brand">
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-3 mb-4">
                <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                Dapatkan insight terbaru tentang pasar modal dan tips IPO dari para ahli kami.
              </p>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 bg-accent/10 border-2 border-accent/20">
              <h4 className="font-semibold text-accent mb-3 flex items-center">
                <span className="mr-2">🚀</span>
                Butuh Bantuan Segera?
              </h4>
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                Untuk situasi mendesak atau pertanyaan urgent terkait IPO, hubungi hotline kami:
              </p>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full">
                Hotline: +62 21 5150 3000
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
