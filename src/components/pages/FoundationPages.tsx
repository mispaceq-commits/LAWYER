import React from 'react';
import { PageContainer } from '../PageContainer';
import { FrissLawEmblem, FrissLawHorizontalLogo, AttorneySignatureGraphic, AmericanFlagRibbon } from '../../assets/brandAssets';
import { Shield, Award, Scale, BookOpen, Compass, CheckCircle2, XCircle } from 'lucide-react';

export const Page1Cover: React.FC = () => {
  return (
    <div
      id="page-1"
      className="print-page relative w-full aspect-[16/10] sm:aspect-[16/10.5] max-w-6xl mx-auto rounded-xl shadow-2xl overflow-hidden flex flex-col justify-between bg-gradient-to-br from-[#0B1728] via-[#11223B] to-[#1E375C] text-white border border-slate-700/50 select-none p-10 sm:p-16"
      style={{
        boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Delicate Architectural Grid & Watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#3092D1_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute -right-16 -top-16 opacity-10 pointer-events-none">
        <FrissLawEmblem size={440} color="#FFFFFF" accentColor="#3092D1" />
      </div>

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C93B2B]" />
          <span className="font-lato text-xs tracking-[0.3em] uppercase font-semibold text-slate-300">
            Corporate Identity Standards Manual
          </span>
        </div>
        <div className="font-mono text-xs text-slate-400 tracking-wider">
          DOC ID: <span className="text-[#3092D1] font-bold">FLF-BGS-2026-V1</span>
        </div>
      </div>

      {/* Centerpiece Hero Title */}
      <div className="relative z-10 my-auto py-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-lato tracking-[0.24em] text-[#3092D1] uppercase font-semibold mb-6">
          <FrissLawEmblem size={14} color="#3092D1" accentColor="#FFFFFF" />
          Official Brand System
        </div>

        <h1 className="font-caslon text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl">
          FRISS LAW FIRM<span className="text-[#3092D1]">, P.C.</span>
        </h1>

        <p className="font-caslon italic text-xl sm:text-2xl text-slate-300 mt-3 font-normal max-w-2xl">
          Visual Identity Guidelines & Comprehensive Design System
        </p>

        <div className="w-24 h-0.5 bg-gradient-to-r from-[#3092D1] via-[#C93B2B] to-transparent my-6" />

        <p className="font-lato text-sm text-slate-300/80 max-w-xl leading-relaxed tracking-wide">
          A definitive manual of typographic hierarchy, logo architecture, color mathematics,
          stationery specifications, and digital touchpoints for Counselors at Law.
        </p>
      </div>

      {/* Bottom Footer Information */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 text-xs font-lato">
        <div>
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Jurisdiction & HQ</span>
          <span className="text-white font-medium">11 Broadway, Suite 615, NY</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Practice Focus</span>
          <span className="text-white font-medium">Civil Litigation, Immigration, Family</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Publication Date</span>
          <span className="text-white font-medium">October 2026 • Edition 1.0</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Classification</span>
          <span className="text-[#3092D1] font-semibold tracking-wider uppercase">Confidential Internal</span>
        </div>
      </div>
    </div>
  );
};

export const Page2ExecutiveWelcome: React.FC = () => {
  return (
    <PageContainer
      pageNumber={2}
      sectionNumber="01.02"
      category="1. Brand Foundation"
      title="Executive Welcome & Brand Mission"
      subtitle="A letter from Founding Partner Natalya Friss, Esq."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full items-center">
        {/* Left Column: Letterhead style letter */}
        <div className="md:col-span-8 bg-[#F8FAFC] border border-slate-200/80 rounded-lg p-6 sm:p-8 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <span className="font-caslon text-xs font-bold tracking-widest text-[#203F6E] uppercase">
                Memorandum of Corporate Identity
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                DATE: OCTOBER 2026
              </span>
            </div>

            <p className="font-caslon text-sm sm:text-base text-[#203F6E] font-bold mb-3">
              To Our Colleagues, Partners, and Creative Collaborators:
            </p>

            <div className="space-y-3 font-lato text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                At <strong>Friss Law Firm, P.C.</strong>, our practice is built on a simple, uncompromising promise:
                delivering fierce, articulate advocacy with impeccable integrity and client stewardship.
                Whether navigating complex civil litigation, sensitive matrimonial proceedings, or life-altering
                immigration filings, our clients place their trust in our precision and poise.
              </p>
              <p>
                A brand is not merely a logo or a choice of typeface; it is the visual covenant we establish with
                our clients, the court, and the legal community. This brand manual outlines the strict, elegant,
                and modern visual language that reflects our American law firm heritage.
              </p>
              <p>
                We have curated these guidelines with generous whitespace, disciplined color hierarchy, and refined
                typography. Every application—from our 11 Broadway letterhead to our digital portals—must radiate
                the composure, authority, and meticulous attention to detail that defines our courtroom counsel.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
            <AttorneySignatureGraphic
              name="Natalya Friss"
              title="Managing Attorney & Counselor at Law"
              color="#203F6E"
            />
            <div className="hidden sm:block text-right text-[11px] font-lato text-slate-400">
              <div>Friss Law Firm, P.C.</div>
              <div>State of New York Bar Admission</div>
              <div>Southern & Eastern Districts of NY</div>
            </div>
          </div>
        </div>

        {/* Right Column: Mission Card & Core Tenets */}
        <div className="md:col-span-4 flex flex-col gap-4 h-full">
          <div className="bg-[#203F6E] text-white p-6 rounded-lg flex-1 flex flex-col justify-center border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-[#3092D1]/20 flex items-center justify-center text-[#3092D1] mb-3">
              <Shield className="w-4 h-4" />
            </div>
            <div className="font-lato text-[10px] uppercase tracking-[0.2em] font-semibold text-[#3092D1] mb-1">
              Core Firm Creed
            </div>
            <h3 className="font-caslon text-xl font-bold mb-2">
              Equity. Clarity. Steadfast Advocacy.
            </h3>
            <p className="font-lato text-xs text-slate-300 leading-relaxed">
              "We represent our clients with the dignified force of traditional American jurisprudence,
              elevated by the nimble responsiveness demanded by today's complex world."
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-lg">
            <div className="font-caslon text-xs font-bold text-[#203F6E] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#3092D1]" />
              Manual Scope & Governance
            </div>
            <ul className="text-xs font-lato text-slate-600 space-y-1.5">
              <li className="flex items-start gap-1.5">
                <span className="text-[#3092D1] font-bold">•</span>
                <span>Mandatory standard across all five boroughs & international filings.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#3092D1] font-bold">•</span>
                <span>Governs print, digital, environmental signage, and social media.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#3092D1] font-bold">•</span>
                <span>Direct inquiries to <strong className="text-[#203F6E]">info@frisslaw.com</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page3StrategicPillars: React.FC = () => {
  const pillars = [
    {
      icon: Scale,
      number: "01",
      title: "Uncompromising Diligence",
      desc: "Every contract clause, court petition, and deposition is executed with surgical rigor. No detail is overlooked in defending our clients' interests."
    },
    {
      icon: Shield,
      number: "02",
      title: "Transparent Stewardship",
      desc: "We eliminate the opacity traditional law firms create. Transparent communication, honest assessments, and constant availability anchor client relationships."
    },
    {
      icon: BookOpen,
      number: "03",
      title: "Modern Legal Precision",
      desc: "Rooted in foundational New York and Federal statutes while harnessing contemporary technologies to litigate swiftly and counsel proactively."
    },
    {
      icon: Compass,
      number: "04",
      title: "Empathetic Advocacy",
      desc: "Whether guiding a family through matrimonial transitions or securing immigrant status, we combine formidable courtroom strength with profound human empathy."
    }
  ];

  return (
    <PageContainer
      pageNumber={3}
      sectionNumber="01.03"
      category="1. Brand Foundation"
      title="Brand Positioning & Strategic Pillars"
      subtitle="The Four Cornerstones of the Friss Law Firm Brand Architecture"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
        {pillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-lg p-5 flex flex-col justify-between hover:border-[#3092D1]/60 transition-colors shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#3092D1] tracking-wider">
                    PILLAR {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#E8F4FC] text-[#203F6E] flex items-center justify-center group-hover:bg-[#203F6E] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-caslon text-lg font-bold text-[#203F6E] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-lato text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-lato font-semibold text-[#3092D1]">
                <span>Brand Pillar Standard</span>
                <span className="text-[#C93B2B]">•</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Target Audiences & Archetype Bottom Strip */}
      <div className="mt-4 bg-[#F8FAFC] border border-slate-200 rounded-lg p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-lato">
        <div>
          <span className="text-[#3092D1] font-bold block uppercase tracking-wider text-[10px]">
            Target Audience I: Individuals & Families
          </span>
          <p className="text-slate-600 mt-0.5">
            Matrimonial, custody, real estate purchases, and life-stage personal legal security.
          </p>
        </div>
        <div>
          <span className="text-[#3092D1] font-bold block uppercase tracking-wider text-[10px]">
            Target Audience II: Immigrants & Global Citizens
          </span>
          <p className="text-slate-600 mt-0.5">
            Asylum seekers, business investors, naturalization candidates requiring trusted U.S. counsel.
          </p>
        </div>
        <div>
          <span className="text-[#3092D1] font-bold block uppercase tracking-wider text-[10px]">
            Brand Archetype: The Wise Counselor
          </span>
          <p className="text-slate-600 mt-0.5">
            Calm, authoritative, seasoned, and protective. We stand as an unyielding fortress for our clients.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export const Page4ToneOfVoice: React.FC = () => {
  return (
    <PageContainer
      pageNumber={4}
      sectionNumber="01.04"
      category="1. Brand Foundation"
      title="Tone of Voice & Verbal Identity"
      subtitle="How Friss Law Speaks in Courtrooms, Client Consultations, and Public Discourse"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {/* Verbal Characteristics */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between">
          <div>
            <h3 className="font-caslon text-lg font-bold text-[#203F6E] mb-3">
              The Four Voice Attributes
            </h3>
            <div className="space-y-3 font-lato text-xs">
              <div className="p-2.5 rounded bg-[#F8FAFC] border-l-2 border-[#203F6E]">
                <strong className="text-[#203F6E] block font-caslon text-sm">1. Authoritative, never condescending</strong>
                <p className="text-slate-600 mt-0.5">
                  We speak with the quiet confidence of thorough preparation. We explain complex statutory nuances
                  without patronizing the client.
                </p>
              </div>

              <div className="p-2.5 rounded bg-[#F8FAFC] border-l-2 border-[#3092D1]">
                <strong className="text-[#203F6E] block font-caslon text-sm">2. Rigorous and precise</strong>
                <p className="text-slate-600 mt-0.5">
                  Every adjective carries weight. We avoid vague marketing superlatives like "the best" or "unbeatable",
                  relying instead on concrete case strategies and evidence.
                </p>
              </div>

              <div className="p-2.5 rounded bg-[#F8FAFC] border-l-2 border-[#C93B2B]">
                <strong className="text-[#203F6E] block font-caslon text-sm">3. Empathetic and reassuring</strong>
                <p className="text-slate-600 mt-0.5">
                  Clients often seek legal counsel during traumatic life chapters. Our communications provide emotional
                  anchoring alongside tactical clarity.
                </p>
              </div>

              <div className="p-2.5 rounded bg-[#F8FAFC] border-l-2 border-slate-400">
                <strong className="text-[#203F6E] block font-caslon text-sm">4. Modern and direct</strong>
                <p className="text-slate-600 mt-0.5">
                  We eliminate archaic legalese where plain English suffices. Active voice is mandatory in client
                  correspondence and digital communications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What we say vs what we avoid */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between">
          <div>
            <h3 className="font-caslon text-lg font-bold text-[#203F6E] mb-3">
              Vocabulary & Copywriting Matrix
            </h3>

            <div className="space-y-3 font-lato text-xs">
              <div className="p-3 rounded bg-emerald-50/70 border border-emerald-200">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Preferred Vocabulary (Use Freely)
                </div>
                <p className="text-emerald-900 leading-relaxed">
                  "Strategic counsel", "Judicial precedent", "Disciplined advocacy", "Client stewardship",
                  "Vigorous representation", "Statutory compliance", "Equitable resolution", "Proven composure".
                </p>
              </div>

              <div className="p-3 rounded bg-rose-50/70 border border-rose-200">
                <div className="flex items-center gap-1.5 text-rose-800 font-bold mb-1">
                  <XCircle className="w-3.5 h-3.5 text-rose-600" />
                  Prohibited Expressions (Strictly Avoid)
                </div>
                <p className="text-rose-900 leading-relaxed">
                  "Supercharge your case", "Guaranteed courtroom wins" (unethical under NY Bar rules),
                  "Cheap legal services", "Aggressive bulldogs", "Disruptive lawyering".
                </p>
              </div>

              <div className="p-3 rounded bg-slate-50 border border-slate-200">
                <div className="text-[#203F6E] font-bold mb-1 flex items-center justify-between">
                  <span>Ethical Compliance Note (NY RPC 7.1)</span>
                  <span className="text-[10px] text-slate-400 font-mono font-normal">NY State Bar</span>
                </div>
                <p className="text-slate-600 leading-normal">
                  All external marketing must carry the required New York attorney advertising disclaimer:
                  <em className="block mt-1 text-slate-700">"Prior results do not guarantee a similar outcome."</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
