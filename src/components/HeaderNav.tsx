import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Columns,
  Grid,
  Printer,
  Sliders,
  Palette,
  Type,
  Menu,
  FileDown
} from 'lucide-react';
import { BRAND_PAGES } from '../data/brandbookData';
import { FrissLawEmblem } from '../assets/brandAssets';

interface HeaderNavProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  viewMode: 'single' | 'spread' | 'grid' | 'print-all';
  onViewModeChange: (mode: 'single' | 'spread' | 'grid' | 'print-all') => void;
  onToggleTOC: () => void;
  onOpenTools: (tool: 'colors' | 'typography' | 'assets') => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  viewMode,
  onViewModeChange,
  onToggleTOC,
  onOpenTools,
}) => {
  const handlePrint = () => {
    onViewModeChange('print-all');
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <header className="no-print sticky top-0 z-40 bg-[#0B1728]/95 backdrop-blur-md border-b border-slate-800 text-white px-4 py-2.5 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Brand & TOC Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTOC}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-2 text-xs font-lato cursor-pointer"
            title="Open Table of Contents (24 Pages)"
          >
            <Menu className="w-4 h-4 text-[#3092D1]" />
            <span className="hidden sm:inline font-semibold">Contents</span>
          </button>

          <div className="flex items-center gap-2.5">
            <FrissLawEmblem size={24} color="#FFFFFF" accentColor="#3092D1" />
            <div>
              <div className="font-caslon text-xs sm:text-sm font-bold tracking-wider leading-none flex items-center gap-1.5">
                <span>FRISS LAW FIRM</span>
                <span className="text-[#3092D1] hidden md:inline">• Brand Book</span>
              </div>
              <div className="font-lato text-[9px] text-slate-400 tracking-widest uppercase">
                24-Page Design Guidelines
              </div>
            </div>
          </div>
        </div>

        {/* Center: Pagination Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            disabled={currentPage <= 1}
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            className="p-1.5 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Previous Page (Arrow Left)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Quick Page Jump Dropdown */}
          <div className="flex items-center bg-slate-800/90 border border-slate-700/80 rounded px-2.5 py-1 text-xs font-mono">
            <span className="text-slate-400 mr-1 text-[10px] hidden sm:inline">PAGE</span>
            <select
              value={currentPage}
              onChange={(e) => onPageChange(Number(e.target.value))}
              className="bg-transparent text-white font-bold text-xs focus:outline-none cursor-pointer pr-1"
            >
              {BRAND_PAGES.map((p) => (
                <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                  {String(p.id).padStart(2, '0')} — {p.title}
                </option>
              ))}
            </select>
            <span className="text-slate-400 text-[11px]">/ {totalPages}</span>
          </div>

          <button
            disabled={currentPage >= totalPages}
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            className="p-1.5 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Next Page (Arrow Right)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: View Modes & Interactive Tools */}
        <div className="flex items-center gap-2">
          {/* View Mode Segmented Control */}
          <div className="hidden lg:flex items-center rounded-lg bg-slate-900/80 border border-slate-700/80 p-0.5 text-xs font-lato">
            <button
              onClick={() => onViewModeChange('single')}
              className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'single' ? 'bg-[#203F6E] text-white font-bold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Single Page Reader View"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Single</span>
            </button>
            <button
              onClick={() => onViewModeChange('spread')}
              className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'spread' ? 'bg-[#203F6E] text-white font-bold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Two-Page Editorial Spread View"
            >
              <Columns className="w-3.5 h-3.5" />
              <span>Spread</span>
            </button>
            <button
              onClick={() => onViewModeChange('grid')}
              className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-[#203F6E] text-white font-bold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Grid Overview of All 24 Pages"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Gallery</span>
            </button>
          </div>

          {/* Quick Tools */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => onOpenTools('colors')}
              className="p-1.5 sm:px-2 sm:py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-lato flex items-center gap-1 cursor-pointer"
              title="Color Swatches & Copy HEX"
            >
              <Palette className="w-3.5 h-3.5 text-[#3092D1]" />
              <span className="hidden xl:inline text-[11px]">Colors</span>
            </button>

            <button
              onClick={() => onOpenTools('typography')}
              className="p-1.5 sm:px-2 sm:py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-lato flex items-center gap-1 cursor-pointer"
              title="Typography Interactive Inspector"
            >
              <Type className="w-3.5 h-3.5 text-[#3092D1]" />
              <span className="hidden xl:inline text-[11px]">Fonts</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-2.5 py-1 rounded bg-[#3092D1] hover:bg-[#2080BC] text-white text-xs font-lato font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              title="Print or Export Full 24-Page Brand Book to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export PDF</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
