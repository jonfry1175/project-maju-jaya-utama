const PartnershipSection = () => {
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 bg-white">
            {/* Left Side - Image */}
            <div className="relative">
              <img 
                src="/Section/tinywow_tinywow_RITZ Corpora Indonesia Company Profile - 2024_compressed_81741712_81741767_1.jpg"
                alt="RITZ Corp Team"
                className="w-full h-full object-cover min-h-[500px] lg:min-h-[600px]"
                onError={(e) => {
                  console.log('Image failed to load:', (e.target as HTMLImageElement).src);
                }}
              />
            </div>

            {/* Right Side - Content */}
            <div className="bg-gray-50 p-8 lg:p-12 flex flex-col justify-center">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight text-center">
                  About<br />
                  RITZ Corp
                </h2>
              </div>

              {/* Description - Exact content from image */}
              <div className="space-y-4 text-gray-800 leading-relaxed text-justify">
                <p className="text-sm">
                  RITZ Corp is an integrated business that has two main business lines, namely Financial and Business 
                  Consulting through PT RITZ Konsultan Indonesia ("RKI") and PT RITZ Investment Indonesia ("RII"). In addition, RITZ 
                  Corp offers Corporate Law Services through RITZ & Partners Law Firm ("R&P") and Commercial Litigation 
                  Services through Rivai & Co. Law Firm ("RCO").
                </p>
                
                <p className="text-sm">
                  RKI has experience and credentials, as well as an extensive network in banking, commercial, investment 
                  banking, private equity, and capital markets. Especially in assisting companies with corporate restructuring, 
                  debt restructuring, turn-around management/management changes, divestments/investments, and Mergers 
                  & Acquisitions (M&A), among others, acquisitions, spin-offs, mergers, divestitures, and investments.
                </p>
                
                <p className="text-sm">
                  RII, a sub-holding under the RITZ Corp, has experienced partners from various professional backgrounds. 
                  Together with its partners, RII establishes subsidiary companies in various industrial sectors, managed by the 
                  partners. It is also utilized to support the formation of consortium members in project financing managed by 
                  RKI.
                </p>
                
                <p className="text-sm">
                  R&P is a corporate law firm with experience and credentials in Merger and Acquisition (M&A) transactions, 
                  Banking & Finance and Pre-IPO Programs and other required corporate transactions for companies and 
                  business groups in Indonesia. RCO is a law firm focused on Commercial Litigation, such as Alternative Dispute 
                  Resolutions, Suspension of Debt Payment Obligations (PKPU) & Bankruptcy.
                </p>
                
                <p className="text-sm">
                  RITZ Corp has a team consisting of more than 40 partners with diverse executive backgrounds in banking, 
                  investment banking & private equity, capital markets, the real sector, legal, and arbitration. They also have 
                  regional desks in Japan, South Korea, and Singapore. They possess broad qualifications, including debt 
                  restructuring, debt settlement through asset divestment, refinancing, investments, and debt resolution through 
                  legal/PKPU processes. RITZ Corp also has experience working with several major state-owned enterprises 
                  (BUMN) across various types of transactions, including business development, restructuring, asset divestment, 
                  fundraising, and M&A activities.
                </p>
              </div>
              
              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-xs text-gray-500">
                  Strictly Confidential
                </p>
                <p className="text-xs text-gray-500">
                  2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection; 