// src/PropertyPortfolio.jsx
import React from 'react';
import './index.css';

const portfolio = {
  title: 'Premium Property Portfolio',
  subtitle: '33 Luxury Properties Across Texas & Colorado',
  totalValue: '$241.5M',
  monthlyIncomeRange: '$435K–$620K',
  annualIncomeRange: '$5.2M–$7.4M',
};

const markets = [
  {
    id: 'spicewood',
    name: 'Spicewood/Boerne Area, TX',
    hearts: 4,
    tag: 'HILL COUNTRY',
    totalValue: '$12,049,000',
    propertyCount: 3,
    monthlyRange: '$25,500–$35,500',
    annualRange: '$306,000–$426,000',
    datingScene:
      'EXCEPTIONAL – Best combined dating pool due to Austin proximity + Hill Country exclusivity + water lifestyle.',
    bestFor:
      'Active, affluent couples and families; wine enthusiasts; water sports families.',
    properties: [
      {
        id: 1,
        label: 'JASON’S',
        address: '19813 & 19817 Lakehurst Loop, Spicewood, TX 78669',
        beds: 4,
        baths: 4,
        sqft: '4,000',
        price: '$6,550,000',
        monthlyRange: '$12,000–$16,000',
        annualRange: '$144,000–$192,000',
        zillowUrl:
          'https://www.zillow.com/homedetails/19813-Lakehurst-Loop-Spicewood-TX-78669/12345678_zpid/',
      },
      {
        id: 2,
        address: '3507 Bee Creek Rd, Spicewood, TX 78669',
        beds: 3,
        baths: 3,
        sqft: '3,777',
        price: '$1,299,000',
        monthlyRange: '$4,500–$6,500',
        annualRange: '$54,000–$78,000',
        zillowUrl:
          'https://www.zillow.com/homedetails/3507-Bee-Creek-Rd-Spicewood-TX-78669/12345679_zpid/',
      },
      {
        id: 3,
        address: 'TBD Third Waterfront Estate, Spicewood, TX 78669',
        beds: 5,
        baths: 5,
        sqft: '5,000',
        price: '$4,200,000',
        monthlyRange: '$9,000–$13,000',
        annualRange: '$108,000–$156,000',
        zillowUrl: 'https://www.zillow.com/',
      },
    ],
  },
  {
    id: 'austin',
    name: 'Austin Area, TX',
    hearts: 3,
    tag: 'TECH HUB',
    totalValue: '$6,750,000',
    propertyCount: 1,
    monthlyRange: '$15,000–$20,000',
    annualRange: '$180,000–$240,000',
    datingScene:
      "EXCELLENT – Direct access to Austin's tech millionaire boom.",
    bestFor:
      'Tech professionals, entrepreneurs, creative types, young ambitious couples.',
    properties: [
      {
        id: 4,
        address: '3806 Spirit Lake Cv, Austin, TX 78746',
        beds: 7,
        baths: 10,
        sqft: '9,275',
        price: '$6,750,000',
        monthlyRange: '$15,000–$20,000',
        annualRange: '$180,000–$240,000',
        zillowUrl:
          'https://www.zillow.com/homedetails/3806-Spirit-Lake-Cv-Austin-TX-78746/12345680_zpid/',
      },
    ],
  },
  {
    id: 'silverthorne',
    name: 'Silverthorne/Summit County, CO',
    hearts: 2,
    tag: 'MOUNTAIN RESORT',
    totalValue: '$28,095,000',
    propertyCount: 2,
    monthlyRange: '$43,000–$63,000',
    annualRange: '$516,000–$756,000',
    datingScene:
      'EXCEPTIONAL – Highest dating opportunity concentration in any non‑Texas market.',
    bestFor:
      'Ski‑focused couples, active professionals, entertaining‑focused individuals.',
    properties: [
      {
        id: 5,
        label: "JASON'S",
        address: '320 Headlight Dr, Breckenridge, CO 80424',
        beds: 6,
        baths: 6,
        sqft: '6,552',
        price: '$6,995,000',
        monthlyRange: '$18,000–$28,000',
        annualRange: '$216,000–$336,000',
        zillowUrl:
          'https://www.zillow.com/homedetails/320-Headlight-Dr-Breckenridge-CO-80424/12345681_zpid/',
      },
      {
        id: 6,
        label: "JASON'S",
        address: '250 Sallie Barber Rd, Breckenridge, CO 80424',
        beds: 6,
        baths: 9,
        sqft: '7,444',
        price: '$14,499,999',
        monthlyRange: '$25,000–$35,000',
        annualRange: '$300,000–$420,000',
        zillowUrl:
          'https://www.zillow.com/homedetails/250-Sallie-Barber-Rd-Breckenridge-CO-80424/12345682_zpid/',
      },
    ],
  },
  {
    id: 'loveland',
    name: 'Loveland/Fort Collins Area, CO',
    hearts: 3,
    tag: 'NORTHERN COLORADO',
    totalValue: '$10,750,000',
    propertyCount: 3,
    monthlyRange: '$21,000–$29,000',
    annualRange: '$252,000–$348,000',
    datingScene:
      'EXCELLENT – Best established singles city in Colorado (Fort Collins #1 ranked).',
    bestFor:
      'Young professionals, relocating families, wine enthusiasts, remote workers.',
    properties: [
      {
        id: 7,
        label: "JASON'S",
        address: '0 Soaring Eagle Pass, Loveland, CO 80538',
        beds: 4,
        baths: 5,
        sqft: '5,940',
        price: '$2,400,000',
        monthlyRange: '$6,000–$8,500',
        annualRange: '$72,000–$102,000',
        zillowUrl:
          'https://www.zillow.com/homedetails/0-Soaring-Eagle-Pass-Loveland-CO-80538/12345683_zpid/',
      },
      {
        id: 8,
        label: "JASON'S",
        address: '23930 N Highway 287, Livermore, CO 80536',
        beds: 5,
        baths: 5,
        sqft: '5,500',
        price: '$4,500,000',
        monthlyRange: '$7,000–$9,500',
        annualRange: '$84,000–$114,000',
        zillowUrl:
          'https://www.zillow.com/homedetails/23930-N-Highway-287-Livermore-CO-80536/12345684_zpid/',
      },
      {
        id: 9,
        address: '796 Abrams Way, Loveland, CO 80537',
        beds: 4,
        baths: 4,
        sqft: '4,200',
        price: '$3,850,000',
        monthlyRange: '$8,000–$11,000',
        annualRange: '$96,000–$132,000',
        zillowUrl:
          'https://www.zillow.com/homedetails/796-Abrams-Way-Loveland-CO-80537/12345685_zpid/',
      },
    ],
  },
];

const HeartRow = ({ count }) => (
  <span aria-label="favorite market">
    {' '.repeat(count)
      .split('')
      .map((_, i) => '❤️')
      .join(' ')}
  </span>
);

const StatCard = ({ icon, label, value, gradient }) => (
  <div
    className="ppp-stat-card"
    style={{ background: gradient }}
  >
    <div className="ppp-stat-label">
      {icon && <span className="ppp-stat-icon">{icon}</span>}
      <span>{label}</span>
    </div>
    <div className="ppp-stat-value">{value}</div>
  </div>
);

const PropertyRow = ({ p }) => (
  <a
    className="ppp-property-row"
    href={p.zillowUrl}
    target="_blank"
    rel="noreferrer"
  >
    <div className="ppp-property-main">
      <div className="ppp-property-address">
        {p.address}
        {p.label && <span className="ppp-chip">{p.label}</span>}
      </div>
      <div className="ppp-property-meta">
        <span>{p.beds} bd</span>
        <span>{p.baths} ba</span>
        <span>{p.sqft} sqft</span>
      </div>
    </div>
    <div className="ppp-property-numbers">
      <div className="ppp-price">{p.price}</div>
      <div className="ppp-income-pair">
        <div>
          <div className="ppp-income-label">Monthly Income</div>
          <div className="ppp-income-value">{p.monthlyRange}</div>
        </div>
        <div>
          <div className="ppp-income-label">Annual Income</div>
          <div className="ppp-income-value">{p.annualRange}</div>
        </div>
      </div>
    </div>
  </a>
);

const MarketCard = ({ market }) => (
  <section className="ppp-market">
    <header className="ppp-market-header">
      <div>
        <div className="ppp-market-title">
          <span className="ppp-market-pin">📍</span>
          <span>{market.name}</span>
          <span className="ppp-market-hearts">
            <HeartRow count={market.hearts} />
          </span>
        </div>
        <div className="ppp-market-tag">{market.tag}</div>
      </div>
      <div className="ppp-market-summary">
        <div className="ppp-market-value">{market.totalValue}</div>
        <div className="ppp-market-count">
          {market.propertyCount} Properties
        </div>
      </div>
    </header>

    <div className="ppp-market-body">
      <div className="ppp-market-stats-row">
        <StatCard
          label="Monthly Income"
          value={market.monthlyRange}
          gradient="linear-gradient(135deg,#f5f7ff,#ecf2ff)"
        />
        <StatCard
          label="Annual Income"
          value={market.annualRange}
          gradient="linear-gradient(135deg,#fff5fb,#ffe9f4)"
        />
      </div>

      <div className="ppp-info-card ppp-dating">
        <div className="ppp-info-label">
          <span>♡</span>
          <span>Dating Scene</span>
        </div>
        <p>{market.datingScene}</p>
      </div>

      <div className="ppp-info-card">
        <div className="ppp-info-label">Best For</div>
        <p>{market.bestFor}</p>
      </div>

      <div className="ppp-properties">
        {market.properties.map((p) => (
          <PropertyRow key={p.id} p={p} />
        ))}
      </div>
    </div>
  </section>
);

export default function PropertyPortfolio() {
  return (
    <div className="ppp-page">
      <div className="ppp-shell">
        <header className="ppp-header">
          <div>
            <h1 className="ppp-title">
              {portfolio.title}
            </h1>
            <p className="ppp-subtitle">
              {portfolio.subtitle}
            </p>
          </div>
          <button className="ppp-download-btn">
            <span className="ppp-download-icon">⬇️</span>
            Download PDF
          </button>
        </header>

        <div className="ppp-top-stats">
          <StatCard
            icon="🏡"
            label="Total Value"
            value={portfolio.totalValue}
            gradient="linear-gradient(135deg,#e8ffe8,#f4fff5)"
          />
          <StatCard
            icon="📈"
            label="Monthly Income"
            value={portfolio.monthlyIncomeRange}
            gradient="linear-gradient(135deg,#edf4ff,#eef2ff)"
          />
          <StatCard
            icon="💸"
            label="Annual Income"
            value={portfolio.annualIncomeRange}
            gradient="linear-gradient(135deg,#ffeefc,#ffe9f4)"
          />
        </div>

        <div className="ppp-market-list">
          {markets.map((m) => (
            <MarketCard key={m.id} market={m} />
          ))}
        </div>
      </div>
    </div>
  );
}



