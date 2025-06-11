import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  MapPin, Phone, Mail, Clock, Linkedin, MessageSquare, 
  CalendarIcon, Building2, Globe, CheckCircle, ArrowRight,
  Users, Briefcase, Shield
} from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");

  const contactInfo = [
    {
      icon: Building2,
      title: "Kantor Pusat",
      details: ["Menara Sudirman Lt. 25", "Jl. Jend. Sudirman Kav. 25", "Jakarta Pusat 10210"],
      action: { label: "Lihat di Maps", link: "https://maps.google.com" }
    },
    {
      icon: Phone,
      title: "Hubungi Kami",
      details: ["+62 21 1234-5678", "+62 812-9000-1234"],
      action: { label: "Telepon Sekarang", link: "tel:+622112345678" }
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Business",
      details: ["+62 812-9000-1234"],
      action: { label: "Chat WhatsApp", link: "https://wa.me/6281290001234" }
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 09:00 - 18:00", "Sabtu: 09:00 - 13:00"],
      action: { label: "Jadwalkan Meeting", link: "#booking" }
    }
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30"
  ];

  const industries = [
    "Teknologi & Digital",
    "Manufaktur & Industri",
    "Perdagangan & Retail",
    "Properti & Real Estate",
    "Perbankan & Keuangan",
    "Energi & Pertambangan",
    "Kesehatan & Farmasi",
    "Logistik & Transportasi",
    "Agribisnis & Perkebunan",
    "Lainnya"
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            <Users className="w-4 h-4 mr-2" />
            Mari Berdiskusi
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-display mb-6 leading-tight">
            Konsultasi Gratis dengan
            <span className="text-gradient block">Tim Ahli IPO</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dapatkan analisis mendalam tentang kesiapan IPO perusahaan Anda. Tim profesional kami siap membantu mewujudkan ambisi go public Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-display mb-6">Informasi Kontak</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 bg-background/60 blur-backdrop border-2 border-border/60 hover:border-primary/20 hover:shadow-soft transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                    {info.action && (
                      <a 
                        href={info.action.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-accent hover:text-accent/80 mt-3 font-semibold"
                      >
                        {info.action.label}
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="p-6 bg-gradient-brand text-white shadow-brand">
              <h4 className="font-semibold mb-3 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Lokasi Strategis
              </h4>
              <p className="text-sm text-white/90 mb-4">
                Berlokasi di jantung bisnis Jakarta dengan akses mudah ke berbagai institusi keuangan dan regulator.
              </p>
              <div className="bg-white/20 rounded-lg h-32 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white/60" />
              </div>
            </Card>
          </div>

          {/* Middle & Right Column - Enhanced Contact Form */}
          <Card className="lg:col-span-2 p-8 lg:p-10 bg-background/80 blur-backdrop border-2 border-border/60 shadow-brand">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary font-display mb-3">
                Jadwalkan Konsultasi IPO
              </h3>
              <p className="text-muted-foreground">
                Isi formulir berikut untuk mendapatkan slot konsultasi eksklusif dengan tim ahli kami.
              </p>
            </div>
            
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nama Lengkap *
                  </label>
                  <Input placeholder="John Doe" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Jabatan *
                  </label>
                  <Input placeholder="CEO / CFO / Direktur" className="h-12" />
                </div>
              </div>

              {/* Company Information */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nama Perusahaan *
                  </label>
                  <Input placeholder="PT. Nama Perusahaan" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Industri/Sektor *
                  </label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Pilih sektor industri" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry.toLowerCase()}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Perusahaan *
                  </label>
                  <Input type="email" placeholder="email@perusahaan.com" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nomor Telepon/WhatsApp *
                  </label>
                  <Input placeholder="+62 812-3456-7890" className="h-12" />
                </div>
              </div>

              {/* Revenue Information */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Revenue Tahunan (Rp)
                  </label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Pilih range revenue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<50m">Dibawah 50 Miliar</SelectItem>
                      <SelectItem value="50-100m">50 - 100 Miliar</SelectItem>
                      <SelectItem value="100-500m">100 - 500 Miliar</SelectItem>
                      <SelectItem value="500m-1t">500 Miliar - 1 Triliun</SelectItem>
                      <SelectItem value=">1t">Diatas 1 Triliun</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Target IPO
                  </label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Pilih timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6months">6 Bulan</SelectItem>
                      <SelectItem value="1year">1 Tahun</SelectItem>
                      <SelectItem value="2years">2 Tahun</SelectItem>
                      <SelectItem value="exploring">Masih Eksplorasi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Meeting Schedule */}
              <div className="space-y-5 p-6 bg-accent/5 rounded-xl border border-accent/20" id="booking">
                <h4 className="font-semibold text-primary flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Jadwalkan Meeting (Opsional)
                </h4>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Pilih Tanggal
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full h-12 justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP", { locale: id }) : "Pilih tanggal"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Pilih Waktu
                    </label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Pilih jam meeting" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time} WIB
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Meeting dapat dilakukan secara offline atau online (Zoom/Google Meet)</span>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Informasi Tambahan
                </label>
                <Textarea 
                  placeholder="Ceritakan lebih detail tentang perusahaan Anda, rencana IPO, dan pertanyaan spesifik yang ingin didiskusikan..."
                  rows={5}
                  className="resize-none"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-muted-foreground">
                  Saya setuju untuk dihubungi oleh tim Global Sinergi Kapital dan menerima informasi terkait layanan IPO.
                </label>
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <Button size="lg" className="w-full btn-gradient-brand shadow-brand text-base font-semibold py-6 h-auto group">
                  Kirim Permintaan Konsultasi
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-success" />
                    Respon &lt; 24 Jam
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1 text-success" />
                    Data Terjamin Aman
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-1 text-success" />
                    Konsultasi Gratis
                  </div>
                </div>
              </div>
            </form>
          </Card>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-brand text-white shadow-brand">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-display mb-3">Butuh Respon Cepat?</h3>
              <p className="text-white/90">Pilih channel komunikasi yang paling sesuai untuk Anda</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a href="tel:+622112345678" className="group">
                <div className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">Telepon Langsung</h4>
                  <p className="text-sm text-white/80">+62 21 1234-5678</p>
                  <p className="text-xs text-white/60 mt-2">Senin-Jumat, 09:00-18:00</p>
                </div>
              </a>
              
              <a href="https://wa.me/6281290001234" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-center">
                  <MessageSquare className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">WhatsApp Business</h4>
                  <p className="text-sm text-white/80">+62 812-9000-1234</p>
                  <p className="text-xs text-white/60 mt-2">Respon Cepat 24/7</p>
                </div>
              </a>
              
              <a href="mailto:info@globalsinergikapital.com" className="group">
                <div className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-center">
                  <Mail className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">Email Profesional</h4>
                  <p className="text-sm text-white/80">info@globalsinergikapital.com</p>
                  <p className="text-xs text-white/60 mt-2">Untuk dokumen formal</p>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;