const PartnershipSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-lg lg:rounded-none overflow-hidden shadow-lg lg:shadow-none">
            {/* Left Side - Image */}
            <div className="relative order-1 lg:order-1">
              <img
                src="/Section/tinywow_tinywow_RITZ Corpora Indonesia Company Profile - 2024_compressed_81741712_81741767_1.jpg"
                alt="RITZ Corp Team"
                className="w-full h-full object-cover min-h-[250px] sm:min-h-[350px] lg:min-h-[500px] xl:min-h-[600px]"
                onError={(e) => {
                  console.log(
                    "Image failed to load:",
                    (e.target as HTMLImageElement).src
                  );
                }}
              />
            </div>

            {/* Right Side - Content */}
            <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center order-2 lg:order-2">
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 sm:mb-6 lg:mb-8 leading-tight text-center">
                  About
                  <br />
                  RITZ Corp
                </h2>
              </div>

              {/* Description - Exact content from image */}
              <div className="space-y-3 sm:space-y-4 text-gray-800 leading-relaxed text-justify">
                <p className="text-xs sm:text-sm lg:text-base">
                  RITZ Corp is an integrated business that has two main business
                  lines, namely Financial and Business Consulting through PT
                  RITZ Konsultan Indonesia ("RKI") and PT RITZ Investment
                  Indonesia ("RII"). In addition, RITZ Corp offers Corporate Law
                  Services through RITZ & Partners Law Firm ("R&P") and
                  Commercial Litigation Services through Rivai & Co. Law Firm
                  ("RCO").
                </p>

                <p className="text-xs sm:text-sm lg:text-base">
                  RKI has experience and credentials, as well as an extensive
                  network in banking, commercial, investment banking, private
                  equity, and capital markets. Especially in assisting companies
                  with corporate restructuring, debt restructuring, turn-around
                  management/management changes, divestments/investments, and
                  Mergers & Acquisitions (M&A), among others, acquisitions,
                  spin-offs, mergers, divestitures, and investments.
                </p>

                <p className="text-xs sm:text-sm lg:text-base">
                  RII, a sub-holding under the RITZ Corp, has experienced
                  partners from various professional backgrounds. Together with
                  its partners, RII establishes subsidiary companies in various
                  industrial sectors, managed by the partners. It is also
                  utilized to support the formation of consortium members in
                  project financing managed by RKI.
                </p>

                <p className="text-xs sm:text-sm lg:text-base">
                  R&P is a corporate law firm with experience and credentials in
                  Merger and Acquisition (M&A) transactions, Banking & Finance
                  and Pre-IPO Programs and other required corporate transactions
                  for companies and business groups in Indonesia. RCO is a law
                  firm focused on Commercial Litigation, such as Alternative
                  Dispute Resolutions, Suspension of Debt Payment Obligations
                  (PKPU) & Bankruptcy.
                </p>

                <p className="text-xs sm:text-sm lg:text-base">
                  RITZ Corp has a team consisting of more than 40 partners with
                  diverse executive backgrounds in banking, investment banking &
                  private equity, capital markets, the real sector, legal, and
                  arbitration. They also have regional desks in Japan, South
                  Korea, and Singapore. They possess broad qualifications,
                  including debt restructuring, debt settlement through asset
                  divestment, refinancing, investments, and debt resolution
                  through legal/PKPU processes. RITZ Corp also has experience
                  working with several major state-owned enterprises (BUMN)
                  across various types of transactions, including business
                  development, restructuring, asset divestment, fundraising, and
                  M&A activities.
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 sm:mt-8 text-center">
                <p className="text-xs text-gray-500">Strictly Confidential</p>
                <p className="text-xs text-gray-500">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
