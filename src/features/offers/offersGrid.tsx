import { useMemo, useState } from "react";
import OfferCard from "./offerCard";
import { offersApi } from "../../features/offers/offers.api";
import type { OfferCategory } from "./Offers.types";

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

  const offers = useMemo(() => {
    const all = offersApi.list().filter((o) => o.active);
    const filtered =
      filter === "All" ? all : all.filter((o) => o.category === filter);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

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
