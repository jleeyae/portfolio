/* =========================================================
   src/data/Portfolio.ts
   Family Property Companion — Luxury Portfolio Dataset
   Properly structured (no Types), Maps + Redfin, Vibes, Votes
   ========================================================= */

/* =========================
   Helpers
   ========================= */

const yearlyFromMonthlyRange = (min: number, max: number) => ({
  min: Math.round(min * 12),
  max: Math.round(max * 12),
});

const safeCapRate = (noiAnnual: number, price: number) => {
  if (!price || price <= 0) return 0;
  return Math.round((noiAnnual / price) * 1000) / 10; // 1 decimal place
};

const mapsUrl = (addressLine: string, city: string, state: string) => {
  const q = encodeURIComponent(`${addressLine}, ${city}, ${state}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
};

// Human-friendly Redfin search URL (avoids Zillow wrong-house issues)
const redfinSearchUrl = (addressLine: string, city: string, state: string) => {
  const q = encodeURIComponent(`${addressLine}, ${city}, ${state}`);
  return `https://www.redfin.com/search/filter/query=${q}`;
};

const emptyVotes = () => ({
  enabled: true,
  favoritesCount: 0,
  votes: [
    { label: "Love", count: 0 },
    { label: "Maybe", count: 0 },
    { label: "No", count: 0 },
  ],
});

// Mapbox static preview (shows null if token missing)
const mapboxStatic = (lat: number, lng: number, zoom: number) => {
  const token = (import.meta as any)?.env?.VITE_MAPBOX_TOKEN as string | undefined;
  if (!token) return null;

  return `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-s+111827(${lng},${lat})/${lng},${lat},${zoom}/900x540@2x?logo=false&attribution=false&access_token=${token}`;
};

// Vibes: safe placeholder photos via Unsplash "source" queries
// (not listing photos, just neighborhood mood)
const vibePhoto = (query: string) =>
  `https://source.unsplash.com/900x600/?${encodeURIComponent(query)}`;

const buildVibes = (title: string, queries: string[], subtitle?: string) => ({
  title,
  subtitle,
  photos: queries.slice(0, 6).map((q) => ({
    url: vibePhoto(q),
    credit: "Unsplash (query source)",
  })),
});

/* =========================
   Portfolio Dataset
   ========================= */

export const portfolio = {
  version: "1.2.0",
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
        provider: "mapbox",
        lat: 30.4099,
        lng: -98.0443,
        zoom: 10,
        staticUrl: mapboxStatic(30.4099, -98.0443, 10),
      },
      datingScene:
        "Exceptional — Austin adjacency plus Hill Country wine culture, lake lifestyle, and affluent social circles.",
      bestFor:
        "Affluent couples, wine enthusiasts, water-sports families, relationship-focused professionals.",
      pdf: {
        section: "Texas Hill Country",
        avoidPageBreak: true,
        storyTitle: "Lake light, wine nights, and long weekends that feel like a movie set.",
      },
      vibes: buildVibes(
        "Hill Country Vibes",
        [
          "lake travis sunset boat",
          "texas hill country winery",
          "austin upscale restaurant",
          "luxury ranch interior",
          "vineyard tasting patio",
          "lake house dock evening",
        ],
        "Wineries, lake days, and polished-but-relaxed Austin energy."
      ),
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
          annualIncome: yearlyFromMonthlyRange(12000, 16000),
          roiNotes:
            "Lakefront Hill Country luxury with limited comparable inventory. Pricing power driven by water access + gated feel.",
          capRate: {
            enabled: false,
            estimatedNOI: 155000,
            estimatedCapRate: safeCapRate(155000, 6550000),
          },
          isJason: true,
          links: {
            maps: mapsUrl("19813 Lakehurst Loop", "Spicewood", "TX"),
            redfin: redfinSearchUrl("19813 Lakehurst Loop", "Spicewood", "TX"),
          },
          privateNotes: {
            enabled: false,
            notes: ["Sunset exposure is exceptional", "Feels like a legacy family lake house"],
          },
          vibes: buildVibes(
            "Lake & Wine Night",
            ["lake house entertaining", "wine tasting patio", "hill country sunset"],
            "Dock-to-dinner energy."
          ),
          votes: emptyVotes(),
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
          annualIncome: yearlyFromMonthlyRange(4500, 6500),
          roiNotes:
            "Lower entry point Hill Country rental with strong weekend utilization and resale appeal.",
          capRate: {
            enabled: false,
            estimatedNOI: 62000,
            estimatedCapRate: safeCapRate(62000, 1299000),
          },
          links: {
            maps: mapsUrl("3507 Bee Creek Rd", "Spicewood", "TX"),
            redfin: redfinSearchUrl("3507 Bee Creek Rd", "Spicewood", "TX"),
          },
          privateNotes: {
            enabled: false,
            notes: ["Great overflow option for visiting friends"],
          },
          vibes: buildVibes(
            "Weekend Escape",
            ["texas hill country trails", "wine country brunch", "cozy luxury cabin"],
            "Short-drive reset button."
          ),
          votes: emptyVotes(),
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
          annualIncome: yearlyFromMonthlyRange(9000, 13000),
          roiNotes:
            "Revenue driven by group size and event potential. Great for multi-family stays and retreat-style bookings.",
          capRate: {
            enabled: false,
            estimatedNOI: 120000,
            estimatedCapRate: safeCapRate(120000, 4200000),
          },
          links: {
            maps: mapsUrl("74 Swede Springs", "Boerne", "TX"),
            redfin: redfinSearchUrl("74 Swede Springs", "Boerne", "TX"),
          },
          privateNotes: {
            enabled: false,
            notes: ["Feels like a wedding venue in disguise"],
          },
          vibes: buildVibes(
            "Big-Table Hosting",
            ["outdoor dinner string lights", "estate garden party", "hill country estate"],
            "Gathering magnet."
          ),
          votes: emptyVotes(),
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
        provider: "mapbox",
        lat: 30.2936,
        lng: -97.8258,
        zoom: 11,
        staticUrl: mapboxStatic(30.2936, -97.8258, 11),
      },
      datingScene:
        "Excellent — Constant influx of tech talent, founders, and creative professionals.",
      bestFor:
        "Founders, executives, creative professionals, power couples, high-network social calendars.",
      pdf: {
        section: "Austin Metro",
        avoidPageBreak: true,
        storyTitle: "Rooftops, deal flow, and date nights that turn into new ideas.",
      },
      vibes: buildVibes(
        "Austin Vibes",
        [
          "austin rooftop bar night",
          "austin fine dining",
          "west lake hills neighborhood",
          "boutique hotel lobby",
          "austin skyline evening",
          "modern cocktail lounge",
        ],
        "Upscale city energy with a warm, creative edge."
      ),
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
          annualIncome: yearlyFromMonthlyRange(15000, 20000),
          roiNotes:
            "Executive-level demand in West Lake-style pockets with strong appreciation tailwinds and premium long-stay potential.",
          capRate: {
            enabled: false,
            estimatedNOI: 200000,
            estimatedCapRate: safeCapRate(200000, 6750000),
          },
          links: {
            maps: mapsUrl("3806 Spirit Lake Cv", "Austin", "TX"),
            redfin: redfinSearchUrl("3806 Spirit Lake Cv", "Austin", "TX"),
          },
          privateNotes: {
            enabled: false,
            notes: ["Feels very 'Austin power couple'"],
          },
          vibes: buildVibes(
            "City Luxe",
            ["austin cocktail lounge", "luxury home interior modern", "rooftop bar"],
            "Polished, modern, social."
          ),
          votes: emptyVotes(),
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
        provider: "mapbox",
        lat: 39.6311,
        lng: -106.0744,
        zoom: 11,
        staticUrl: mapboxStatic(39.6311, -106.0744, 11),
      },
      datingScene:
        "Good — Outdoor-first, quality-over-quantity pool. Fewer people, stronger alignment.",
      bestFor:
        "Adventure couples, remote workers, fly-fishing families, privacy-seeking professionals.",
      pdf: {
        section: "Colorado Mountain Resorts",
        avoidPageBreak: true,
        storyTitle: "Lake Dillon mornings, alpine afternoons, fireplace evenings.",
      },
      vibes: buildVibes(
        "Summit County Vibes",
        [
          "lake dillon sunrise",
          "mountain lodge luxury interior",
          "fly fishing colorado river",
          "apres ski cocktail lounge",
          "snowy cabin fireplace",
          "silverthorne colorado winter",
        ],
        "Four-season nature luxury: water, snow, and quiet glamour."
      ),
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
          annualIncome: yearlyFromMonthlyRange(12000, 16000),
          roiNotes:
            "Four-season rental demand driven by Lake Dillon access, fishing culture, and limited luxury inventory.",
          capRate: {
            enabled: false,
            estimatedNOI: 160000,
            estimatedCapRate: safeCapRate(160000, 3595000),
          },
          isJason: true,
          links: {
            maps: mapsUrl("2244 Johnson Rd", "Silverthorne", "CO"),
            redfin: redfinSearchUrl("2244 Johnson Rd", "Silverthorne", "CO"),
          },
          privateNotes: {
            enabled: false,
            notes: ["Fly-fishing culture is a huge plus", "Feels calm and restorative"],
          },
          vibes: buildVibes(
            "Lake + River Calm",
            ["lake dillon shore", "fly fishing river", "mountain town coffee shop"],
            "Quiet luxury, outdoorsy rhythm."
          ),
          votes: emptyVotes(),
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
          annualIncome: yearlyFromMonthlyRange(25000, 35000),
          roiNotes:
            "Ultra-luxury estate optimized for privacy and legacy. This is about scale and exclusivity, not yield.",
          capRate: {
            enabled: false,
            estimatedNOI: 350000,
            estimatedCapRate: safeCapRate(350000, 24500000),
          },
          links: {
            maps: mapsUrl("1800 Triple Creek Ranch Rd", "Silverthorne", "CO"),
            redfin: redfinSearchUrl("1800 Triple Creek Ranch Rd", "Silverthorne", "CO"),
          },
          privateNotes: {
            enabled: false,
            notes: ["This is about legacy and privacy, not yield"],
          },
          vibes: buildVibes(
            "Private Estate Energy",
            ["luxury mountain estate", "private driveway snow", "mountain lodge great room"],
            "Big-sky privacy and serious calm."
          ),
          votes: emptyVotes(),
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
        provider: "mapbox",
        lat: 39.4817,
        lng: -106.0384,
        zoom: 12,
        staticUrl: mapboxStatic(39.4817, -106.0384, 12),
      },
      datingScene:
        "Exceptional — Affluent visitors, vibrant après scene, and high social throughput in peak season.",
      bestFor:
        "Ski-focused couples, entertaining-forward owners, second-home investors, family holiday traditions.",
      pdf: {
        section: "Colorado Mountain Resorts",
        avoidPageBreak: true,
        storyTitle: "Boots by the door, champagne by the fire, Main Street lights outside.",
      },
      vibes: buildVibes(
        "Breckenridge Vibes",
        [
          "breckenridge main street winter",
          "apres ski champagne",
          "luxury ski chalet interior",
          "ski town restaurant cozy",
          "mountain gondola snow",
          "hot tub mountain view night",
        ],
        "Après polish with storybook snow-globe charm."
      ),
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
          annualIncome: yearlyFromMonthlyRange(18000, 28000),
          roiNotes:
            "Premium Breckenridge positioning supports high seasonal rates and repeat renter loyalty.",
          capRate: {
            enabled: false,
            estimatedNOI: 260000,
            estimatedCapRate: safeCapRate(260000, 6995000),
          },
          isJason: true,
          links: {
            maps: mapsUrl("320 Headlight Dr", "Breckenridge", "CO"),
            redfin: redfinSearchUrl("320 Headlight Dr", "Breckenridge", "CO"),
          },
          privateNotes: {
            enabled: false,
            notes: ["Main Street energy without chaos"],
          },
          vibes: buildVibes(
            "Peak Season Glow",
            ["breckenridge chalet", "apres ski bar", "snowy mountain cabin night"],
            "Holiday-core but grown up."
          ),
          votes: emptyVotes(),
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
          annualIncome: yearlyFromMonthlyRange(25000, 35000),
          roiNotes:
            "Top-tier ski-market luxury commanding premium nightly rates in peak season; trophy inventory stays scarce.",
          capRate: {
            enabled: false,
            estimatedNOI: 360000,
            estimatedCapRate: safeCapRate(360000, 14499999),
          },
          isJason: true,
          links: {
            maps: mapsUrl("250 Sallie Barber Rd", "Breckenridge", "CO"),
            redfin: redfinSearchUrl("250 Sallie Barber Rd", "Breckenridge", "CO"),
          },
          privateNotes: {
            enabled: false,
            notes: ["This is the social centerpiece property"],
          },
          vibes: buildVibes(
            "Trophy Chalet",
            ["luxury ski chalet", "private chef dinner mountain", "hot tub snowy view"],
            "The one friends ask about first."
          ),
          votes: emptyVotes(),
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
        provider: "mapbox",
        lat: 40.0861,
        lng: -105.9395,
        zoom: 10,
        staticUrl: mapboxStatic(40.0861, -105.9395, 10),
      },
      vibes: buildVibes(
        "Rocky Mountain National Park",
        [
          "estes park mountain town",
          "rocky mountain national park trail",
          "mountain lodge interior",
          "elk in estes park",
          "alpine lake colorado",
        ],
        "Quiet, majestic, and deeply nature-oriented."
      ),
      datingScene:
        "Moderate — Quiet, nature-focused dating pool emphasizing quality over quantity.",
      bestFor:
        "Nature lovers, hikers, photographers, introvert-friendly families.",
      pdf: {
        section: "Northern Colorado Mountains",
        avoidPageBreak: true,
      },
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
          annualIncome: yearlyFromMonthlyRange(8000, 12000),
          roiNotes:
            "RMNP-adjacent rental with strong seasonal tourism and family appeal.",
          capRate: {
            enabled: false,
            estimatedNOI: 115000,
            estimatedCapRate: safeCapRate(115000, 5600000),
          },
          links: {
            maps: mapsUrl("52899 US Hwy 40", "Granby", "CO"),
            redfin: redfinSearchUrl("52899 US Hwy 40", "Granby", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Feels like a true mountain lodge"] },
          votes: emptyVotes(),
        },
        {
          id: "county-rd-40",
          address: "5188 County Road 40",
          city: "Granby",
          state: "CO",
          price: 7995000,
          beds: 7,
          baths: 8,
          sqft: 9970,
          monthlyIncome: { min: 14000, max: 19000 },
          annualIncome: yearlyFromMonthlyRange(14000, 19000),
          roiNotes:
            "Large-group capacity with new-build appeal driving higher per-stay revenue.",
          capRate: {
            enabled: false,
            estimatedNOI: 185000,
            estimatedCapRate: safeCapRate(185000, 7995000),
          },
          links: {
            maps: mapsUrl("5188 County Road 40", "Granby", "CO"),
            redfin: redfinSearchUrl("5188 County Road 40", "Granby", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Ideal for multi-generational trips"] },
          votes: emptyVotes(),
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
          annualIncome: yearlyFromMonthlyRange(10000, 14000),
          roiNotes:
            "Gateway-to-RMNP positioning ensures consistent tourist demand.",
          capRate: {
            enabled: false,
            estimatedNOI: 140000,
            estimatedCapRate: safeCapRate(140000, 3125000),
          },
          links: {
            maps: mapsUrl("2327 Deer Ridge Dr", "Estes Park", "CO"),
            redfin: redfinSearchUrl("2327 Deer Ridge Dr", "Estes Park", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Wildlife sightings are frequent"] },
          votes: emptyVotes(),
        },
      ],
    },

    /* =====================================================
       GROUP 6 — DENVER METRO (NORTH / NORTHEAST)
       ===================================================== */
    {
      id: "denver-north",
      name: "Denver Metro — North / Northeast",
      region: "EXECUTIVE / URBAN",
      roses: 2,
      map: {
        provider: "mapbox",
        lat: 39.853,
        lng: -104.776,
        zoom: 10,
        staticUrl: mapboxStatic(39.853, -104.776, 10),
      },
      vibes: buildVibes(
        "Denver Executive Living",
        [
          "denver skyline evening",
          "executive modern home interior",
          "denver upscale restaurant",
          "corporate lounge interior",
        ],
        "Polished, professional, and convenience-driven."
      ),
      datingScene:
        "Good — Strong professional singles pool across tech, finance, and corporate sectors.",
      bestFor:
        "Corporate executives, business leaders, relocation-focused professionals.",
      pdf: {
        section: "Denver Metro",
        avoidPageBreak: true,
      },
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
          annualIncome: yearlyFromMonthlyRange(28000, 35000),
          roiNotes:
            "Executive-grade new construction near DIA supporting premium nightly rates.",
          capRate: {
            enabled: false,
            estimatedNOI: 380000,
            estimatedCapRate: safeCapRate(380000, 8850000),
          },
          isJason: true,
          links: {
            maps: mapsUrl("12565 Picadilly Rd", "Commerce City", "CO"),
            redfin: redfinSearchUrl("12565 Picadilly Rd", "Commerce City", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Feels purpose-built for executive hosting"] },
          votes: emptyVotes(),
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
        provider: "mapbox",
        lat: 40.5853,
        lng: -105.0844,
        zoom: 10,
        staticUrl: mapboxStatic(40.5853, -105.0844, 10),
      },
      vibes: buildVibes(
        "Fort Collins & Loveland",
        ["fort collins old town", "colorado brewery patio", "loveland wine tasting", "front range foothills sunset"],
        "Youthful, social, outdoorsy, and quietly affluent."
      ),
      datingScene:
        "Exceptional — Fort Collins consistently ranks as one of the best singles cities in Colorado.",
      bestFor:
        "Young professionals, relocating families, wine lovers, remote workers.",
      pdf: {
        section: "Northern Colorado",
        avoidPageBreak: true,
      },
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
          annualIncome: yearlyFromMonthlyRange(6000, 8500),
          roiNotes:
            "New construction with strong long-term appreciation tied to Fort Collins growth.",
          capRate: {
            enabled: false,
            estimatedNOI: 85000,
            estimatedCapRate: safeCapRate(85000, 2400000),
          },
          isJason: true,
          links: {
            maps: mapsUrl("0 Soaring Eagle Pass", "Loveland", "CO"),
            redfin: redfinSearchUrl("0 Soaring Eagle Pass", "Loveland", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Feels like a future-forward location"] },
          votes: emptyVotes(),
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
          annualIncome: yearlyFromMonthlyRange(7000, 9500),
          roiNotes:
            "Wine-country adjacency and RMNP access create experiential rental demand.",
          capRate: {
            enabled: false,
            estimatedNOI: 98000,
            estimatedCapRate: safeCapRate(98000, 4500000),
          },
          isJason: true,
          links: {
            maps: mapsUrl("23930 N Highway 287", "Livermore", "CO"),
            redfin: redfinSearchUrl("23930 N Highway 287", "Livermore", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Romantic without feeling isolated"] },
          votes: emptyVotes(),
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
          annualIncome: yearlyFromMonthlyRange(8000, 11000),
          roiNotes:
            "Balanced luxury appealing to families and longer-term renters.",
          capRate: {
            enabled: false,
            estimatedNOI: 115000,
            estimatedCapRate: safeCapRate(115000, 3850000),
          },
          links: {
            maps: mapsUrl("796 Abrams Way", "Loveland", "CO"),
            redfin: redfinSearchUrl("796 Abrams Way", "Loveland", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Very livable, day-to-day layout"] },
          votes: emptyVotes(),
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
        provider: "mapbox",
        lat: 40.056,
        lng: -104.652,
        zoom: 9,
        staticUrl: mapboxStatic(40.056, -104.652, 9),
      },
      vibes: buildVibes(
        "Weld County Acreage",
        ["colorado ranch property", "open plains colorado sunset", "equestrian estate colorado", "country home long driveway"],
        "Quiet, expansive, practical, and relationship-focused."
      ),
      datingScene:
        "Moderate — Smaller pool, but highly relationship-oriented with Denver access.",
      bestFor:
        "Growing families, equestrian enthusiasts, land-seeking professionals.",
      pdf: {
        section: "Weld County",
        avoidPageBreak: true,
      },
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
          annualIncome: yearlyFromMonthlyRange(6500, 8500),
          roiNotes:
            "Acreage-focused new build emphasizing stability over short-term yield.",
          capRate: {
            enabled: false,
            estimatedNOI: 90000,
            estimatedCapRate: safeCapRate(90000, 2299900),
          },
          isJason: true,
          links: {
            maps: mapsUrl("12550 Imboden Rd", "Hudson", "CO"),
            redfin: redfinSearchUrl("12550 Imboden Rd", "Hudson", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Feels like a long-term land play"] },
          votes: emptyVotes(),
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
          annualIncome: yearlyFromMonthlyRange(3500, 5000),
          roiNotes:
            "Entry-level rural investment appealing to Denver commuters.",
          capRate: {
            enabled: false,
            estimatedNOI: 52000,
            estimatedCapRate: safeCapRate(52000, 1175000),
          },
          links: {
            maps: mapsUrl("48155 E 56th Ave", "Bennett", "CO"),
            redfin: redfinSearchUrl("48155 E 56th Ave", "Bennett", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Simple, practical, low drama"] },
          votes: emptyVotes(),
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
          annualIncome: yearlyFromMonthlyRange(5000, 7000),
          roiNotes:
            "Large-family rural home with strong long-term tenancy appeal.",
          capRate: {
            enabled: false,
            estimatedNOI: 72000,
            estimatedCapRate: safeCapRate(72000, 1695000),
          },
          links: {
            maps: mapsUrl("1150 S County Road 121", "Bennett", "CO"),
            redfin: redfinSearchUrl("1150 S County Road 121", "Bennett", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Very family-oriented energy"] },
          votes: emptyVotes(),
        },
      ],
    },

    /* =====================================================
       GROUP 9 — LONGMONT, CO
       ===================================================== */
    {
      id: "longmont",
      name: "Longmont Area, CO",
      region: "TECH / CREATIVE",
      roses: 2,
      map: {
        provider: "mapbox",
        lat: 40.1672,
        lng: -105.1019,
        zoom: 11,
        staticUrl: mapboxStatic(40.1672, -105.1019, 11),
      },
      vibes: buildVibes(
        "Longmont + Boulder Adjacency",
        ["longmont downtown colorado", "boulder coffee shop", "front range trails", "craft brewery colorado"],
        "Smart, creative, and quietly upscale with Boulder spillover."
      ),
      datingScene:
        "Good — Tech and creative professionals, plus Boulder-adjacent venues and meetups.",
      bestFor:
        "Tech workers, creatives, Boulder-adjacent lifestyle seekers.",
      pdf: {
        section: "Northern Colorado",
        avoidPageBreak: true,
      },
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
          annualIncome: yearlyFromMonthlyRange(10000, 13000),
          roiNotes:
            "Premium positioning with strong tech-worker rental demand and Boulder spillover.",
          capRate: {
            enabled: false,
            estimatedNOI: 140000,
            estimatedCapRate: safeCapRate(140000, 3750000),
          },
          links: {
            maps: mapsUrl("10323 Mineral Rd", "Longmont", "CO"),
            redfin: redfinSearchUrl("10323 Mineral Rd", "Longmont", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Feels like Boulder without Boulder pricing"] },
          votes: emptyVotes(),
        },
        {
          id: "county-line",
          address: "15137 E County Line Rd",
          city: "Longmont",
          state: "CO",
          price: 3600000,
          beds: 3,
          baths: 4,
          sqft: 5184,
          monthlyIncome: { min: 9500, max: 12500 },
          annualIncome: yearlyFromMonthlyRange(9500, 12500),
          roiNotes:
            "Luxury finishes + acreage vibe; broad appeal for longer stays and premium tenants.",
          capRate: {
            enabled: false,
            estimatedNOI: 132000,
            estimatedCapRate: safeCapRate(132000, 3600000),
          },
          links: {
            maps: mapsUrl("15137 E County Line Rd", "Longmont", "CO"),
            redfin: redfinSearchUrl("15137 E County Line Rd", "Longmont", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Great 'privacy + proximity' balance"] },
          votes: emptyVotes(),
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
        provider: "mapbox",
        lat: 39.3714,
        lng: -104.8561,
        zoom: 10,
        staticUrl: mapboxStatic(39.3714, -104.8561, 10),
      },
      vibes: buildVibes(
        "South Denver Suburban Luxe",
        ["castle rock colorado trails", "country club dining colorado", "franktown colorado ranch", "denver suburb luxury home"],
        "Polished suburban comfort with country-luxe edges."
      ),
      datingScene:
        "Moderate — Affluent suburban professionals, outdoorsy routines, and family-centric community energy.",
      bestFor:
        "Executive families, outdoor recreation lovers, country-adjacent living.",
      pdf: {
        section: "South Denver Metro",
        avoidPageBreak: true,
      },
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
          annualIncome: yearlyFromMonthlyRange(9000, 12000),
          roiNotes:
            "Premium community positioning with stable executive-family rental demand.",
          capRate: {
            enabled: false,
            estimatedNOI: 120000,
            estimatedCapRate: safeCapRate(120000, 3500000),
          },
          links: {
            maps: mapsUrl("7273 Lemon Gulch Way", "Castle Rock", "CO"),
            redfin: redfinSearchUrl("7273 Lemon Gulch Way", "Castle Rock", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Safe, polished, predictable in a good way"] },
          votes: emptyVotes(),
        },
        {
          id: "fox-creek",
          address: "7497 Fox Creek Trl",
          city: "Franktown",
          state: "CO",
          price: 4950000,
          beds: 5,
          baths: 5,
          sqft: 7518,
          monthlyIncome: { min: 11000, max: 15000 },
          annualIncome: yearlyFromMonthlyRange(11000, 15000),
          roiNotes:
            "Estate scale with country-luxury positioning; strong appeal for extended stays and events.",
          capRate: {
            enabled: false,
            estimatedNOI: 160000,
            estimatedCapRate: safeCapRate(160000, 4950000),
          },
          links: {
            maps: mapsUrl("7497 Fox Creek Trl", "Franktown", "CO"),
            redfin: redfinSearchUrl("7497 Fox Creek Trl", "Franktown", "CO"),
          },
          privateNotes: { enabled: false, notes: ["The ‘Colorado dream acreage’ home"] },
          votes: emptyVotes(),
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
        provider: "mapbox",
        lat: 39.9878,
        lng: -105.255,
        zoom: 10,
        staticUrl: mapboxStatic(39.9878, -105.255, 10),
      },
      vibes: buildVibes(
        "Boulder + Foothills",
        ["boulder colorado foothills", "flatirons mountain view", "luxury mountain home colorado", "evergreen colorado scenery"],
        "High-achievement, nature-forward, understated wealth with strong legacy energy."
      ),
      datingScene:
        "Good to Excellent — Ultra-educated, high-income professionals mixed with established mountain communities.",
      bestFor:
        "Ultra-affluent individuals, mountain lifestyle couples, second-home owners.",
      pdf: {
        section: "Colorado Foothills",
        avoidPageBreak: true,
      },
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
          annualIncome: yearlyFromMonthlyRange(22000, 30000),
          roiNotes:
            "Ultra-rare Boulder estate driven by scarcity, prestige, and long-term appreciation.",
          capRate: {
            enabled: false,
            estimatedNOI: 300000,
            estimatedCapRate: safeCapRate(300000, 19500000),
          },
          links: {
            maps: mapsUrl("6686 Jay Rd", "Boulder", "CO"),
            redfin: redfinSearchUrl("6686 Jay Rd", "Boulder", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Pure status and legacy asset"] },
          votes: emptyVotes(),
        },
        {
          id: "deer-meadow",
          address: "5881 Deer Meadow Trl",
          city: "Golden",
          state: "CO",
          price: 5450000,
          beds: 7,
          baths: 7,
          sqft: 15070,
          monthlyIncome: { min: 13000, max: 18000 },
          annualIncome: yearlyFromMonthlyRange(13000, 18000),
          roiNotes:
            "Large-scale foothills retreat with multi-family and event appeal.",
          capRate: {
            enabled: false,
            estimatedNOI: 175000,
            estimatedCapRate: safeCapRate(175000, 5450000),
          },
          links: {
            maps: mapsUrl("5881 Deer Meadow Trl", "Golden", "CO"),
            redfin: redfinSearchUrl("5881 Deer Meadow Trl", "Golden", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Space to host everyone comfortably"] },
          votes: emptyVotes(),
        },
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
          annualIncome: yearlyFromMonthlyRange(10000, 14000),
          roiNotes:
            "Evergreen luxury appealing to long-term mountain residents and executives.",
          capRate: {
            enabled: false,
            estimatedNOI: 135000,
            estimatedCapRate: safeCapRate(135000, 3900000),
          },
          links: {
            maps: mapsUrl("32453 Upper Bear Creek Rd", "Evergreen", "CO"),
            redfin: redfinSearchUrl("32453 Upper Bear Creek Rd", "Evergreen", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Calm, grounded, very livable"] },
          votes: emptyVotes(),
        },
        {
          id: "richmond-hill-1",
          address: "26271 Richmond Hill Rd",
          city: "Conifer",
          state: "CO",
          price: 5999000,
          beds: 5,
          baths: 6,
          sqft: 7706,
          monthlyIncome: { min: 14000, max: 19000 },
          annualIncome: yearlyFromMonthlyRange(14000, 19000),
          roiNotes:
            "Top-tier Conifer luxury with strong second-home demand.",
          capRate: {
            enabled: false,
            estimatedNOI: 185000,
            estimatedCapRate: safeCapRate(185000, 5999000),
          },
          links: {
            maps: mapsUrl("26271 Richmond Hill Rd", "Conifer", "CO"),
            redfin: redfinSearchUrl("26271 Richmond Hill Rd", "Conifer", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Best of the Richmond Hill cluster"] },
          votes: emptyVotes(),
        },
        {
          id: "richmond-hill-2",
          address: "26269 Richmond Hill Rd",
          city: "Conifer",
          state: "CO",
          price: 2499000,
          beds: 5,
          baths: 6,
          sqft: 7706,
          monthlyIncome: { min: 8000, max: 11000 },
          annualIncome: yearlyFromMonthlyRange(8000, 11000),
          roiNotes:
            "Value-oriented luxury with strong cost-to-quality ratio.",
          capRate: {
            enabled: false,
            estimatedNOI: 105000,
            estimatedCapRate: safeCapRate(105000, 2499000),
          },
          links: {
            maps: mapsUrl("26269 Richmond Hill Rd", "Conifer", "CO"),
            redfin: redfinSearchUrl("26269 Richmond Hill Rd", "Conifer", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Best value in the trio"] },
          votes: emptyVotes(),
        },
        {
          id: "richmond-hill-3",
          address: "26275 Richmond Hill Rd",
          city: "Conifer",
          state: "CO",
          price: 3999000,
          beds: 5,
          baths: 6,
          sqft: 7706,
          monthlyIncome: { min: 10000, max: 14000 },
          annualIncome: yearlyFromMonthlyRange(10000, 14000),
          roiNotes:
            "Balanced offering completing the Richmond Hill micro-community.",
          capRate: {
            enabled: false,
            estimatedNOI: 145000,
            estimatedCapRate: safeCapRate(145000, 3999000),
          },
          links: {
            maps: mapsUrl("26275 Richmond Hill Rd", "Conifer", "CO"),
            redfin: redfinSearchUrl("26275 Richmond Hill Rd", "Conifer", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Nice shared-community feel"] },
          votes: emptyVotes(),
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
          annualIncome: yearlyFromMonthlyRange(11000, 15000),
          roiNotes:
            "Golf-adjacent foothills luxury with executive renter appeal.",
          capRate: {
            enabled: false,
            estimatedNOI: 155000,
            estimatedCapRate: safeCapRate(155000, 4250000),
          },
          links: {
            maps: mapsUrl("810 N Perry Park Rd", "Sedalia", "CO"),
            redfin: redfinSearchUrl("810 N Perry Park Rd", "Sedalia", "CO"),
          },
          privateNotes: { enabled: false, notes: ["Strong entertaining energy"] },
          votes: emptyVotes(),
        },
      ],
    },
  ],
} as const;
