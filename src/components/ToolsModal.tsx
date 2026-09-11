import React, { useState } from 'react';
import { X, Copy, Check, Palette, Type, Layers, Download } from 'lucide-react';
import { PRIMARY_PALETTE, NEUTRAL_PALETTE } from '../data/brandbookData';
import {
  FrissLawEmblem,
  FrissLawHorizontalLogo,
  FrissLawStackedLogo,
  NYCSkylineGraphic,
  AmericanFlagRibbon,
  LadyJusticeEmblem,
  JudgesGavelIcon,
  LawBooksIcon,
  CaligraphicPenIcon,
  CorporateSealEmbossed
} from '../assets/brandAssets';

interface ToolsModalProps {
  activeTab: 'colors' | 'typography' | 'assets' | null;
  onClose: () => void;
}

export const ToolsModal: React.FC<ToolsModalProps> = ({ activeTab, onClose }) => {
  const [tab, setTab] = useState<'colors' | 'typography' | 'assets'>(activeTab || 'colors');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Typography interactive sandbox state
  const [sampleText, setSampleText] = useState('Friss Law Firm, P.C. • Counselors at Law');
  const [fontSize, setFontSize] = useState(24);

  if (!activeTab) return null;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0F1E36] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex bg-slate-800 p-0.5 rounded-lg text-xs font-lato">
              <button
                onClick={() => setTab('colors')}
                className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                  tab === 'colors' ? 'bg-[#203F6E] text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Color Swatches</span>
              </button>
              <button
                onClick={() => setTab('typography')}
                className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                  tab === 'typography' ? 'bg-[#203F6E] text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Type className="w-3.5 h-3.5" />
                <span>Typography Sandbox</span>
              </button>
              <button
                onClick={() => setTab('assets')}
                className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                  tab === 'assets' ? 'bg-[#203F6E] text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Vector Vault</span>
              </button>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-800">
          {tab === 'colors' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-caslon text-lg font-bold text-[#203F6E] mb-1">
                  Brand Color Swatches & Codes
                </h3>
                <p className="font-lato text-xs text-slate-500">
                  Click any color card to quickly copy the HEX code to your clipboard.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[...PRIMARY_PALETTE, ...NEUTRAL_PALETTE].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleCopy(item.hex)}
                    className="border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:border-[#3092D1] transition-all cursor-pointer group bg-white"
                  >
                    <div
                      className="h-20 p-2 flex items-end justify-end relative"
                      style={{ backgroundColor: item.hex }}
                    >
                      <button className="px-2 py-0.5 rounded bg-black/30 text-white text-[10px] font-mono flex items-center gap-1 backdrop-blur-sm opacity-90 group-hover:opacity-100">
                        {copiedCode === item.hex ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                        {item.hex}
                      </button>
                    </div>
                    <div className="p-3 font-lato text-xs space-y-1">
                      <div className="font-caslon font-bold text-sm text-[#203F6E] truncate">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate">{item.role}</div>
                      <div className="font-mono text-[10px] text-slate-400 pt-1 border-t border-slate-100">
                        <div>RGB: {item.rgb}</div>
                        <div>CMYK: {item.cmyk}</div>
                        <div>{item.pantone}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'typography' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-caslon text-lg font-bold text-[#203F6E] mb-1">
                  Interactive Typography Inspector
                </h3>
                <p className="font-lato text-xs text-slate-500">
                  Test custom headlines, legal briefs, and client messages across all four brand fonts.
                </p>
              </div>

              {/* Controls */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-wrap gap-4 items-center justify-between">
                <input
                  type="text"
                  value={sampleText}
                  onChange={(e) => setSampleText(e.target.value)}
                  placeholder="Enter sample test copy..."
                  className="flex-1 min-w-[240px] px-3 py-1.5 bg-white border border-slate-300 rounded text-xs font-lato"
                />
                <div className="flex items-center gap-2 text-xs font-lato">
                  <span className="text-slate-500">Size:</span>
                  <input
                    type="range"
                    min="14"
                    max="48"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-28 cursor-pointer"
                  />
                  <span className="font-mono font-bold text-[#3092D1] w-8">{fontSize}px</span>
                </div>
              </div>

              {/* 4 Typefaces Rendered */}
              <div className="space-y-4">
                {/* Caslon */}
                <div className="p-4 rounded-lg border border-slate-200 bg-white">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#3092D1] mb-2 font-bold">
                    <span>1. LIBRE CASLON TEXT (EDITORIAL & DISPLAY)</span>
                    <span>font-caslon</span>
                  </div>
                  <div
                    className="font-caslon text-[#203F6E] leading-normal"
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    {sampleText}
                  </div>
                </div>

                {/* Lato */}
                <div className="p-4 rounded-lg border border-slate-200 bg-white">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#203F6E] mb-2 font-bold">
                    <span>2. LATO SANS-SERIF (BODY & CONTRACTS)</span>
                    <span>font-lato</span>
                  </div>
                  <div
                    className="font-lato text-slate-800 leading-normal"
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    {sampleText}
                  </div>
                </div>

                {/* Quicksand */}
                <div className="p-4 rounded-lg border border-slate-200 bg-white">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#3092D1] mb-2 font-bold">
                    <span>3. QUICKSAND (UI & MODERN ACCENTS)</span>
                    <span>font-quicksand</span>
                  </div>
                  <div
                    className="font-quicksand text-slate-800 leading-normal font-medium"
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    {sampleText}
                  </div>
                </div>

                {/* Allura */}
                <div className="p-4 rounded-lg border border-slate-200 bg-white">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#C93B2B] mb-2 font-bold">
                    <span>4. ALLURA SCRIPT (SIGNATURES & SEALS)</span>
                    <span>font-allura</span>
                  </div>
                  <div
                    className="font-allura text-[#203F6E] leading-normal"
                    style={{ fontSize: `${Math.max(22, fontSize * 1.3)}px` }}
                  >
                    {sampleText}
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 'assets' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-caslon text-lg font-bold text-[#203F6E] mb-1">
                  Vector Asset Vault & SVGs
                </h3>
                <p className="font-lato text-xs text-slate-500">
                  Approved vector components used throughout the Friss Law Firm design system.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="border border-slate-200 rounded-lg p-4 flex flex-col items-center justify-between bg-slate-50">
                  <FrissLawEmblem size={64} color="#203F6E" accentColor="#3092D1" />
                  <div className="text-center mt-3">
                    <span className="font-caslon text-xs font-bold text-[#203F6E] block">
                      Crescent Scales Emblem
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">logo.svg</span>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4 flex flex-col items-center justify-between bg-slate-50">
                  <LadyJusticeEmblem className="w-16 h-16" color="#C5A059" accent="#203F6E" />
                  <div className="text-center mt-3">
                    <span className="font-caslon text-xs font-bold text-[#203F6E] block">
                      Lady Justice (Themis)
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Themis.svg</span>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4 flex flex-col items-center justify-between bg-slate-50">
                  <AmericanFlagRibbon className="w-24 h-16" />
                  <div className="text-center mt-3">
                    <span className="font-caslon text-xs font-bold text-[#203F6E] block">
                      American Flag Wave
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Flag.svg / AMR.svg</span>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4 flex flex-col items-center justify-between bg-slate-50">
                  <JudgesGavelIcon className="w-16 h-16" color="#203F6E" accent="#C5A059" />
                  <div className="text-center mt-3">
                    <span className="font-caslon text-xs font-bold text-[#203F6E] block">
                      Judge's Gavel & Sounding Block
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">judge's gavel.svg</span>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4 flex flex-col items-center justify-between bg-slate-50">
                  <LawBooksIcon className="w-16 h-16" color="#203F6E" accent="#3092D1" />
                  <div className="text-center mt-3">
                    <span className="font-caslon text-xs font-bold text-[#203F6E] block">
                      Law Volumes
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">lav books.svg</span>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4 flex flex-col items-center justify-between bg-slate-50">
                  <CaligraphicPenIcon className="w-16 h-16" color="#203F6E" accent="#3092D1" />
                  <div className="text-center mt-3">
                    <span className="font-caslon text-xs font-bold text-[#203F6E] block">
                      Caligraphic Pen
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">caligraphic pen.svg</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-xs font-lato text-slate-500 flex items-center justify-between">
          <span>Friss Law Firm, P.C. • Design Resources</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#203F6E] hover:bg-[#11223B] text-white rounded font-semibold transition-colors cursor-pointer"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
