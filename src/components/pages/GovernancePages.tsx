import React from 'react';
import { PageContainer } from '../PageContainer';
import { FrissLawEmblem, FrissLawHorizontalLogo } from '../../assets/brandAssets';
import { Camera, ShieldCheck, FileCheck, HelpCircle, Mail, Globe, MapPin, CheckCircle2 } from 'lucide-react';

export const Page23ImageryPhotography: React.FC = () => {
  return (
    <PageContainer
      pageNumber={23}
      sectionNumber="08.01"
      category="8. Photography & Governance"
      title="Imagery Direction & Photography Principles"
      subtitle="Authentic, Confident, Architectural & Dignified Visual Storytelling"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center">
        {/* Left Column: 3 Pillars of Imagery */}
        <div className="md:col-span-6 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#203F6E]">
              <Camera className="w-4 h-4 text-[#3092D1]" />
              <h4 className="font-caslon text-base font-bold">
                Art Direction & Aesthetic Mood
              </h4>
            </div>

            <div className="space-y-3 font-lato text-xs text-slate-600">
              <div className="p-2.5 bg-[#F8FAFC] border-l-2 border-[#203F6E] rounded">
                <strong className="text-[#203F6E] block font-caslon text-sm">1. Authentic Attorney Portraiture</strong>
                <p>Natural window lighting, composed posture, direct eye contact. Avoid overly stiff arms-crossed poses or dramatic studio strobes.</p>
              </div>

              <div className="p-2.5 bg-[#F8FAFC] border-l-2 border-[#3092D1] rounded">
                <strong className="text-[#203F6E] block font-caslon text-sm">2. Manhattan Architectural Geometry</strong>
                <p>High-contrast, clean-lined perspectives of New York courthouses, Supreme Court columns, and Wall Street stone facades.</p>
              </div>

              <div className="p-2.5 bg-[#F8FAFC] border-l-2 border-slate-400 rounded">
                <strong className="text-[#203F6E] block font-caslon text-sm">3. Candid Legal Stewardship</strong>
                <p>Real-world scenes of counsel reviewing contracts, conferring in libraries, and preparing court filings.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Photography Rules & Color Grading */}
        <div className="md:col-span-6 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <h4 className="font-caslon text-base font-bold text-[#203F6E] mb-3">
              Color Grading & What to Avoid
            </h4>

            <div className="space-y-3 font-lato text-xs">
              <div className="p-3 rounded bg-slate-50 border border-slate-200">
                <span className="font-bold text-[#203F6E] block text-[11px] uppercase tracking-wider mb-1">
                  Color Grading Parameters
                </span>
                <p className="text-slate-600">
                  Cool neutral color balance. Shadows pushed gently toward navy (+3 to +5 blue tint),
                  with clean, natural skin tones and zero heavy filters or sepia saturation.
                </p>
              </div>

              <div className="p-3 rounded bg-rose-50 border border-rose-200 text-rose-900">
                <span className="font-bold block text-[11px] uppercase tracking-wider mb-1">
                  What to Avoid (AI Slop & Generic Tropes)
                </span>
                <p>
                  ✕ Avoid generic cheesy stock photos (e.g. isolated wooden gavels, blurry scales on desks).
                  ✕ Avoid staged adversarial handshake confrontations.
                  ✕ Avoid overly saturated or cartoonish digital renders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page24BrandGovernance: React.FC = () => {
  return (
    <PageContainer
      pageNumber={24}
      sectionNumber="08.02"
      category="8. Photography & Governance"
      title="Brand Governance, Legal Notices & Asset Index"
      subtitle="Compliance Protocols, Bar Disclaimers, and Master Asset Registry"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center">
        {/* Compliance Protocols */}
        <div className="md:col-span-6 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#203F6E]">
              <ShieldCheck className="w-4 h-4 text-[#3092D1]" />
              <h4 className="font-caslon text-base font-bold">
                Brand Stewardship & Ethical Compliance
              </h4>
            </div>

            <div className="space-y-2.5 font-lato text-xs text-slate-600">
              <p>
                <strong>Trademark Notice:</strong> "Friss Law Firm" and the Crescent Scales Emblem are proprietary service marks of Friss Law Firm, P.C.
              </p>
              <p>
                <strong>External Agency Review:</strong> All advertising, press releases, and collateral must receive written approval from Managing Attorney Natalya Friss, Esq. prior to release.
              </p>
              <p>
                <strong>Attorney Advertising Rules:</strong> NY Rules of Professional Conduct (RPC 7.1) require preservation of advertising copy for three years.
              </p>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded border border-slate-200 mt-3 text-[11px] font-lato text-slate-500">
            © 2026 Friss Law Firm, P.C. All Rights Reserved. First Edition published in New York, NY.
          </div>
        </div>

        {/* Master Asset Directory & Contact Card */}
        <div className="md:col-span-6 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#203F6E]">
              <FileCheck className="w-4 h-4 text-[#3092D1]" />
              <h4 className="font-caslon text-base font-bold">
                Master Brand Assets Archive
              </h4>
            </div>

            <div className="space-y-1.5 font-mono text-[11px] text-slate-700">
              <div className="p-2 bg-[#F8FAFC] rounded border border-slate-200 flex justify-between">
                <span>Vector Logos (.SVG / .EPS)</span>
                <span className="text-[#3092D1] font-bold">FLF_Logos_v2026.zip</span>
              </div>
              <div className="p-2 bg-[#F8FAFC] rounded border border-slate-200 flex justify-between">
                <span>Stationery Templates (.AI / .INDD)</span>
                <span className="text-[#3092D1] font-bold">FLF_Stationery_v2026.zip</span>
              </div>
              <div className="p-2 bg-[#F8FAFC] rounded border border-slate-200 flex justify-between">
                <span>Typeface Family Package</span>
                <span className="text-[#3092D1] font-bold">Google Fonts Open License</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 font-lato text-xs text-slate-600">
              <div className="font-bold text-[#203F6E] mb-1">Direct Inquiries:</div>
              <div>Natalya Friss, Esq. • Managing Partner</div>
              <div>Friss Law Firm, P.C. • 11 Broadway, Suite 615, New York, NY 10004</div>
              <div className="text-[#3092D1] font-semibold mt-0.5">Email: info@frisslaw.com • Tel: (646) 448-5256</div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
