export type Currency = "EUR" | "CHF";

export type OfferCategory =
  | "Holiday"
  | "Flights"
  | "CityBreak"
  | "Summer"
  | "LastMinute"
  | "Other";

export type Offer = {
  id: string;
  title: string;
  destination: string;
  priceFrom: number;
  currency: Currency;

  category: OfferCategory;

  imageUrl?: string;
  startDate?: string;
  endDate?: string;

  active: boolean;
  includes?: string[];
  createdAt: string;
};
