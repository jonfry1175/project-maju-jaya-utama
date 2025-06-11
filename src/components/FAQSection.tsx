import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, ArrowRight, Shield, FileText } from "lucide-react";

const FAQSection = () => {
  const faqCategories = [
    {
      category: "Persyaratan IPO",
      questions: [
        {
          q: "Apa saja persyaratan utama untuk melakukan IPO di Indonesia?",
          a: "Persyaratan utama IPO di Indonesia meliputi: (1) Berbentuk Perseroan Terbatas (PT), (2) Modal disetor minimal Rp 3 miliar, (3) Memiliki minimal 300 pemegang saham setelah IPO, (4) Laporan keuangan audited 3 tahun terakhir dengan opini Wajar Tanpa Pengecualian (WTP) minimal 2 tahun terakhir, (5) Memiliki profit minimal 1 tahun terakhir, (6) Tidak dalam sengketa hukum material, dan (7) Memenuhi ketentuan corporate governance yang ditetapkan OJK."
        },
        {
          q: "Berapa lama waktu yang dibutuhkan untuk proses IPO?",
          a: "Proses IPO di Indonesia umumnya memakan waktu 6-12 bulan, tergantung pada kesiapan perusahaan. Timeline meliputi: (1) Persiapan internal dan restrukturisasi: 2-4 bulan, (2) Due diligence dan penyusunan prospektus: 2-3 bulan, (3) Proses persetujuan OJK: 45-90 hari kerja, (4) Bookbuilding dan penawaran umum: 1-2 bulan. Global Sinergi Kapital menggunakan metodologi modern untuk memastikan proses yang efisien."
        },
        {
          q: "Berapa biaya yang diperlukan untuk melakukan IPO?",
          a: "Biaya IPO bervariasi tergantung ukuran penawaran, namun umumnya berkisar 3-7% dari total dana yang dihimpun. Komponen biaya meliputi: underwriting fee (2-4%), biaya konsultan (legal, akuntansi, IPO advisor), biaya OJK dan BEI, biaya notaris, biaya marketing dan roadshow, serta biaya printing prospektus. Global Sinergi Kapital menawarkan struktur biaya yang kompetitif dan transparan."
        }
      ]
    },
    {
      category: "Proses & Tahapan",
      questions: [
        {
          q: "Apa saja tahapan utama dalam proses IPO?",
          a: "Tahapan IPO meliputi: (1) Feasibility study dan penunjukan konsultan, (2) Restrukturisasi perusahaan dan implementasi GCG, (3) Due diligence komprehensif (legal, financial, business), (4) Penyusunan prospektus dan dokumen pernyataan pendaftaran, (5) Pengajuan ke OJK dan proses review, (6) Paparan publik dan roadshow ke investor, (7) Bookbuilding dan penentuan harga, (8) Penjatahan saham dan pencatatan di BEI, (9) Monitoring dan stabilisasi harga pasca IPO."
        },
        {
          q: "Bagaimana menentukan valuasi dan harga IPO yang tepat?",
          a: "Penentuan valuasi IPO menggunakan berbagai metode: (1) Discounted Cash Flow (DCF) untuk proyeksi arus kas, (2) Price to Earnings (P/E) ratio dibandingkan dengan peers, (3) Price to Book Value (PBV) untuk aset-heavy companies, (4) Enterprise Value/EBITDA untuk perbandingan operasional. Tim ahli kami akan melakukan analisis mendalam terhadap industri, kompetitor, dan kondisi pasar untuk menentukan valuasi yang optimal dan menarik bagi investor."
        },
        {
          q: "Apa peran underwriter dalam proses IPO?",
          a: "Underwriter memiliki peran krusial: (1) Melakukan due diligence dan membantu penyusunan prospektus, (2) Menentukan struktur dan harga penawaran, (3) Memasarkan saham kepada investor institusi dan ritel, (4) Menjamin penjualan saham (full commitment atau best effort), (5) Melakukan stabilisasi harga pasca IPO. Global Sinergi Kapital akan membantu Anda memilih underwriter yang tepat untuk kesuksesan IPO Anda."
        }
      ]
    },
    {
      category: "Pasca IPO",
      questions: [
        {
          q: "Apa saja kewajiban perusahaan setelah menjadi perusahaan terbuka?",
          a: "Kewajiban perusahaan terbuka meliputi: (1) Laporan keuangan triwulanan dan tahunan tepat waktu, (2) Keterbukaan informasi material dalam 2x24 jam, (3) RUPS tahunan dan RUPS lainnya sesuai kebutuhan, (4) Mempertahankan komposisi komisaris independen minimal 30%, (5) Membentuk komite audit dan sekretaris perusahaan, (6) Mematuhi aturan transaksi afiliasi dan benturan kepentingan, (7) Melakukan public expose minimal setahun sekali."
        },
        {
          q: "Bagaimana menjaga kinerja saham pasca IPO?",
          a: "Strategi menjaga kinerja saham: (1) Konsisten mencapai target kinerja yang dijanjikan, (2) Komunikasi proaktif dengan investor melalui investor relations, (3) Corporate action yang menguntungkan pemegang saham, (4) Transparansi dan good corporate governance, (5) Manajemen ekspektasi pasar yang realistis, (6) Program pembelian kembali saham jika diperlukan. Tim post-IPO support kami akan mendampingi Anda dalam menjalankan strategi ini."
        },
        {
          q: "Apakah Global Sinergi Kapital memberikan layanan pasca IPO?",
          a: "Ya, kami menyediakan layanan komprehensif pasca IPO meliputi: (1) Investor relations support dan advisory, (2) Penyusunan laporan berkala (triwulan dan tahunan), (3) Pendampingan RUPS dan corporate action, (4) Advisory untuk transaksi material dan aksi korporasi, (5) Monitoring kepatuhan regulasi berkelanjutan, (6) Media relations dan crisis management, (7) Training berkelanjutan untuk manajemen dan board. Layanan ini memastikan perusahaan Anda tetap compliant dan menjaga kepercayaan investor."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            <HelpCircle className="w-4 h-4 mr-2" />
            Pertanyaan yang Sering Diajukan
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-display mb-6 leading-tight">
            Pertanyaan Seputar
            <span className="text-gradient block">Proses IPO</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Temukan jawaban atas pertanyaan-pertanyaan umum tentang Initial Public Offering (IPO) di Indonesia.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6 lg:p-8 bg-background border border-border/50 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-primary font-display mb-6">
                {category.category}
              </h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${categoryIndex}-${index}`}
                    className="border border-border/60 rounded-lg px-6 data-[state=open]:border-primary/20 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-semibold text-foreground pr-4">
                        {item.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-white shadow-2xl">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
            }}></div>
            
            <div className="relative p-8 lg:p-12">
              <div className="max-w-2xl mx-auto text-center mb-8">
                <h3 className="text-3xl font-bold font-display mb-4">
                  Masih Punya Pertanyaan?
                </h3>
                <p className="text-white/90 text-lg">
                  Tim ahli kami siap menjawab pertanyaan spesifik tentang situasi perusahaan Anda dan memberikan konsultasi mendalam tentang kesiapan IPO.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Obrolan Langsung
                </Button>
                <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm">
                  Unduh FAQ Lengkap
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/15 transition-colors">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-lg">Penilaian Kesiapan IPO</h4>
                    <p className="text-sm text-white/80">
                      Evaluasi kesiapan perusahaan Anda untuk go public dengan tool assessment online kami.
                    </p>
                    <Button size="sm" className="w-full bg-accent text-primary hover:bg-accent/90">
                      Mulai Penilaian →
                    </Button>
                  </div>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/15 transition-colors">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-lg">Panduan IPO 2024</h4>
                    <p className="text-sm text-white/80">
                      Panduan lengkap 100+ halaman tentang regulasi dan proses IPO terbaru.
                    </p>
                    <Button size="sm" className="w-full bg-accent text-primary hover:bg-accent/90">
                      Unduh Gratis →
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;