import { useEffect, useState } from "react";
import OfferCard from "./offerCard";
import { offersApi } from "../../features/offers/offers.api";
import type { OfferCategory, Offer } from "../../features/offers/Offers.types";

const FILTERS: Array<{ label: string; value: OfferCategory | "All" }> = [
  { label: "All", value: "All" },
  { label: "Holidays", value: "Holiday" },
  { label: "Flights", value: "Flights" },
  { label: "City Break", value: "CityBreak" },
  { label: "Summer", value: "Summer" },
  { label: "Last Minute", value: "LastMinute" },
  { label: "Other", value: "Other" },
];

export default function OffersGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<OfferCategory | "All">("All");
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await offersApi.list();

      const activeOffers = data.filter((o) => o.active);

      const filtered =
        filter === "All"
          ? activeOffers
          : activeOffers.filter((o) => o.category === filter);

      setOffers(limit ? filtered.slice(0, limit) : filtered);
      setLoading(false);
    }

    load();
  }, [filter, limit]);

  if (loading) {
    return <p className="text-neutral-600">Loading offers...</p>;
  }

  return (
    <div className="grid gap-5">
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={[
                "rounded-xl border px-4 py-2 text-sm font-semibold transition",
                active
                  ? "border-red-600 bg-red-600 text-white"
                  : "border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50",
              ].join(" ")}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {offers.length === 0 ? (
        <div className="rounded-2xl border bg-white p-6 text-sm text-neutral-600">
          No offers in this category yet.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offers.map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      )}
    </div>
  );
}
