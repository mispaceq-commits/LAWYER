import React from 'react';

/**
 * Friss Law Firm, P.C. Vector Brand Assets
 * Faithfully constructed for the 24-page Brand Book
 */

// 1. Primary Scales of Justice Crescent Emblem
export const FrissLawEmblem: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  accentColor?: string;
}> = ({ className = "w-12 h-12", size, color = "currentColor", accentColor = "#3092D1" }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Friss Law Firm Emblem"
  >
    {/* Outer Crescent Arc */}
    <path
      d="M100 12C51.4 12 12 51.4 12 100C12 148.6 51.4 188 100 188C126.5 188 150.3 176.3 166.5 157.8C162.2 160.1 157.3 161.4 152 161.4C117.8 161.4 90 133.6 90 99.4C90 70.8 109.3 46.8 135.5 39.5C124.7 34.6 112.7 32 100 32C62.4 32 32 62.4 32 100C32 137.6 62.4 168 100 168C120.3 168 138.4 159.1 150.8 145C136.5 153.2 119.8 158 102 158C70 158 44 132 44 100C44 68 70 42 102 42C118.8 42 134 49.2 144.6 60.8C132.8 50.1 117.2 43.6 100 43.6"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M100 10C50.3 10 10 50.3 10 100C10 149.7 50.3 190 100 190C132.2 190 160.6 173.1 176.5 147.5C170.2 150.8 163 152.6 155.4 152.6C123.6 152.6 97.8 126.8 97.8 95C97.8 69.2 114.8 47.4 138.2 40.1C126.9 33.7 113.9 30 100 30C61.3 30 30 61.3 30 100C30 138.7 61.3 170 100 170C123.3 170 143.9 158.6 156.6 141.2C141.7 151 123.6 156.8 104.1 156.8C69.3 156.8 41.1 128.6 41.1 93.8C41.1 59 69.3 30.8 104.1 30.8C120.6 30.8 135.6 37.1 146.9 47.5C133.5 35.8 116 28.6 96.8 28.6"
      fill={accentColor}
    />

    {/* Central Pillar / Pedestal */}
    <path
      d="M100 44V154M92 154H108M84 158H116M96 44C96 41.8 97.8 40 100 40C102.2 40 104 41.8 104 44H96Z"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Balance Beam with Filigree Flourish */}
    <path
      d="M52 74C65 72 82 72 100 72C118 72 135 72 148 74"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M52 74C50 71 50 67 54 65C58 63 62 67 60 71"
      stroke={color}
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M148 74C150 71 150 67 146 65C142 63 138 67 140 71"
      stroke={color}
      strokeWidth="2.5"
      fill="none"
    />

    {/* Left Pan Chains & Scale Pan */}
    <line x1="52" y1="74" x2="38" y2="108" stroke={color} strokeWidth="1.8" />
    <line x1="52" y1="74" x2="66" y2="108" stroke={color} strokeWidth="1.8" />
    <path
      d="M32 108C32 118 42 122 52 122C62 122 72 118 72 108H32Z"
      fill={color}
      fillOpacity="0.2"
      stroke={color}
      strokeWidth="2.5"
    />

    {/* Right Pan Chains & Scale Pan */}
    <line x1="148" y1="74" x2="134" y2="108" stroke={color} strokeWidth="1.8" />
    <line x1="148" y1="74" x2="162" y2="108" stroke={color} strokeWidth="1.8" />
    <path
      d="M128 108C128 118 138 122 148 122C158 122 168 118 168 108H128Z"
      fill={color}
      fillOpacity="0.2"
      stroke={color}
      strokeWidth="2.5"
    />

    {/* Top Finial Point */}
    <circle cx="100" cy="38" r="4" fill={accentColor} />
  </svg>
);

// 2. Full Horizontal Logo Lockup
export const FrissLawHorizontalLogo: React.FC<{
  className?: string;
  theme?: 'dark' | 'light' | 'mono-navy' | 'mono-white';
}> = ({ className = "h-14", theme = 'light' }) => {
  const isDark = theme === 'dark' || theme === 'mono-white';
  const textColor = isDark ? '#FFFFFF' : '#203F6E';
  const accentColor = theme === 'mono-navy' ? '#203F6E' : theme === 'mono-white' ? '#FFFFFF' : '#3092D1';
  const subColor = isDark ? '#94A3B8' : '#64748B';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <FrissLawEmblem
        size={46}
        color={textColor}
        accentColor={accentColor}
        className="shrink-0"
      />
      <div className="flex flex-col justify-center">
        <div
          className="font-caslon tracking-[0.14em] text-[18px] sm:text-[20px] font-bold leading-none"
          style={{ color: textColor }}
        >
          FRISS LAW FIRM<span style={{ color: accentColor }}>, P.C.</span>
        </div>
        <div className="flex items-center gap-2 mt-1.5">
          <span
            className="font-lato text-[9.5px] sm:text-[10.5px] tracking-[0.24em] font-semibold uppercase"
            style={{ color: subColor }}
          >
            Counselors at Law
          </span>
          <span className="w-1 h-1 rounded-full bg-[#3092D1]/60" />
          <span
            className="font-lato text-[9px] sm:text-[10px] tracking-[0.2em] font-medium uppercase"
            style={{ color: subColor }}
          >
            New York
          </span>
        </div>
      </div>
    </div>
  );
};

// 3. Vertical Stacked Formal Crest Logo
export const FrissLawStackedLogo: React.FC<{
  className?: string;
  theme?: 'dark' | 'light';
}> = ({ className = "", theme = 'light' }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#203F6E';
  const accentColor = '#3092D1';
  const subColor = isDark ? '#94A3B8' : '#64748B';

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <FrissLawEmblem
        size={68}
        color={textColor}
        accentColor={accentColor}
        className="mb-3"
      />
      <div
        className="font-caslon text-xl font-bold tracking-[0.18em] leading-tight"
        style={{ color: textColor }}
      >
        FRISS LAW FIRM
      </div>
      <div
        className="font-caslon text-sm font-semibold tracking-[0.22em] mt-0.5"
        style={{ color: accentColor }}
      >
        P.C.
      </div>
      <div className="w-12 h-px bg-[#3092D1]/40 my-2" />
      <div
        className="font-lato text-[9px] tracking-[0.26em] uppercase font-semibold"
        style={{ color: subColor }}
      >
        Attorneys & Counselors at Law
      </div>
      <div
        className="font-lato text-[8px] tracking-[0.22em] uppercase mt-0.5 text-slate-400"
      >
        New York City
      </div>
    </div>
  );
};

// 4. Manhattan NYC Skyline Vector Silhouette (SDAsset 1.svg)
export const NYCSkylineGraphic: React.FC<{
  className?: string;
  color?: string;
  accent?: string;
}> = ({ className = "w-full h-32", color = "#203F6E", accent = "#3092D1" }) => (
  <svg
    viewBox="0 0 1000 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    {/* Distant Clouds / Atmospheric Layer */}
    <path
      d="M120 180C140 140 220 140 240 180H120ZM420 160C450 110 550 110 580 160H420ZM780 170C800 130 900 130 920 170H780Z"
      fill={accent}
      fillOpacity="0.08"
    />

    {/* Distant Background Skyline */}
    <path
      d="M40 340V120H70V340M100 340V80H130V340M130 340V140H170V340M260 340V110H300V340M340 340V150H380V340M650 340V130H690V340M750 340V90H780V340M820 340V140H860V340M930 340V60H960V340"
      fill={color}
      fillOpacity="0.12"
    />

    {/* Midground Silhouette with Iconic New York Architectural Towers */}
    {/* One World Trade Center Spire */}
    <polygon points="940,340 940,110 948,40 952,40 960,110 960,340" fill={color} fillOpacity="0.35" />
    <line x1="950" y1="40" x2="950" y2="10" stroke={accent} strokeWidth="3" />

    {/* Empire State Tower & Art Deco stepped crown */}
    <polygon points="45,340 45,160 52,140 52,90 56,70 58,40 60,70 64,90 64,140 71,160 71,340" fill={color} fillOpacity="0.45" />

    {/* Chrysler Building Sunburst Spire */}
    <polygon points="200,340 200,180 208,140 212,100 216,65 218,65 222,100 226,140 234,180 234,340" fill={color} fillOpacity="0.4" />

    {/* Central Statue of Liberty Silhouette */}
    <g transform="translate(470, 140) scale(0.65)">
      {/* Pedestal */}
      <rect x="25" y="190" width="70" height="70" fill={color} fillOpacity="0.5" />
      <polygon points="35,190 20,240 100,240 85,190" fill={color} fillOpacity="0.6" />
      {/* Lady Liberty Body */}
      <path
        d="M48 100C48 90 54 82 60 82C66 82 72 90 72 100L76 190H44L48 100Z"
        fill={color}
        fillOpacity="0.65"
      />
      {/* Crown */}
      <polygon points="52,82 45,68 55,75 60,65 65,75 75,68 68,82" fill={accent} />
      {/* Upraised Torch Arm */}
      <path d="M48 110L28 50L36 48L54 98Z" fill={color} fillOpacity="0.65" />
      {/* Torch Flame */}
      <ellipse cx="28" cy="42" rx="6" ry="9" fill={accent} />
      {/* Tablet in Arm */}
      <rect x="70" y="115" width="12" height="22" rx="2" transform="rotate(-15 70 115)" fill={accent} fillOpacity="0.8" />
    </g>

    {/* Primary Foreground Wall Street Financial District Massing */}
    <rect x="0" y="340" width="1000" height="1" fill={accent} />
    <rect x="110" y="90" width="60" height="250" fill={color} fillOpacity="0.6" />
    <polygon points="260,340 260,170 300,130 300,340" fill={color} fillOpacity="0.55" />
    <rect x="330" y="195" width="65" height="145" fill={color} fillOpacity="0.65" />
    <rect x="405" y="220" width="55" height="120" fill={color} fillOpacity="0.5" />
    <polygon points="575,340 575,210 610,170 645,210 645,340" fill={color} fillOpacity="0.55" />
    <rect x="650" y="145" width="80" height="195" fill={color} fillOpacity="0.6" />
    <rect x="740" y="170" width="70" height="170" fill={color} fillOpacity="0.65" />
    <rect x="830" y="200" width="50" height="140" fill={color} fillOpacity="0.5" />
    <polygon points="775,170 775,115 777,80 780,115 780,170" fill={accent} />

    {/* Baseline Water Reflection Rule */}
    <line x1="0" y1="339" x2="1000" y2="339" stroke={accent} strokeWidth="2" />
  </svg>
);

// 5. American Flag Ribbon Motif (Flag.svg / AMR.svg)
export const AmericanFlagRibbon: React.FC<{
  className?: string;
  compact?: boolean;
}> = ({ className = "w-24 h-16", compact = false }) => (
  <svg
    viewBox="0 0 240 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="American Flag Motif"
  >
    <defs>
      <clipPath id="flagWave">
        <path d="M10 30C50 10 90 50 130 30C170 10 210 50 230 30V130C210 150 170 110 130 130C90 150 50 110 10 130V30Z" />
      </clipPath>
    </defs>
    <g clipPath="url(#flagWave)">
      {/* Stripes (7 Red, 6 White) */}
      {[...Array(13)].map((_, i) => (
        <rect
          key={i}
          x="0"
          y={(i * 160) / 13}
          width="240"
          height={160 / 13 + 0.5}
          fill={i % 2 === 0 ? "#C93B2B" : "#FFFFFF"}
        />
      ))}
      {/* Canton (Blue Union) */}
      <rect x="0" y="0" width="105" height={(160 * 7) / 13} fill="#203F6E" />
      {/* Stars Grid */}
      {!compact &&
        [...Array(15)].map((_, idx) => {
          const row = Math.floor(idx / 5);
          const col = idx % 5;
          return (
            <circle
              key={idx}
              cx={14 + col * 18}
              cy={12 + row * 20}
              r="2.2"
              fill="#FFFFFF"
            />
          );
        })}
    </g>
    {/* Silk Sheen / Lighting Overlay */}
    <path
      d="M10 30C50 10 90 50 130 30C170 10 210 50 230 30V130C210 150 170 110 130 130C90 150 50 110 10 130V30Z"
      fill="url(#flagSheen)"
      fillOpacity="0.15"
    />
    <defs>
      <linearGradient id="flagSheen" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
        <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#000000" stopOpacity="0.4" />
        <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);

// 6. Luxury Caligraphic Pen (caligraphic pen.svg)
export const CaligraphicPenIcon: React.FC<{
  className?: string;
  color?: string;
  accent?: string;
}> = ({ className = "w-10 h-10", color = "#203F6E", accent = "#3092D1" }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Pen Barrel tilted at 45 degrees */}
    <g transform="rotate(45 60 60)">
      {/* Top Finial / Cap */}
      <rect x="54" y="10" width="12" height="18" rx="3" fill="#64748B" />
      {/* Barrel Body */}
      <rect x="53" y="28" width="14" height="48" rx="2" fill={color} />
      {/* Metallic Trim Ring */}
      <rect x="52" y="42" width="16" height="4" fill={accent} />
      <rect x="52" y="74" width="16" height="5" fill="#C5A059" />
      {/* Grip Section */}
      <path d="M54 79L56 94H64L66 79H54Z" fill="#334155" />
      {/* Nib (Gold & Steel Two-Tone) */}
      <polygon points="56,94 60,114 64,94" fill="#C5A059" />
      {/* Nib Slit & Breather Hole */}
      <line x1="60" y1="96" x2="60" y2="114" stroke="#1E293B" strokeWidth="1" />
      <circle cx="60" cy="102" r="1.2" fill="#1E293B" />
    </g>
  </svg>
);

// 7. Judge's Gavel & Sounding Block (judge's gavel.svg)
export const JudgesGavelIcon: React.FC<{
  className?: string;
  color?: string;
  accent?: string;
}> = ({ className = "w-10 h-10", color = "#203F6E", accent = "#C5A059" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Sounding Block Base */}
    <ellipse cx="68" cy="80" rx="24" ry="9" fill={color} fillOpacity="0.3" />
    <path
      d="M44 76C44 71 55 67 68 67C81 67 92 71 92 76V82C92 87 81 91 68 91C55 91 44 87 44 82V76Z"
      fill={color}
      stroke={accent}
      strokeWidth="1.5"
    />
    <ellipse cx="68" cy="76" rx="24" ry="9" fill="#1B3256" stroke={accent} strokeWidth="1" />

    {/* Gavel Mallet Handle */}
    <line
      x1="18"
      y1="18"
      x2="56"
      y2="58"
      stroke="#8B5A2B"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <line
      x1="18"
      y1="18"
      x2="28"
      y2="28"
      stroke={accent}
      strokeWidth="7"
      strokeLinecap="round"
    />

    {/* Mallet Head */}
    <g transform="rotate(45 62 46)">
      <rect x="46" y="34" width="32" height="24" rx="4" fill="#654321" stroke={accent} strokeWidth="1.5" />
      {/* Brass Decorative Trim Bands */}
      <rect x="52" y="34" width="4" height="24" fill={accent} />
      <rect x="68" y="34" width="4" height="24" fill={accent} />
    </g>
  </svg>
);

// 8. Legal Books / Jurisprudence Volumes (lav books.svg)
export const LawBooksIcon: React.FC<{
  className?: string;
  color?: string;
  accent?: string;
}> = ({ className = "w-10 h-10", color = "#203F6E", accent = "#3092D1" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Standing Book 1 */}
    <rect x="18" y="24" width="14" height="62" rx="2" fill={color} />
    <rect x="20" y="32" width="10" height="8" rx="1" fill="#C5A059" />
    <line x1="22" y1="46" x2="28" y2="46" stroke="#C5A059" strokeWidth="1.5" />
    <line x1="22" y1="50" x2="28" y2="50" stroke="#C5A059" strokeWidth="1.5" />

    {/* Standing Book 2 (Tilted) */}
    <g transform="rotate(12 40 50)">
      <rect x="36" y="22" width="15" height="64" rx="2" fill="#173157" stroke={accent} strokeWidth="1" />
      <rect x="38" y="34" width="11" height="12" fill={accent} fillOpacity="0.8" />
    </g>

    {/* Stacked Horizontal Books */}
    <rect x="54" y="68" width="40" height="16" rx="2" fill={color} />
    <line x1="56" y1="76" x2="92" y2="76" stroke="#C5A059" strokeWidth="1.5" />
    <rect x="58" y="52" width="34" height="16" rx="2" fill="#2E588E" />
    <line x1="60" y1="60" x2="90" y2="60" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.7" />
  </svg>
);

// 9. Lady Justice (Themis) Silhouette Graphic (Themis.svg)
export const LadyJusticeEmblem: React.FC<{
  className?: string;
  color?: string;
  accent?: string;
}> = ({ className = "w-12 h-12", color = "#C5A059", accent = "#203F6E" }) => (
  <svg
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Pedestal */}
    <rect x="30" y="106" width="40" height="8" rx="2" fill={accent} />
    <rect x="35" y="100" width="30" height="6" fill={color} />

    {/* Gown & Body */}
    <path
      d="M44 42C44 42 38 68 36 98H64C62 68 56 42 56 42H44Z"
      fill={color}
      fillOpacity="0.85"
    />
    <path
      d="M48 24C45 24 43 27 43 30C43 36 46 40 50 40C54 40 57 36 57 30C57 27 55 24 52 24H48Z"
      fill={color}
    />
    {/* Blindfold */}
    <rect x="43" y="28" width="14" height="3" fill={accent} rx="1" />

    {/* Upraised Arm with Balanced Scales */}
    <path d="M44 40L24 28" stroke={color} strokeWidth="3" strokeLinecap="round" />
    {/* Mini Scales */}
    <line x1="14" y1="30" x2="34" y2="30" stroke={color} strokeWidth="2" />
    <line x1="16" y1="30" x2="12" y2="42" stroke={color} strokeWidth="1" />
    <line x1="16" y1="30" x2="20" y2="42" stroke={color} strokeWidth="1" />
    <path d="M10 42C10 45 14 47 16 47C18 47 22 45 22 42H10Z" fill={color} />

    <line x1="32" y1="30" x2="28" y2="42" stroke={color} strokeWidth="1" />
    <line x1="32" y1="30" x2="36" y2="42" stroke={color} strokeWidth="1" />
    <path d="M26 42C26 45 30 47 32 47C34 47 38 45 38 42H26Z" fill={color} />

    {/* Downward Sword of Truth */}
    <line x1="58" y1="42" x2="72" y2="70" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="68" y1="65" x2="78" y2="92" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="65" y1="68" x2="75" y2="64" stroke={color} strokeWidth="2" />
  </svg>
);

// 10. Official Notary & Corporate Embossed Seal Stamp
export const CorporateSealEmbossed: React.FC<{
  className?: string;
  size?: number;
  textColor?: string;
  borderColor?: string;
}> = ({
  className = "w-28 h-28",
  size = 112,
  textColor = "#203F6E",
  borderColor = "#C5A059"
}) => (
  <div
    className={`relative rounded-full flex items-center justify-center p-2 select-none border-2 border-dashed ${className}`}
    style={{
      width: size,
      height: size,
      borderColor: borderColor,
      background: 'radial-gradient(circle, #FFFFFF 60%, #F8FAFC 100%)',
      boxShadow: '0 8px 24px -6px rgba(32, 63, 110, 0.15)'
    }}
  >
    <div
      className="absolute inset-1 rounded-full border border-double"
      style={{ borderColor: borderColor }}
    />
    <div className="flex flex-col items-center justify-center text-center">
      <span className="font-caslon text-[7.5px] font-bold tracking-[0.24em] uppercase" style={{ color: textColor }}>
        FRISS LAW FIRM
      </span>
      <div className="w-8 h-px bg-slate-300 my-1" />
      <FrissLawEmblem size={24} color={textColor} accentColor="#3092D1" />
      <span className="font-caslon text-[6.5px] tracking-[0.28em] font-semibold text-[#3092D1] mt-0.5">
        P.C.
      </span>
      <div className="w-8 h-px bg-slate-300 my-1" />
      <span className="font-lato text-[6px] tracking-[0.2em] font-semibold uppercase text-slate-500">
        NEW YORK SEAL
      </span>
    </div>
  </div>
);

// 11. Attorney Signature Script Asset (signature.svg)
export const AttorneySignatureGraphic: React.FC<{
  className?: string;
  name?: string;
  title?: string;
  color?: string;
}> = ({
  className = "h-14",
  name = "Natalya Friss",
  title = "Founding Partner & Counselor at Law",
  color = "#203F6E"
}) => (
  <div className={`flex flex-col ${className}`}>
    <div
      className="font-allura text-3xl sm:text-4xl leading-none select-none tracking-wide"
      style={{ color: color }}
    >
      {name}
    </div>
    <div className="w-48 h-px bg-slate-300 mt-2 mb-1" />
    <div className="font-caslon text-[11px] font-bold tracking-wider" style={{ color: color }}>
      {name}, Esq.
    </div>
    <div className="font-lato text-[9px] uppercase tracking-widest text-slate-500 font-semibold">
      {title}
    </div>
  </div>
);
