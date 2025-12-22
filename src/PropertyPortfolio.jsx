import React, { useState } from "react"
<button ...>
  <span>⬇️</span>
  Download PDF
</button>

<Home ... />        → <span className="text-green-600 text-2xl">🏠</span>
<TrendingUp ... />  → <span className="text-blue-600 text-2xl">📈</span>
<DollarSign ... />  → <span className="text-purple-600 text-2xl">$</span>
<MapPin ... />      → <span className="text-white text-2xl">📍</span>
<Heart ... />       → <span className="text-pink-600 text-lg">❤️</span>
<Bed ... />         → <span>🛏</span>
<Bath ... />        → <span>🛁</span>
<Maximize ... />    → <span>⬜</span>



const PropertyPortfolio = () => {
  const [selectedGroup, setSelectedGroup] = useState(null)

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
  ]

  const handleDownloadPDF = () => {
    window.print()
  }

  const renderHearts = (count) => Array(count).fill("❤️").join("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
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

      <div className="max-w-7xl mx-auto print-content">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-indigo-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
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
              <Download size={20} />
              Download PDF
            </button>
          </div>

          {/* Portfolio Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <Home className="text-green-600" size={24} />
                <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                  Total Value
                </span>
              </div>
              <p className="text-3xl font-bold text-green-900">$241.5M</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-blue-600" size={24} />
                <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                  Monthly Income
                </span>
              </div>
              <p className="text-3xl font-bold text-blue-900">$435K-$620K</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="text-purple-600" size={24} />
                <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
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
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 cursor-pointer hover:from-indigo-600 hover:to-purple-700 transition-all"
                onClick={() =>
                  setSelectedGroup(selectedGroup === group.id ? null : group.id)
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="text-white" size={24} />
                      <h2 className="text-2xl font-bold text-white">
                        {group.name}
                      </h2>
                      <span className="text-white text-2xl">
                        {renderHearts(group.hearts)}
                      </span>
                    </div>
                    <p className="text-indigo-100 text-sm uppercase tracking-wide">
                      {group.region}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-xl">
                      {group.totalValue}
                    </p>
                    <p className="text-indigo-100 text-sm">
                      {group.properties.length} Properties
                    </p>
                  </div>
                </div>
              </div>

              {selectedGroup === group.id && (
                <div className="p-6 space-y-6">
                  {/* Group Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl">
                      <p className="text-sm font-semibold text-gray-600 mb-1">
                        Monthly Income
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {group.monthlyIncome}
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl">
                      <p className="text-sm font-semibold text-gray-600 mb-1">
                        Annual Income
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {group.annualIncome}
                      </p>
                    </div>
                  </div>

                  <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold text-pink-800 mb-2 flex items-center gap-2">
                      <Heart className="text-pink-600" size={18} />
                      Dating Scene
                    </p>
                    <p className="text-pink-900">{group.datingScene}</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold text-blue-800 mb-2">
                      Best For
                    </p>
                    <p className="text-blue-900">{group.bestFor}</p>
                  </div>

                  {/* Properties */}
                  <div className="space-y-4">
                    {group.properties.map((property, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <a
                              href={property.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lg font-bold text-indigo-600 hover:text-indigo-800 hover:underline flex items-center gap-2 mb-2"
                            >
                              {property.address}
                              {property.jason && (
                                <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                  ⭐ JASON'S
                                </span>
                              )}
                            </a>
                            <div className="flex items-center gap-4 text-gray-600 text-sm">
                              <span className="flex items-center gap-1">
                                <Bed size={16} />
                                {property.beds} bd
                              </span>
                              <span className="flex items-center gap-1">
                                <Bath size={16} />
                                {property.baths} ba
                              </span>
                              <span className="flex items-center gap-1">
                                <Maximize size={16} />
                                {property.sqft} sqft
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">
                              {property.price}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                              Monthly Income
                            </p>
                              <p className="text-lg font-bold text-green-700">
                              {property.monthly}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                              Annual Income
                            </p>
                            <p className="text-lg font-bold text-blue-700">
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
  )
}

export default PropertyPortfolio
