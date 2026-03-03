import { useEffect, useState } from "react";
import OfferCard from "./OfferCard";
import { offersApi } from "../../features/offers/offers.api";
import type { Offer } from "../../features/offers/Offers.types";

export default function OffersGrid({ limit }: { limit?: number }) {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOffers() {
      try {
        const all = await offersApi.list();
        const active = all.filter((o) => o.active);

        setOffers(
          typeof limit === "number" ? active.slice(0, limit) : active
        );
      } catch (err) {
        console.error("Failed to load offers", err);
      } finally {
        setLoading(false);
      }
    }

    loadOffers();
  }, [limit]);

  if (loading) {
    return (
      <div className="rounded-2xl border bg-white p-6 text-sm text-neutral-600">
        Loading offers...
      </div>
    );
  }

  if (offers.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-6 text-sm text-neutral-600">
        No active offers yet. Go to{" "}
        <a className="font-semibold underline" href="/admin/login">
          Admin
        </a>{" "}
        and add offers.
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
