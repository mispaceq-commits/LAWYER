import React, { useState } from 'react';
import { X, Search, BookOpen, ChevronRight, CheckCircle } from 'lucide-react';
import { BRAND_PAGES } from '../data/brandbookData';
import { FrissLawEmblem } from '../assets/brandAssets';

interface SidebarTOCProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: number;
  onSelectPage: (page: number) => void;
}

export const SidebarTOC: React.FC<SidebarTOCProps> = ({
  isOpen,
  onClose,
  currentPage,
  onSelectPage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredPages = BRAND_PAGES.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group pages by category
  const categories = Array.from(new Set(BRAND_PAGES.map((p) => p.category)));

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <div className="relative z-10 w-full max-w-md bg-[#0F1E36] text-white h-full shadow-2xl flex flex-col border-r border-slate-700/80">
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FrissLawEmblem size={24} color="#FFFFFF" accentColor="#3092D1" />
            <div>
              <h3 className="font-caslon text-base font-bold tracking-wide">
                Table of Contents
              </h3>
              <p className="font-lato text-[11px] text-slate-400">
                24-Page Visual Identity Manual
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-slate-800/80 bg-slate-900/40">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics (e.g. business cards, color, fonts)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#3092D1]"
            />
          </div>
        </div>

        {/* Page List by Categories */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {searchQuery ? (
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#3092D1] mb-2">
                Search Results ({filteredPages.length})
              </div>
              {filteredPages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => {
                    onSelectPage(page.id);
                    onClose();
                  }}
                  className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                    currentPage === page.id
                      ? 'bg-[#203F6E] border-[#3092D1] text-white shadow-sm'
                      : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#3092D1] font-bold">
                        P.{String(page.id).padStart(2, '0')}
                      </span>
                      <span className="font-caslon text-xs font-bold truncate">
                        {page.title}
                      </span>
                    </div>
                    <div className="font-lato text-[11px] text-slate-400 truncate mt-0.5">
                      {page.subtitle}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                </button>
              ))}
            </div>
          ) : (
            categories.map((cat) => {
              const pagesInCat = BRAND_PAGES.filter((p) => p.category === cat);
              return (
                <div key={cat} className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#3092D1] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C93B2B]" />
                    <span>{cat}</span>
                  </div>

                  <div className="space-y-1.5">
                    {pagesInCat.map((page) => {
                      const isActive = currentPage === page.id;
                      return (
                        <button
                          key={page.id}
                          onClick={() => {
                            onSelectPage(page.id);
                            onClose();
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                            isActive
                              ? 'bg-[#203F6E] border-[#3092D1] text-white shadow-sm'
                              : 'bg-slate-800/30 border-transparent text-slate-300 hover:bg-slate-800/70 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3 overflow-hidden">
                            <span
                              className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${
                                isActive
                                  ? 'bg-white/20 text-white'
                                  : 'bg-slate-800 text-slate-400'
                              }`}
                            >
                              {String(page.id).padStart(2, '0')}
                            </span>
                            <div className="truncate">
                              <div className="font-caslon text-xs font-bold truncate">
                                {page.title}
                              </div>
                              <div className="font-lato text-[10px] text-slate-400 truncate">
                                {page.subtitle}
                              </div>
                            </div>
                          </div>
                          <ChevronRight
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isActive ? 'text-[#3092D1]' : 'text-slate-600'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/60 text-xs font-lato text-slate-400 flex items-center justify-between">
          <span>Friss Law Firm, P.C. © 2026</span>
          <span className="font-mono text-[#3092D1] font-bold">24 PAGES TOTAL</span>
        </div>
      </div>
    </div>
  );
};
