/* =========================================================
   Portfolio Data — Family Property Companion
   ========================================================= */

export type CapRate = {
  enabled: boolean; // hidden by default
  estimatedNOI: number; // annual
  estimatedCapRate: number; // percent (e.g. 3.8)
};

export type PrivateNotes = {
  enabled: boolean;
  notes: string[];
};

export type PDFLayout = {
  section: string; // used for grouping pages
  avoidPageBreak: boolean;
};

export type MapPreview = {
  provider: "osm";
  staticUrl: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Property = {
  id: string;
  address: string;
  city: string;
  state: string;

  price: number;
  beds: number;
  baths: number;
  sqft: number;

  monthlyIncome: { min: number; max: number };
  annualIncome: { min: number; max: number };

  roiNotes: string;
  capRate: CapRate;

  // kept for reference (UI uses Maps + Redfin now)
  zillowUrl: string;

  isJason?: boolean;
  privateNotes: PrivateNotes;
};

export type Group = {
  id: string;
  name: string;
  region: string;
  roses: number;

  map: MapPreview;

  datingScene: string;
  bestFor: string;

  pdf: PDFLayout;

  properties: Property[];
};

export type Portfolio = {
  version: string;
  generatedFor: string;
  groups: Group[];
};

/* =========================================================
   Helper: OSM Static Preview Builder (no token)
   =========================================================
   Uses https://staticmap.openstreetmap.de/
   Great for previews, no auth required.
*/
const osmStatic = (lat: number, lng: number, zoom: number) =>
  `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lng}&zoom=${zoom}&size=900x420&maptype=mapnik&markers=${lat},${lng},lightblue1`;

/* =========================================================
   PORTFOLIO DATA — Groups 1–2 (of 33 homes)
   ========================================================= */

export const portfolio: Portfolio = {
  version: "1.0.0",
  generatedFor: "Family Property Conversations",
  groups: [
    /* =====================================================
       GROUP 1 — SPICEWOOD / BOERNE, TX
       ===================================================== */
    {
      id: "spicewood-boerne",
      name: "Spicewood / Boerne Area, TX",
      region: "HILL COUNTRY",
      roses: 4,
      map: {
        provider: "osm",
        lat: 30.4099,
        lng: -98.0443,
        zoom: 10,
        staticUrl: osmStatic(30.4099, -98.0443, 10),
      },
      datingScene:
        "Exceptional — Austin tech proximity combined with Hill Country exclusivity, lake lifestyle, and wine culture.",
      bestFor:
        "Affluent couples, wine enthusiasts, water-sports families, relationship-focused professionals.",
      pdf: {
        section: "Texas Hill Country",
        avoidPageBreak: true,
      },
      properties: [
        {
          id: "lakehurst-loop",
          address: "19813 & 19817 Lakehurst Loop",
          city: "Spicewood",
          state: "TX",
          price: 6550000,
          beds: 4,
          baths: 4,
          sqft: 4000,
          monthlyIncome: { min: 12000, max: 16000 },
          annualIncome: { min: 144000, max: 192000 },
          roiNotes:
            "Lakefront Hill Country luxury with limited comparable inventory; pricing power driven by water access and gated community.",
          capRate: {
            enabled: false,
            estimatedNOI: 155000,
            estimatedCapRate: 2.4,
          },
          isJason: true,
          zillowUrl:
            "https://www.zillow.com/homedetails/19813-Lakehurst-Loop-Spicewood-TX-78669/29497851_zpid/",
          privateNotes: {
            enabled: false,
            notes: [
              "Sunset exposure is exceptional",
              "Feels like a legacy family lake house",
            ],
          },
        },
        {
          id: "bee-creek",
          address: "3507 Bee Creek Rd",
          city: "Spicewood",
          state: "TX",
          price: 1299000,
          beds: 3,
          baths: 3,
          sqft: 3777,
          monthlyIncome: { min: 4500, max: 6500 },
          annualIncome: { min: 54000, max: 78000 },
          roiNotes:
            "Lower entry point Hill Country rental; strong weekend utilization and resale appeal.",
          capRate: {
            enabled: false,
            estimatedNOI: 62000,
            estimatedCapRate: 4.8,
          },
          zillowUrl:
            "https://www.zillow.com/homedetails/3507-Bee-Creek-Rd-Spicewood-TX-78669/29497687_zpid/",
          privateNotes: {
            enabled: false,
            notes: ["Great overflow option for visiting friends"],
          },
        },
        {
          id: "swede-springs",
          address: "74 Swede Springs",
          city: "Boerne",
          state: "TX",
          price: 4200000,
          beds: 8,
          baths: 8,
          sqft: 8186,
          monthlyIncome: { min: 9000, max: 13000 },
          annualIncome: { min: 108000, max: 156000 },
          roiNotes:
            "Revenue driven by group size and events; ideal for multi-family stays and retreats.",
          capRate: {
            enabled: false,
            estimatedNOI: 120000,
            estimatedCapRate: 2.9,
          },
          zillowUrl:
            "https://www.zillow.com/homedetails/74-Swede-Springs-Boerne-TX-78006/53112345_zpid/",
          privateNotes: {
            enabled: false,
            notes: ["Feels like a wedding venue in disguise"],
          },
        },
      ],
    },

    /* =====================================================
       GROUP 2 — AUSTIN, TX
       ===================================================== */
    {
      id: "austin",
      name: "Austin Area, TX",
      region: "TECH HUB",
      roses: 3,
      map: {
        provider: "osm",
        lat: 30.2936,
        lng: -97.8258,
        zoom: 11,
        staticUrl: osmStatic(30.2936, -97.8258, 11),
      },
      datingScene:
        "Excellent — Constant influx of tech talent and entrepreneurial energy.",
      bestFor: "Founders, executives, creative professionals, power couples.",
      pdf: {
        section: "Austin Metro",
        avoidPageBreak: true,
      },
      properties: [
        {
          id: "spirit-lake",
          address: "3806 Spirit Lake Cv",
          city: "Austin",
          state: "TX",
          price: 6750000,
          beds: 7,
          baths: 10,
          sqft: 9275,
          monthlyIncome: { min: 15000, max: 20000 },
          annualIncome: { min: 180000, max: 240000 },
          roiNotes:
            "Executive-level rental demand in West Lake Hills with strong appreciation tailwinds.",
          capRate: {
            enabled: false,
            estimatedNOI: 200000,
            estimatedCapRate: 3.0,
          },
          zillowUrl:
            "https://www.zillow.com/homedetails/3806-Spirit-Lake-Cv-Austin-TX-78746/29388987_zpid/",
          privateNotes: {
            enabled: false,
            notes: ["Feels very 'Austin power couple'"],
          },
        },
      ],
    },
  ],
};
