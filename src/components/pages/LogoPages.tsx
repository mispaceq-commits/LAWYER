import React from 'react';
import { PageContainer } from '../PageContainer';
import { FrissLawEmblem, FrissLawHorizontalLogo, FrissLawStackedLogo } from '../../assets/brandAssets';
import { Check, X, ShieldAlert, Sparkles, Grid, Eye } from 'lucide-react';

export const Page5PrimaryLogo: React.FC = () => {
  return (
    <PageContainer
      pageNumber={5}
      sectionNumber="02.01"
      category="2. Visual Identity & Marks"
      title="Primary Emblem & Signature Wordmark"
      subtitle="Anatomy, Symbolism, and Hierarchical Lockups"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center">
        {/* Left: Big Hero Logo Display */}
        <div className="md:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-lg p-8 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-4">
              FIG 1.0 — OFFICIAL HORIZONTAL LOCKUP (PRIMARY)
            </div>
            <div className="py-8 px-6 bg-white border border-slate-200/80 rounded-lg shadow-sm flex items-center justify-center">
              <FrissLawHorizontalLogo theme="light" className="scale-110 sm:scale-125" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-slate-200 text-xs font-lato">
            <div>
              <span className="text-[#3092D1] font-bold block uppercase text-[10px] tracking-wider">
                1. The Crescent Arc
              </span>
              <p className="text-slate-600 mt-1">
                A modernizing architectural crescent shielding the balanced scales, denoting proactive legal defense.
              </p>
            </div>
            <div>
              <span className="text-[#3092D1] font-bold block uppercase text-[10px] tracking-wider">
                2. Scales of Justice
              </span>
              <p className="text-slate-600 mt-1">
                Classic American jurisprudence symbol of equity, balance, and impartial application of the law.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Stacked Lockup & Sub-marks */}
        <div className="md:col-span-5 flex flex-col gap-4 h-full">
          <div className="bg-white border border-slate-200 rounded-lg p-6 flex-1 flex flex-col items-center justify-center shadow-sm">
            <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-4 text-center">
              FIG 1.1 — FORMAL VERTICAL STACKED LOCKUP
            </div>
            <FrissLawStackedLogo theme="light" />
          </div>

          <div className="bg-[#203F6E] text-white p-5 rounded-lg flex items-center justify-between">
            <div>
              <span className="font-caslon text-sm font-bold block">Standalone Emblem</span>
              <span className="font-lato text-xs text-slate-300">Favicons, watermarks & wax seals</span>
            </div>
            <FrissLawEmblem size={44} color="#FFFFFF" accentColor="#3092D1" />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page6LogoConstruction: React.FC = () => {
  return (
    <PageContainer
      pageNumber={6}
      sectionNumber="02.02"
      category="2. Visual Identity & Marks"
      title="Geometry, Construction & Alignment Grid"
      subtitle="Mathematical Proportions, Vector Curvature, and Precision Metrics"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-center">
        {/* Vector Construction Diagram */}
        <div className="md:col-span-8 bg-[#0F1E36] text-white rounded-lg p-6 relative overflow-hidden border border-slate-700 h-full flex flex-col justify-between">
          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3092D115_1px,transparent_1px),linear-gradient(to_bottom,#3092D115_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-[#3092D1] mb-2 tracking-wider">
              <span>BLUEPRINT SPECIFICATION: 1:1.618 GOLDEN RATIO</span>
              <span>VECTOR PRECISION: 0.001 PT</span>
            </div>
            <h4 className="font-caslon text-base font-semibold text-slate-200">
              Geometric Balance of the Scales & Wordmark
            </h4>
          </div>

          {/* Blueprint Visualization Center */}
          <div className="relative my-6 py-8 flex items-center justify-center">
            {/* Guide Circles */}
            <div className="absolute w-44 h-44 rounded-full border border-dashed border-[#3092D1]/40" />
            <div className="absolute w-60 h-60 rounded-full border border-[#3092D1]/20" />
            <div className="absolute w-full h-px bg-[#3092D1]/30 top-1/2" />
            <div className="absolute h-full w-px bg-[#3092D1]/30 left-1/2" />

            {/* Emblem centered */}
            <div className="relative z-10 bg-[#0F1E36]/80 p-4 rounded-xl border border-[#3092D1]/50 backdrop-blur-sm">
              <FrissLawEmblem size={130} color="#FFFFFF" accentColor="#3092D1" />
            </div>

            {/* Callout Pins */}
            <div className="absolute top-4 left-10 text-[9px] font-mono text-[#3092D1] bg-[#11223B] px-2 py-0.5 rounded border border-[#3092D1]/40">
              R = 100pt Arc Radius
            </div>
            <div className="absolute bottom-4 right-10 text-[9px] font-mono text-[#3092D1] bg-[#11223B] px-2 py-0.5 rounded border border-[#3092D1]/40">
              Δ = 45° Beam Deflection Limit
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-700/80 text-[11px] font-mono text-slate-300">
            <div>
              <span className="text-[#3092D1] block">Emblem:Wordmark</span>
              <span>Ratio: 1 : 3.82</span>
            </div>
            <div>
              <span className="text-[#3092D1] block">Baseline Offset</span>
              <span>Fixed 14.5 pt</span>
            </div>
            <div>
              <span className="text-[#3092D1] block">Stroke Tolerance</span>
              <span>Min 0.75 pt</span>
            </div>
          </div>
        </div>

        {/* Right Rules Column */}
        <div className="md:col-span-4 bg-[#F8FAFC] border border-slate-200 rounded-lg p-5 flex flex-col justify-between h-full">
          <div>
            <h4 className="font-caslon text-base font-bold text-[#203F6E] mb-3">
              Mathematical Rules
            </h4>
            <div className="space-y-3 font-lato text-xs text-slate-600">
              <div className="p-2.5 bg-white border border-slate-200 rounded">
                <strong className="text-[#203F6E] block font-semibold mb-0.5">1. Fixed Scale Symmetry</strong>
                <p>The scale pans must always remain horizontally plumb and level, signifying unyielding fairness.</p>
              </div>

              <div className="p-2.5 bg-white border border-slate-200 rounded">
                <strong className="text-[#203F6E] block font-semibold mb-0.5">2. Vector Curves Only</strong>
                <p>Never recreate the emblem with rasterized scans or auto-traced bitmaps. Only the official SVG vector asset may be reproduced.</p>
              </div>

              <div className="p-2.5 bg-white border border-slate-200 rounded">
                <strong className="text-[#203F6E] block font-semibold mb-0.5">3. Optical Wordmark Tracking</strong>
                <p>FRISS LAW FIRM uses precise 0.14em tracking in Libre Caslon Text Bold. The comma and "P.C." are tinted in Friss Blue.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-lato text-slate-500 flex items-center gap-2">
            <Grid className="w-3.5 h-3.5 text-[#3092D1]" />
            <span>Master files archived in Adobe Illustrator (.AI) & SVG.</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page7ClearSpaceAndSizing: React.FC = () => {
  return (
    <PageContainer
      pageNumber={7}
      sectionNumber="02.03"
      category="2. Visual Identity & Marks"
      title="Clear Space & Minimum Scale Standards"
      subtitle="The 'X-Height' Exclusion Perimeter and Reproduction Thresholds"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {/* Clear Space Diagram */}
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-3">
              <span>EXCLUSION PERIMETER (X-RULE)</span>
              <span className="text-[#3092D1] font-bold">X = CAP HEIGHT 'F'</span>
            </div>

            {/* Visual Box with Clear Space Zone */}
            <div className="relative p-8 bg-white border-2 border-dashed border-[#3092D1]/60 rounded-lg flex items-center justify-center my-4 overflow-hidden">
              {/* Outer boundary labels */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#3092D1] font-bold">
                X SPACE
              </div>
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#3092D1] font-bold">
                X SPACE
              </div>
              <div className="absolute left-1 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#3092D1] font-bold -rotate-90">
                X
              </div>
              <div className="absolute right-1 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#3092D1] font-bold rotate-90">
                X
              </div>

              {/* Tinted exclusion perimeter */}
              <div className="absolute inset-4 bg-[#3092D1]/5 border border-[#3092D1]/20 rounded" />

              {/* Logo inside */}
              <div className="relative z-10 p-2">
                <FrissLawHorizontalLogo theme="light" />
              </div>
            </div>

            <p className="font-lato text-xs text-slate-600 leading-relaxed">
              The minimum isolation distance <strong>'X'</strong> equals the exact cap-height of the capital
              letter <strong>'F'</strong> in "FRISS". No other graphic element, headline, border, or page trim
              may encroach upon this sacred perimeter.
            </p>
          </div>
        </div>

        {/* Minimum Size Standards */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h4 className="font-caslon text-base font-bold text-[#203F6E] mb-3">
              Minimum Reproduction Tolerances
            </h4>

            <div className="space-y-4 font-lato text-xs">
              {/* Print Threshold */}
              <div className="p-3.5 rounded bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-[#203F6E]">Print Applications</span>
                  <span className="font-mono text-[#3092D1] font-bold">Min Width: 1.25 in (32 mm)</span>
                </div>
                <p className="text-slate-600">
                  Below 1.25 inches, the fine lines of the balance scale chains begin to blur or break during offset
                  or laser printing. Never scale smaller for print.
                </p>
                <div className="mt-2 pt-2 border-t border-slate-200 flex items-center gap-3">
                  <span className="text-[10px] text-slate-400 font-mono">Actual 1.25" Print preview:</span>
                  <div className="w-[120px] py-1 border border-slate-300 bg-white px-1">
                    <FrissLawHorizontalLogo theme="light" className="scale-75 origin-left" />
                  </div>
                </div>
              </div>

              {/* Digital Display Threshold */}
              <div className="p-3.5 rounded bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-[#203F6E]">Digital Screens (Retina & Web)</span>
                  <span className="font-mono text-[#3092D1] font-bold">Min Height: 32 px</span>
                </div>
                <p className="text-slate-600">
                  For mobile headers and app navigation bars, the full horizontal mark must maintain a minimum height
                  of 32 pixels for crisp anti-aliasing.
                </p>
              </div>

              {/* Micro Icon / Favicon Standard */}
              <div className="p-3.5 rounded bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-[#203F6E]">Favicon & Micro Display (16px–24px)</span>
                  <span className="font-mono text-[#3092D1] font-bold">Emblem Only</span>
                </div>
                <p className="text-slate-600">
                  At 16px or 24px, drop the wordmark entirely and utilize the standalone circular scales emblem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page8ColorVariations: React.FC = () => {
  return (
    <PageContainer
      pageNumber={8}
      sectionNumber="02.04"
      category="2. Visual Identity & Marks"
      title="Official Logo Variations & Colorways"
      subtitle="Approved Permutations Across Light, Dark, Monochrome & Foil Substrates"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
        {/* Variation 1: Primary On Light */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div className="h-28 flex items-center justify-center bg-[#F8FAFC] rounded border border-slate-100">
            <FrissLawHorizontalLogo theme="light" />
          </div>
          <div className="mt-3 text-xs font-lato">
            <div className="flex items-center justify-between font-bold text-[#203F6E]">
              <span>1. Primary Full Color (Preferred)</span>
              <span className="text-[10px] text-emerald-600 uppercase font-mono">Standard</span>
            </div>
            <p className="text-slate-500 text-[11px] mt-0.5">
              Navy #203F6E wordmark with Friss Blue #3092D1 accent on white or light substrates.
            </p>
          </div>
        </div>

        {/* Variation 2: Reversed On Dark Navy */}
        <div className="bg-[#11223B] border border-slate-700 rounded-lg p-5 flex flex-col justify-between shadow-sm text-white">
          <div className="h-28 flex items-center justify-center bg-[#0B1728] rounded border border-slate-800">
            <FrissLawHorizontalLogo theme="dark" />
          </div>
          <div className="mt-3 text-xs font-lato">
            <div className="flex items-center justify-between font-bold text-white">
              <span>2. Inverted / Dark Navy Mode</span>
              <span className="text-[10px] text-[#3092D1] uppercase font-mono">Digital & Cover</span>
            </div>
            <p className="text-slate-400 text-[11px] mt-0.5">
              Optic White wordmark with Friss Blue #3092D1 accent against deep navy backgrounds.
            </p>
          </div>
        </div>

        {/* Variation 3: Monochrome Formal / Legal Bond */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div className="h-28 flex items-center justify-center bg-white rounded border border-slate-200">
            <FrissLawHorizontalLogo theme="mono-navy" />
          </div>
          <div className="mt-3 text-xs font-lato">
            <div className="flex items-center justify-between font-bold text-[#203F6E]">
              <span>3. Single-Tone Navy Monochrome</span>
              <span className="text-[10px] text-slate-500 uppercase font-mono">Court Filings</span>
            </div>
            <p className="text-slate-500 text-[11px] mt-0.5">
              100% Solid Navy #203F6E. Required for formal legal briefs, pleadings, and faxes.
            </p>
          </div>
        </div>

        {/* Variation 4: Gilded Gold Foil Finish */}
        <div className="bg-[#1A2638] border border-slate-700 rounded-lg p-5 flex flex-col justify-between shadow-sm text-white">
          <div className="h-28 flex items-center justify-center bg-[#131F30] rounded border border-slate-800">
            <div className="flex items-center gap-3 select-none">
              <FrissLawEmblem size={44} color="#C5A059" accentColor="#E5C78A" />
              <div>
                <div className="font-caslon text-lg font-bold tracking-[0.14em] text-[#C5A059]">
                  FRISS LAW FIRM<span className="text-[#E5C78A]">, P.C.</span>
                </div>
                <div className="font-lato text-[9px] tracking-[0.24em] uppercase text-[#E5C78A]/80 font-semibold">
                  Counselors at Law • New York
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 text-xs font-lato">
            <div className="flex items-center justify-between font-bold text-[#C5A059]">
              <span>4. Metallic Gold Foil / Emboss</span>
              <span className="text-[10px] text-amber-400 uppercase font-mono">Prestige Print</span>
            </div>
            <p className="text-slate-400 text-[11px] mt-0.5">
              Hot-stamped metallic gold foil (#C5A059) on linen folders, diplomas, and partner stationery.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page9LogoViolations: React.FC = () => {
  const violations = [
    {
      title: "1. Do Not Stretch or Distort",
      desc: "Never alter the aspect ratio horizontally or vertically.",
      wrongDemo: (
        <div className="scale-x-150 scale-y-75 transform opacity-70">
          <FrissLawHorizontalLogo theme="light" />
        </div>
      )
    },
    {
      title: "2. Do Not Alter Brand Colors",
      desc: "Never introduce unauthorized greens, purples, or orange hues.",
      wrongDemo: (
        <div className="opacity-80">
          <div className="flex items-center gap-2">
            <FrissLawEmblem size={36} color="#10B981" accentColor="#F59E0B" />
            <span className="font-caslon text-sm font-bold text-purple-600">FRISS LAW FIRM</span>
          </div>
        </div>
      )
    },
    {
      title: "3. Do Not Crowd Clear Space",
      desc: "Never place adjacent typography or borders inside the X zone.",
      wrongDemo: (
        <div className="relative border-2 border-red-500 p-0.5">
          <span className="absolute -top-3 left-0 text-[8px] bg-red-600 text-white font-mono">TEXT IN ZONE</span>
          <FrissLawHorizontalLogo theme="light" className="scale-90" />
        </div>
      )
    },
    {
      title: "4. No Busy Photo Backgrounds",
      desc: "Never place the logo over high-contrast photos without a solid tint.",
      wrongDemo: (
        <div className="w-full h-14 bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-600 flex items-center justify-center rounded">
          <FrissLawHorizontalLogo theme="light" className="scale-90" />
        </div>
      )
    },
    {
      title: "5. Do Not Rotate or Tilt",
      desc: "The logo must strictly rest upon a 0-degree horizontal baseline.",
      wrongDemo: (
        <div className="rotate-12 transform">
          <FrissLawHorizontalLogo theme="light" className="scale-90" />
        </div>
      )
    },
    {
      title: "6. No Drop Shadows or Glows",
      desc: "Never apply blur, heavy drop shadows, or bevel-emboss filters.",
      wrongDemo: (
        <div className="drop-shadow-[0_10px_8px_rgba(255,0,0,0.5)]">
          <FrissLawHorizontalLogo theme="light" className="scale-90" />
        </div>
      )
    }
  ];

  return (
    <PageContainer
      pageNumber={9}
      sectionNumber="02.05"
      category="2. Visual Identity & Marks"
      title="Unacceptable Usages & Brand Violations"
      subtitle="Strict Rules to Prevent Brand Dilution and Maintain Dignified Jurisprudence"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-1">
        {violations.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-rose-200/80 rounded-lg p-4 flex flex-col justify-between shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
              <X className="w-3.5 h-3.5" />
            </div>

            <div className="h-20 bg-rose-50/40 rounded border border-rose-100 flex items-center justify-center overflow-hidden p-2">
              {item.wrongDemo}
            </div>

            <div className="mt-3 text-xs font-lato">
              <span className="font-bold text-rose-800 block text-xs mb-0.5">
                {item.title}
              </span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-200 flex items-center gap-3 text-xs font-lato text-amber-900">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
        <span>
          <strong>Strict Enforcement:</strong> Marketing materials or legal documents violating these rules will
          not be approved by the Friss Law Firm communications committee.
        </span>
      </div>
    </PageContainer>
  );
};
