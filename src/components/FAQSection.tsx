import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HelpCircle,
  MessageCircle,
  ArrowRight,
  Shield,
  FileText,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const FAQSection = () => {
  const { t, i18n } = useTranslation("faq");
  const faqCategories = [
    {
      category: i18n.language === "id" ? "Persyaratan IPO" : "IPO Requirements",
      questions: [
        {
          q: "Apa saja persyaratan utama untuk melakukan IPO di Indonesia?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Persyaratan utama IPO di Indonesia meliputi:
              </p>
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
                  <span>
                    Laporan keuangan audited 3 tahun terakhir dengan opini Wajar
                    Tanpa Pengecualian (WTP) minimal 2 tahun terakhir
                  </span>
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
                  <span>
                    Memenuhi ketentuan corporate governance yang ditetapkan OJK
                  </span>
                </li>
              </ul>
            </div>
          ),
        },
        {
          q: "Berapa lama waktu yang dibutuhkan untuk proses IPO?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Proses IPO di Indonesia umumnya memakan waktu 6-12 bulan,
                tergantung pada kesiapan perusahaan.
              </p>
              <p className="font-semibold text-foreground">
                Timeline meliputi:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span>
                    <strong>Persiapan internal dan restrukturisasi:</strong> 2-4
                    bulan
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span>
                    <strong>Due diligence dan penyusunan prospektus:</strong>{" "}
                    2-3 bulan
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span>
                    <strong>Proses persetujuan OJK:</strong> 45-90 hari kerja
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span>
                    <strong>Bookbuilding dan penawaran umum:</strong> 1-2 bulan
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground pt-2">
                Global Sinergi Kapital menggunakan metodologi modern untuk
                memastikan proses yang efisien.
              </p>
            </div>
          ),
        },
        {
          q: "Berapa biaya yang diperlukan untuk melakukan IPO?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Biaya IPO bervariasi tergantung ukuran penawaran, namun umumnya
                berkisar <strong className="text-foreground">3-7%</strong> dari
                total dana yang dihimpun.
              </p>
              <p className="font-semibold text-foreground">
                Komponen biaya meliputi:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span>
                    <strong>Underwriting fee:</strong> 2-4%
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span>
                    <strong>Biaya konsultan:</strong> Legal, akuntansi, IPO
                    advisor
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span>
                    <strong>Biaya OJK dan BEI:</strong> Biaya pendaftaran dan
                    pencatatan
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span>
                    <strong>Biaya notaris:</strong> Untuk dokumen legal
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span>
                    <strong>Biaya marketing dan roadshow:</strong> Promosi
                    kepada investor
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">•</span>
                  <span>
                    <strong>Biaya printing prospektus:</strong> Pencetakan
                    dokumen
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground pt-2">
                Global Sinergi Kapital menawarkan struktur biaya yang kompetitif
                dan transparan.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      category:
        i18n.language === "id" ? "Proses & Tahapan" : "Process & Stages",
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
                  <span>
                    Due diligence komprehensif (legal, financial, business)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">4.</span>
                  <span>
                    Penyusunan prospektus dan dokumen pernyataan pendaftaran
                  </span>
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
          ),
        },
        {
          q: "Bagaimana menentukan valuasi dan harga IPO yang tepat?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Penentuan valuasi IPO menggunakan berbagai metode:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">1.</span>
                  <span>
                    <strong>Discounted Cash Flow (DCF):</strong> untuk proyeksi
                    arus kas
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">2.</span>
                  <span>
                    <strong>Price to Earnings (P/E) ratio:</strong> dibandingkan
                    dengan peers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">3.</span>
                  <span>
                    <strong>Price to Book Value (PBV):</strong> untuk aset-heavy
                    companies
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">4.</span>
                  <span>
                    <strong>Enterprise Value/EBITDA:</strong> untuk perbandingan
                    operasional
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground pt-2">
                Tim ahli kami akan melakukan analisis mendalam terhadap
                industri, kompetitor, dan kondisi pasar untuk menentukan valuasi
                yang optimal dan menarik bagi investor.
              </p>
            </div>
          ),
        },
        {
          q: "Apa peran underwriter dalam proses IPO?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Underwriter memiliki peran krusial:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">1.</span>
                  <span>
                    Melakukan due diligence dan membantu penyusunan prospektus
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">2.</span>
                  <span>Menentukan struktur dan harga penawaran</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">3.</span>
                  <span>
                    Memasarkan saham kepada investor institusi dan ritel
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">4.</span>
                  <span>
                    Menjamin penjualan saham (full commitment atau best effort)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">5.</span>
                  <span>Melakukan stabilisasi harga pasca IPO</span>
                </li>
              </ul>
              <p className="text-muted-foreground pt-2">
                Global Sinergi Kapital akan membantu Anda memilih underwriter
                yang tepat untuk kesuksesan IPO Anda.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      category: i18n.language === "id" ? "Pasca IPO" : "Post IPO",
      questions: [
        {
          q: "Apa saja kewajiban perusahaan setelah menjadi perusahaan terbuka?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Kewajiban perusahaan terbuka meliputi:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">1.</span>
                  <span>
                    Laporan keuangan triwulanan dan tahunan tepat waktu
                  </span>
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
                  <span>
                    Mempertahankan komposisi komisaris independen minimal 30%
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">5.</span>
                  <span>Membentuk komite audit dan sekretaris perusahaan</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">6.</span>
                  <span>
                    Mematuhi aturan transaksi afiliasi dan benturan kepentingan
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">7.</span>
                  <span>Melakukan public expose minimal setahun sekali</span>
                </li>
              </ul>
            </div>
          ),
        },
        {
          q: "Bagaimana menjaga kinerja saham pasca IPO?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Strategi menjaga kinerja saham:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">1.</span>
                  <span>Konsisten mencapai target kinerja yang dijanjikan</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">2.</span>
                  <span>
                    Komunikasi proaktif dengan investor melalui investor
                    relations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">3.</span>
                  <span>
                    Corporate action yang menguntungkan pemegang saham
                  </span>
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
              <p className="text-muted-foreground pt-2">
                Tim post-IPO support kami akan mendampingi Anda dalam
                menjalankan strategi ini.
              </p>
            </div>
          ),
        },
        {
          q: "Apakah Global Sinergi Kapital memberikan layanan pasca IPO?",
          a: (
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Ya, kami menyediakan layanan komprehensif pasca IPO meliputi:
              </p>
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
                  <span>
                    Advisory untuk transaksi material dan aksi korporasi
                  </span>
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
              <p className="text-muted-foreground pt-2">
                Layanan ini memastikan perusahaan Anda tetap compliant dan
                menjaga kepercayaan investor.
              </p>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <section id="faq" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
            <HelpCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
            {i18n.language === "id"
              ? "Pertanyaan yang Sering Ditanyakan"
              : "Frequently Asked Questions"}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary font-display mb-4 sm:mb-6 leading-tight">
            {i18n.language === "id" ? "Punya Pertanyaan?" : "Have Questions?"}
            <span className="text-gradient block mt-1 sm:mt-2 leading-normal pb-1 sm:pb-2">
              {i18n.language === "id"
                ? "Kami Punya Jawabannya"
                : "We Have Answers"}
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            {i18n.language === "id"
              ? "Temukan jawaban untuk pertanyaan umum seputar proses IPO dan layanan konsultasi kami."
              : "Find answers to common questions about the IPO process and our consulting services."}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Categories */}
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8 sm:mb-10 lg:mb-12">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary font-display text-center mb-6 sm:mb-8 flex items-center justify-center">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                {category.category}
              </h3>

              <Accordion
                type="single"
                collapsible
                className="space-y-3 sm:space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${categoryIndex}-${index}`}
                    className="border border-border/50 rounded-xl bg-background hover:shadow-md transition-all duration-200">
                    <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-5 text-left hover:no-underline hover:bg-muted/30 rounded-t-xl data-[state=open]:rounded-b-none transition-colors">
                      <span className="text-sm sm:text-base lg:text-lg font-semibold text-foreground pr-4 leading-tight">
                        {faq.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                      <div className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                        {faq.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <Card className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary font-display mb-3 sm:mb-4">
                {i18n.language === "id"
                  ? "Masih Ada Pertanyaan Lain?"
                  : "Still Have Other Questions?"}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                {i18n.language === "id"
                  ? "Tim ahli kami siap membantu menjawab pertanyaan spesifik tentang situasi perusahaan Anda."
                  : "Our expert team is ready to help answer specific questions about your company's situation."}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="btn-gradient-brand shadow-brand text-sm sm:text-base font-semibold px-6 sm:px-8 group w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {i18n.language === "id"
                    ? "Konsultasi Gratis"
                    : "Free Consultation"}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-sm sm:text-base font-semibold px-6 sm:px-8 border-2 w-full sm:w-auto">
                  <Shield className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {i18n.language === "id" ? "Hubungi Kami" : "Contact Us"}
                </Button>
              </div>

              {/* Quick Contact Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
                <div className="text-center p-3 sm:p-4 bg-background/50 rounded-lg border border-border/30">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground mb-1">
                    WhatsApp
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {i18n.language === "id" ? "Respon Cepat" : "Quick Response"}
                  </p>
                </div>

                <div className="text-center p-3 sm:p-4 bg-background/50 rounded-lg border border-border/30">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground mb-1">
                    {i18n.language === "id" ? "Email" : "Email"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {i18n.language === "id" ? "Detail Lengkap" : "Full Details"}
                  </p>
                </div>

                <div className="text-center p-3 sm:p-4 bg-background/50 rounded-lg border border-border/30">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground mb-1">
                    {i18n.language === "id" ? "Telepon" : "Phone"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {i18n.language === "id" ? "Langsung Bicara" : "Direct Talk"}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
