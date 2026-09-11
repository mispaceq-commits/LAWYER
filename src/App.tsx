import React, { useState, useEffect, useCallback } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { SidebarTOC } from './components/SidebarTOC';
import { ToolsModal } from './components/ToolsModal';
import { PageRenderer } from './components/PageRenderer';
import { BRAND_PAGES } from './data/brandbookData';
import { ChevronLeft, ChevronRight, BookOpen, Layers, Printer, Grid, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'single' | 'spread' | 'grid' | 'print-all'>('single');
  const [isTOCOpen, setIsTOCOpen] = useState<boolean>(false);
  const [activeToolsModal, setActiveToolsModal] = useState<'colors' | 'typography' | 'assets' | null>(null);

  const totalPages = BRAND_PAGES.length; // 24 pages

  const handlePageChange = useCallback((newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [totalPages]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeToolsModal || isTOCOpen) {
        if (e.key === 'Escape') {
          setActiveToolsModal(null);
          setIsTOCOpen(false);
        }
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (viewMode === 'spread') {
          handlePageChange(Math.min(totalPages, currentPage + 2));
        } else {
          handlePageChange(Math.min(totalPages, currentPage + 1));
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (viewMode === 'spread') {
          handlePageChange(Math.max(1, currentPage - 2));
        } else {
          handlePageChange(Math.max(1, currentPage - 1));
        }
      } else if (e.key === 'Home') {
        handlePageChange(1);
      } else if (e.key === 'End') {
        handlePageChange(totalPages);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages, viewMode, activeToolsModal, isTOCOpen, handlePageChange]);

  // Quick navigation bookmarks
  const quickBookmarks = [
    { label: "Cover", page: 1 },
    { label: "Mission", page: 2 },
    { label: "Logo", page: 5 },
    { label: "Grid", page: 6 },
    { label: "Colors", page: 10 },
    { label: "Typography", page: 12 },
    { label: "Motifs", page: 15 },
    { label: "Cards", page: 16 },
    { label: "Letterhead", page: 17 },
    { label: "Court Briefs", page: 18 },
    { label: "Website", page: 19 },
    { label: "Signage", page: 22 }
  ];

  return (
    <div className="min-h-screen bg-[#070D18] text-slate-100 flex flex-col selection:bg-[#3092D1]/30 selection:text-[#3092D1]">
      {/* Top Header Navigation */}
      <HeaderNav
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onToggleTOC={() => setIsTOCOpen(true)}
        onOpenTools={(tool) => setActiveToolsModal(tool)}
      />

      {/* Main Brand Book Viewport */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-10 flex flex-col justify-center">
        {/* VIEW MODE 1: SINGLE PAGE READER */}
        {viewMode === 'single' && (
          <div className="relative w-full flex flex-col items-center">
            {/* Prev / Next Floating Side Arrows */}
            <div className="no-print hidden xl:flex absolute -left-12 top-1/2 -translate-y-1/2 z-20">
              <button
                disabled={currentPage <= 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-[#203F6E] disabled:opacity-20 text-white flex items-center justify-center border border-slate-700 shadow-xl transition-all cursor-pointer backdrop-blur-sm"
                title="Previous Page (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            <div className="no-print hidden xl:flex absolute -right-12 top-1/2 -translate-y-1/2 z-20">
              <button
                disabled={currentPage >= totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-[#203F6E] disabled:opacity-20 text-white flex items-center justify-center border border-slate-700 shadow-xl transition-all cursor-pointer backdrop-blur-sm"
                title="Next Page (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Animated Page Transition Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.99 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="w-full"
              >
                <PageRenderer pageNumber={currentPage} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* VIEW MODE 2: TWO-PAGE SPREAD VIEW */}
        {viewMode === 'spread' && (
          <div className="w-full flex flex-col items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
              {currentPage === 1 ? (
                <div className="lg:col-span-2 max-w-4xl mx-auto w-full">
                  <PageRenderer pageNumber={1} />
                </div>
              ) : (
                <>
                  <div className="w-full">
                    <PageRenderer pageNumber={currentPage % 2 === 0 ? currentPage : currentPage - 1} />
                  </div>
                  <div className="w-full">
                    {currentPage % 2 === 0 ? (
                      currentPage + 1 <= totalPages ? (
                        <PageRenderer pageNumber={currentPage + 1} />
                      ) : null
                    ) : (
                      <PageRenderer pageNumber={currentPage} />
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* VIEW MODE 3: GRID OVERVIEW (ALL 24 PAGES) */}
        {viewMode === 'grid' && (
          <div className="w-full space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-caslon text-xl font-bold text-white">
                  Brand Book Overview (24 Pages)
                </h3>
                <p className="font-lato text-xs text-slate-400">
                  Click any thumbnail to immediately jump into focus reading mode.
                </p>
              </div>
              <button
                onClick={() => setViewMode('single')}
                className="px-3 py-1.5 rounded bg-[#3092D1] text-white text-xs font-lato font-bold hover:bg-[#2080BC] transition-colors cursor-pointer"
              >
                Back to Reader
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {BRAND_PAGES.map((page) => (
                <div
                  key={page.id}
                  onClick={() => {
                    setCurrentPage(page.id);
                    setViewMode('single');
                  }}
                  className={`group rounded-lg border overflow-hidden p-2 bg-slate-900/60 cursor-pointer transition-all hover:scale-105 ${
                    currentPage === page.id
                      ? 'border-[#3092D1] ring-2 ring-[#3092D1]/40 shadow-lg'
                      : 'border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="aspect-[16/10] bg-white rounded border border-slate-700/60 flex items-center justify-center p-2 relative overflow-hidden shadow-inner">
                    <div className="text-center select-none scale-75 transform">
                      <div className="font-mono text-[9px] text-[#3092D1] font-bold">
                        P.{String(page.id).padStart(2, '0')}
                      </div>
                      <div className="font-caslon text-[10px] font-bold text-[#203F6E] line-clamp-2 leading-tight">
                        {page.title}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-[10px] font-lato">
                    <div className="flex justify-between items-center text-slate-400 font-mono text-[9px]">
                      <span>SEC {page.sectionNumber}</span>
                      <span className="text-[#3092D1]">Pg {page.id}</span>
                    </div>
                    <div className="font-caslon font-semibold text-slate-200 truncate mt-0.5 group-hover:text-[#3092D1]">
                      {page.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW MODE 4: PRINT ALL / EXPORT PDF READY */}
        {viewMode === 'print-all' && (
          <div className="w-full space-y-12">
            <div className="no-print p-4 bg-[#203F6E] rounded-lg border border-slate-700 flex items-center justify-between text-white shadow-lg">
              <div>
                <h4 className="font-caslon text-base font-bold">
                  Print & PDF Export Mode Active
                </h4>
                <p className="font-lato text-xs text-slate-300">
                  All 24 pages are rendered consecutively with standard page breaks for clean printing.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-1.5 rounded bg-[#3092D1] hover:bg-[#2080BC] text-white text-xs font-bold font-lato transition-colors cursor-pointer shadow"
                >
                  Print to PDF
                </button>
                <button
                  onClick={() => setViewMode('single')}
                  className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-lato transition-colors cursor-pointer"
                >
                  Exit Print Mode
                </button>
              </div>
            </div>

            {/* Consecutive Stack of all 24 pages */}
            <div className="space-y-10">
              {BRAND_PAGES.map((page) => (
                <div key={page.id} className="print-page w-full">
                  <PageRenderer pageNumber={page.id} />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Bottom Sticky Quick Jump Strip */}
      {viewMode !== 'print-all' && (
        <footer className="no-print sticky bottom-0 z-30 bg-[#0B1728]/90 backdrop-blur-md border-t border-slate-800 py-2.5 px-4 text-xs font-lato">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
              <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider hidden sm:inline">
                Jump To:
              </span>
              {quickBookmarks.map((bm) => (
                <button
                  key={bm.page}
                  onClick={() => handlePageChange(bm.page)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    currentPage === bm.page
                      ? 'bg-[#3092D1] text-white shadow-sm'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {bm.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3 text-slate-400 text-[11px] shrink-0 font-mono">
              <span>Friss Law Firm, P.C.</span>
              <span>•</span>
              <span>11 Broadway, Suite 615, NY</span>
            </div>
          </div>
        </footer>
      )}

      {/* Slide-out Table of Contents Drawer */}
      <SidebarTOC
        isOpen={isTOCOpen}
        onClose={() => setIsTOCOpen(false)}
        currentPage={currentPage}
        onSelectPage={(page) => {
          handlePageChange(page);
          if (viewMode === 'grid') setViewMode('single');
        }}
      />

      {/* Interactive Tools Modal (Colors, Typography, Vector Vault) */}
      <ToolsModal
        activeTab={activeToolsModal}
        onClose={() => setActiveToolsModal(null)}
      />
    </div>
  );
}
