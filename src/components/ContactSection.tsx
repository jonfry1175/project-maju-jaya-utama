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
import { id, enUS } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t, i18n } = useTranslation('contact');
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  
  // Get the appropriate date-fns locale based on current language
  const dateLocale = i18n.language === 'id' ? id : enUS;

  const contactInfo = [
    {
      icon: Building2,
      title: t('info.office.title'),
      details: t('info.office.address', { returnObjects: true }) as string[],
      action: { label: t('info.office.action'), link: "https://maps.google.com" }
    },
    {
      icon: Phone,
      title: t('info.phone.title'),
      details: t('info.phone.numbers', { returnObjects: true }) as string[],
      action: { label: t('info.phone.action'), link: "tel:+622112345678" }
    },
    {
      icon: MessageSquare,
      title: t('info.whatsapp.title'),
      details: [t('info.whatsapp.number')],
      action: { label: t('info.whatsapp.action'), link: "https://wa.me/6281290001234" }
    },
    {
      icon: Clock,
      title: t('info.hours.title'),
      details: t('info.hours.schedule', { returnObjects: true }) as string[],
      action: { label: t('info.hours.action'), link: "#booking" }
    }
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30"
  ];

  const industries = i18n.language === 'id' ? [
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
  ] : [
    "Technology & Digital",
    "Manufacturing & Industry",
    "Trade & Retail",
    "Property & Real Estate",
    "Banking & Finance",
    "Energy & Mining",
    "Healthcare & Pharmaceutical",
    "Logistics & Transportation",
    "Agribusiness & Plantation",
    "Others"
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            <Users className="w-4 h-4 mr-2" />
            {t('section.badge')}
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-display mb-6 leading-tight">
            {t('section.title')}
            
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('section.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-display mb-6">{t('contact.title')}</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
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
                        className="inline-flex items-center text-sm text-primary hover:text-primary/80 mt-3 font-semibold"
                      >
                        {info.action.label}
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            {/* Office Location */}
            <Card className="overflow-hidden bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                  alt="Jakarta Business District"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="font-semibold mb-2 text-foreground flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    {i18n.language === 'id' ? 'Lokasi Strategis' : 'Strategic Location'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {i18n.language === 'id' ? 'Jantung bisnis Jakarta dengan akses mudah ke institusi keuangan.' : 'Heart of Jakarta business district with easy access to financial institutions.'}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Middle & Right Column - Enhanced Contact Form */}
          <Card className="lg:col-span-2 p-8 lg:p-10 bg-background border border-border/50 shadow-xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary font-display mb-3">
                {t('form.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('form.description')}
              </p>
            </div>
            
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {t('form.fields.name.label')} *
                  </label>
                  <Input placeholder={t('form.fields.name.placeholder')} className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {i18n.language === 'id' ? 'Jabatan' : 'Position'} *
                  </label>
                  <Input placeholder={i18n.language === 'id' ? 'CEO / CFO / Direktur' : 'CEO / CFO / Director'} className="h-12" />
                </div>
              </div>

              {/* Company Information */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {t('form.fields.company.label')} *
                  </label>
                  <Input placeholder={t('form.fields.company.placeholder')} className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {i18n.language === 'id' ? 'Industri/Sektor' : 'Industry/Sector'} *
                  </label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder={i18n.language === 'id' ? 'Pilih sektor industri' : 'Select industry sector'} />
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
                    {t('form.fields.email.label')} *
                  </label>
                  <Input type="email" placeholder={t('form.fields.email.placeholder')} className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {t('form.fields.phone.label')} *
                  </label>
                  <Input placeholder={t('form.fields.phone.placeholder')} className="h-12" />
                </div>
              </div>

              {/* Revenue Information */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {t('form.fields.revenue.label')}
                  </label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder={t('form.fields.revenue.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below50">{t('form.fields.revenue.options.below50')}</SelectItem>
                      <SelectItem value="50to100">{t('form.fields.revenue.options.50to100')}</SelectItem>
                      <SelectItem value="100to500">{t('form.fields.revenue.options.100to500')}</SelectItem>
                      <SelectItem value="above500">{t('form.fields.revenue.options.above500')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {i18n.language === 'id' ? 'Target IPO' : 'IPO Target'}
                  </label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder={i18n.language === 'id' ? 'Pilih timeline' : 'Select timeline'} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6months">{i18n.language === 'id' ? '6 Bulan' : '6 Months'}</SelectItem>
                      <SelectItem value="1year">{i18n.language === 'id' ? '1 Tahun' : '1 Year'}</SelectItem>
                      <SelectItem value="2years">{i18n.language === 'id' ? '2 Tahun' : '2 Years'}</SelectItem>
                      <SelectItem value="exploring">{i18n.language === 'id' ? 'Masih Eksplorasi' : 'Still Exploring'}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Meeting Schedule */}
              <div className="space-y-5 p-6 bg-primary/5 rounded-xl border border-primary/20" id="booking">
                <h4 className="font-semibold text-primary flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  {i18n.language === 'id' ? 'Jadwalkan Meeting (Opsional)' : 'Schedule Meeting (Optional)'}
                </h4>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('form.fields.date.label')}
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
                          {date ? format(date, "PPP", { locale: dateLocale }) : t('form.fields.date.placeholder')}
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
                      {t('form.fields.time.label')}
                    </label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder={t('form.fields.time.placeholder')} />
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
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{i18n.language === 'id' ? 'Meeting dapat dilakukan secara offline atau online (Zoom/Google Meet)' : 'Meeting can be conducted offline or online (Zoom/Google Meet)'}</span>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {t('form.fields.message.label')}
                </label>
                <Textarea 
                  placeholder={t('form.fields.message.placeholder')}
                  rows={5}
                  className="resize-none"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-muted-foreground">
                  {t('form.consent')}
                </label>
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-xl text-base font-semibold py-6 h-auto group">
                  {t('form.submit')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-primary" />
                    {i18n.language === 'id' ? 'Respon < 24 Jam' : 'Response < 24 Hours'}
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1 text-primary" />
                    {i18n.language === 'id' ? 'Data Terjamin Aman' : 'Data Secured'}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-1 text-primary" />
                    {t('cta.freeConsultation', { ns: 'header' })}
                  </div>
                </div>
              </div>
            </form>
          </Card>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-white shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-display mb-3">{t('quickContact.title')}</h3>
              <p className="text-white/90">{i18n.language === 'id' ? 'Pilih channel komunikasi yang paling sesuai untuk Anda' : 'Choose the communication channel that suits you best'}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a href="tel:+622112345678" className="group">
                <div className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">{t('quickContact.call')}</h4>
                  <p className="text-sm text-white/80">+62 21 1234-5678</p>
                  <p className="text-xs text-white/60 mt-2">{i18n.language === 'id' ? 'Senin-Jumat, 09:00-18:00' : 'Monday-Friday, 09:00-18:00'}</p>
                </div>
              </a>
              
              <a href="https://wa.me/6281290001234" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-center">
                  <MessageSquare className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">{t('quickContact.whatsapp')}</h4>
                  <p className="text-sm text-white/80">+62 812-9000-1234</p>
                  <p className="text-xs text-white/60 mt-2">{i18n.language === 'id' ? 'Respon Cepat 24/7' : 'Quick Response 24/7'}</p>
                </div>
              </a>
              
              <a href="mailto:info@globalsinergikapital.com" className="group">
                <div className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-center">
                  <Mail className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">{i18n.language === 'id' ? 'Email Profesional' : 'Professional Email'}</h4>
                  <p className="text-sm text-white/80">info@globalsinergikapital.com</p>
                  <p className="text-xs text-white/60 mt-2">{i18n.language === 'id' ? 'Untuk dokumen formal' : 'For formal documents'}</p>
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