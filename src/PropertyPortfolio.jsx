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
    // ... your groups array exactly as you already have it ...
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
              <DownloadIcon size={20} />
              Download PDF
            </button>
          </div>

          {/* Portfolio Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <HomeIcon className="text-green-600" size={24} />
                <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                  Total Value
                </span>
              </div>
              <p className="text-3xl font-bold text-green-900">$241.5M</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUpIcon className="text-blue-600" size={24} />
                <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                  Monthly Income
                </span>
              </div>
              <p className="text-3xl font-bold text-blue-900">$435K-$620K</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSignIcon className="text-purple-600" size={24} />
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
                      <MapPinIcon className="text-white" size={24} />
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
                      <HeartIcon className="text-pink-600" size={18} />
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
                                <BedIcon size={16} />
                                {property.beds} bd
                              </span>
                              <span className="flex items-center gap-1">
                                <BathIcon size={16} />
                                {property.baths} ba
                              </span>
                              <span className="flex items-center gap-1">
                                <MaximizeIcon size={16} />
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
  );
};

export default PropertyPortfolio;

