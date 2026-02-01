import type { Offer } from "./Offers.types";

function waLink(text: string) {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

function categoryLabel(cat: Offer["category"]) {
  switch (cat) {
    case "Holiday":
      return "Holiday Package";
    case "Flights":
      return "Flight Offer";
    case "CityBreak":
      return "City Break";
    case "Summer":
      return "Summer Deal";
    case "LastMinute":
      return "Last Minute";
    default:
      return "Offer";
  }
}

export default function OfferCard({ offer }: { offer: Offer }) {
  const msg = `Hello Swiss Travel 👋

I want this ${categoryLabel(offer.category)}:
• ${offer.title}
• Destination: ${offer.destination}
• Price from: ${offer.priceFrom} ${offer.currency}

Please send me dates & details.`;

  return (
    <div className="rounded-2xl border bg-white overflow-hidden hover:shadow-sm transition">
      <div className="aspect-[16/10] bg-neutral-100">
        {offer.imageUrl ? (
          <img
            src={offer.imageUrl}
            alt={offer.title}
            className="h-full w-full object-cover"
            loading="lazy"
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
            <h3 className="font-semibold truncate">{offer.title}</h3>
            <p className="text-sm text-neutral-600 mt-1">{offer.destination}</p>
            <p className="text-xs text-neutral-500 mt-1">
              {categoryLabel(offer.category)}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-neutral-500">From</p>
            <p className="font-semibold">
              {offer.priceFrom} {offer.currency}
            </p>
          </div>
        </div>

        {offer.includes?.length ? (
          <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700 space-y-1">
            {offer.includes.slice(0, 3).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5">
          <a
            href={waLink(msg)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-4 py-3 text-white text-sm font-semibold hover:bg-red-700"
          >
            Request on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
