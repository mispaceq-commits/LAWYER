import React from 'react';
import { FrissLawEmblem } from '../assets/brandAssets';

interface PageContainerProps {
  pageNumber: number;
  totalPages?: number;
  sectionNumber: string;
  category: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  hideHeaderFooter?: boolean;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  pageNumber,
  totalPages = 24,
  sectionNumber,
  category,
  title,
  subtitle,
  children,
  theme = 'light',
  hideHeaderFooter = false,
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      id={`page-${pageNumber}`}
      className={`print-page relative w-full aspect-[16/10] sm:aspect-[16/10.5] max-w-6xl mx-auto rounded-xl shadow-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
        isDark ? 'bg-[#0E1A2C] text-slate-100 border border-slate-700/50' : 'bg-white text-slate-800 border border-slate-200/90'
      }`}
      style={{
        boxShadow: isDark
          ? '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)'
          : '0 20px 45px -10px rgba(32, 63, 110, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Subtle Background Watermark on Light Pages */}
      {!isDark && (
        <div className="absolute -right-20 -bottom-20 pointer-events-none opacity-[0.025] select-none">
          <FrissLawEmblem size={480} color="#203F6E" accentColor="#203F6E" />
        </div>
      )}

      {/* Top Running Header */}
      {!hideHeaderFooter && (
        <div
          className={`px-8 sm:px-12 pt-6 sm:pt-8 pb-4 flex items-center justify-between border-b ${
            isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-100 text-slate-500'
          }`}
        >
          <div className="flex items-center gap-3">
            <FrissLawEmblem size={22} color={isDark ? '#FFFFFF' : '#203F6E'} accentColor="#3092D1" />
            <div className="flex items-center gap-2">
              <span className={`font-caslon text-xs tracking-[0.16em] font-bold ${isDark ? 'text-white' : 'text-[#203F6E]'}`}>
                FRISS LAW FIRM, P.C.
              </span>
              <span className="text-slate-300 text-xs">|</span>
              <span className="font-lato text-[11px] tracking-wider uppercase font-semibold text-[#3092D1]">
                Brand Guidelines
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-lato">
            <span className="hidden sm:inline-block tracking-widest text-[10px] uppercase font-semibold text-slate-400">
              {category}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              SEC {sectionNumber}
            </span>
          </div>
        </div>
      )}

      {/* Main Page Canvas Area */}
      <div className="flex-1 px-8 sm:px-12 py-5 sm:py-6 overflow-hidden flex flex-col">
        {!hideHeaderFooter && (
          <div className="mb-5 sm:mb-6">
            <div className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3092D1] mb-1 font-lato">
              <span>Section {sectionNumber}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C93B2B]" />
              <span>{category}</span>
            </div>
            <h2
              className={`font-caslon text-2xl sm:text-3xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-[#203F6E]'
              }`}
            >
              {title}
            </h2>
            <p className={`text-xs sm:text-sm font-lato mt-1 tracking-wide ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {subtitle}
            </p>
          </div>
        )}

        <div className="flex-1 min-h-0 flex flex-col justify-between">
          {children}
        </div>
      </div>

      {/* Bottom Running Footer */}
      {!hideHeaderFooter && (
        <div
          className={`px-8 sm:px-12 py-3.5 flex items-center justify-between border-t text-[11px] font-lato ${
            isDark ? 'border-slate-800/80 text-slate-500 bg-slate-900/30' : 'border-slate-100 text-slate-400 bg-slate-50/50'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-500 dark:text-slate-400">Confidential</span>
            <span>•</span>
            <span>Friss Law Firm, P.C. © 2026</span>
            <span className="hidden md:inline">
              • 11 Broadway, Suite 615, New York, NY
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono font-semibold">
            <span className="text-[#3092D1]">PAGE</span>
            <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#203F6E]'}`}>
              {String(pageNumber).padStart(2, '0')}
            </span>
            <span className="text-slate-400">/ {String(totalPages).padStart(2, '0')}</span>
          </div>
        </div>
      )}
    </div>
  );
};
