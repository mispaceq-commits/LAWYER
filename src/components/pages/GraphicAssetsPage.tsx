import React from 'react';
import { PageContainer } from '../PageContainer';
import {
  NYCSkylineGraphic,
  AmericanFlagRibbon,
  LadyJusticeEmblem,
  JudgesGavelIcon,
  LawBooksIcon,
  CaligraphicPenIcon,
  CorporateSealEmbossed
} from '../../assets/brandAssets';
import { Layers, MapPin, Feather } from 'lucide-react';

export const Page15GraphicAssets: React.FC = () => {
  return (
    <PageContainer
      pageNumber={15}
      sectionNumber="05.01"
      category="5. Graphic Language & Motifs"
      title="Brand Assets, Motifs & Jurisprudential Symbols"
      subtitle="Manhattan Skyline, Lady Justice, American Flag Wave & Courtroom Iconography"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1">
        {/* Manhattan Skyline Asset (SDAsset 1) */}
        <div className="md:col-span-8 bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#3092D1]" />
                <span className="font-caslon text-sm font-bold text-[#203F6E]">
                  Asset 01: Manhattan Financial District Skyline (SDAsset 1)
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">11 BROADWAY • NYC HERITAGE</span>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-4 mb-3 overflow-hidden">
              <NYCSkylineGraphic className="w-full h-28" color="#203F6E" accent="#3092D1" />
            </div>

            <p className="font-lato text-xs text-slate-600 leading-relaxed">
              Featuring the Statue of Liberty, One World Trade Center, and historic Lower Manhattan towers,
              this vector skyline grounds Friss Law Firm in the capital of global finance and American constitutional jurisprudence.
              Used as a subtle background watermark (5–12% opacity) on presentation folders and website footers.
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-lato text-slate-500">
            <span>Usage: Folder interiors, website footers, client portal headers.</span>
            <span className="font-mono text-[#3092D1] font-bold">Vector SVG Only</span>
          </div>
        </div>

        {/* Right Grid: Supporting Legal Assets */}
        <div className="md:col-span-4 grid grid-cols-2 gap-3">
          {/* Asset 2: Lady Justice / Themis */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 flex flex-col items-center text-center justify-between shadow-sm">
            <div className="py-2">
              <LadyJusticeEmblem className="w-10 h-10" color="#C5A059" accent="#203F6E" />
            </div>
            <div>
              <span className="font-caslon text-xs font-bold text-[#203F6E] block">
                Themis / Lady Justice
              </span>
              <span className="text-[10px] font-lato text-slate-400">Equity & Truth</span>
            </div>
          </div>

          {/* Asset 3: American Flag Wave */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 flex flex-col items-center text-center justify-between shadow-sm">
            <div className="py-2">
              <AmericanFlagRibbon className="w-16 h-10" />
            </div>
            <div>
              <span className="font-caslon text-xs font-bold text-[#203F6E] block">
                American Flag Wave
              </span>
              <span className="text-[10px] font-lato text-slate-400">Immigration Focus</span>
            </div>
          </div>

          {/* Asset 4: Judge's Gavel */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 flex flex-col items-center text-center justify-between shadow-sm">
            <div className="py-2">
              <JudgesGavelIcon className="w-10 h-10" color="#203F6E" accent="#C5A059" />
            </div>
            <div>
              <span className="font-caslon text-xs font-bold text-[#203F6E] block">
                Judge's Gavel
              </span>
              <span className="text-[10px] font-lato text-slate-400">Litigation Authority</span>
            </div>
          </div>

          {/* Asset 5: Caligraphic Pen */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 flex flex-col items-center text-center justify-between shadow-sm">
            <div className="py-2">
              <CaligraphicPenIcon className="w-10 h-10" color="#203F6E" accent="#3092D1" />
            </div>
            <div>
              <span className="font-caslon text-xs font-bold text-[#203F6E] block">
                Fountain Nib
              </span>
              <span className="text-[10px] font-lato text-slate-400">Contractual Execution</span>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
