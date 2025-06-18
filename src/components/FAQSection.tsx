import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, ArrowRight, Shield, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

const FAQSection = () => {
  const { t, i18n } = useTranslation('faq');
  const faqCategories = [
    {
      category: i18n.language === 'id' ? "Persyaratan IPO" : "IPO Requirements",
      questions: [
        {
          q: "Apa saja persyaratan utama untuk melakukan IPO di Indonesia?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">Persyaratan utama IPO di Indonesia meliputi:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">1.</span>
                  <span>Berbentuk Perseroan Terbatas (PT)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">2.</span>
                  <span>Modal disetor minimal Rp 3 miliar</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">3.</span>
                  <span>Memiliki minimal 300 pemegang saham setelah IPO</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">4.</span>
                  <span>Laporan keuangan audited 3 tahun terakhir dengan opini Wajar Tanpa Pengecualian (WTP) minimal 2 tahun terakhir</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">5.</span>
                  <span>Memiliki profit minimal 1 tahun terakhir</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">6.</span>
                  <span>Tidak dalam sengketa hukum material</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">7.</span>
                  <span>Memenuhi ketentuan corporate governance yang ditetapkan OJK</span>
                </li>
              </ul>
            </div>
          )
        },
        {
          q: "Berapa lama waktu yang dibutuhkan untuk proses IPO?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">Proses IPO di Indonesia umumnya memakan waktu 6-12 bulan, tergantung pada kesiapan perusahaan.</p>
              <p className="font-semibold text-foreground">Timeline meliputi:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span><strong>Persiapan internal dan restrukturisasi:</strong> 2-4 bulan</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span><strong>Due diligence dan penyusunan prospektus:</strong> 2-3 bulan</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span><strong>Proses persetujuan OJK:</strong> 45-90 hari kerja</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span><strong>Bookbuilding dan penawaran umum:</strong> 1-2 bulan</span>
                </li>
              </ul>
              <p className="text-muted-foreground pt-2">Global Sinergi Kapital menggunakan metodologi modern untuk memastikan proses yang efisien.</p>
            </div>
          )
        },
        {
          q: "Berapa biaya yang diperlukan untuk melakukan IPO?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">Biaya IPO bervariasi tergantung ukuran penawaran, namun umumnya berkisar <strong className="text-foreground">3-7%</strong> dari total dana yang dihimpun.</p>
              <p className="font-semibold text-foreground">Komponen biaya meliputi:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span><strong>Underwriting fee:</strong> 2-4%</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span><strong>Biaya konsultan:</strong> Legal, akuntansi, IPO advisor</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span><strong>Biaya OJK dan BEI:</strong> Biaya pendaftaran dan pencatatan</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span><strong>Biaya notaris:</strong> Untuk dokumen legal</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span><strong>Biaya marketing dan roadshow:</strong> Promosi kepada investor</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span><strong>Biaya printing prospektus:</strong> Pencetakan dokumen</span>
                </li>
              </ul>
              <p className="text-muted-foreground pt-2">Global Sinergi Kapital menawarkan struktur biaya yang kompetitif dan transparan.</p>
            </div>
          )
        }
      ]
    },
    {
      category: i18n.language === 'id' ? "Proses & Tahapan" : "Process & Stages",
      questions: [
        {
          q: "Apa saja tahapan utama dalam proses IPO?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">Tahapan IPO meliputi:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">1.</span>
                  <span>Feasibility study dan penunjukan konsultan</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">2.</span>
                  <span>Restrukturisasi perusahaan dan implementasi GCG</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">3.</span>
                  <span>Due diligence komprehensif (legal, financial, business)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">4.</span>
                  <span>Penyusunan prospektus dan dokumen pernyataan pendaftaran</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">5.</span>
                  <span>Pengajuan ke OJK dan proses review</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">6.</span>
                  <span>Paparan publik dan roadshow ke investor</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">7.</span>
                  <span>Bookbuilding dan penentuan harga</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">8.</span>
                  <span>Penjatahan saham dan pencatatan di BEI</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">9.</span>
                  <span>Monitoring dan stabilisasi harga pasca IPO</span>
                </li>
              </ul>
            </div>
          )
        },
        {
          q: "Bagaimana menentukan valuasi dan harga IPO yang tepat?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">Penentuan valuasi IPO menggunakan berbagai metode:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">1.</span>
                  <span><strong>Discounted Cash Flow (DCF):</strong> untuk proyeksi arus kas</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">2.</span>
                  <span><strong>Price to Earnings (P/E) ratio:</strong> dibandingkan dengan peers</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">3.</span>
                  <span><strong>Price to Book Value (PBV):</strong> untuk aset-heavy companies</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">4.</span>
                  <span><strong>Enterprise Value/EBITDA:</strong> untuk perbandingan operasional</span>
                </li>
              </ul>
              <p className="text-muted-foreground pt-2">Tim ahli kami akan melakukan analisis mendalam terhadap industri, kompetitor, dan kondisi pasar untuk menentukan valuasi yang optimal dan menarik bagi investor.</p>
            </div>
          )
        },
        {
          q: "Apa peran underwriter dalam proses IPO?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">Underwriter memiliki peran krusial:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">1.</span>
                  <span>Melakukan due diligence dan membantu penyusunan prospektus</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">2.</span>
                  <span>Menentukan struktur dan harga penawaran</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">3.</span>
                  <span>Memasarkan saham kepada investor institusi dan ritel</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">4.</span>
                  <span>Menjamin penjualan saham (full commitment atau best effort)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">5.</span>
                  <span>Melakukan stabilisasi harga pasca IPO</span>
                </li>
              </ul>
              <p className="text-muted-foreground pt-2">Global Sinergi Kapital akan membantu Anda memilih underwriter yang tepat untuk kesuksesan IPO Anda.</p>
            </div>
          )
        }
      ]
    },
    {
      category: i18n.language === 'id' ? "Pasca IPO" : "Post IPO",
      questions: [
        {
          q: "Apa saja kewajiban perusahaan setelah menjadi perusahaan terbuka?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">Kewajiban perusahaan terbuka meliputi:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">1.</span>
                  <span>Laporan keuangan triwulanan dan tahunan tepat waktu</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">2.</span>
                  <span>Keterbukaan informasi material dalam 2x24 jam</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">3.</span>
                  <span>RUPS tahunan dan RUPS lainnya sesuai kebutuhan</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">4.</span>
                  <span>Mempertahankan komposisi komisaris independen minimal 30%</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">5.</span>
                  <span>Membentuk komite audit dan sekretaris perusahaan</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">6.</span>
                  <span>Mematuhi aturan transaksi afiliasi dan benturan kepentingan</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">7.</span>
                  <span>Melakukan public expose minimal setahun sekali</span>
                </li>
              </ul>
            </div>
          )
        },
        {
          q: "Bagaimana menjaga kinerja saham pasca IPO?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">Strategi menjaga kinerja saham:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">1.</span>
                  <span>Konsisten mencapai target kinerja yang dijanjikan</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">2.</span>
                  <span>Komunikasi proaktif dengan investor melalui investor relations</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">3.</span>
                  <span>Corporate action yang menguntungkan pemegang saham</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">4.</span>
                  <span>Transparansi dan good corporate governance</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">5.</span>
                  <span>Manajemen ekspektasi pasar yang realistis</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">6.</span>
                  <span>Program pembelian kembali saham jika diperlukan</span>
                </li>
              </ul>
              <p className="text-muted-foreground pt-2">Tim post-IPO support kami akan mendampingi Anda dalam menjalankan strategi ini.</p>
            </div>
          )
        },
        {
          q: "Apakah Global Sinergi Kapital memberikan layanan pasca IPO?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">Ya, kami menyediakan layanan komprehensif pasca IPO meliputi:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">1.</span>
                  <span>Investor relations support dan advisory</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">2.</span>
                  <span>Penyusunan laporan berkala (triwulan dan tahunan)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">3.</span>
                  <span>Pendampingan RUPS dan corporate action</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">4.</span>
                  <span>Advisory untuk transaksi material dan aksi korporasi</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">5.</span>
                  <span>Monitoring kepatuhan regulasi berkelanjutan</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">6.</span>
                  <span>Media relations dan crisis management</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">7.</span>
                  <span>Training berkelanjutan untuk manajemen dan board</span>
                </li>
              </ul>
              <p className="text-muted-foreground pt-2">Layanan ini memastikan perusahaan Anda tetap compliant dan menjaga kepercayaan investor.</p>
            </div>
          )
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
            {t('section.badge')}
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-display mb-6 leading-tight">
            {t('section.title')}
            <span className="text-gradient block">{t('section.titleHighlight')}</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('section.description')}
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
                  {t('stillHaveQuestions.title')}
                </h3>
                <p className="text-white/90 text-lg">
                  {t('stillHaveQuestions.description')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {i18n.language === 'id' ? 'Obrolan Langsung' : 'Live Chat'}
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all">
                  {i18n.language === 'id' ? 'Unduh FAQ Lengkap' : 'Download Complete FAQ'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/15 transition-colors">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-lg">{i18n.language === 'id' ? 'Penilaian Kesiapan IPO' : 'IPO Readiness Assessment'}</h4>
                    <p className="text-sm text-white/80">
                      {i18n.language === 'id' ? 'Evaluasi kesiapan perusahaan Anda untuk go public dengan tool assessment online kami.' : 'Evaluate your company\'s readiness to go public with our online assessment tool.'}
                    </p>
                    <Button size="sm" className="w-full bg-accent text-primary hover:bg-accent/90">
                      {i18n.language === 'id' ? 'Mulai Penilaian' : 'Start Assessment'} →
                    </Button>
                  </div>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/15 transition-colors">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-lg">{i18n.language === 'id' ? 'Panduan IPO 2024' : 'IPO Guide 2024'}</h4>
                    <p className="text-sm text-white/80">
                      {i18n.language === 'id' ? 'Panduan lengkap 100+ halaman tentang regulasi dan proses IPO terbaru.' : 'Complete 100+ page guide on the latest IPO regulations and processes.'}
                    </p>
                    <Button size="sm" className="w-full bg-accent text-primary hover:bg-accent/90">
                      {i18n.language === 'id' ? 'Unduh Gratis' : 'Free Download'} →
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