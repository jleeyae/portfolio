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

  // Keeping this field for now so the UI compiles.
  // We'll switch this to Redfin + Maps in the UX pass.
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
   ========================================================= */
const osmStatic = (lat: number, lng: number, zoom: number) =>
  `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lng}&zoom=${zoom}&size=900x420&maptype=mapnik&markers=${lat},${lng},lightblue1`;

/* =========================================================
   PORTFOLIO DATA — Groups 1–8
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
      pdf: { section: "Texas Hill Country", avoidPageBreak: true },
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
          capRate: { enabled: false, estimatedNOI: 155000, estimatedCapRate: 2.4 },
          isJason: true,
          zillowUrl:
            "https://www.zillow.com/homedetails/19813-Lakehurst-Loop-Spicewood-TX-78669/29497851_zpid/",
          privateNotes: {
            enabled: false,
            notes: ["Sunset exposure is exceptional", "Feels like a legacy family lake house"],
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
          capRate: { enabled: false, estimatedNOI: 62000, estimatedCapRate: 4.8 },
          zillowUrl:
            "https://www.zillow.com/homedetails/3507-Bee-Creek-Rd-Spicewood-TX-78669/29497687_zpid/",
          privateNotes: { enabled: false, notes: ["Great overflow option for visiting friends"] },
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
          capRate: { enabled: false, estimatedNOI: 120000, estimatedCapRate: 2.9 },
          zillowUrl:
            "https://www.zillow.com/homedetails/74-Swede-Springs-Boerne-TX-78006/53112345_zpid/",
          privateNotes: { enabled: false, notes: ["Feels like a wedding venue in disguise"] },
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
      datingScene: "Excellent — Constant influx of tech talent and entrepreneurial energy.",
      bestFor: "Founders, executives, creative professionals, power couples.",
      pdf: { section: "Austin Metro", avoidPageBreak: true },
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
          capRate: { enabled: false, estimatedNOI: 200000, estimatedCapRate: 3.0 },
          zillowUrl:
            "https://www.zillow.com/homedetails/3806-Spirit-Lake-Cv-Austin-TX-78746/29388987_zpid/",
          privateNotes: { enabled: false, notes: ["Feels very 'Austin power couple'"] },
        },
      ],
    },

    /* =====================================================
       GROUP 3 — SILVERTHORNE / SUMMIT COUNTY, CO
       ===================================================== */
    {
      id: "silverthorne",
      name: "Silverthorne / Summit County, CO",
      region: "MOUNTAIN RESORT",
      roses: 2,
      map: {
        provider: "osm",
        lat: 39.6311,
        lng: -106.0744,
        zoom: 11,
        staticUrl: osmStatic(39.6311, -106.0744, 11),
      },
      datingScene:
        "Good — Quality outdoor-focused dating pool; fewer people, stronger alignment.",
      bestFor: "Adventure couples, remote workers, fly-fishing families, privacy-seeking professionals.",
      pdf: { section: "Colorado Mountain Resorts", avoidPageBreak: true },
      properties: [
        {
          id: "johnson-rd",
          address: "2244 Johnson Rd",
          city: "Silverthorne",
          state: "CO",
          price: 3595000,
          beds: 5,
          baths: 5,
          sqft: 6346,
          monthlyIncome: { min: 12000, max: 16000 },
          annualIncome: { min: 144000, max: 192000 },
          roiNotes:
            "Consistent four-season rental demand driven by Lake Dillon access, fishing culture, and limited luxury inventory.",
          capRate: { enabled: false, estimatedNOI: 160000, estimatedCapRate: 4.4 },
          isJason: true,
          zillowUrl:
            "https://www.zillow.com/homedetails/2244-Johnson-Rd-Silverthorne-CO-80498/14011524_zpid/",
          privateNotes: { enabled: false, notes: ["Fly-fishing culture is a huge plus", "Feels calm and restorative"] },
        },
        {
          id: "triple-creek",
          address: "1800 Triple Creek Ranch Rd",
          city: "Silverthorne",
          state: "CO",
          price: 24500000,
          beds: 6,
          baths: 7,
          sqft: 7284,
          monthlyIncome: { min: 25000, max: 35000 },
          annualIncome: { min: 300000, max: 420000 },
          roiNotes:
            "Ultra-luxury estate appealing to UHNW families and international clientele; pricing power driven by privacy and scale.",
          capRate: { enabled: false, estimatedNOI: 350000, estimatedCapRate: 1.4 },
          zillowUrl:
            "https://www.zillow.com/homedetails/1800-Triple-Creek-Ranch-Rd-Silverthorne-CO-80498/2079985635_zpid/",
          privateNotes: { enabled: false, notes: ["This is about legacy and privacy, not yield"] },
        },
      ],
    },

    /* =====================================================
       GROUP 4 — BRECKENRIDGE, CO
       ===================================================== */
    {
      id: "breckenridge",
      name: "Breckenridge, CO",
      region: "SKI RESORT",
      roses: 3,
      map: {
        provider: "osm",
        lat: 39.4817,
        lng: -106.0384,
        zoom: 12,
        staticUrl: osmStatic(39.4817, -106.0384, 12),
      },
      datingScene:
        "Exceptional — Constant rotation of affluent visitors and vibrant après-ski social scene.",
      bestFor: "Ski-focused couples, entertaining-oriented owners, second-home investors.",
      pdf: { section: "Colorado Mountain Resorts", avoidPageBreak: true },
      properties: [
        {
          id: "headlight-dr",
          address: "320 Headlight Dr",
          city: "Breckenridge",
          state: "CO",
          price: 6995000,
          beds: 6,
          baths: 6,
          sqft: 6552,
          monthlyIncome: { min: 18000, max: 28000 },
          annualIncome: { min: 216000, max: 336000 },
          roiNotes:
            "Premium Breckenridge positioning supports high seasonal rates and repeat renter loyalty.",
          capRate: { enabled: false, estimatedNOI: 260000, estimatedCapRate: 3.7 },
          isJason: true,
          zillowUrl:
            "https://www.zillow.com/homedetails/320-Headlight-Dr-Breckenridge-CO-80424/14015187_zpid/",
          privateNotes: { enabled: false, notes: ["Main Street energy without chaos"] },
        },
        {
          id: "sallie-barber",
          address: "250 Sallie Barber Rd",
          city: "Breckenridge",
          state: "CO",
          price: 14499999,
          beds: 6,
          baths: 9,
          sqft: 7444,
          monthlyIncome: { min: 25000, max: 35000 },
          annualIncome: { min: 300000, max: 420000 },
          roiNotes:
            "Top-tier ski-in/ski-out luxury commanding premium nightly rates in peak season.",
          capRate: { enabled: false, estimatedNOI: 360000, estimatedCapRate: 2.5 },
          isJason: true,
          zillowUrl:
            "https://www.zillow.com/homedetails/250-Sallie-Barber-Rd-Breckenridge-CO-80424/14014955_zpid/",
          privateNotes: { enabled: false, notes: ["This is the social centerpiece property"] },
        },
      ],
    },

    /* =====================================================
       GROUP 5 — GRANBY / ESTES PARK, CO
       ===================================================== */
    {
      id: "granby-estes",
      name: "Granby / Estes Park Area, CO",
      region: "ROCKY MOUNTAIN NATIONAL PARK",
      roses: 1,
      map: {
        provider: "osm",
        lat: 40.0861,
        lng: -105.9395,
        zoom: 10,
        staticUrl: osmStatic(40.0861, -105.9395, 10),
      },
      datingScene:
        "Moderate — Quiet, nature-focused dating pool emphasizing quality over quantity.",
      bestFor: "Nature lovers, hikers, photographers, introvert-friendly families.",
      pdf: { section: "Northern Colorado Mountains", avoidPageBreak: true },
      properties: [
        {
          id: "us-hwy-40",
          address: "52899 US Hwy 40",
          city: "Granby",
          state: "CO",
          price: 5600000,
          beds: 6,
          baths: 6,
          sqft: 7567,
          monthlyIncome: { min: 8000, max: 12000 },
          annualIncome: { min: 96000, max: 144000 },
          roiNotes:
            "Stable RMNP-adjacent rental demand with strong seasonal tourism and family appeal.",
          capRate: { enabled: false, estimatedNOI: 115000, estimatedCapRate: 2.1 },
          zillowUrl:
            "https://www.zillow.com/homedetails/52899-US-Highway-40-Granby-CO-80446/14020035_zpid/",
          privateNotes: { enabled: false, notes: ["Feels like a true mountain lodge"] },
        },
        {
          id: "csh-county-40",
          address: "5188 CSH County Rd 40",
          city: "Granby",
          state: "CO",
          price: 7995000,
          beds: 7,
          baths: 8,
          sqft: 9970,
          monthlyIncome: { min: 14000, max: 19000 },
          annualIncome: { min: 168000, max: 228000 },
          roiNotes:
            "New construction premium with large-group capacity driving higher per-stay revenue.",
          capRate: { enabled: false, estimatedNOI: 185000, estimatedCapRate: 2.3 },
          zillowUrl:
            "https://www.zillow.com/homedetails/5188-County-Road-40-Granby-CO-80446/2062333844_zpid/",
          privateNotes: { enabled: false, notes: ["Ideal for multi-generational trips"] },
        },
        {
          id: "deer-ridge",
          address: "2327 Deer Ridge Dr",
          city: "Estes Park",
          state: "CO",
          price: 3125000,
          beds: 6,
          baths: 8,
          sqft: 8560,
          monthlyIncome: { min: 10000, max: 14000 },
          annualIncome: { min: 120000, max: 168000 },
          roiNotes:
            "Gateway-to-RMNP location ensures consistent tourist demand and strong shoulder seasons.",
          capRate: { enabled: false, estimatedNOI: 140000, estimatedCapRate: 4.5 },
          zillowUrl:
            "https://www.zillow.com/homedetails/2327-Deer-Ridge-Dr-Estes-Park-CO-80517/14021309_zpid/",
          privateNotes: { enabled: false, notes: ["Wildlife sightings are frequent"] },
        },
      ],
    },

    /* =====================================================
       GROUP 6 — DENVER METRO NORTH / NORTHEAST
       ===================================================== */
    {
      id: "denver-north",
      name: "Denver Metro — North / Northeast",
      region: "EXECUTIVE / URBAN",
      roses: 2,
      map: {
        provider: "osm",
        lat: 39.853,
        lng: -104.776,
        zoom: 10,
        staticUrl: osmStatic(39.853, -104.776, 10),
      },
      datingScene:
        "Good — Strong professional singles pool with corporate, tech, and finance crossover.",
      bestFor: "Corporate executives, business leaders, relocation-focused professionals.",
      pdf: { section: "Denver Metro", avoidPageBreak: true },
      properties: [
        {
          id: "picadilly",
          address: "12565 Picadilly Rd",
          city: "Commerce City",
          state: "CO",
          price: 8850000,
          beds: 6,
          baths: 13,
          sqft: 16269,
          monthlyIncome: { min: 28000, max: 35000 },
          annualIncome: { min: 336000, max: 420000 },
          roiNotes:
            "Executive-grade new construction supporting high nightly rates and corporate demand near DIA.",
          capRate: { enabled: false, estimatedNOI: 380000, estimatedCapRate: 4.3 },
          isJason: true,
          zillowUrl:
            "https://www.zillow.com/homedetails/12565-Picadilly-Rd-Commerce-City-CO-80022/2062755586_zpid/",
          privateNotes: { enabled: false, notes: ["Feels purpose-built for executive hosting"] },
        },
      ],
    },

    /* =====================================================
       GROUP 7 — LOVELAND / FORT COLLINS, CO
       ===================================================== */
    {
      id: "loveland-fort-collins",
      name: "Loveland / Fort Collins Area, CO",
      region: "NORTHERN COLORADO",
      roses: 3,
      map: {
        provider: "osm",
        lat: 40.5853,
        lng: -105.0844,
        zoom: 10,
        staticUrl: osmStatic(40.5853, -105.0844, 10),
      },
      datingScene:
        "Exceptional — Fort Collins ranked #1 singles city in Colorado; youthful, educated, social.",
      bestFor: "Young professionals, relocating families, wine enthusiasts, remote workers.",
      pdf: { section: "Northern Colorado", avoidPageBreak: true },
      properties: [
        {
          id: "soaring-eagle",
          address: "0 Soaring Eagle Pass",
          city: "Loveland",
          state: "CO",
          price: 2400000,
          beds: 4,
          baths: 5,
          sqft: 5940,
          monthlyIncome: { min: 6000, max: 8500 },
          annualIncome: { min: 72000, max: 102000 },
          roiNotes:
            "New construction appeal with proximity to Fort Collins employment and social centers.",
          capRate: { enabled: false, estimatedNOI: 85000, estimatedCapRate: 3.5 },
          isJason: true,
          zillowUrl:
            "https://www.zillow.com/homedetails/Soaring-Eagle-Pass-Loveland-CO-80538/2061866062_zpid/",
          privateNotes: { enabled: false, notes: ["Strong long-term appreciation potential"] },
        },
        {
          id: "hwy-287",
          address: "23930 N Highway 287",
          city: "Livermore",
          state: "CO",
          price: 4500000,
          beds: 5,
          baths: 5,
          sqft: 5500,
          monthlyIncome: { min: 7000, max: 9500 },
          annualIncome: { min: 84000, max: 114000 },
          roiNotes:
            "Wine country adjacency and RMNP access create premium experiential rental demand.",
          capRate: { enabled: false, estimatedNOI: 98000, estimatedCapRate: 2.2 },
          isJason: true,
          zillowUrl:
            "https://www.zillow.com/homedetails/23930-N-Highway-287-Livermore-CO-80536/14014557_zpid/",
          privateNotes: { enabled: false, notes: ["Feels romantic and secluded without isolation"] },
        },
        {
          id: "abrams-way",
          address: "796 Abrams Way",
          city: "Loveland",
          state: "CO",
          price: 3850000,
          beds: 5,
          baths: 5,
          sqft: 6655,
          monthlyIncome: { min: 8000, max: 11000 },
          annualIncome: { min: 96000, max: 132000 },
          roiNotes: "Balanced luxury home appealing to families and longer-term renters.",
          capRate: { enabled: false, estimatedNOI: 115000, estimatedCapRate: 3.0 },
          zillowUrl:
            "https://www.zillow.com/homedetails/796-Abrams-Way-Loveland-CO-80537/14015964_zpid/",
          privateNotes: { enabled: false, notes: ["Very livable day-to-day layout"] },
        },
      ],
    },

    /* =====================================================
       GROUP 8 — HUDSON / BENNETT / WELD COUNTY, CO
       ===================================================== */
    {
      id: "weld-county",
      name: "Hudson / Bennett / Weld County, CO",
      region: "RURAL / GROWTH",
      roses: 1,
      map: {
        provider: "osm",
        lat: 40.056,
        lng: -104.652,
        zoom: 9,
        staticUrl: osmStatic(40.056, -104.652, 9),
      },
      datingScene:
        "Moderate — Relationship-focused, rural-leaning community with Denver access.",
      bestFor: "Growing families, equestrian enthusiasts, land-seeking professionals.",
      pdf: { section: "Weld County", avoidPageBreak: true },
      properties: [
        {
          id: "imboden",
          address: "12550 Imboden Rd",
          city: "Hudson",
          state: "CO",
          price: 2299900,
          beds: 7,
          baths: 8,
          sqft: 9125,
          monthlyIncome: { min: 6500, max: 8500 },
          annualIncome: { min: 78000, max: 102000 },
          roiNotes:
            "New construction acreage with long-term rental stability rather than short-term yield.",
          capRate: { enabled: false, estimatedNOI: 90000, estimatedCapRate: 3.9 },
          isJason: true,
          zillowUrl:
            "https://www.zillow.com/homedetails/12550-Imboden-Rd-Hudson-CO-80642/2063416230_zpid/",
          privateNotes: { enabled: false, notes: ["Feels like a future-proof land play"] },
        },
        {
          id: "e-56th",
          address: "48155 E 56th Ave",
          city: "Bennett",
          state: "CO",
          price: 1175000,
          beds: 4,
          baths: 4,
          sqft: 5086,
          monthlyIncome: { min: 3500, max: 5000 },
          annualIncome: { min: 42000, max: 60000 },
          roiNotes: "Entry-level rural investment appealing to families priced out of Denver.",
          capRate: { enabled: false, estimatedNOI: 52000, estimatedCapRate: 4.4 },
          zillowUrl:
            "https://www.zillow.com/homedetails/48155-E-56th-Ave-Bennett-CO-80102/13991077_zpid/",
          privateNotes: { enabled: false, notes: ["Simple, practical, low drama"] },
        },
        {
          id: "county-road-121",
          address: "1150 S County Road 121",
          city: "Bennett",
          state: "CO",
          price: 1695000,
          beds: 6,
          baths: 5,
          sqft: 5634,
          monthlyIncome: { min: 5000, max: 7000 },
          annualIncome: { min: 60000, max: 84000 },
          roiNotes: "Large-family rural home with strong long-term tenancy appeal.",
          capRate: { enabled: false, estimatedNOI: 72000, estimatedCapRate: 4.2 },
          zillowUrl:
            "https://www.zillow.com/homedetails/1150-S-County-Road-121-Bennett-CO-80102/13991204_zpid/",
          privateNotes: { enabled: false, notes: ["Very family-oriented feel"] },
        },

        // The following three are in your original 33 list but you didn’t paste Zillow links for them earlier.
        // We'll swap these to “Open in Maps” + “Open in Redfin” soon anyway.
        {
          id: "maplewood-place",
          address: "50950 E Maplewood Place",
          city: "Bennett",
          state: "CO",
          price: 1400000,
          beds: 4,
          baths: 4,
          sqft: 5756,
          monthlyIncome: { min: 4000, max: 6000 },
          annualIncome: { min: 48000, max: 72000 },
          roiNotes: "Newer-market listing with growth upside; moderate rental stability.",
          capRate: { enabled: false, estimatedNOI: 60000, estimatedCapRate: 4.3 },
          zillowUrl: "",
          privateNotes: { enabled: false, notes: ["Good ‘starter acreage’ vibe"] },
        },
        {
          id: "weld-county-road-37",
          address: "11881 County Road 37",
          city: "Weld",
          state: "CO",
          price: 1675000,
          beds: 5,
          baths: 6,
          sqft: 6000,
          monthlyIncome: { min: 5000, max: 7500 },
          annualIncome: { min: 60000, max: 90000 },
          roiNotes: "Acreage appeal; family and equestrian demand supports longer tenancy.",
          capRate: { enabled: false, estimatedNOI: 76000, estimatedCapRate: 4.5 },
          zillowUrl: "",
          privateNotes: { enabled: false, notes: ["Feels like a real ‘land + lifestyle’ play"] },
        },
        {
          id: "windsor-county-road-74",
          address: "8236 County Road 74",
          city: "Windsor",
          state: "CO",
          price: 3475000,
          beds: 6,
          baths: 7,
          sqft: 9595,
          monthlyIncome: { min: 8000, max: 11000 },
          annualIncome: { min: 96000, max: 132000 },
          roiNotes: "Luxury rural positioning with strong hosting and multi-family appeal.",
          capRate: { enabled: false, estimatedNOI: 120000, estimatedCapRate: 3.5 },
          zillowUrl: "",
          privateNotes: { enabled: false, notes: ["Would host big gatherings comfortably"] },
        },

    /* =====================================================
       GROUP 9 — LONGMONT AREA, CO
       ===================================================== */
    {
      id: "longmont",
      name: "Longmont Area, CO",
      region: "TECH / CREATIVE",
      roses: 2,
      map: {
        provider: "osm",
        lat: 40.1672,
        lng: -105.1019,
        zoom: 11,
        staticUrl: osmStatic(40.1672, -105.1019, 11),
      },
      datingScene:
        "Good — Tech and creative professionals with Boulder adjacency.",
      bestFor:
        "Tech workers, creatives, Boulder-adjacent lifestyle seekers.",
      pdf: { section: "Northern Colorado", avoidPageBreak: true },
      properties: [
        {
          id: "mineral-rd",
          address: "10323 Mineral Rd",
          city: "Longmont",
          state: "CO",
          price: 3750000,
          beds: 4,
          baths: 6,
          sqft: 5086,
          monthlyIncome: { min: 10000, max: 13000 },
          annualIncome: { min: 120000, max: 156000 },
          roiNotes:
            "Premium Longmont positioning with strong tech-worker rental demand and Boulder spillover.",
          capRate: { enabled: false, estimatedNOI: 140000, estimatedCapRate: 3.7 },
          zillowUrl:
            "https://www.zillow.com/homedetails/10323-Mineral-Rd-Longmont-CO-80504/14017841_zpid/",
          privateNotes: {
            enabled: false,
            notes: ["Feels like Boulder without Boulder pricing"],
          },
        },
        {
          id: "county-line",
          address: "15137 E County Line Rd",
          city: "Longmont",
          state: "CO",
          price: 3600000,
          beds: 3,
          baths: 5,
          sqft: 4900,
          monthlyIncome: { min: 9000, max: 12000 },
          annualIncome: { min: 108000, max: 144000 },
          roiNotes:
            "Private acreage appeal with strong longer-term tenant stability.",
          capRate: { enabled: false, estimatedNOI: 125000, estimatedCapRate: 3.4 },
          zillowUrl: "",
          privateNotes: {
            enabled: false,
            notes: ["Quiet luxury, very livable"],
          },
        },
      ],
    },

    /* =====================================================
       GROUP 10 — CASTLE ROCK / FRANKTOWN, CO
       ===================================================== */
    {
      id: "castle-rock-franktown",
      name: "Castle Rock / Franktown Area, CO",
      region: "SOUTH DENVER SUBURBS",
      roses: 1,
      map: {
        provider: "osm",
        lat: 39.3714,
        lng: -104.8561,
        zoom: 10,
        staticUrl: osmStatic(39.3714, -104.8561, 10),
      },
      datingScene:
        "Moderate — Affluent suburban professionals with outdoor-oriented lifestyles.",
      bestFor:
        "Executive families, outdoor recreation lovers, country-adjacent living.",
      pdf: { section: "South Denver Metro", avoidPageBreak: true },
      properties: [
        {
          id: "lemon-gulch",
          address: "7273 Lemon Gulch Way",
          city: "Castle Rock",
          state: "CO",
          price: 3500000,
          beds: 4,
          baths: 5,
          sqft: 5884,
          monthlyIncome: { min: 9000, max: 12000 },
          annualIncome: { min: 108000, max: 144000 },
          roiNotes:
            "Premium Castle Rock community with stable executive-family rental demand.",
          capRate: { enabled: false, estimatedNOI: 120000, estimatedCapRate: 3.4 },
          zillowUrl:
            "https://www.zillow.com/homedetails/7273-Lemon-Gulch-Way-Castle-Rock-CO-80108/14025412_zpid/",
          privateNotes: {
            enabled: false,
            notes: ["Safe, polished, predictable"],
          },
        },
        {
          id: "fox-creek",
          address: "7497 Fox Creek Trail",
          city: "Franktown",
          state: "CO",
          price: 4950000,
          beds: 5,
          baths: 5,
          sqft: 7518,
          monthlyIncome: { min: 11000, max: 15000 },
          annualIncome: { min: 132000, max: 180000 },
          roiNotes:
            "Large estate appeal with equestrian and country-luxury positioning.",
          capRate: { enabled: false, estimatedNOI: 160000, estimatedCapRate: 3.2 },
          zillowUrl:
            "https://www.zillow.com/homedetails/7497-Fox-Creek-Trl-Franktown-CO-80116/14025788_zpid/",
          privateNotes: {
            enabled: false,
            notes: ["Colorado dream acreage"],
          },
        },
      ],
    },

    /* =====================================================
       GROUP 11 — BOULDER & FOOTHILLS, CO
       ===================================================== */
    {
      id: "boulder-foothills",
      name: "Boulder & Foothills, CO",
      region: "ULTRA-AFFLUENT MOUNTAIN",
      roses: 2,
      map: {
        provider: "osm",
        lat: 39.9878,
        lng: -105.255,
        zoom: 10,
        staticUrl: osmStatic(39.9878, -105.255, 10),
      },
      datingScene:
        "Good to Excellent — Ultra-wealthy Boulder scene blended with mountain communities.",
      bestFor:
        "Ultra-affluent individuals, mountain lifestyle couples, legacy buyers.",
      pdf: { section: "Colorado Foothills", avoidPageBreak: true },
      properties: [
        {
          id: "jay-rd",
          address: "6686 Jay Rd",
          city: "Boulder",
          state: "CO",
          price: 19500000,
          beds: 4,
          baths: 4,
          sqft: 7832,
          monthlyIncome: { min: 22000, max: 30000 },
          annualIncome: { min: 264000, max: 360000 },
          roiNotes:
            "Ultra-luxury Boulder estate benefiting from extreme scarcity.",
          capRate: { enabled: false, estimatedNOI: 300000, estimatedCapRate: 1.5 },
          zillowUrl:
            "https://www.zillow.com/homedetails/6686-Jay-Rd-Boulder-CO-80301/13187431_zpid/",
          privateNotes: {
            enabled: false,
            notes: ["Pure legacy asset"],
          },
        },
        {
          id: "deer-meadow",
          address: "5881 Deer Meadow Trail",
          city: "Golden",
          state: "CO",
          price: 5450000,
          beds: 7,
          baths: 7,
          sqft: 15070,
          monthlyIncome: { min: 13000, max: 18000 },
          annualIncome: { min: 156000, max: 216000 },
          roiNotes:
            "Large foothills retreat with multi-family and event appeal.",
          capRate: { enabled: false, estimatedNOI: 175000, estimatedCapRate: 3.2 },
          zillowUrl:
            "https://www.zillow.com/homedetails/5881-Deer-Meadow-Trl-Golden-CO-80403/13191706_zpid/",
          privateNotes: {
            enabled: false,
            notes: ["Hosts beautifully"],
          },
        },
      ],
    },

    /* =====================================================
       GROUP 12 — EVERGREEN / CONIFER / SEDALIA, CO
       ===================================================== */
    {
      id: "evergreen-conifer",
      name: "Evergreen / Conifer / Sedalia, CO",
      region: "MOUNTAIN LUXURY",
      roses: 2,
      map: {
        provider: "osm",
        lat: 39.6333,
        lng: -105.3172,
        zoom: 10,
        staticUrl: osmStatic(39.6333, -105.3172, 10),
      },
      datingScene:
        "Moderate — Nature-first lifestyles with relationship-focused communities.",
      bestFor:
        "Mountain residents, privacy seekers, long-term lifestyle buyers.",
      pdf: { section: "Colorado Foothills", avoidPageBreak: true },
      properties: [
        {
          id: "upper-bear-creek",
          address: "32453 Upper Bear Creek Rd",
          city: "Evergreen",
          state: "CO",
          price: 3900000,
          beds: 4,
          baths: 7,
          sqft: 10936,
          monthlyIncome: { min: 10000, max: 14000 },
          annualIncome: { min: 120000, max: 168000 },
          roiNotes:
            "Established Evergreen luxury with strong long-term appeal.",
          capRate: { enabled: false, estimatedNOI: 135000, estimatedCapRate: 3.5 },
          zillowUrl:
            "https://www.zillow.com/homedetails/32453-Upper-Bear-Creek-Rd-Evergreen-CO-80439/13194611_zpid/",
          privateNotes: {
            enabled: false,
            notes: ["Very calm, grounded energy"],
          },
        },
        {
          id: "perry-park",
          address: "810 N Perry Park Rd",
          city: "Sedalia",
          state: "CO",
          price: 4250000,
          beds: 6,
          baths: 5,
          sqft: 5803,
          monthlyIncome: { min: 11000, max: 15000 },
          annualIncome: { min: 132000, max: 180000 },
          roiNotes:
            "Golf-adjacent foothills luxury with executive appeal.",
          capRate: { enabled: false, estimatedNOI: 155000, estimatedCapRate: 3.6 },
          zillowUrl:
            "https://www.zillow.com/homedetails/810-N-Perry-Park-Rd-Sedalia-CO-80135/14029243_zpid/",
          privateNotes: {
            enabled: false,
            notes: ["Social entertaining potential"],
          },
        },
          ],
        },
      ],
    };
