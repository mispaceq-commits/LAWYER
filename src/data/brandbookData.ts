export interface BrandPage {
  id: number;
  slug: string;
  category: string;
  sectionNumber: string;
  title: string;
  subtitle: string;
  summary: string;
}

export interface ColorSwatch {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  cmyk: string;
  pantone: string;
  ratio: string;
  description: string;
}

export const BRAND_PAGES: BrandPage[] = [
  // SECTION 1: BRAND FOUNDATION
  {
    id: 1,
    slug: "cover",
    category: "1. Brand Foundation",
    sectionNumber: "01.01",
    title: "Brand Guidelines & Visual Identity System",
    subtitle: "Official Manual of Corporate Style & Standards",
    summary: "Volume I — Executive Edition 2026. Friss Law Firm, P.C., 11 Broadway, Suite 615, New York, NY 10004."
  },
  {
    id: 2,
    slug: "executive-summary",
    category: "1. Brand Foundation",
    sectionNumber: "01.02",
    title: "Executive Welcome & Brand Mission",
    subtitle: "The Philosophical Foundation of Friss Law",
    summary: "Message from Founding Partner Natalya Friss, Esq. on our commitment to fierce advocacy, absolute integrity, and legal clarity."
  },
  {
    id: 3,
    slug: "strategic-pillars",
    category: "1. Brand Foundation",
    sectionNumber: "01.03",
    title: "Positioning & Core Strategic Pillars",
    subtitle: "Four Cornerstones of American Jurisprudence",
    summary: "Our market positioning, audience personas, and four strategic tenets: Uncompromising Diligence, Transparent Stewardship, Modern Precision, and Client-Centered Advocacy."
  },
  {
    id: 4,
    slug: "tone-of-voice",
    category: "1. Brand Foundation",
    sectionNumber: "01.04",
    title: "Tone of Voice & Verbal Identity",
    subtitle: "Authoritative, Rigorous, Reassuring & Clear",
    summary: "Writing style rules, vocabulary matrix, client communications vs. court filings, and brand messaging principles."
  },

  // SECTION 2: LOGOMARK & BRAND MARKS
  {
    id: 5,
    slug: "primary-logo",
    category: "2. Visual Identity & Marks",
    sectionNumber: "02.01",
    title: "Primary Emblem & Signature Wordmark",
    subtitle: "The Anatomy of the Crescent Scales of Justice",
    summary: "Symbolic breakdown of the scales of equity enclosed in a protective crescent shield, paired with authoritative legal typography."
  },
  {
    id: 6,
    slug: "logo-construction",
    category: "2. Visual Identity & Marks",
    sectionNumber: "02.02",
    title: "Geometry, Construction & Alignment Grid",
    subtitle: "Precision Ratios & Mathematical Harmony",
    summary: "Golden ratio proportions, angular balance, vector curvature tolerances, and typographic baseline alignment."
  },
  {
    id: 7,
    slug: "clear-space-sizing",
    category: "2. Visual Identity & Marks",
    sectionNumber: "02.03",
    title: "Clear Space & Minimum Scale Standards",
    subtitle: "Isolation Zones & Legibility Boundaries",
    summary: "The 'X-Height' exclusion perimeter, minimum print resolution limits (1.25 in), and digital display tolerances (32px)."
  },
  {
    id: 8,
    slug: "color-variations",
    category: "2. Visual Identity & Marks",
    sectionNumber: "02.04",
    title: "Official Logo Variations & Colorways",
    subtitle: "Primary, Reversed, Monochrome & Metallic Foils",
    summary: "Approved permutations across light, dark, photographic, legal bond paper, and luxury embossed finishes."
  },
  {
    id: 9,
    slug: "logo-violations",
    category: "2. Visual Identity & Marks",
    sectionNumber: "02.05",
    title: "Unacceptable Usages & Brand Violations",
    subtitle: "Mandatory Restrictions to Preserve Brand Equity",
    summary: "Six critical prohibited treatments: distortion, unauthorized re-coloring, crowded perimeters, low-contrast placements, and unapproved lockup alterations."
  },

  // SECTION 3: COLOR SYSTEM
  {
    id: 10,
    slug: "primary-palette",
    category: "3. Color Architecture",
    sectionNumber: "03.01",
    title: "Primary Color Palette",
    subtitle: "Navy #203F6E, Blue #3092D1 & Pure White #FFFFFF",
    summary: "Core colors representing American authority, legal clarity, and luminous negative space, with precise CMYK, RGB, HEX, and Pantone codes."
  },
  {
    id: 11,
    slug: "accent-neutrals",
    category: "3. Color Architecture",
    sectionNumber: "03.02",
    title: "Accent Red & Supporting Neutral Spectrum",
    subtitle: "The Micro-Accent Rule & WCAG AAA Contrast Ratios",
    summary: "Strict governance on Crimson Red #C93B2B (≤ 3% usage), Slate #64748B, Platinum #F8FAFC, and accessibility metrics."
  },

  // SECTION 4: TYPOGRAPHY SYSTEM
  {
    id: 12,
    slug: "primary-type-caslon",
    category: "4. Typographic System",
    sectionNumber: "04.01",
    title: "Primary Display Typeface: Libre Caslon Text",
    subtitle: "The Editorial Voice of Classic American Law",
    summary: "Character specimen, typographical scale, legal symbols (§, ¶, ©), and editorial hierarchy from Display 40pt to Headings."
  },
  {
    id: 13,
    slug: "secondary-type-lato-quicksand",
    category: "4. Typographic System",
    sectionNumber: "04.02",
    title: "Body & UI Typefaces: Lato & Quicksand",
    subtitle: "Functional Clarity & Modern Digital Harmony",
    summary: "Lato for rigorous contractual agreements and court pleadings; Quicksand for contemporary digital accents, pull-quotes, and web interface labels."
  },
  {
    id: 14,
    slug: "accent-script-allura",
    category: "4. Typographic System",
    sectionNumber: "04.03",
    title: "Calligraphic Accent Typeface: Allura",
    subtitle: "Attorney Endorsements, Signatures & Certificates",
    summary: "Usage parameters for Allura script in partner signatures, formal certificates of counsel, and prestige invitations."
  },

  // SECTION 5: GRAPHIC ASSETS & BRAND MOTIFS
  {
    id: 15,
    slug: "graphic-assets-motifs",
    category: "5. Graphic Language & Motifs",
    sectionNumber: "05.01",
    title: "Brand Assets, Motifs & Jurisprudential Symbols",
    subtitle: "Manhattan Skyline, Lady Justice & Legal Iconography",
    summary: "Stylized Manhattan silhouette (SDAsset 1), Lady Justice (Themis), Judge's Gavel, Law Volumes, and American Flag wave accents."
  },

  // SECTION 6: STATIONERY & PHYSICAL COLLATERAL
  {
    id: 16,
    slug: "business-cards",
    category: "6. Stationery & Print Collateral",
    sectionNumber: "06.01",
    title: "Executive Business Cards & Die-Cut Specs",
    subtitle: "3.50\" × 2.00\" Blueprint, Bleed & Tactile Finishes",
    summary: "Front and back 3D rendering with exact US die-cut specifications, 18pt Mohawk Superfine stock, spot UV, and blind deboss guidelines."
  },
  {
    id: 17,
    slug: "letterhead-envelopes",
    category: "6. Stationery & Print Collateral",
    sectionNumber: "06.02",
    title: "Official Firm Letterhead & #10 Envelopes",
    subtitle: "US Letter 8.5\" × 11\" Layout & Postal Clearance",
    summary: "Corporate correspondence grid, 1.25\" top margin, subtle watermark placement, and USPS compliant No. 10 business envelope layout."
  },
  {
    id: 18,
    slug: "legal-documents-contracts",
    category: "6. Stationery & Print Collateral",
    sectionNumber: "06.03",
    title: "Legal Briefs, Contracts & Pleading Paper",
    subtitle: "28-Line Numbered Court Filings & Retainer Agreements",
    summary: "Formal litigation caption blocks, table of authorities formatting, contract signing blocks, and certificate of service styling."
  },

  // SECTION 7: DIGITAL & ENVIRONMENTAL APPLICATIONS
  {
    id: 19,
    slug: "digital-website-ui",
    category: "7. Digital & Environmental Systems",
    sectionNumber: "07.01",
    title: "Digital Ecosystem & Responsive Website Design",
    subtitle: "Clean, High-Conversion American Law Web Interface",
    summary: "Desktop and mobile viewport architecture, high-contrast consultation booking CTA, practice area grids, and UI design tokens."
  },
  {
    id: 20,
    slug: "social-media-suite",
    category: "7. Digital & Environmental Systems",
    sectionNumber: "07.02",
    title: "Social Media Identity & Thought Leadership",
    subtitle: "LinkedIn Executive Presence & Instagram Legal Insights",
    summary: "Cohesive digital templates for attorney announcements, courtroom case results, immigration alerts, and executive profile banners."
  },
  {
    id: 21,
    slug: "corporate-folders",
    category: "7. Digital & Environmental Systems",
    sectionNumber: "07.03",
    title: "Presentation Folders & Client Retainer Kits",
    subtitle: "9.0\" × 12.0\" Deep Navy Two-Pocket Portfolio",
    summary: "Luxury matte lamination folder with silver foil stamping, business card slots, and embossed Manhattan skyline blind deboss."
  },
  {
    id: 22,
    slug: "environmental-signage",
    category: "7. Digital & Environmental Systems",
    sectionNumber: "07.04",
    title: "Architectural Signage & Embossed Corporate Seal",
    subtitle: "11 Broadway Wall Plaque, Boardroom Frost & Notary Seal",
    summary: "Brushed brass door plaque, architectural frosted vinyl glass for conference rooms, and official engraved steel hand embosser."
  },

  // SECTION 8: PHOTOGRAPHY & BRAND GOVERNANCE
  {
    id: 23,
    slug: "imagery-photography",
    category: "8. Photography & Governance",
    sectionNumber: "08.01",
    title: "Imagery Direction & Photography Principles",
    subtitle: "Authentic, Confident, Architectural & Restrained",
    summary: "Guidelines for attorney portraiture, candid counsel interactions, Manhattan cityscape framing, and avoiding clichéd stock imagery."
  },
  {
    id: 24,
    slug: "brand-governance",
    category: "8. Photography & Governance",
    sectionNumber: "08.02",
    title: "Brand Governance, Legal Notices & Asset Index",
    subtitle: "Compliance Protocols & Brand Custodian Directory",
    summary: "Copyright notices, trademark symbols, approval workflows for external media, and master download directory for Friss Law Firm assets."
  }
];

export const PRIMARY_PALETTE: ColorSwatch[] = [
  {
    name: "Friss Navy",
    role: "Primary Brand Color / Authority & Tradition",
    hex: "#203F6E",
    rgb: "32, 63, 110",
    cmyk: "95, 75, 27, 15",
    pantone: "PMS 295 C",
    ratio: "60% of brand color volume",
    description: "The primary anchor of the Friss Law Firm visual identity. Signifies judicial authority, deep experience, and unwavering composure."
  },
  {
    name: "Friss Blue",
    role: "Secondary Brand Color / Modernity & Clarity",
    hex: "#3092D1",
    rgb: "48, 146, 209",
    cmyk: "75, 32, 0, 0",
    pantone: "PMS 2925 C",
    ratio: "25% of brand color volume",
    description: "Represents clarity, accessibility, and modern legal acumen. Used for interactive buttons, accents, rules, and forward-thinking accents."
  },
  {
    name: "Optic White",
    role: "Canvas & Generous Negative Space",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    cmyk: "0, 0, 0, 0",
    pantone: "Opaque White",
    ratio: "Substrate & Structural Breath",
    description: "Essential for delivering a clean, confident American law firm aesthetic with ample breathing room."
  },
  {
    name: "Crimson Red",
    role: "Micro-Accent Only / Strict Restriction",
    hex: "#C93B2B",
    rgb: "201, 59, 43",
    cmyk: "15, 90, 95, 5",
    pantone: "PMS 180 C",
    ratio: "Max 3% — Micro Accent Only",
    description: "Reserved exclusively for subtle legal seals, critical court deadlines, or fine dividing pinstripes. Never used for large background areas."
  }
];

export const NEUTRAL_PALETTE: ColorSwatch[] = [
  {
    name: "Midnight Charcoal",
    role: "Deep Text & High Contrast",
    hex: "#0F1E36",
    rgb: "15, 30, 54",
    cmyk: "90, 80, 50, 60",
    pantone: "PMS Black 7 C",
    ratio: "Body Headings & Key Terms",
    description: "Sophisticated deep navy-charcoal for high-density legal contracts."
  },
  {
    name: "Slate Counsel",
    role: "Secondary Text & Disclosures",
    hex: "#64748B",
    rgb: "100, 116, 139",
    cmyk: "55, 40, 30, 5",
    pantone: "PMS 430 C",
    ratio: "Subheadings & Footnotes",
    description: "Balanced neutral slate for metadata, captions, and secondary disclosures."
  },
  {
    name: "Platinum Wash",
    role: "Background Panels & Tints",
    hex: "#F8FAFC",
    rgb: "248, 250, 252",
    cmyk: "2, 1, 0, 0",
    pantone: "Cool Gray 1 C",
    ratio: "Card Backdrops & Tables",
    description: "Soft off-white background wash keeping UI easy on the eyes."
  },
  {
    name: "Gilded Gold",
    role: "Prestige Finishes & Seals",
    hex: "#C5A059",
    rgb: "197, 160, 89",
    cmyk: "20, 35, 75, 5",
    pantone: "PMS 871 C (Metallic)",
    ratio: "Foil & Seal Embellishment",
    description: "Optional metallic accent for partner letterhead seals and architectural signage."
  }
];
