import React from 'react';

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

const DollarSignIcon = (props) => (
  <IconWrapper {...props}>
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M17 7a5 5 0 0 0-5-3H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H7a5 5 0 0 1-5-3" />
  </IconWrapper>
);

const MapPinIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 21s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10z" />
    <circle cx="12" cy="11" r="2" />
  </IconWrapper>
);

const PropertyPortfolio = () => {
  const groups = [
    {
      id: 1,
      name: "Spicewood/Boerne Area, TX",
      region: "Hill Country",
      hearts: 4,
      totalValue: "$12,049,000",
      propertiesCount: 3
    },
    {
      id: 2,
      name: "Austin Area, TX",
      region: "Tech Hub",
      hearts: 3,
      totalValue: "$6,750,000",
      propertiesCount: 1
    },
    {
      id: 3,
      name: "Silverthorne/Summit County, CO",
      region: "Mountain Resort",
      hearts: 2,
      totalValue: "$28,095,000",
      propertiesCount: 2
    },
    {
      id: 4,
      name: "Breckenridge, CO",
      region: "Summit County",
      hearts: 3,
      totalValue: "$21,494,999",
      propertiesCount: 2
    },
    {
      id: 7,
      name: "Loveland/Fort Collins Area, CO",
      region: "Northern Colorado",
      hearts: 3,
      totalValue: "$10,750,000",
      propertiesCount: 3
    },
    {
      id: 6,
      name: "Denver Metro - North/Northeast",
      region: "Denver Area",
      hearts: 2,
      totalValue: "$8,850,000",
      propertiesCount: 1
    },
    {
      id: 11,
      name: "Denver Metro - West/Southwest",
      region: "Foothills",
      hearts: 2,
      totalValue: "$47,598,000",
      propertiesCount: 2
    }
  ];

  const handleDownloadPDF = () => {
    window.print();
  };

  const renderHearts = (count) => Array(count).fill('❤️').join('');

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

      <div className="max-w-5xl mx-auto print-content">
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

        {/* Property Group Cards */}
        <div className="space-y-4">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl px-6 py-4 flex items-center justify-between text-white shadow-md"
            >
              <div>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="text-white" size={20} />
                  <h2 className="text-lg font-semibold">
                    {group.name}
                  </h2>
                  <span className="text-xl">
                    {renderHearts(group.hearts)}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-wide text-indigo-100 mt-1">
                  {group.region}
                </p>
              </div>
              <div className="text-right text-sm">
                <p className="font-bold text-lg">
                  {group.totalValue}
                </p>
                <p className="text-indigo-100">
                  {group.propertiesCount} Properties
                </p>
              </div>
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

