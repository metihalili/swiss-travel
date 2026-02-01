import Badge from "../ui/Badge";
import Button from "../ui/Button";
import type { Offer } from "../../features/offers/Offers.types";

export default function OfferCard({ offer }: { offer: Offer }) {
  const waText = encodeURIComponent(
    `Hello, I want this offer: ${offer.title} (${offer.destination})`
  );
  const waLink = `https://wa.me/?text=${waText}`;

  return (
    <div className="rounded-2xl border bg-white overflow-hidden">
      <div className="aspect-[16/10] bg-neutral-100">
        {offer.imageUrl ? (
          <img
            src={offer.imageUrl}
            alt={offer.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-neutral-500 text-sm">
            No image
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-bold truncate">{offer.title}</h3>
            <p className="text-sm text-neutral-600 mt-1">{offer.destination}</p>
          </div>
          {offer.active ? <Badge>Active</Badge> : <Badge variant="muted">Hidden</Badge>}
        </div>

        <p className="mt-4 text-sm">
          From{" "}
          <span className="font-bold">
            {offer.priceFrom} {offer.currency}
          </span>
        </p>

        {(offer.startDate || offer.endDate) && (
          <p className="mt-2 text-xs text-neutral-500">
            {offer.startDate ? `From ${offer.startDate}` : ""}{" "}
            {offer.endDate ? `to ${offer.endDate}` : ""}
          </p>
        )}

        {offer.includes?.length ? (
          <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700 space-y-1">
            {offer.includes.slice(0, 3).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5">
          <a href={waLink} target="_blank" rel="noreferrer">
            <Button className="w-full">Request on WhatsApp</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
