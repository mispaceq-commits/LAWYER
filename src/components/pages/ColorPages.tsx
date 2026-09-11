import React from 'react';
import { PageContainer } from '../PageContainer';
import { PRIMARY_PALETTE, NEUTRAL_PALETTE } from '../../data/brandbookData';
import { Copy, Check, Info, ShieldCheck } from 'lucide-react';

export const Page10PrimaryColors: React.FC = () => {
  const [copiedHex, setCopiedHex] = React.useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <PageContainer
      pageNumber={10}
      sectionNumber="03.01"
      category="3. Color Architecture"
      title="Primary Color Palette"
      subtitle="The Tonal Triad of American Judicial Authority: Navy, Blue & Optic White"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        {/* Swatch 1: Friss Navy */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between shadow-sm">
          <div>
            <div className="h-32 bg-[#203F6E] p-4 flex flex-col justify-between text-white relative">
              <span className="text-[10px] font-mono tracking-widest uppercase opacity-80">
                DOMINANT (60%)
              </span>
              <div className="flex items-end justify-between">
                <span className="font-caslon text-xl font-bold">Friss Navy</span>
                <button
                  onClick={() => copyToClipboard('#203F6E')}
                  className="px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-[11px] font-mono flex items-center gap-1 backdrop-blur-sm transition-colors cursor-pointer"
                  title="Click to copy HEX"
                >
                  {copiedHex === '#203F6E' ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                  #203F6E
                </button>
              </div>
            </div>

            <div className="p-4 space-y-2.5 font-mono text-xs">
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400 font-sans">Pantone</span>
                <span className="font-bold text-[#203F6E]">PMS 295 C</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400 font-sans">CMYK (Print)</span>
                <span className="text-slate-700">95, 75, 27, 15</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400 font-sans">RGB (Screen)</span>
                <span className="text-slate-700">32, 63, 110</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">HEX / CSS</span>
                <span className="text-slate-700 font-bold">#203F6E</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs font-lato text-slate-600 leading-relaxed">
            The sovereign anchor of Friss Law Firm. Evokes composure, judicial tradition, institutional gravitas,
            and confidence in federal and state proceedings.
          </div>
        </div>

        {/* Swatch 2: Friss Blue */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between shadow-sm">
          <div>
            <div className="h-32 bg-[#3092D1] p-4 flex flex-col justify-between text-white relative">
              <span className="text-[10px] font-mono tracking-widest uppercase opacity-90">
                SECONDARY (25%)
              </span>
              <div className="flex items-end justify-between">
                <span className="font-caslon text-xl font-bold">Friss Blue</span>
                <button
                  onClick={() => copyToClipboard('#3092D1')}
                  className="px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-[11px] font-mono flex items-center gap-1 backdrop-blur-sm transition-colors cursor-pointer"
                  title="Click to copy HEX"
                >
                  {copiedHex === '#3092D1' ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                  #3092D1
                </button>
              </div>
            </div>

            <div className="p-4 space-y-2.5 font-mono text-xs">
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400 font-sans">Pantone</span>
                <span className="font-bold text-[#3092D1]">PMS 2925 C</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400 font-sans">CMYK (Print)</span>
                <span className="text-slate-700">75, 32, 0, 0</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400 font-sans">RGB (Screen)</span>
                <span className="text-slate-700">48, 146, 209</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">HEX / CSS</span>
                <span className="text-slate-700 font-bold">#3092D1</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs font-lato text-slate-600 leading-relaxed">
            Brings vibrant clarity and contemporary energy. Used for digital interactive states, key accents,
            dividing rules, and client call-to-actions.
          </div>
        </div>

        {/* Swatch 3: Optic White */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between shadow-sm">
          <div>
            <div className="h-32 bg-white border-b border-slate-200 p-4 flex flex-col justify-between text-slate-800 relative">
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                SUBSTRATE / SPACE
              </span>
              <div className="flex items-end justify-between">
                <span className="font-caslon text-xl font-bold text-[#203F6E]">Optic White</span>
                <button
                  onClick={() => copyToClipboard('#FFFFFF')}
                  className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-[11px] font-mono flex items-center gap-1 transition-colors cursor-pointer text-slate-700"
                  title="Click to copy HEX"
                >
                  {copiedHex === '#FFFFFF' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  #FFFFFF
                </button>
              </div>
            </div>

            <div className="p-4 space-y-2.5 font-mono text-xs">
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400 font-sans">Pantone</span>
                <span className="font-bold text-slate-600">Opaque White</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400 font-sans">CMYK (Print)</span>
                <span className="text-slate-700">0, 0, 0, 0</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400 font-sans">RGB (Screen)</span>
                <span className="text-slate-700">255, 255, 255</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">HEX / CSS</span>
                <span className="text-slate-700 font-bold">#FFFFFF</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs font-lato text-slate-600 leading-relaxed">
            Whitespace is treated as an active architectural material. Generous unprinted space gives every
            document an unmistakable aura of prestige and executive calm.
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page11AccentAndNeutrals: React.FC = () => {
  return (
    <PageContainer
      pageNumber={11}
      sectionNumber="03.02"
      category="3. Color Architecture"
      title="Accent Red & Supporting Neutral Spectrum"
      subtitle="Strict Usage Governance on Crimson Accent Red & WCAG AAA Contrast Ratios"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1">
        {/* Left Column: Crimson Red Micro-Accent */}
        <div className="md:col-span-5 bg-white border border-rose-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] text-rose-700 font-bold uppercase tracking-wider bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                CRITICAL PROTOCOL: ≤ 3% USAGE
              </span>
              <span className="text-[10px] text-slate-400 font-mono">PANTONE 180 C</span>
            </div>

            <div className="h-20 bg-[#C93B2B] rounded-lg p-3 text-white flex items-end justify-between mb-3 shadow-inner">
              <span className="font-caslon text-lg font-bold">Crimson Accent Red</span>
              <span className="font-mono text-xs bg-black/20 px-2 py-0.5 rounded">#C93B2B</span>
            </div>

            <h4 className="font-caslon text-sm font-bold text-slate-800 mb-2">
              Approved Applications for Red:
            </h4>
            <ul className="space-y-1.5 text-xs font-lato text-slate-600">
              <li className="flex items-start gap-1.5">
                <span className="text-[#C93B2B] font-bold">✓</span>
                <span>Subtle legal wax seal graphic accents.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#C93B2B] font-bold">✓</span>
                <span>Critical litigation filing deadline markers.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#C93B2B] font-bold">✓</span>
                <span>Micro dividing pin-stripe in multi-color flags.</span>
              </li>
            </ul>

            <div className="mt-3 p-2.5 rounded bg-rose-50 border border-rose-200 text-[11px] font-lato text-rose-900 leading-normal">
              <strong>Strict Prohibition:</strong> Never flood page backgrounds or headlines in red.
              Red must remain an elite, razor-sharp accent (under 3% total surface area).
            </div>
          </div>
        </div>

        {/* Right Column: Supporting Neutrals & Contrast Specs */}
        <div className="md:col-span-7 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <h4 className="font-caslon text-base font-bold text-[#203F6E] mb-3">
              Executive Neutrals & Accessibility Matrix
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
              {NEUTRAL_PALETTE.map((swatch, idx) => (
                <div key={idx} className="border border-slate-200 rounded p-2 text-center bg-[#F8FAFC]">
                  <div
                    className="w-full h-8 rounded mb-1.5 border border-slate-300/40"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div className="font-caslon text-[11px] font-bold text-slate-800 truncate">
                    {swatch.name}
                  </div>
                  <div className="font-mono text-[9px] text-slate-500">{swatch.hex}</div>
                </div>
              ))}
            </div>

            {/* Accessibility Ratios */}
            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
              <div className="flex items-center gap-2 text-xs font-bold text-[#203F6E] mb-2 font-caslon">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                WCAG 2.1 Contrast Compliance Table
              </div>
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="flex justify-between items-center bg-white p-1.5 rounded border border-slate-100">
                  <span className="font-sans text-slate-600">Navy (#203F6E) on White (#FFFFFF)</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    10.4:1 (AAA Pass)
                  </span>
                </div>
                <div className="flex justify-between items-center bg-white p-1.5 rounded border border-slate-100">
                  <span className="font-sans text-slate-600">Blue (#3092D1) on Navy (#203F6E)</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    4.8:1 (AA Large Pass)
                  </span>
                </div>
                <div className="flex justify-between items-center bg-white p-1.5 rounded border border-slate-100">
                  <span className="font-sans text-slate-600">White (#FFFFFF) on Navy (#203F6E)</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    10.4:1 (AAA Pass)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
