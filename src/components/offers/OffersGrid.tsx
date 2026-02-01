import { useMemo } from "react";
import OfferCard from "./OfferCard";
import { offersApi } from "../../features/offers/offers.api";

export default function OffersGrid({ limit }: { limit?: number }) {
  const offers = useMemo(() => {
    const all = offersApi.list().filter((o) => o.active);
    return typeof limit === "number" ? all.slice(0, limit) : all;
  }, [limit]);

  if (offers.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-6 text-sm text-neutral-600">
        No active offers yet. Go to <a className="font-semibold underline" href="/admin/login">Admin</a> and add offers.
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {offers.map((o) => (
        <OfferCard key={o.id} offer={o} />
      ))}
    </div>
  );
}
