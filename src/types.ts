export type RosesRating = 1 | 2 | 3 | 4;

export type IncomeRange = {
  monthlyLow: number;
  monthlyHigh: number;
  annualLow: number;
  annualHigh: number;
};

export type DatingScene = {
  roses: RosesRating;
  label: string; // e.g. "EXCEPTIONAL"
  description: string;
};

export type Property = {
  id: string;
  groupId: string;

  addressLine: string;
  cityStateZip: string;

  price: number;
  beds: number;
  baths: number;
  sqft: number;

  status: string;

  income: IncomeRange;
  basis: string;

  demographics: string;
  lifestyleFit: string;

  datingScene: DatingScene;

  isJason?: boolean;
};

export type Group = {
  id: string;

  title: string;       // "Spicewood/Boerne Area, TX"
  regionLabel: string; // "HILL COUNTRY"
  roses: RosesRating;

  datingSummary: string;
  bestFor: string;
};
