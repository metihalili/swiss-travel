import type { Offer } from '../features/offers/Offers.types'


export const mockOffers: Offer[] = [
  {
    id: "seed-1",
    title: "Dubai • 5 Nights",
    destination: "Dubai",
    priceFrom: 399,
    currency: "EUR",
    category: "Holiday",
    imageUrl: "/offers/offer1.jpg",
    active: true,
    includes: ["Hotel", "Breakfast", "Airport transfer"],
    createdAt: new Date().toISOString(),
  },
  {
    id: "seed-2",
    title: "Istanbul • Weekend",
    destination: "Istanbul",
    priceFrom: 159,
    currency: "EUR",
    category: "CityBreak",
    imageUrl: "/offers/offer2.jpg",
    active: true,
    includes: ["Hotel", "Optional city tour"],
    createdAt: new Date().toISOString(),
  },
];
