import { supabase } from "../../lib/supabase";
import type { Offer } from "./Offers.types";

export const offersApi = {
  async list(): Promise<Offer[]> {
    const { data, error } = await supabase
      .from("offers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return (data ?? []).map((o: any) => ({
      id: o.id,
      title: o.title,
      destination: o.destination,
      priceFrom: o.price_from,
      currency: o.currency,
      category: o.category,
      imageUrl: o.image_url,
      startDate: o.start_date,
      endDate: o.end_date,
      active: o.active,
      includes: o.includes,
      createdAt: o.created_at,
    }));
  },

  async create(input: Omit<Offer, "id" | "createdAt">) {
    const { error } = await supabase.from("offers").insert({
      title: input.title,
      destination: input.destination,
      price_from: input.priceFrom,
      currency: input.currency,
      category: input.category,
      image_url: input.imageUrl ?? null,
      start_date: input.startDate ?? null,
      end_date: input.endDate ?? null,
      active: input.active,
      includes: input.includes ?? null,
    });
    if (error) throw error;
  },

  async update(id: string, input: Partial<Omit<Offer, "id" | "createdAt">>) {
    const { error } = await supabase.from("offers").update({
      title: input.title,
      destination: input.destination,
      price_from: input.priceFrom,
      currency: input.currency,
      category: input.category,
      image_url: input.imageUrl ?? null,
      start_date: input.startDate ?? null,
      end_date: input.endDate ?? null,
      active: input.active,
      includes: input.includes ?? null,
    }).eq("id", id);
    if (error) throw error;
  },

  async remove(id: string) {
    const { error } = await supabase.from("offers").delete().eq("id", id);
    if (error) throw error;
  },
};
