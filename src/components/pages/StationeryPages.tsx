import React from 'react';
import { PageContainer } from '../PageContainer';
import {
  FrissLawEmblem,
  FrissLawHorizontalLogo,
  FrissLawStackedLogo,
  AttorneySignatureGraphic,
  CorporateSealEmbossed
} from '../../assets/brandAssets';
import { Phone, Mail, Globe, MapPin, Check, Ruler, FileText, Stamp } from 'lucide-react';

export const Page16BusinessCards: React.FC = () => {
  const [cardSide, setCardSide] = React.useState<'front' | 'back'>('front');

  return (
    <PageContainer
      pageNumber={16}
      sectionNumber="06.01"
      category="6. Stationery & Print Collateral"
      title="Executive Business Cards & Die-Cut Specifications"
      subtitle={'Realistic 3D Mockup & Precision Manufacturing Blueprints (US Standard 3.50" × 2.00")'}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center">
        {/* Left Column: Interactive 3D Realistic Business Card Mockup */}
        <div className="md:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-lg p-6 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-slate-400 uppercase">
                INTERACTIVE REALISTIC MOCKUP (TOGGLE SIDE)
              </span>
              <div className="inline-flex rounded-lg border border-slate-300 p-0.5 bg-white">
                <button
                  onClick={() => setCardSide('front')}
                  className={`px-3 py-1 text-xs font-lato font-semibold rounded cursor-pointer transition-all ${
                    cardSide === 'front' ? 'bg-[#203F6E] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Front (Attorney Info)
                </button>
                <button
                  onClick={() => setCardSide('back')}
                  className={`px-3 py-1 text-xs font-lato font-semibold rounded cursor-pointer transition-all ${
                    cardSide === 'back' ? 'bg-[#203F6E] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Back (Navy Emblem)
                </button>
              </div>
            </div>

            {/* Realistic Business Card Stage */}
            <div className="py-6 flex items-center justify-center">
              {cardSide === 'front' ? (
                /* FRONT OF CARD: Pure White, Ultra-Crisp, Spot UV on Logo, Elegant Typography */
                <div
                  className="w-[350px] h-[200px] bg-white rounded border border-slate-200 p-6 flex flex-col justify-between relative select-none transition-all duration-300"
                  style={{
                    boxShadow: '0 20px 35px -10px rgba(32, 63, 110, 0.2), 0 1px 3px rgba(0,0,0,0.08)',
                    aspectRatio: '3.5 / 2.0'
                  }}
                >
                  {/* Subtle top edge accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#203F6E]" />

                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-caslon text-base font-bold text-[#203F6E] tracking-tight">
                        Natalya Friss, Esq.
                      </h4>
                      <div className="font-lato text-[9px] uppercase tracking-[0.2em] text-[#3092D1] font-bold">
                        Managing Partner & Counselor at Law
                      </div>
                    </div>
                    <FrissLawEmblem size={26} color="#203F6E" accentColor="#3092D1" />
                  </div>

                  <div className="space-y-1 text-[8.5px] font-lato text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-2.5 h-2.5 text-[#3092D1]" />
                      <span>11 Broadway, Suite 615, New York, NY 10004</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-2.5 h-2.5 text-[#3092D1]" />
                      <span>(646) 448-5256</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-2.5 h-2.5 text-[#3092D1]" />
                      <span>natalya@frisslaw.com • info@frisslaw.com</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-2.5 h-2.5 text-[#3092D1]" />
                      <span>www.frisslaw.com</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[7px] font-mono text-slate-400">
                    <span>CIVIL LITIGATION • IMMIGRATION • FAMILY</span>
                    <span className="text-[#C93B2B] font-bold">NY BAR ADMITTED</span>
                  </div>
                </div>
              ) : (
                /* BACK OF CARD: Rich Deep Navy #203F6E, Centered Logo, Blind Deboss & Spot Gloss UV */
                <div
                  className="w-[350px] h-[200px] bg-[#203F6E] rounded p-6 flex flex-col items-center justify-center relative select-none text-white transition-all duration-300"
                  style={{
                    boxShadow: '0 25px 40px -12px rgba(17, 34, 59, 0.45), 0 0 0 1px rgba(255,255,255,0.05)',
                    aspectRatio: '3.5 / 2.0'
                  }}
                >
                  <FrissLawStackedLogo theme="dark" className="scale-90" />
                  <div className="absolute bottom-3 text-[7.5px] font-lato tracking-[0.25em] uppercase text-[#3092D1]/80">
                    www.frisslaw.com
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-center text-[11px] font-lato text-slate-500">
            Click the toggle buttons above to preview the executive card's front and reverse side.
          </div>
        </div>

        {/* Right Column: Exact Print Production Blueprint Specifications */}
        <div className="md:col-span-5 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Ruler className="w-4 h-4 text-[#3092D1]" />
              <h4 className="font-caslon text-base font-bold text-[#203F6E]">
                Manufacturing Specifications
              </h4>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2 bg-[#F8FAFC] rounded border border-slate-200 flex justify-between">
                <span className="font-sans text-slate-500">Trim Size</span>
                <span className="font-bold text-[#203F6E]">3.50" × 2.00" (88.9 × 50.8 mm)</span>
              </div>
              <div className="p-2 bg-[#F8FAFC] rounded border border-slate-200 flex justify-between">
                <span className="font-sans text-slate-500">Bleed Margin</span>
                <span className="text-slate-700">0.125" (3.175 mm) all 4 sides</span>
              </div>
              <div className="p-2 bg-[#F8FAFC] rounded border border-slate-200 flex justify-between">
                <span className="font-sans text-slate-500">Safe Type Zone</span>
                <span className="text-slate-700">0.1875" (4.76 mm) from trim edge</span>
              </div>
              <div className="p-2 bg-[#F8FAFC] rounded border border-slate-200 flex justify-between">
                <span className="font-sans text-slate-500">Paper Stock</span>
                <span className="text-slate-700 font-bold">18pt Mohawk Superfine Eggshell</span>
              </div>
              <div className="p-2 bg-[#F8FAFC] rounded border border-slate-200 flex justify-between">
                <span className="font-sans text-slate-500">Grammage</span>
                <span className="text-slate-700">400 GSM Ultra-Heavy Card</span>
              </div>
              <div className="p-2 bg-[#F8FAFC] rounded border border-slate-200 flex justify-between">
                <span className="font-sans text-slate-500">Special Finishes</span>
                <span className="text-[#3092D1] font-bold">Spot Gloss UV + Blind Deboss</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-lato text-slate-500">
            <strong>Edge Finishing:</strong> Optional deep navy painted or silver gilded edges available for senior partners.
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page17LetterheadAndEnvelopes: React.FC = () => {
  return (
    <PageContainer
      pageNumber={17}
      sectionNumber="06.02"
      category="6. Stationery & Print Collateral"
      title="Official Firm Letterhead & #10 Envelopes"
      subtitle={'US Letter (8.50" × 11.00") Layout, Watermark & USPS-Compliant Postal Envelopes'}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center">
        {/* Letterhead Mockup */}
        <div className="md:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-2 flex justify-between">
              <span>US LETTER FORMAT: 8.5" × 11"</span>
              <span className="text-[#3092D1] font-bold">GRID: 1.25" TOP, 1.0" SIDES</span>
            </div>

            {/* Letterhead Sheet Mockup */}
            <div
              className="bg-white rounded border border-slate-300 p-5 shadow-sm relative overflow-hidden text-[10px] font-lato select-none"
              style={{ aspectRatio: '8.5 / 11', maxHeight: '310px' }}
            >
              {/* Subtle background watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <FrissLawEmblem size={240} color="#203F6E" accentColor="#203F6E" />
              </div>

              {/* Header */}
              <div className="flex items-start justify-between border-b border-slate-200 pb-2.5 mb-3">
                <FrissLawHorizontalLogo theme="light" className="scale-75 origin-left" />
                <div className="text-right text-[8px] text-slate-500 leading-tight">
                  <strong className="text-[#203F6E] block font-caslon text-[9px]">NATALYA FRISS, ESQ.</strong>
                  <div>11 Broadway, Suite 615</div>
                  <div>New York, NY 10004</div>
                  <div>T: (646) 448-5256</div>
                </div>
              </div>

              {/* Sample Body Letter */}
              <div className="space-y-1.5 text-slate-700 leading-relaxed text-[8.5px]">
                <div className="text-slate-400 font-mono text-[7.5px]">October 14, 2026</div>
                <div className="font-semibold text-slate-800">
                  Re: Formal Representation & Filing Verification
                </div>
                <p>
                  Dear Client,
                </p>
                <p>
                  Please accept this correspondence as formal confirmation that Friss Law Firm, P.C.
                  has submitted your petition before the designated court. Our litigation team continues
                  to monitor all docket updates.
                </p>
                <p>
                  Respectfully submitted,
                </p>
                <div className="pt-1">
                  <div className="font-allura text-base text-[#203F6E]">Natalya Friss</div>
                  <div className="font-caslon text-[8px] font-bold text-slate-800">Natalya Friss, Esq.</div>
                </div>
              </div>

              {/* Footer */}
              <div className="absolute bottom-3 left-5 right-5 pt-1.5 border-t border-slate-200 flex justify-between text-[7px] text-slate-400 font-mono">
                <span>WWW.FRISSLAW.COM</span>
                <span>INFO@FRISSLAW.COM</span>
                <span>NEW YORK BAR ADMITTED</span>
              </div>
            </div>
          </div>
        </div>

        {/* #10 Business Envelope Mockup */}
        <div className="md:col-span-5 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <h4 className="font-caslon text-base font-bold text-[#203F6E] mb-2">
              No. 10 Business Envelope (4.125" × 9.50")
            </h4>

            {/* Envelope Visual */}
            <div
              className="bg-[#F8FAFC] border-2 border-slate-300 rounded p-4 relative my-3 shadow-inner select-none"
              style={{ aspectRatio: '9.5 / 4.125' }}
            >
              {/* Return Address Block (Top Left) */}
              <div className="text-[7.5px] font-lato text-slate-700 leading-tight">
                <div className="font-caslon font-bold text-[#203F6E] text-[8.5px]">
                  FRISS LAW FIRM, P.C.
                </div>
                <div>11 Broadway, Suite 615</div>
                <div>New York, NY 10004</div>
              </div>

              {/* Postage Clearance Area (Top Right) */}
              <div className="absolute top-3 right-3 w-10 h-10 border border-dashed border-slate-300 rounded flex items-center justify-center text-[7px] font-mono text-slate-400 text-center">
                USPS POSTAGE
              </div>

              {/* Delivery Address Window Area */}
              <div className="mt-4 ml-16 text-[8.5px] font-mono text-slate-600">
                <div className="text-slate-800 font-bold">HON. CLERK OF THE COURT</div>
                <div>UNITED STATES DISTRICT COURT</div>
                <div>500 PEARL STREET</div>
                <div>NEW YORK, NY 10007</div>
              </div>
            </div>

            <div className="space-y-2 text-xs font-lato text-slate-600 mt-3">
              <p>• <strong>Stock:</strong> 28lb White Wove or 70lb Strathmore Premium Paper.</p>
              <p>• <strong>Security Tint:</strong> Deep navy diagonal micro-seal pattern inside flap.</p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page18LegalDocumentsContracts: React.FC = () => {
  return (
    <PageContainer
      pageNumber={18}
      sectionNumber="06.03"
      category="6. Stationery & Print Collateral"
      title="Legal Briefs, Contracts & Pleading Paper"
      subtitle="28-Line Court Numbered Pleading Sheets & Formal Retainer Agreement Templates"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center">
        {/* Court Pleading Paper Mockup */}
        <div className="md:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-2 flex justify-between">
              <span>SUPREME COURT OF THE STATE OF NEW YORK</span>
              <span className="text-[#3092D1] font-bold">28-LINE PLEADING GRID</span>
            </div>

            {/* Pleading Sheet with Caption Block */}
            <div className="bg-white border border-slate-300 rounded p-4 font-mono text-[8px] text-slate-700 relative overflow-hidden select-none">
              {/* Double left vertical rule standard */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-300" />
              <div className="absolute left-9 top-0 bottom-0 w-px bg-slate-300" />

              {/* Caption Box */}
              <div className="ml-8 border-b border-slate-300 pb-2 mb-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div>STATE OF NEW YORK</div>
                    <div>COUNTY OF NEW YORK</div>
                    <div className="my-1 font-bold text-[#203F6E]">PLAINTIFF NAME,</div>
                    <div className="text-[7px]">Plaintiff,</div>
                    <div className="my-1">- against -</div>
                    <div className="font-bold text-[#203F6E]">DEFENDANT CORP,</div>
                    <div className="text-[7px]">Defendant.</div>
                  </div>
                  <div className="border-l border-slate-300 pl-3">
                    <div>INDEX NO. 650123/2026</div>
                    <div className="mt-2 font-bold text-[#203F6E]">
                      VERIFIED COMPLAINT & DEMAND FOR JURY TRIAL
                    </div>
                  </div>
                </div>
              </div>

              {/* Numbered lines 1 to 10 representation */}
              <div className="space-y-1">
                {[
                  "1. Plaintiff, by and through its attorneys, FRISS LAW FIRM, P.C., alleges as follows:",
                  "2. At all relevant times, Friss Law Firm, P.C. has maintained its offices at 11 Broadway, New York, NY.",
                  "3. The court possesses subject matter jurisdiction pursuant to CPLR § 301.",
                  "4. Venue is proper in the County of New York pursuant to CPLR § 503(a).",
                  "5. Plaintiff reiterates and re-alleges each paragraph with the same legal force and effect."
                ].map((line, idx) => (
                  <div key={idx} className="flex gap-2">
                    <span className="w-5 text-slate-400 text-right">{idx + 1}</span>
                    <span className="flex-1 font-lato text-[8.5px] text-slate-700">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Retainer Contract Execution & Seal Block */}
        <div className="md:col-span-5 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <h4 className="font-caslon text-base font-bold text-[#203F6E] mb-2 flex items-center gap-2">
              <Stamp className="w-4 h-4 text-[#C5A059]" />
              Contract Signing Block & Embossed Seal
            </h4>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded my-3">
              <div className="text-xs font-caslon font-bold text-[#203F6E] mb-1">
                FRISS LAW FIRM, P.C.
              </div>
              <div className="py-2">
                <AttorneySignatureGraphic
                  name="Natalya Friss"
                  title="Counselor at Law • NY Bar Admission"
                  color="#203F6E"
                />
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200">
                <span className="text-[10px] font-mono text-slate-500">OFFICIAL NOTARY SEAL:</span>
                <CorporateSealEmbossed size={64} />
              </div>
            </div>

            <div className="text-xs font-lato text-slate-600 space-y-1">
              <p>• Retainer contracts must utilize 100% Monochrome Navy for headings.</p>
              <p>• Attorney signature line must appear on the final substantive covenant page.</p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
