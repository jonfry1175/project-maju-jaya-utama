
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
      details: ["Jl. Sudirman Kav. 25", "Jakarta Pusat 10210", "Indonesia"]
    },
    {
      icon: Phone,
      title: "Telepon",
      details: ["+62 21 5150 3000", "+62 812 3456 7890"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@globalsinergikapital.com", "ipo@globalsinergikapital.com"]
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 09:00 - 18:00", "Sabtu: 09:00 - 15:00"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Hubungi Kami
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-poppins mb-6">
            Jadwalkan Pertemuan Gratis
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Siap untuk memulai perjalanan IPO Anda? Tim ahli kami siap memberikan konsultasi komprehensif tanpa biaya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-white border-2">
            <h3 className="text-2xl font-bold text-primary font-poppins mb-6">
              Formulir Konsultasi
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nama Lengkap *
                  </label>
                  <Input placeholder="Masukkan nama lengkap Anda" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Jabatan
                  </label>
                  <Input placeholder="CEO, CFO, Direktur, dll." />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input type="email" placeholder="email@perusahaan.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nomor Telepon *
                  </label>
                  <Input placeholder="+62 812 3456 7890" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nama Perusahaan *
                </label>
                <Input placeholder="PT. Nama Perusahaan Anda" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Industri/Sektor Bisnis
                </label>
                <Input placeholder="Teknologi, Manufaktur, Retail, dll." />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Pesan/Kebutuhan Khusus
                </label>
                <Textarea 
                  placeholder="Ceritakan tentang rencana IPO Anda dan bagaimana kami dapat membantu..."
                  rows={4}
                />
              </div>

              <Button size="lg" className="w-full bg-gradient-brand hover:opacity-90 text-lg py-6">
                Kirim Permintaan Konsultasi
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Tim kami akan menghubungi Anda dalam 24 jam
              </p>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 bg-white border-2 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="p-6 bg-gradient-brand text-white">
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
              <p className="text-sm text-white/80 mt-4">
                Dapatkan insight terbaru tentang pasar modal dan tips IPO dari para ahli kami.
              </p>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 bg-accent/10 border-2 border-accent/20">
              <h4 className="font-semibold text-accent mb-2">
                🚀 Butuh Bantuan Segera?
              </h4>
              <p className="text-sm text-foreground mb-4">
                Untuk situasi mendesak atau pertanyaan urgent terkait IPO, hubungi hotline kami:
              </p>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
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
