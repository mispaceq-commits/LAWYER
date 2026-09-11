import React from 'react';
import { PageContainer } from '../PageContainer';
import {
  FrissLawEmblem,
  FrissLawHorizontalLogo,
  FrissLawStackedLogo,
  NYCSkylineGraphic,
  CorporateSealEmbossed
} from '../../assets/brandAssets';
import {
  Monitor,
  Smartphone,
  Share2,
  Folder,
  Building,
  Check,
  ChevronRight,
  ShieldCheck,
  Phone
} from 'lucide-react';

export const Page19DigitalWebsiteUI: React.FC = () => {
  return (
    <PageContainer
      pageNumber={19}
      sectionNumber="07.01"
      category="7. Digital & Environmental Systems"
      title="Digital Ecosystem & Responsive Website Design"
      subtitle="Clean, High-Conversion American Law Web Interface Architecture (Desktop & Mobile)"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center">
        {/* Desktop Web Mockup */}
        <div className="md:col-span-8 bg-[#F8FAFC] border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
              <div className="flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5 text-[#3092D1]" />
                <span>DESKTOP HOMEPAGE UI (WWW.FRISSLAW.COM)</span>
              </div>
              <span>RETINA DISPLAY 1440PX</span>
            </div>

            {/* Browser Frame */}
            <div className="bg-white rounded-lg border border-slate-300 shadow-sm overflow-hidden select-none">
              {/* Browser Address Bar */}
              <div className="bg-slate-100 px-3 py-1.5 border-b border-slate-200 flex items-center gap-2 text-[9px] text-slate-500 font-mono">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-rose-400" />
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 bg-white px-3 py-0.5 rounded text-center text-slate-600 border border-slate-200">
                  https://www.frisslaw.com/index.html
                </div>
              </div>

              {/* Website Header */}
              <div className="px-5 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between">
                <FrissLawHorizontalLogo theme="light" className="scale-75 origin-left" />
                <div className="flex items-center gap-4 text-[10px] font-lato text-slate-600 font-medium">
                  <span className="text-[#203F6E] font-bold">Practice Areas</span>
                  <span>Attorneys</span>
                  <span>Client Results</span>
                  <span>Contact</span>
                  <button className="px-3 py-1 rounded bg-[#3092D1] text-white text-[10px] font-bold">
                    Free Consultation
                  </button>
                </div>
              </div>

              {/* Website Hero Section */}
              <div className="p-6 bg-gradient-to-r from-[#0F1E36] to-[#203F6E] text-white relative overflow-hidden">
                <div className="relative z-10 max-w-sm">
                  <div className="inline-block text-[9px] uppercase tracking-widest text-[#3092D1] font-bold mb-1">
                    New York City Counselors at Law
                  </div>
                  <h3 className="font-caslon text-xl font-bold leading-tight">
                    Fierce Advocacy. Proven Composure.
                  </h3>
                  <p className="text-[10px] text-slate-300 mt-1.5 leading-relaxed font-lato">
                    Protecting clients across New York in Civil Litigation, Immigration & Family Law.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded bg-[#3092D1] text-white text-[10px] font-bold">
                      Call (646) 448-5256
                    </span>
                    <span className="text-[9px] text-slate-300">11 Broadway, Suite 615</span>
                  </div>
                </div>

                {/* Subtle Skyline Backdrop */}
                <div className="absolute right-0 bottom-0 w-1/2 opacity-25 pointer-events-none">
                  <NYCSkylineGraphic className="w-full h-24" color="#FFFFFF" accent="#3092D1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Viewport Architecture */}
        <div className="md:col-span-4 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#203F6E]">
              <Smartphone className="w-4 h-4 text-[#3092D1]" />
              <h4 className="font-caslon text-base font-bold">
                Mobile Web Experience
              </h4>
            </div>

            {/* Mobile Viewport Phone Mockup */}
            <div className="w-48 mx-auto bg-slate-900 rounded-2xl p-2 shadow-lg border border-slate-700">
              <div className="bg-white rounded-xl overflow-hidden p-2 text-center text-[9px]">
                <FrissLawHorizontalLogo theme="light" className="scale-50 origin-center mb-1" />
                <div className="bg-[#203F6E] text-white p-2 rounded text-[8px] font-caslon font-bold">
                  Schedule Free Case Review
                </div>
                <div className="mt-2 space-y-1 text-left text-[7.5px] font-lato text-slate-600">
                  <div className="p-1 rounded bg-slate-50 border border-slate-200">
                    ⚖ Civil Litigation
                  </div>
                  <div className="p-1 rounded bg-slate-50 border border-slate-200">
                    🏛 Immigration Law
                  </div>
                  <div className="p-1 rounded bg-slate-50 border border-slate-200">
                    🤝 Family & Matrimonial
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs font-lato text-slate-600 space-y-1 mt-3">
              <p>• Fast, thumb-friendly tap targets (minimum 44×44px).</p>
              <p>• High-contrast click-to-call button anchored to viewport.</p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page20SocialMediaSuite: React.FC = () => {
  return (
    <PageContainer
      pageNumber={20}
      sectionNumber="07.02"
      category="7. Digital & Environmental Systems"
      title="Social Media Identity & Thought Leadership"
      subtitle="Executive LinkedIn Presence and Instagram Legal Insight Publications"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center">
        {/* LinkedIn Executive Banner */}
        <div className="md:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
              <span>LINKEDIN EXECUTIVE HEADER (1584 × 396 PX)</span>
              <span className="text-[#3092D1] font-bold">OFFICIAL PROFILE</span>
            </div>

            {/* LinkedIn Banner Mockup */}
            <div className="rounded-lg overflow-hidden border border-slate-300 shadow-sm">
              <div className="h-28 bg-[#0F1E36] p-4 flex items-center justify-between text-white relative overflow-hidden">
                <div className="relative z-10">
                  <FrissLawHorizontalLogo theme="dark" className="scale-90 origin-left" />
                  <div className="font-lato text-[10px] tracking-widest text-[#3092D1] uppercase mt-2 font-bold">
                    Strategic Litigation • U.S. Immigration • Family Law
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 opacity-20 w-48 pointer-events-none">
                  <NYCSkylineGraphic className="w-full h-20" color="#FFFFFF" accent="#3092D1" />
                </div>
              </div>

              {/* LinkedIn Profile Info Bar */}
              <div className="bg-white p-3 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-white shadow -mt-6 bg-[#203F6E] flex items-center justify-center text-white font-caslon font-bold text-xs">
                  NF
                </div>
                <div>
                  <div className="font-caslon text-xs font-bold text-slate-800">
                    Natalya Friss, Esq.
                  </div>
                  <div className="font-lato text-[10px] text-slate-500">
                    Managing Partner at Friss Law Firm, P.C. • New York Bar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Legal Insight Post (1080 × 1080 px) */}
        <div className="md:col-span-5 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <h4 className="font-caslon text-base font-bold text-[#203F6E] mb-2">
              Instagram Legal Insights (1:1 Square)
            </h4>

            {/* Square Post Mockup */}
            <div
              className="w-48 mx-auto bg-[#203F6E] text-white rounded-lg p-4 flex flex-col justify-between shadow-md relative select-none"
              style={{ aspectRatio: '1 / 1' }}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <FrissLawEmblem size={20} color="#FFFFFF" accentColor="#3092D1" />
                <span className="text-[7.5px] font-mono tracking-widest uppercase text-[#3092D1]">
                  LEGAL ALERT
                </span>
              </div>

              <div className="my-auto text-center">
                <div className="font-caslon text-xs font-bold leading-tight">
                  "Understanding New York Commercial Lease Guarantees in 2026"
                </div>
                <div className="w-8 h-0.5 bg-[#3092D1] mx-auto my-2" />
                <p className="text-[8px] text-slate-300 font-lato">
                  Key statutory protections every business owner must know before signing.
                </p>
              </div>

              <div className="flex items-center justify-between text-[7px] text-slate-400 font-mono pt-2 border-t border-white/10">
                <span>FRISS LAW FIRM</span>
                <span>SWIPE FOR INSIGHTS →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page21CorporateFolders: React.FC = () => {
  return (
    <PageContainer
      pageNumber={21}
      sectionNumber="07.03"
      category="7. Digital & Environmental Systems"
      title="Presentation Folders & Client Retainer Kits"
      subtitle={'9.0" × 12.0" Deep Navy Two-Pocket Portfolio with Silver Foil Hot-Stamping'}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center">
        {/* Presentation Folder Mockup */}
        <div className="md:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-2 flex justify-between">
              <span>PRESENTATION FOLDER (9&quot; × 12&quot; CLOSED)</span>
              <span className="text-[#3092D1] font-bold">INTERIOR DUAL POCKETS</span>
            </div>

            {/* Folder Exterior Visual */}
            <div
              className="bg-[#11223B] rounded-lg p-6 shadow-xl text-white flex flex-col justify-between relative overflow-hidden select-none border border-slate-700"
              style={{ aspectRatio: '9 / 12', maxHeight: '310px' }}
            >
              {/* Silver/Blue Foil Stamped Center Logo */}
              <div className="my-auto text-center">
                <FrissLawStackedLogo theme="dark" className="scale-90" />
              </div>

              {/* Bottom Spine & Address */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[8px] font-lato text-slate-400">
                <span>11 BROADWAY, SUITE 615 • NEW YORK, NY 10004</span>
                <span className="text-[#3092D1] font-bold">(646) 448-5256</span>
              </div>
            </div>
          </div>
        </div>

        {/* Folder Specifications */}
        <div className="md:col-span-5 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#203F6E]">
              <Folder className="w-4 h-4 text-[#3092D1]" />
              <h4 className="font-caslon text-base font-bold">
                Finishing & Material Specs
              </h4>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2 bg-[#F8FAFC] rounded border border-slate-200 flex justify-between">
                <span className="font-sans text-slate-500">Dimensions</span>
                <span className="font-bold text-[#203F6E]">9&quot; × 12&quot; (18&quot; × 12&quot; Flat)</span>
              </div>
              <div className="p-2 bg-[#F8FAFC] rounded border border-slate-200 flex justify-between">
                <span className="font-sans text-slate-500">Pocket Depth</span>
                <span className="text-slate-700">4.0&quot; with right-side card slits</span>
              </div>
              <div className="p-2 bg-[#F8FAFC] rounded border border-slate-200 flex justify-between">
                <span className="font-sans text-slate-500">Paper Stock</span>
                <span className="text-slate-700 font-bold">120lb Navy Linen Cover</span>
              </div>
              <div className="p-2 bg-[#F8FAFC] rounded border border-slate-200 flex justify-between">
                <span className="font-sans text-slate-500">Exterior Foil</span>
                <span className="text-[#3092D1] font-bold">Silver Foil Hot-Stamp</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-[11px] font-lato text-slate-500">
            Utilized for client retainer packages, court document delivery, and closing binders.
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page22EnvironmentalSignage: React.FC = () => {
  return (
    <PageContainer
      pageNumber={22}
      sectionNumber="07.04"
      category="7. Digital & Environmental Systems"
      title="Architectural Signage & Embossed Corporate Seal"
      subtitle={'11 Broadway Suite 615 Wall Plaque, Boardroom Vinyl & Notary Seal'}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center">
        {/* Wall Plaque Mockup (Brushed Brass Plaque at 11 Broadway) */}
        <div className="md:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-2 flex justify-between">
              <span>MANHATTAN HEADQUARTERS ENTRANCE</span>
              <span className="text-[#3092D1] font-bold">11 BROADWAY, SUITE 615</span>
            </div>

            {/* Brushed Brass Wall Plaque */}
            <div
              className="rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-xl border-4 relative select-none"
              style={{
                background: 'linear-gradient(135deg, #DFBA73 0%, #C5A059 50%, #9C7837 100%)',
                borderColor: '#8B6528',
                boxShadow: '0 20px 30px -10px rgba(0,0,0,0.35), inset 0 2px 4px rgba(255,255,255,0.4)',
                aspectRatio: '16 / 9',
                maxHeight: '220px'
              }}
            >
              {/* 4 Brass Standoff Screws */}
              <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-[#704E1B] border border-[#DFC489] shadow" />
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#704E1B] border border-[#DFC489] shadow" />
              <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-[#704E1B] border border-[#DFC489] shadow" />
              <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#704E1B] border border-[#DFC489] shadow" />

              {/* Plaque Text Engraving */}
              <FrissLawEmblem size={42} color="#1E2A38" accentColor="#111827" className="mb-2" />
              <div className="font-caslon text-xl font-bold tracking-[0.16em] text-[#1E2A38] drop-shadow-sm">
                FRISS LAW FIRM, P.C.
              </div>
              <div className="font-lato text-[9px] uppercase tracking-[0.24em] text-[#1E2A38] font-bold mt-1">
                Attorneys & Counselors at Law • Suite 615
              </div>
            </div>
          </div>
        </div>

        {/* Right: Boardroom Frosted Vinyl & Embossed Notary Seal */}
        <div className="md:col-span-5 flex flex-col gap-4 h-full">
          {/* Frosted Glass Decal */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 flex-1 flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-caslon text-xs font-bold text-[#203F6E] block mb-1">
                Boardroom Glass Decal (Etched Vinyl)
              </span>
              <p className="text-[11px] font-lato text-slate-500 mb-2">
                Dusted crystal frosted vinyl applied at 56&quot; eye-line center.
              </p>
              <div className="h-12 bg-slate-200/50 rounded flex items-center justify-center border border-dashed border-slate-300">
                <span className="font-caslon text-xs text-slate-500 tracking-[0.2em] font-semibold">
                  FRISS LAW FIRM • CONFERENCE A
                </span>
              </div>
            </div>
          </div>

          {/* Physical Embosser Seal */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 flex items-center justify-between shadow-sm">
            <div>
              <span className="font-caslon text-xs font-bold text-[#203F6E] block">
                Official Corporate Embosser
              </span>
              <span className="text-[10px] font-lato text-slate-500">
                2.0&quot; Round steel die for certificates and oaths.
              </span>
            </div>
            <CorporateSealEmbossed size={72} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
