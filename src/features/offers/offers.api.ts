import type { Offer } from "./Offers.types";
import { storage } from "../../lib/storage";
import { mockOffers } from "../../data/offers.mock";

const KEY = "swiss_travel_offers_v1";

function seedIfEmpty() {
  const existing = storage.get<Offer[]>(KEY, []);
  if (!existing.length) storage.set(KEY, mockOffers);
}

function list(): Offer[] {
  seedIfEmpty();
  return storage.get<Offer[]>(KEY, []);
}

function save(items: Offer[]) {
  storage.set(KEY, items);
  return items;
}

function create(input: Omit<Offer, "id" | "createdAt">) {
  const items = list();
  const next: Offer = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  return save([next, ...items]);
}

function update(id: string, patch: Partial<Omit<Offer, "id" | "createdAt">>) {
  const items = list();
  const next = items.map((o) => (o.id === id ? { ...o, ...patch } : o));
  return save(next);
}

function remove(id: string) {
  const items = list();
  return save(items.filter((o) => o.id !== id));
}

export const offersApi = { list, create, update, remove };
