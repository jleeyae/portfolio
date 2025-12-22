import React, { useState } from 'react';

const IconWrapper = ({ children, className, size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const DownloadIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </IconWrapper>
);

const HomeIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M3 9L12 2l9 7" />
    <path d="M9 22V12h6v10" />
  </IconWrapper>
);

const TrendingUpIcon = (props) => (
  <IconWrapper {...props}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </IconWrapper>
);

const HeartIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </IconWrapper>
);

const MapPinIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 21s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10z" />
    <circle cx="12" cy="11" r="2" />
  </IconWrapper>
);

const DollarSignIcon = (props) => (
  <IconWrapper {...props}>
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M17 7a5 5 0 0 0-5-3H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H7a5 5 0 0 1-5-3" />
  </IconWrapper>
);

const BedIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M2 4v16" />
    <path d="M22 4v16" />
    <path d="M2 8h20" />
    <path d="M6 12h4" />
    <path d="M14 12h4" />
    <path d="M6 16h12" />
  </IconWrapper>
);

const BathIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M6 3h2a2 2 0 0 1 2 2v2" />
    <path d="M4 7h16v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" />
    <path d="M2 7h2" />
    <path d="M20 7h2" />
    <path d="M7 3a1 1 0 0 0-2 0v4" />
  </IconWrapper>
);

const MaximizeIcon = (props) => (
  <IconWrapper {...props}>
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </IconWrapper>
);

const PropertyPortfolio = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const groups = [
    {
      id: 1,
      name: "Spicewood/Boerne Area, TX",
      region: "Hill Country",
      hearts: 4,
      totalValue: "$12,049,000",
      monthlyIncome: "$25,500-$35,500",
      annualIncome: "$306,000-$426,000",
      datingScene:
        "EXCEPTIONAL - Best combined dating pool due to Austin proximity + Hill Country exclusivity + water lifestyle",
      bestFor:
        "Active, affluent couples and families; wine enthusiasts; water sports families",
      properties: [
        {
          address: "19813 & 19817 Lakehurst Loop, Spicewood, TX 78669",
          price: "$6,550,000",
          beds: 4,
          baths: 4,
          sqft: "4,000",
          monthly: "$12,000-$16,000",
          annual: "$144,000-$192,000",
          jason: true,
          url: "https://www.zillow.com/homedetails/19813-Lakehurst-Loop-Spicewood-TX-78669/"
        },
        {
          address: "3507 Bee Creek Rd, Spicewood, TX 78669",
          price: "$1,299,000",
          beds: 3,
          baths: 3,
          sqft: "3,777",
          monthly: "$4,500-$6,500",
          annual: "$54,000-$78,000",
          url: "https://www.zillow.com/homedetails/3507-Bee-Creek-Rd-Spicewood-TX-78669/"
        },
        {
          address: "74 Swede Springs, Boerne, TX 78006",
          price: "$4,200,000",
          beds: 8,
          baths: 8,
          sqft: "8,186",
          monthly: "$9,000-$13,000",
          annual: "$108,000-$156,000",
          url: "https://www.zillow.com/homedetails/74-Swede-Springs-Boerne-TX-78006/"
        }
      ]
    },
    {
      id: 2,
      name: "Austin Area, TX",
      region: "Tech Hub",
      hearts: 3,
      totalValue: "$6,750,000",
      monthlyIncome: "$15,000-$20,000",
      annualIncome: "$180,000-$240,000",
      datingScene:
        "EXCELLENT - Direct access to Austin's tech millionaire boom",
      bestFor:
        "Tech professionals, entrepreneurs, creative types, young ambitious couples",
      properties: [
        {
          address: "3806 Spirit Lake Cv, Austin, TX 78746",
          price: "$6,750,000",
          beds: 7,
          baths: 10,
          sqft: "9,275",
          monthly: "$15,000-$20,000",
          annual: "$180,000-$240,000",
          url: "https://www.zillow.com/homedetails/3806-Spirit-Lake-Cv-Austin-TX-78746/"
        }
      ]
    },
    {
      id: 3,
      name: "Silverthorne/Summit County, CO",
      region: "Mountain Resort",
      hearts: 2,
      totalValue: "$28,095,000",
      monthlyIncome: "$37,000-$51,000",
      annualIncome: "$444,000-$612,000",
      datingScene:
        "GOOD - Quality outdoor enthusiasts; less crowded dating market",
      bestFor:
        "Outdoor-focused couples, remote workers, adventure seekers, ultra-affluent families",
      properties: [
        {
          address: "2244 Johnson Rd, Silverthorne, CO 80498",
          price: "$3,595,000",
          beds: 5,
          baths: 5,
          sqft: "6,346",
          monthly: "$12,000-$16,000",
          annual: "$144,000-$192,000",
          jason: true,
          url: "https://www.zillow.com/homedetails/2244-Johnson-Rd-Silverthorne-CO-80498/"
        },
        {
          address: "1800 Triple Creek Ranch Rd, Silverthorne, CO 80498",
          price: "$24,500,000",
          beds: 6,
          baths: 7,
          sqft: "7,284",
          monthly: "$25,000-$35,000",
          annual: "$300,000-$420,000",
          url: "https://www.zillow.com/homedetails/1800-Triple-Creek-Ranch-Rd-Silverthorne-CO-80498/"
        }
      ]
    },
    {
      id: 4,
      name: "Breckenridge, CO",
      region: "Summit County",
      hearts: 3,
      totalValue: "$21,494,999",
      monthlyIncome: "$43,000-$63,000",
      annualIncome: "$516,000-$756,000",
      datingScene:
        "EXCEPTIONAL - Highest dating opportunity concentration in any non-Texas market",
      bestFor:
        "Ski-focused couples, active professionals, entertaining-focused individuals",
      properties: [
        {
          address: "320 Headlight Dr, Breckenridge, CO 80424",
          price: "$6,995,000",
          beds: 6,
          baths: 6,
          sqft: "6,552",
          monthly: "$18,000-$28,000",
          annual: "$216,000-$336,000",
          jason: true,
          url: "https://www.zillow.com/homedetails/320-Headlight-Dr-Breckenridge-CO-80424/"
        },
        {
          address: "250 Sallie Barber Rd, Breckenridge, CO 80424",
          price: "$14,499,999",
          beds: 6,
          baths: 9,
          sqft: "7,444",
          monthly: "$25,000-$35,000",
          annual: "$300,000-$420,000",
          jason: true,
          url: "https://www.zillow.com/homedetails/250-Sallie-Barber-Rd-Breckenridge-CO-80424/"
        }
      ]
    },
    {
      id: 7,
      name: "Loveland/Fort Collins Area, CO",
      region: "Northern Colorado",
      hearts: 3,
      totalValue: "$10,750,000",
      monthlyIncome: "$21,000-$29,000",
      annualIncome: "$252,000-$348,000",
      datingScene:
        "EXCELLENT - BEST ESTABLISHED SINGLES CITY IN COLORADO (Fort Collins #1 ranked)",
      bestFor:
        "Young professionals, relocating families, wine enthusiasts, remote workers",
      properties: [
        {
          address: "0 Soaring Eagle Pass, Loveland, CO 80538",
          price: "$2,400,000",
          beds: 4,
          baths: 5,
          sqft: "5,940",
          monthly: "$6,000-$8,500",
          annual: "$72,000-$102,000",
          jason: true,
          url: "https://www.zillow.com/homedetails/0-Soaring-Eagle-Pass-Loveland-CO-80538/"
        },
        {
          address: "23930 N Highway 287, Livermore, CO 80536",
          price: "$4,500,000",
          beds: 5,
          baths: 5,
          sqft: "5,500",
          monthly: "$7,000-$9,500",
          annual: "$84,000-$114,000",
          jason: true,
          url: "https://www.zillow.com/homedetails/23930-N-Highway-287-Livermore-CO-80536/"
        },
        {
          address: "796 Abrams Way, Loveland, CO 80537",
          price: "$3,850,000",
          beds: 5,
          baths: 5,
          sqft: "6,655",
          monthly: "$8,000-$11,000",
          annual: "$96,000-$132,000",
          url: "https://www.zillow.com/homedetails/796-Abrams-Way-Loveland-CO-80537/"
        }
      ]
    },
    {
      id: 6,
      name: "Denver Metro - North/Northeast",
      region: "Denver Area",
      hearts: 2,
      totalValue: "$8,850,000",
      monthlyIncome: "$28,000-$35,000",
      annualIncome: "$336,000-$420,000",
      datingScene: "GOOD - Urban professional singles market",
      bestFor: "Corporate executives, business leaders, tech professionals",
      properties: [
        {
          address: "12565 Picadilly Road, Commerce City, CO 80022",
          price: "$8,850,000",
          beds: 6,
          baths: 13,
          sqft: "16,269",
          monthly: "$28,000-$35,000",
          annual: "$336,000-$420,000",
          jason: true,
          url: "https://www.zillow.com/homedetails/12565-Picadilly-Road-Commerce-City-CO-80022/"
        }
      ]
    },
    {
      id: 11,
      name: "Denver Metro - West/Southwest",
      region: "Foothills",
      hearts: 2,
      totalValue: "$47,598,000",
      monthlyIncome: "$94,000-$128,000",
      annualIncome: "$1,128,000-$1,536,000",
      datingScene:
        "GOOD TO EXCELLENT - Boulder ultra-wealthy market, established upscale communities",
      bestFor:
        "Ultra-affluent individuals, mountain lifestyle couples, outdoor recreation professionals",
      properties: [
        {
          address: "6686 Jay Rd, Boulder, CO 80301",
          price: "$19,500,000",
          beds: 4,
          baths: 4,
          sqft: "7,832",
          monthly: "$22,000-$30,000",
          annual: "$264,000-$360,000",
          url: "https://www.zillow.com/homedetails/6686-Jay-Rd-Boulder-CO-80301/"
        },
        {
          address: "26271 Richmond Hill Road, Conifer, CO 80433",
          price: "$5,999,000",
          beds: 5,
          baths: 6,
          sqft: "7,706",
          monthly: "$14,000-$19,000",
          annual: "$168,000-$228,000",
          url: "https://www.zillow.com/homedetails/26271-Richmond-Hill-Road-Conifer-CO-80433/"
        }
      ]
    }
  ];

  const handleDownloadPDF = () => {
    window.print();
  };

  const renderHearts = (count) => Array(count).fill("❤️").join("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <style>
        {`
          @media print {
            body * { visibility: hidden; }
            .print-content, .print-content * { visibility: visible; }
            .print-content { position: absolute; left: 0; top: 0; width: 100%; }
            .no-print { display: none !important; }
          }
        `}
      </style>

      <div className="max-w-5xl w-full mx-auto print-content">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-indigo-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-purple-700">
                Premium Property Portfolio
              </h1>
              <p className="text-gray-600 text-lg">
                33 Luxury Properties Across Texas &amp; Colorado
              </p>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="no-print flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all"
            >
              <DownloadIcon size={20} />
              Download PDF
            </button>
          </div>

          {/* Portfolio Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-5 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-3 mb-1">
                <HomeIcon className="text-emerald-600" size={20} />
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                  Total Value
                </span>
              </div>
              <p className="text-3xl font-bold text-emerald-800">$241.5M</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-1">
                <TrendingUpIcon className="text-blue-600" size={20} />
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                  Monthly Income
                </span>
              </div>
              <p className="text-3xl font-bold text-blue-900">$435K-$620K</p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-5 rounded-xl border border-pink-100">
              <div className="flex items-center gap-3 mb-1">
                <DollarSignIcon className="text-purple-600" size={20} />
                <span className="text-xs font-semibold text-purple-700 uppercase tracking-wide">
                  Annual Income
                </span>
              </div>
              <p className="text-3xl font-bold text-purple-900">$5.2M-$7.4M</p>
            </div>
          </div>
        </div>

        {/* Property Groups */}
        <div className="space-y-6">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <button
                type="button"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-5 cursor-pointer hover:from-indigo-600 hover:to-purple-700 transition-all flex items-center justify-between text-left"
                onClick={() =>
                  setSelectedGroup(
                    selectedGroup === group.id ? null : group.id
                  )
                }
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <MapPinIcon className="text-white" size={20} />
                    <h2 className="text-xl font-semibold text-white">
                      {group.name}
                    </h2>
                    <span className="text-xl text-white">
                      {renderHearts(group.hearts)}
                    </span>
                  </div>
                  <p className="text-indigo-100 text-xs uppercase tracking-wide">
                    {group.region}
                  </p>
                </div>
                <div className="text-right text-sm text-white">
                  <p className="font-bold text-lg">{group.totalValue}</p>
                  <p className="text-indigo-100">
                    {group.properties.length} Properties
                  </p>
                </div>
              </button>

              {selectedGroup === group.id && (
                <div className="p-6 space-y-6 bg-slate-50">
                  {/* Group stats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 border border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                        Monthly Income
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {group.monthlyIncome}
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                        Annual Income
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {group.annualIncome}
                      </p>
                    </div>
                  </div>

                  {/* Dating scene */}
                  <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
                    <p className="text-sm font-semibold text-pink-800 mb-2 flex items-center gap-2">
                      <HeartIcon className="text-pink-600" size={18} />
                      Dating Scene
                    </p>
                    <p className="text-pink-900 text-sm">{group.datingScene}</p>
                  </div>

                  {/* Best for */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm font-semibold text-blue-800 mb-2">
                      Best For
                    </p>
                    <p className="text-blue-900 text-sm">{group.bestFor}</p>
                  </div>

                  {/* Properties */}
                  <div className="space-y-4">
                    {group.properties.map((property, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <a
                              href={property.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-base font-semibold text-indigo-700 hover:text-indigo-900 hover:underline flex items-center gap-2"
                            >
                              {property.address}
                              {property.jason && (
                                <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                  ⭐ JASON'S
                                </span>
                              )}
                            </a>
                            <div className="flex items-center gap-4 text-gray-600 text-xs mt-2">
                              <span className="flex items-center gap-1">
                                <BedIcon size={14} />
                                {property.beds} bd
                              </span>
                              <span className="flex items-center gap-1">
                                <BathIcon size={14} />
                                {property.baths} ba
                              </span>
                              <span className="flex items-center gap-1">
                                <MaximizeIcon size={14} />
                                {property.sqft} sqft
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-gray-900">
                              {property.price}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 text-xs">
                          <div>
                            <p className="text-gray-500 font-semibold uppercase tracking-wide mb-1">
                              Monthly Income
                            </p>
                            <p className="text-green-700 text-base font-bold">
                              {property.monthly}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 font-semibold uppercase tracking-wide mb-1">
                              Annual Income
                            </p>
                            <p className="text-blue-700 text-base font-bold">
                              {property.annual}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Property Portfolio • Last Updated: December 2025</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyPortfolio;



