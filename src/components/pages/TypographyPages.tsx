import React from 'react';
import { PageContainer } from '../PageContainer';
import { AttorneySignatureGraphic } from '../../assets/brandAssets';
import { Type, Sparkles, AlertCircle } from 'lucide-react';

export const Page12PrimaryTypeCaslon: React.FC = () => {
  return (
    <PageContainer
      pageNumber={12}
      sectionNumber="04.01"
      category="4. Typographic System"
      title="Primary Display Typeface: Libre Caslon Text"
      subtitle="The Authoritative Voice of American Jurisprudence & Legal Scholarship"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1">
        {/* Left Column: Specimen Showcase */}
        <div className="md:col-span-6 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <span className="font-mono text-xs text-[#3092D1] font-bold">TYPE SPECIMEN NO. 1</span>
              <span className="font-lato text-xs text-slate-400">DESIGNED BY PABLO IMPALLARI</span>
            </div>

            <div className="font-caslon text-5xl font-bold text-[#203F6E] mb-2 leading-none">
              Aa Bb Gg &
            </div>

            <div className="font-caslon text-sm text-slate-500 tracking-widest uppercase mb-4">
              Libre Caslon Text • Regular / Italic / Bold
            </div>

            <div className="font-caslon text-lg text-slate-800 leading-snug p-3 bg-slate-50 rounded border border-slate-100 mb-4">
              "Equal Justice Under Law requires not only rigorous intellect, but an unwavering devotion to ethical stewardship."
            </div>

            <div className="font-caslon text-xs text-slate-500 space-y-1">
              <div className="tracking-[0.2em] uppercase text-[10px] text-[#3092D1] font-sans font-bold">
                Complete Character Glyph Set
              </div>
              <p className="tracking-wide">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </p>
              <p className="tracking-wide">
                a b c d e f g h i j k l m n o p q r s t u v w x y z
              </p>
              <p className="tracking-wide font-mono text-[11px] text-slate-700">
                0 1 2 3 4 5 6 7 8 9 & § ¶ © ® ™ $ € £
              </p>
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] font-lato text-slate-500">
            Open-source Google Font. Free for commercial print, digital, and broadcasting use.
          </div>
        </div>

        {/* Right Column: Editorial Scale & Hierarchy */}
        <div className="md:col-span-6 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <h4 className="font-caslon text-base font-bold text-[#203F6E] mb-3">
              Editorial Typographic Hierarchy
            </h4>

            <div className="space-y-3 font-lato text-xs">
              <div className="p-3 bg-[#F8FAFC] border border-slate-200 rounded">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span>DISPLAY / COVER HEADINGS</span>
                  <span className="text-[#3092D1] font-bold">40PT / LEADING 1.1 / TRACKING -0.01EM</span>
                </div>
                <div className="font-caslon text-2xl font-bold text-[#203F6E]">
                  Supreme Court of the State of New York
                </div>
              </div>

              <div className="p-3 bg-[#F8FAFC] border border-slate-200 rounded">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span>SECTION HEADLINE 1 (H1)</span>
                  <span className="text-[#3092D1] font-bold">26PT / LEADING 1.25 / BOLD</span>
                </div>
                <div className="font-caslon text-lg font-bold text-[#203F6E]">
                  Affidavit of Counsel in Support of Motion
                </div>
              </div>

              <div className="p-3 bg-[#F8FAFC] border border-slate-200 rounded">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span>SECTION SUBHEADLINE 2 (H2)</span>
                  <span className="text-[#3092D1] font-bold">18PT / LEADING 1.3 / SEMIBOLD</span>
                </div>
                <div className="font-caslon text-sm font-bold text-[#3092D1]">
                  Statement of Jurisdiction and Procedural History
                </div>
              </div>

              <div className="p-3 bg-[#F8FAFC] border border-slate-200 rounded">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span>LEGAL PULL-QUOTE</span>
                  <span className="text-[#3092D1] font-bold">15PT / ITALIC / CASLON</span>
                </div>
                <div className="font-caslon italic text-xs text-slate-700">
                  "No person shall be deprived of life, liberty, or property without due process."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page13SecondaryTypeLatoQuicksand: React.FC = () => {
  return (
    <PageContainer
      pageNumber={13}
      sectionNumber="04.02"
      category="4. Typographic System"
      title="Secondary Typefaces: Lato & Quicksand"
      subtitle="Functional Legibility for Contracts, Pleading Papers, and Modern Digital UI"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {/* Typeface 1: Lato */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
              <span className="font-mono text-xs text-[#203F6E] font-bold">LATO (BODY & LEGAL BRIEFS)</span>
              <span className="font-lato text-[11px] text-slate-400">DESIGNED BY ŁUKASZ DZIEDZIC</span>
            </div>

            <div className="font-lato text-3xl font-black text-[#203F6E] mb-1">
              Lato Sans-Serif
            </div>
            <div className="font-lato text-xs text-slate-400 tracking-wider uppercase mb-3">
              Light 300 / Regular 400 / Bold 700 / Black 900
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs font-lato space-y-2 text-slate-700 leading-relaxed">
              <p>
                <strong>Contractual Clause 14.2 (Standard Retainer):</strong> The Attorney agrees to perform legal services reasonably required to represent the Client in the referenced litigation. All billable hours, court fees, and discovery expenses shall be itemized with utmost precision on monthly statements.
              </p>
            </div>

            <div className="mt-3 text-xs font-lato text-slate-600 space-y-1">
              <span className="font-bold text-[#203F6E] block text-[11px] uppercase tracking-wider">
                Application Parameters:
              </span>
              <p>• Standard body text: 10pt–11pt with 1.6 line-height.</p>
              <p>• Legal footnotes & disclosures: 8pt–9pt with 1.4 line-height.</p>
              <p>• Tabular data, fee schedules & court captions.</p>
            </div>
          </div>
        </div>

        {/* Typeface 2: Quicksand */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
              <span className="font-mono text-xs text-[#3092D1] font-bold">QUICKSAND (UI & ACCENTS)</span>
              <span className="font-lato text-[11px] text-slate-400">GEOMETRIC HUMANIST SANS</span>
            </div>

            <div className="font-quicksand text-3xl font-bold text-[#203F6E] mb-1">
              Quicksand Geometric
            </div>
            <div className="font-quicksand text-xs text-slate-400 tracking-wider uppercase mb-3">
              Regular 400 / Medium 500 / SemiBold 600 / Bold 700
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#3092D1] text-white text-xs font-quicksand font-bold tracking-wide">
                  Schedule Free Consultation
                </span>
                <span className="px-2.5 py-1 rounded bg-[#E1F0FA] text-[#203F6E] text-xs font-quicksand font-semibold">
                  Civil Litigation
                </span>
              </div>
              <p className="font-quicksand text-xs text-slate-600">
                "Our client portal allows 24/7 access to your filings and direct communications."
              </p>
            </div>

            <div className="mt-3 text-xs font-lato text-slate-600 space-y-1">
              <span className="font-bold text-[#203F6E] block text-[11px] uppercase tracking-wider">
                Application Parameters:
              </span>
              <p>• Digital interactive buttons, badges, and status pills.</p>
              <p>• Client dashboard navigation items and mobile menus.</p>
              <p>• Social media pull-quotes and infographic labels.</p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page14AccentCalligraphyAllura: React.FC = () => {
  return (
    <PageContainer
      pageNumber={14}
      sectionNumber="04.03"
      category="4. Typographic System"
      title="Calligraphic Accent Typeface: Allura Script"
      subtitle="Attorney Endorsements, Formal Certifications & Prestige Correspondence"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center">
        {/* Left Column: Script Specimen */}
        <div className="md:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-lg p-6 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-3 uppercase">
              <span>SPECIAL ACCENT SCRIPT • TYPE TOUCH NO. 4</span>
              <span className="text-[#3092D1] font-bold">ALLURA REGULAR 400</span>
            </div>

            <div className="py-6 px-4 bg-white border border-slate-200 rounded-lg text-center my-3">
              <div className="font-allura text-4xl sm:text-5xl text-[#203F6E] leading-relaxed">
                Natalya Friss, Esq.
              </div>
              <div className="font-caslon text-xs font-bold text-[#3092D1] tracking-widest uppercase mt-1">
                Founding Partner & Counselor at Law
              </div>
            </div>

            <p className="font-lato text-xs text-slate-600 leading-relaxed mt-2">
              Allura provides a warm, authentic, human counterweight to the structural rigidity of legal serif
              and sans-serif typography. It communicates personal attorney accountability and formal commitment.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs font-lato">
            <div>
              <span className="font-bold text-[#203F6E] block">Endorsement Lines</span>
              <span className="text-slate-500">"Sincerely yours in counsel,"</span>
            </div>
            <div>
              <span className="font-bold text-[#203F6E] block">Certificate Seals</span>
              <span className="text-slate-500">"Certified True & Correct Copy"</span>
            </div>
          </div>
        </div>

        {/* Right Column: Strict Rules & Violations for Script */}
        <div className="md:col-span-5 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <h4 className="font-caslon text-base font-bold text-[#203F6E] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#3092D1]" />
              Strict Usage Governance
            </h4>

            <div className="space-y-3 font-lato text-xs">
              <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-900">
                <strong>✓ Approved:</strong> Attorney signature blocks on correspondence, holiday client greetings,
                diplomas, and prestigious commemorative invitations.
              </div>

              <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-900">
                <strong>✕ Prohibited:</strong> NEVER use Allura in all-caps (e.g. "NATALYA FRISS" becomes illegible).
                Never use Allura for body copy, legal headings, or contractual clauses.
              </div>

              <div className="p-2.5 rounded bg-amber-50 border border-amber-200 text-amber-900">
                <strong>⚠ Scale Limit:</strong> Never render Allura below 24pt. At small sizes, the fine strokes
                disappear on laser prints and low-resolution monitors.
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-lato text-slate-400">
            <AlertCircle className="w-3.5 h-3.5 text-[#C93B2B]" />
            <span>Maximum 2 lines of Allura per document or layout.</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
